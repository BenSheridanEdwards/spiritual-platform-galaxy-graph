# Spiritual Platform · Galaxy Graph — Deploy Report

**Date:** Fri 2 Oct 2026 (Europe/London, UTC+1)  
**Requester:** Ben via CTO (urgent)

## Live interactive URL (headline)

**Status: BLOCKED — no `*.vercel.app` URL yet.**

| | |
|---|---|
| **Desired** | New Vercel project → default `*.vercel.app` (no custom domain) |
| **Blocker** | Vercel CLI is logged out. No `VERCEL_TOKEN` in the agent environment. Device OAuth started but Chrome has no active Vercel/GitHub session to complete it without Ben’s interactive login. |
| **Action needed (Ben, ~30s)** | While CLI is waiting, open: https://vercel.com/oauth/device?user_code=GBZF-NSJK and approve as Ben **or** inject `VERCEL_TOKEN` and re-run `npx vercel --yes` from `spiritual-platform-galaxy-graph/`. |
| **Invented URL** | None (no fabricated links). |

After auth, expected commands:

```bash
cd /workspace/oneness-galaxy-deploy/spiritual-platform-galaxy-graph
npx vercel --yes
# produces a platform-assigned *.vercel.app URL for a NEW project
```

---

## 1. Viz page (what it is)

| Item | Detail |
|---|---|
| **Source of truth (read-only)** | `CW-Codewalnut/Oneness-Platform-Prototype` → `ui/src/visualizations/GalaxyGraph/` (Three.js / `3d-force-graph` mutation-coverage galaxy). Route in that app: `/visualise/backend`. |
| **Existing Oneness live (untouched)** | https://oneness-platform.vercel.app — **not modified**; left as-is. |
| **Verse / Spiritual extract** | New repo `BenSheridanEdwards/spiritual-platform-galaxy-graph` — standalone Vite static app cloned from `CW-Codewalnut/GalaxyGraph` package core (already extracted viz), **not** a redeploy of the Oneness Vercel project. |
| **User-facing product name** | **Spiritual Platform** (Verse Network Galaxy Graph product line). Header: `Spiritual Platform · Galaxy Graph`. |
| **What it shows** | 3D force graph of services / endpoints / tests / contracts; mutation score colouring; survivor lists; contract bonds (direct-call + event-bus topics). |
| **Data source** | Built-in public-safe sample catalog (identity / billing / notifications) — no Encore backend, no secrets. |
| **Route on Spiritual deploy** | `/` (single-page viz). |

**Oneness company mentions in Spiritual/Verse copy:** **zero** (scrubbed Header + README + meta; verified with ripgrep).

---

## 2. Deploy steps (what was done)

1. Cloned (under `/workspace/oneness-galaxy-deploy/`):
   - `CW-Codewalnut/GalaxyGraph` (public fork / package host)
   - `CW-Codewalnut/Oneness-Platform-Prototype` (**read-only**; no commits, no Vercel changes)
2. Created **new** app dir `spiritual-platform-galaxy-graph/` from GalaxyGraph `packages/core` sources + Vite shell.
3. Rebranded Header / title / meta / README → **Spiritual Platform**; scrubbed Oneness company strings.
4. `npm install` + `npm run build` → `dist/` OK (local proof).
5. Created and pushed new public repo: https://github.com/BenSheridanEdwards/spiritual-platform-galaxy-graph (`main`).
6. Attempted `npx vercel deploy --temporary --yes` → forced login; device code `GBZF-NSJK` awaiting Ben approval.
7. **Did not** create/alter any project on `oneness-platform.vercel.app`.

**Env:** Node ≥20; no app secrets required for sample data. Host target: **Vercel** (default `*.vercel.app` only).

---

## 3. Result

| Deliverable | Status |
|---|---|
| Interactive `*.vercel.app` URL | **Blocked** (Vercel auth / missing `VERCEL_TOKEN`) |
| New GitHub repo | **Success** — https://github.com/BenSheridanEdwards/spiritual-platform-galaxy-graph |
| Local production build | **Success** — `spiritual-platform-galaxy-graph/dist/` |
| Local preview proof | Served at `http://127.0.0.1:4173/` during packaging; screenshots under `docs/screenshots/` |
| Oneness live site untouched | **Confirmed** — `Oneness-Platform-Prototype` clean `git status`; no Vercel ops against that project |
| Zero Oneness company mentions in Verse/Spiritual deploy | **Confirmed** |

---

## Next if blocked

1. Ben completes https://vercel.com/oauth/device?user_code=GBZF-NSJK **or** provides `VERCEL_TOKEN`.
2. From `spiritual-platform-galaxy-graph/`: `npx vercel --yes` → capture default `*.vercel.app` URL.
3. Put that URL at the top of this REPORT and the repo README; then finish README screenshot captions (tests / Stryker / coverage / docs / explanations) against the live URL.
4. Draft-only for any public announce — do not post.

