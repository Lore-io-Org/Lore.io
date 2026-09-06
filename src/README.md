# Future Minecraft source

No Minecraft loader or build system exists in the repository yet, so source
code is intentionally not pretending to be a Fabric, NeoForge, Forge, or Quilt
mod. When a loader is selected, keep platform adapters here and preserve the
loader-neutral JSON contracts under `data/`.

The first runtime modules should be:

- `content` — load and validate data definitions
- `session` — creator setup, friends, roster, and session state
- `roles` — character assignment and hero/villain teams
- `events` — triggers, conditions, probability, cooldowns, and effects
- `investigation` — clues, evidence, theories, and reveals
- `platform` — Minecraft-specific entities, commands, UI, and world access
