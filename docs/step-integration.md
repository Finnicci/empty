# Bloomhaven Step Integration Notes

Bloomhaven treats movement as a discovery input, not a fitness score. Step data should feed the existing Discovery Energy, Pollination Points, Discovery Tokens, encounters, and journal systems.

## Current Prototype

The static prototype supports one real data source:

- Manual Daily Steps: player-entered steps.

Manual entry is the MVP placeholder. No live wearable, Health Connect, Apple Health, Google Fit, Samsung Health, Strava, WHOOP, Fitbit, or other fitness-app sync is active in this static web prototype.

The code is structured so future providers can replace `getDailySteps()` while continuing to use `processStepRewards()` and `generateStepEvents()`. This keeps the balance rules consistent.

## Future Integration Roadmap

Future supported integrations may include:

- Apple Health
- Health Connect
- Google Fit
- Samsung Health
- Fitbit
- WHOOP
- Strava

## Future Health Connect Path

Use Health Connect for Android/mobile-first step tracking. The mobile shell should request the user's step permission, read today's aggregated steps, then pass the number into Bloomhaven's step adapter.

Do not make Health Connect mandatory. Manual entry should remain available.

## Future WHOOP Path

WHOOP requires OAuth and a client secret. The client secret, refresh tokens, and token exchange must live server-side.

The static game client should only receive the final daily step total or a normalized activity summary from Bloomhaven's backend.

## Privacy Rules

- Request the minimum data needed.
- Explain that steps create discovery opportunities, not health advice.
- Store only the daily step total needed for gameplay unless the player explicitly opts into more.
- Provide a way to return to manual entry.
