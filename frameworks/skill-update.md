# SKILL UPDATE BRIEF
## Elite Jobseeker Agent — Version 1.0 to Version 2.0
**Epoch Frameworks Career Intelligence | Erwin Maurice McDonald (2026) | DACR License v2.7**

---

## What This Framework Does

This agent is a career intelligence operating system for senior professionals targeting $120K to $200K+ roles. It does not summarize resumes. It diagnoses where you actually stand in the market, rebuilds your professional presence for how recruiters search, and generates outreach that reads like a peer initiating a conversation, not a candidate asking for help.

It thinks from the recruiter's side of the screen. It does not offer encouragement. It offers intelligence.

---

## Bottom Line on This Update

v1.0 got you to the resume. v2.0 gets you to the offer table.

---

## What Changed and Why

### 1. Profile Sync Gate (Phase 0B) — NEW

**Before:** No cross-platform check existed. The agent went straight from intake to rebuilding.

**After:** Before any rebuild begins, the agent cross-checks every active platform — LinkedIn, Dice, Indeed — against the resume. Every date mismatch, title inconsistency, or gap is surfaced in a table with a required action before anything moves forward.

**Why it matters:** Recruiters verify. A Director candidate with a one-year date discrepancy between LinkedIn and their resume loses the interview before it starts. This gate catches it before they do.

---

### 2. Director Disqualifier Scan — NEW

**Before:** No filter existed on entries that could hurt the candidate at the Director level.

**After:** Before any resume output ships, every flagged entry gets a verdict: REMOVE, REFRAME, or KEEP. Nothing moves forward without candidate confirmation.

**Why it matters:** At this level, hiring managers are not just looking for what is good. They are looking for what disqualifies you. A retail gap-filler, a junior title, or a vague responsibility line can end a candidacy silently. This gate makes those decisions explicit instead of leaving them to chance.

---

### 3. Technical Platform Optimization (Phase 1C) — NEW

**Before:** The framework rebuilt LinkedIn only.

**After:** Dedicated logic now handles Dice and Indeed separately — preferred title rewrite, top skills reordered for Director-level AI signal, education field corrections, salary floor calibration.

**Why it matters:** Most Director-level candidates are invisible on Dice and Indeed because their profiles read like junior accounts. The titles are wrong for how recruiters search, the skills are in the wrong order, and the salary floor is either missing or too low. This phase closes that gap on every active platform.

---

### 4. Date and Title Verification Prompt — NEW

**Before:** Not present.

**After:** Hardcoded into Phase 1. Before any resume is finalized, the agent asks the candidate to confirm every date, title, and company name matches across all active profiles.

**Why it matters:** Background checks are standard at this level. One inconsistency found during verification ends the offer conversation. This is the final check before anything ships.

---

### 5. Phase 2 Web Fallback — UPGRADED

**Before:** Phase 2 required a third-party tool (Apify MCP) to run the daily job sweep. If the tool was not connected, Phase 2 could not execute.

**After:** Apify is still preferred, but the agent now falls back automatically to a web search sweep across LinkedIn Jobs, Dice, and Indeed when Apify is not available.

**Why it matters:** The previous version locked out users who did not have a specific technical dependency set up. This version works for everyone from day one, no configuration required.

---

### 6. Cover Letter Mode (Phase 3) — UPGRADED

**Before:** Phase 3 produced one sharp cover sentence only.

**After:** On request, Phase 3 now produces a full Director-register cover letter: three paragraphs, under 300 words, with structural rules enforced.

**Why it matters:** Some executive roles and retained search partners require a full cover letter. The previous version had no solution for this. Now it does, activated when the candidate needs it.

---

### 7. Offer Intelligence and Negotiation (Phase 5) — NEW PHASE

**Before:** The framework ended at network activation. Once the candidate received an offer, the agent's job was done.

**After:** A full offer lifecycle phase was added: market compensation analysis, negotiation strategy with a clear posture recommendation (accept, counter, or walk), counter language in both email and verbal format, and a formal acceptance or professional decline draft.

**Why it matters:** At the $120K+ level, the gap between a first offer and a negotiated offer frequently exceeds $15,000 in base salary alone, and more when equity, signing bonus, and benefits are factored in. The previous version stopped too early. Negotiation is where compensation is actually set. Phase 5 gives the candidate a structured process for it instead of sending them into that conversation without support.

---

## The Six-Phase Architecture

| Phase | Stage | Status | What It Does |
|---|---|---|---|
| Phase 0 | Identity Calibration | Carried Forward | Builds the Candidate Intelligence Brief. Diagnoses actual market position vs. perceived position. |
| Phase 0B | Profile Sync Audit | NEW | Cross-checks LinkedIn, Dice, and Indeed against the resume. Catches every mismatch before a recruiter does. |
| Phase 1 | Profile Dominance | Upgraded | Rebuilds LinkedIn and the master resume. Now includes Dice and Indeed optimization and a mandatory verification step. |
| Phase 2 | Target Acquisition | Upgraded | Daily job sweep with Director Filter on every result. No longer requires Apify — falls back to web search automatically. |
| Phase 3 | Application Tailoring | Upgraded | Tailors for ATS systems and hiring managers simultaneously. Cover letter mode added on request. |
| Phase 4 | Network Activation | Carried Forward | Maps connections at target companies and generates peer-tone outreach. Not a candidate asking for help — a professional initiating a conversation. |
| Phase 5 | Offer Negotiation | NEW | Market comp analysis, negotiation strategy, counter-offer language (written and verbal), acceptance or decline drafts. |

---

## What Did Not Change

The core logic is unchanged. The agent still thinks from the recruiter's side. It still produces full draft copy, not suggestions or bullet-point guidance. It still treats gaps honestly and does not soften assessments.

Output standards are identical to v1.0: no junior-register language, all resume bullets follow the action plus scale plus outcome structure, all outreach stays under 75 words for a first contact and reads peer to peer.

Attribution and licensing are unchanged. Built on Jabez Ivan Joshiraj's 4-Step Framework. Director Intelligence Layer by Erwin Maurice McDonald. Protected under DACR License v2.7.

---

## SKILL.md Changes Required

The internal SKILL.md file should reflect the following updates:

- Phase count updated from five to six (Phase 0B and Phase 5 added)
- Activation triggers expanded to include: `run offer negotiation`, `run profile sync audit`, `run Phase 0B`, `run Phase 5`
- Phase 0 now triggers Phase 0B automatically before Phase 1 proceeds
- Phase 2 Apify dependency changed from required to preferred; web search is automatic fallback
- Phase 3 updated to include cover letter mode as an on-request output
- Director Disqualifier Scan added as a hardcoded gate before any Phase 1 output
- Date and Title Verification Prompt added as a hardcoded gate at the end of Phase 1
- Attribution block updated to Epoch Frameworks Career Intelligence v2.0 and DACR License v2.7

---

*Epoch Frameworks Career Intelligence v2.0 | Built on Jabez Ivan Joshiraj's 4-Step Framework | Director Intelligence Layer: Erwin Maurice McDonald (2026) | Epoch Frameworks LLC | DACR License v2.7*
