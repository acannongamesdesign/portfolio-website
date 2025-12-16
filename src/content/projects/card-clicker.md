---
title: Card Clicker
year: 2025
team: Solo
type: University
role: Gameplay Designer / UI/UX Designer / Programmer
engine: Unity
summary: A 2D clicker/idle game focused on readable UI/UX, where players earn chips using card-based stats and upgrade systems to improve progression.
coverImage: /images/projects/card-clicker/main-screen.png
gallery:
  - src: /images/projects/card-clicker/main-screen.png
    alt: Card Clicker main screen showing chip counters, hand stats, and click button.
    caption: Main screen (clicking + core info)
  - src: /images/projects/card-clicker/inventory-screen.png
    alt: Card Clicker inventory screen showing card slot selection and back navigation.
    caption: Inventory screen (slot management)
  - src: /images/projects/card-clicker/upgrades-screen.png
    alt: Card Clicker upgrades screen showing upgrade purchases and costs.
    caption: Upgrades screen
---

## Overview
**Card Clicker** is a 2D clicker/idle game created in **Unity** for a university project focused on **UI/UX and readability**. The core goal was to present information clearly so the player could make informed decisions, which is especially important for idle/clicker games where the experience is heavily information-driven.

This was also one of my most **technically complex** projects, because many systems had to work together cleanly: chip generation, upgrades, progression pacing, card slot inventory management, and multiple UI screens.

---

## Design Goals
- **Readable UI/UX:** clear information hierarchy (what you have, what you earn, what upgrades do)
- **Meaningful decisions:** upgrades change output in understandable ways
- **Smooth progression:** not too slow, not too fast (balanced with a spreadsheet)
- **Accessibility + idle play:** optional auto-clicker so the game can be played actively or passively

---

## Core Loop
1. Start with a **2 of Clubs**
2. Click to earn **chips**
3. Spend chips on upgrades that increase earning potential
4. Unlock **card slots** to create stronger hand types (e.g., pair)
5. Improve idle progression with an **auto clicker** and speed upgrades

---

## Chip Calculation System
Chips earned were calculated using:

- **Card Value**
- **Card Suit**
- **Hand Type**
- **Hand Level**

The idea was to keep the player always aware of *why* their chips increased, and which upgrade was responsible for that change.

### Hand Type + Hand Level (example)
A **2 of Clubs** counts as a **High Card** and starts with:
- **Base chips:** 10  
- **Base multiplier:** 2

Each **Hand Level** increases:
- **Base chips** by **+5**
- **Base multiplier** by **+0.5**

This scaling created a consistent, understandable progression curve for the player.

---

## Progression & Upgrades
Upgrades allowed the player to increase output in a few clear ways:

### Card Value Upgrade
Upgrading card value would progress the card upward (e.g., **2 of Clubs → 3 of Clubs**), increasing earnings.

### Suit Upgrade
Upgrading suit would change the suit while keeping the value (e.g., **2 of Clubs → 2 of Diamonds**), allowing progression through suit tiers.

### Hand Level Upgrade
Increasing hand level improved the scaling of the current hand type by raising base values and multipliers.

### Card Slot Purchases
As the player progressed, they could purchase **additional card slots**. More slots allowed the player to form new **hand types** such as **Pair**, increasing earnings and adding long-term goals to the progression.

---

## Idle / Accessibility Feature: Auto Clicker
To support accessibility and the idle side of the genre, the game included an **auto clicker**:
- Allows passive play without constant clicking
- Makes the game more accessible for players who can’t or don’t want to click repeatedly
- Can be upgraded over time to **click faster**, supporting long-session progression

---

## Balancing With a Spreadsheet
To keep progression feeling satisfying, I created a **balancing spreadsheet** that listed:
- upgrade costs
- expected chip gain changes
- pacing targets across progression milestones

This helped ensure the game didn’t feel grindy, but also didn’t reach “endgame” too quickly.

---

## UI/UX: Three Game Screens
The game uses three distinct screens to keep information clear and prevent clutter:

1. **Main Screen** – the primary click/earn space  
2. **Inventory Screen** – choose which card is assigned to each slot  
3. **Upgrades Screen** – purchase upgrades and improve chip generation  

Each screen is shown below.

---

## Technical Implementation
I aimed to build the project primarily using **visual scripting**, but during development it became clear that some **C# scripting** was necessary to:
- streamline logic
- reduce visual scripting complexity
- improve long-term readability and maintainability

This hybrid approach helped me keep development efficient while still meeting the project’s UX/UI focus.

---

## Issues & What I Would Improve
Because the system was complex, the final version had a few issues I would fix if revisiting the project. One example:
- The player could buy **multiple copies of the same card for the same slot**, which shouldn’t be possible

If I revisited Card Clicker, I would:
- enforce stricter slot/card ownership rules
- refine upgrade validation to prevent unintended states
- improve UI feedback for invalid actions

---

## What I Learned
- Clear UI hierarchy dramatically improves decision-making in information-heavy games
- Spreadsheet-driven balancing is extremely useful for pacing and progression
- Visual scripting is great for speed, but mixing in code can improve clarity for larger systems
- Complex upgrade systems benefit from early validation rules to avoid edge-case bugs
