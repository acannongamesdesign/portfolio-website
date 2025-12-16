---
title: Deathtrap Dungeon
year: 2025
team: Solo
type: University
role: Level Designer / Gameplay Designer
engine: Unity
summary: A 2D platformer built as my first Unity project, featuring two levels, collectibles, bounce pads, multiple enemy types, and simple key/door progression mechanics.
coverImage: /images/projects/deathtrap-dungeon/main-menu.png
gallery:
  - src: /images/projects/deathtrap-dungeon/main-menu.png
    alt: Deathtrap Dungeon main menu screen showing the title and controls.
    caption: Main menu
  - src: /images/projects/deathtrap-dungeon/gameplay-1.png
    alt: Gameplay screenshot showing platforms, hazards, and a collectible.
    caption: Platforming + hazards
  - src: /images/projects/deathtrap-dungeon/gameplay-2.png
    alt: Gameplay screenshot showing level progression, hazards, and a checkpoint flag.
    caption: Level progression
---

## Overview
**Deathtrap Dungeon** was my first introduction to **Unity** and developing a fully playable **2D game**. I started with a simple platformer concept and used the project to learn the basics of building a complete game loop: a main menu, multiple scenes, and level-to-level progression.

This project was a fun learning experience and helped prepare me for later work (especially **Card Clicker**) by building familiarity with the Unity workflow and how **visual scripting** can be used to create gameplay systems.

---

## What I Learned
- Creating a **main menu** and managing scene flow
- Building **multiple levels** using separate scenes
- Implementing common platformer mechanics and interactions
- Designing different enemy behaviours to test the player in different ways
- Understanding the value of polishing scope rather than overextending

---

## Core Mechanics

### Platforming + Level Flow
The game is built around simple, readable platforming challenges across **two levels**, with hazards and enemy encounters designed to test timing, movement, and awareness.

### Collectibles
I implemented collectibles for:
- **Coins**
- **Health power-ups**

Coins were tracked and displayed between levels, which gave feedback to the player about their collection progress.

### Bounce Pads
To add variety and enable greater vertical exploration, I created **bounce pads** that launch the player higher than a standard jump. This allowed me to place collectibles and routes that the player couldn’t reach through normal movement alone.

---

## Enemy Variety
One of my goals was to explore different ways enemies could create challenge. I implemented several types:

- **Patrolling enemies** that move back and forth along a platform
- An **enemy spawner** that continuously spawns enemies while the player is within range
- **Timing-based hazard enemies**, such as a corridor where the player must run forward while **spikes drop behind them**, punishing hesitation

These systems helped me understand how enemy behaviour and level layout work together to create pressure and pacing.

---

## Key & Door Progression
To add structure and encourage exploration, I created a simple **key and door mechanic**:
- The player must retrieve a key from another part of the level
- Returning with the key unlocks the door and allows progression

This added a clear goal and gave the level a stronger sense of progression.

---

## Scope & Improvements
I’m very happy with how this project turned out, especially as a first Unity game, but there are a few areas I would improve if I revisited it:

### Art Consistency
Not all enemies had finished art, so some were left as **simple red shapes**. I would:
- create or source consistent enemy sprites
- improve visual feedback to match the tone of the environment

### More Content (Without Losing Polish)
Originally I wanted **three levels**, but reduced this to **two** due to time constraints. I chose to polish what I had rather than stretch scope too far. With more time, I’d add a third level while keeping the same quality bar.

### Give Coins More Purpose
Coins were collectable and displayed between levels, but they didn’t have an additional gameplay use. I would improve this by:
- adding a shop system (health refill, checkpoint, upgrades)
- unlocking cosmetic changes or bonus challenges
- tying coins into scoring/leaderboards

---

## What I Took Forward
This project built my confidence in Unity and was an important step towards more complex systems. It helped me understand:
- how to structure a small game across multiple scenes
- how to build and test mechanics quickly
- how to scope a project realistically and still deliver a polished experience
