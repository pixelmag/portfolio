# Portfolio v2 — Build Context

## Stack
React + Vite + CSS Modules + Framer Motion + React Router v6
NO Tailwind. CSS Modules only.

## Figma File
File ID: e9RGdiQ2ZT4FvYXDtOOTNg
- Homepage Desktop: node 211-6597
- Homepage Mobile: node 211-6627
- Cases Desktop: node 211-6778
- Cases Mobile: node 211-6671

## Phase Status
- [x] Phase 1 — Project setup + Tokens
- [x] Phase 2 — Navbar
- [x] Phase 3 — Hero section
- [x] Phase 4 — Cases grid
- [x] Phase 5 — Cases pages
- [x] Phase 6 — Footer

## Routes
- `/` → HomePage
- `/cases/:slug` → CasePage

## Cases (slugs)
- esphera
- sos (Seed Oils)
- throne
- unbound
- royo
- petly
- tm

## Assets
- Avatar: src/assets/avatar.png (copied from My Portfolio/images/Navigation/Mag.png)
- Case images: src/assets/cases/{esphera,seedoils,throne,unbound,royo,petly,tm}/

## Global Rules
- One phase at a time, never start next without explicit approval
- NEVER use fixed heights on content containers
- NEVER move/rename/delete files in /src/assets/
- CSS Modules only — no inline styles except dynamic animation values
- Read Figma node BEFORE writing any code for that section
