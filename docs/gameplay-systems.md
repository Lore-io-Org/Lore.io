# Gameplay systems

## Myth investigation

A myth is a structured investigation, not just a mob spawn. A complete myth
should define:

- A premise and scope
- Lore entries with source classification
- Discoverable clues
- Evidence and reliability
- A timeline
- Competing theories
- Escalation and warnings
- A reveal, resolution, or explicitly intentional open ending

The runtime should avoid spending an entire session on a mystery with no
payoff. Every enabled myth should identify the progression condition that
unlocks its reveal or conclusion.

## Creator setup

Creator mode is a gameplay modifier:

- `none`: standard pacing and event selection
- `ridiculous`: favors surprising, chaotic, or visually clear events
- `non_ridiculous`: favors grounded pacing and coherent investigation

It is not connected to YouTube APIs, recommendations, subscriber counts, or
analytics.

## Multiplayer

Players join the same session independently of creator mode. The session owns:

- Player membership and readiness
- Character and hero/villain role assignment
- Shared clues and evidence
- Per-player triggers
- Team-specific objectives
- Event cooldowns and completion state

## Dynamic events

An event rule has a trigger, optional conditions, probability or weight, and
effects. Examples include a low-probability spider in a Mystery Lab, an
enemy encounter after a Spider-Man role assignment, or a Spot event caused by
Miles Morales. Rule keys should be stable so save data can refer to them.

Use cooldowns, once-per-session limits, and explicit enable flags to keep
randomness understandable and prevent event spam.
