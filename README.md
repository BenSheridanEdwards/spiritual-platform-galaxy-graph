# Spiritual Platform · Galaxy Graph

Interactive 3D architecture and mutation-coverage visualization for **Spiritual Platform** (Verse Network Galaxy Graph product line).

## What it shows

- Services, endpoints, tests, and cross-service contracts as a force-directed 3D galaxy
- Mutation-score colouring and survivor lists
- Contract bonds (direct-call and event-bus via topic nodes)

Built as a static Vite + React + Three.js (`3d-force-graph`) app. Uses a public-safe sample catalog (identity / billing / notifications) so no backend secrets are required.

## Develop

```bash
npm ci
npm run dev
```

## Build

```bash
npm ci
npm run build
# static output in dist/
```

## Branding

User-facing product name: **Spiritual Platform**.  
Viz product line framing: Verse Network Galaxy Graph.
