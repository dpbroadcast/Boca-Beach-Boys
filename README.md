# Boca Beach Boys — DP.Broadcast Fan Site

A premium broadcast-focused fan site for the Boca Beach Boys (South Florida Collegiate Baseball League), built with React + Vite + Tailwind CSS.

---

## Setup

### Prerequisites
- Node.js 18+ ([nodejs.org](https://nodejs.org))
- npm (comes with Node)

### Install & run
```bash
cd boca-beach-boys
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build for production
```bash
npm run build
```
The `dist/` folder is ready to deploy to Netlify or Vercel (static hosting, no backend needed).

---

## Adding Image Assets

Place these three files in `/public/assets/` before running the site:

| File | Usage |
|------|-------|
| `logo.png` | Wordmark (navbar, hero) |
| `icon.png` | "B" with beach ball (favicon, hero, cards) |
| `sfcbl.png` | SFCBL league logo (footer, league page) |

The site renders gracefully without them — logos hide if the file is missing.

---

## Updating Games

All game data lives in **`src/data/games.js`**. To update a game after it's played:

```js
// Find the game by id and update these fields:
{
  status: "completed",          // change from "upcoming"
  result: "W 8-4",             // or "L 3-7"
  youtubeReplayUrl: "https://youtu.be/VIDEO_ID",  // paste replay URL
  articleId: "article-001",    // link to recap article (optional)
}
```

### Mark a game LIVE
```js
{
  status: "live",
  youtubeStreamUrl: "https://youtu.be/STREAM_ID",
}
```

### Add a stream link before the game
```js
{
  youtubeStreamUrl: "https://youtu.be/STREAM_ID",
}
```

> The homepage "Next Game" banner automatically pulls the first game where `status !== "completed"` and the date is today or later. The "Watch Live" button links to `youtubeStreamUrl` if set, or falls back to the YouTube channel.

---

## Adding Articles

Articles live in **`src/data/articles.js`**. Add a new object to the array:

```js
{
  id: "article-002",
  slug: "june-5-pride-recap",          // used in URL: /articles/june-5-pride-recap
  title: "Beach Boys Blank Pride in Home Opener",
  date: "2026-06-05",
  gameId: "game-002",                   // optional — links to game modal
  excerpt: "One sentence preview shown on the card.",
  content: `Full article text here.

Paragraphs separated by blank lines.

## Section Headers
Use ## for section headers within the article.`,
  imageUrl: null,                       // or "/assets/june-5-photo.jpg"
}
```

**Slug rules:** lowercase, hyphens only, no spaces — this becomes the URL.

---

## Data File Quick Reference

### `src/data/games.js` fields

| Field | Type | Notes |
|-------|------|-------|
| `id` | string | Unique: `"game-001"` through `"game-044"` |
| `date` | string | `"YYYY-MM-DD"` |
| `dayOfWeek` | string | Full day name: `"Wednesday"` |
| `time` | string | `"6:00 PM"` |
| `opponent` | string | Opposing team name |
| `isHome` | boolean | `true` = home game |
| `venue` | string | Stadium/field name |
| `address` | string | Full address |
| `broadcasterRole` | string | `"PXP"`, `"Color"`, or `"OFF"` |
| `offBroadcaster` | string\|null | Who's broadcasting if Dylan is OFF |
| `status` | string | `"upcoming"`, `"live"`, `"completed"` |
| `result` | string\|null | `"W 8-4"` or `"L 3-7"` |
| `youtubeStreamUrl` | string\|null | Full YouTube URL for live stream |
| `youtubeReplayUrl` | string\|null | Full YouTube URL for replay |
| `articleId` | string\|null | Article `id` from `articles.js` |

---

## Pages

| Route | Page |
|-------|------|
| `/` | Homepage — hero, next game, recent results, latest article |
| `/schedule` | Full season schedule with filters and game modal |
| `/articles` | Article grid |
| `/articles/:slug` | Full article with replay embed |
| `/league` | SFCBL standings iframe + league info |
| `/about` | Dylan Paul bio + YouTube channel |

---

## Deployment

### Netlify
1. `npm run build`
2. Drag the `dist/` folder into Netlify's deploy panel, or connect your repo.
3. Set build command: `npm run build`, publish directory: `dist`.
4. Add a `_redirects` file in `/public/`:
   ```
   /* /index.html 200
   ```
   This ensures React Router works on page refresh.

### Vercel
Connect the repo — Vercel auto-detects Vite and sets everything correctly.

---

*Built by Dylan Paul · @DP.Broadcast*
