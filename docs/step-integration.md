# Bloomhaven Step Integration Notes

Bloomhaven treats movement as a discovery input, not a fitness score. Step data should feed the existing Discovery Energy, Pollination Points, Discovery Tokens, encounters, and journal systems.

## Current Prototype

The static prototype supports these providers:

- Manual: player-entered steps.
- Mock Provider: sample step values for testing the discovery engine.
- Health Connect: integration target for a future Android mobile shell.
- WHOOP: integration target for a future backend OAuth flow.

All providers should call the same step adapter path in `app.js` so the balance rules stay consistent.

## Health Connect Path

Use Health Connect for Android/mobile-first step tracking. The mobile shell should request the user's step permission, read today's aggregated steps, then pass the number into Bloomhaven's step adapter.

Do not make Health Connect mandatory. Manual entry should remain available.

## WHOOP Path

WHOOP requires OAuth and a client secret. The client secret, refresh tokens, and token exchange must live server-side.

The static game client should only receive the final daily step total or a normalized activity summary from Bloomhaven's backend.

## Privacy Rules

- Request the minimum data needed.
- Explain that steps create discovery opportunities, not health advice.
- Store only the daily step total needed for gameplay unless the player explicitly opts into more.
- Provide a way to return to manual entry.
