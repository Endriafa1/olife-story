# olife story

A minimalist personal story & life-log app — track moments, milestones,
and memories in a clean timeline view.

## Features
- **Timeline** — entries grouped by month, newest first
- **Mood tracking** — 5 moods with emoji indicators
- **Live search** — instant filter across title and body
- **Stats** — total entries, year count, top mood, day streak
- **Backup** — export/import as JSON

## Stack
- React 18 + Vite
- Zustand (persisted state via localStorage)
- date-fns
- TailwindCSS

## Getting started
```bash
npm install
npm run dev   # http://localhost:5173
```

## Data
All entries are stored locally in `localStorage` under the key `olife-entries`.
Use *Export* to back up and *Import* to restore on a new device.
