# Elite Jobseeker Agent — GitHub Pages + Cloudflare Worker Setup

This deployment uses:

- `index.html` for GitHub Pages
- `cloudflare-worker.js` as a secure Anthropic API proxy

The audience stays inside the embedded agent on the GitHub Pages site. The API key never appears in the browser.

## 1. Upload index.html

Put `index.html` in the root of:

```text
https://github.com/emcdo411/elite-jobseeker-agent
```

Enable GitHub Pages from the repo settings.

Expected page:

```text
https://emcdo411.github.io/elite-jobseeker-agent/
```

## 2. Deploy the Cloudflare Worker

Create a Cloudflare Worker and paste `cloudflare-worker.js`.

Add this Worker secret:

```text
ANTHROPIC_API_KEY = your Anthropic API key
```

In the Worker code, keep:

```js
const ALLOWED_ORIGIN = "https://emcdo411.github.io";
```

That allows GitHub Pages to call the Worker.

## 3. Connect index.html to the Worker

In `index.html`, find:

```js
const WORKER_ENDPOINT = "https://YOUR-WORKER-NAME.YOUR-SUBDOMAIN.workers.dev";
```

Replace it with your deployed Worker URL.

Example:

```js
const WORKER_ENDPOINT = "https://elite-jobseeker-agent-proxy.username.workers.dev";
```

## 4. Test

Open the GitHub Pages URL, scroll to the embedded agent, and send a short test message.

The page should respond inside the chat window without leaving the page.
