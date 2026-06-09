/**
 * Cloudflare Worker proxy for Elite Jobseeker Agent
 *
 * Required secret:
 *   ANTHROPIC_API_KEY
 *
 * Deploy steps:
 *   1. Create a Cloudflare Worker.
 *   2. Paste this file as the Worker code.
 *   3. Add secret: ANTHROPIC_API_KEY = your Anthropic API key.
 *   4. Update ALLOWED_ORIGIN to your GitHub Pages URL.
 *   5. Deploy.
 *   6. Paste the Worker URL into WORKER_ENDPOINT inside index.html.
 */

const ALLOWED_ORIGIN = "https://emcdo411.github.io";
const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const MODEL = "claude-3-5-sonnet-20241022";

function corsHeaders(origin) {
  const allowed = origin && origin.startsWith(ALLOWED_ORIGIN) ? origin : ALLOWED_ORIGIN;

  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");
    const headers = corsHeaders(origin);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...headers, "Content-Type": "application/json" }
      });
    }

    if (!env.ANTHROPIC_API_KEY) {
      return new Response(JSON.stringify({ error: "Missing ANTHROPIC_API_KEY Worker secret" }), {
        status: 500,
        headers: { ...headers, "Content-Type": "application/json" }
      });
    }

    try {
      const body = await request.json();

      const system = typeof body.system === "string" ? body.system.slice(0, 12000) : "You are Elite Jobseeker Agent.";
      const messages = Array.isArray(body.messages) ? body.messages : [];

      const cleanedMessages = messages
        .filter(m => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
        .slice(-12)
        .map(m => ({
          role: m.role,
          content: m.content.slice(0, 12000)
        }));

      if (!cleanedMessages.length) {
        return new Response(JSON.stringify({ error: "No valid messages supplied" }), {
          status: 400,
          headers: { ...headers, "Content-Type": "application/json" }
        });
      }

      const anthropicResponse = await fetch(ANTHROPIC_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: 1600,
          temperature: 0.45,
          system,
          messages: cleanedMessages
        })
      });

      const responseText = await anthropicResponse.text();

      if (!anthropicResponse.ok) {
        return new Response(JSON.stringify({
          error: "Anthropic API error",
          status: anthropicResponse.status,
          detail: responseText
        }), {
          status: anthropicResponse.status,
          headers: { ...headers, "Content-Type": "application/json" }
        });
      }

      const data = JSON.parse(responseText);
      const reply = Array.isArray(data.content)
        ? data.content.map(part => part.text || "").join("\n").trim()
        : "";

      return new Response(JSON.stringify({ reply }), {
        status: 200,
        headers: { ...headers, "Content-Type": "application/json" }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message || "Unknown Worker error" }), {
        status: 500,
        headers: { ...headers, "Content-Type": "application/json" }
      });
    }
  }
};
