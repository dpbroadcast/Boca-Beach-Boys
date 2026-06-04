# DP.Broadcast — Boca Beach Boys Website
## Daily Update Guide for Claude

This is the DP.Broadcast fan site for the Boca Beach Boys (SFCBL 2026).
Built with React + Vite + Tailwind CSS. All data lives in `src/data/`.

---

## 🏆 Update a Game Score / Result

**File:** `src/data/games.js`

Find the game by date and opponent, then update these fields:

```js
status: 'completed',           // change from 'upcoming'
result: 'W 7-3',               // or 'L 4-6', or 'T 2-2'
youtubeReplayUrl: 'https://youtu.be/VIDEO_ID',  // add replay link when available
```

**Result format:** Always `W score-score` or `L score-score` (Beach Boys score first)
**Example:** Beach Boys win 5-2 → `result: 'W 5-2'`

---

## 📺 Add a Beachside Breakdown Episode

**File:** `src/pages/Content.jsx` — edit the `breakdowns` array at the top

```js
{
  id: "bsb-003",               // increment the number each time
  title: "Episode Title Here",
  date: "2026-06-10",          // YYYY-MM-DD format
  description: "One sentence about what this episode covers.",
  instagramUrl: "https://www.instagram.com/reel/REEL_ID/",
  youtubeUrl: null,            // add if also on YouTube
  thumbnailUrl: "/assets/bsb-003-thumb.jpg",  // or null if no thumbnail yet
},
```

**Thumbnail:** Save the image to `public/assets/` named `bsb-003-thumb.jpg` (match the id number)
**Instagram link:** Open the reel → three dots (…) → Copy Link

---

## 📝 Add a Game Article / Recap

**File:** `src/data/articles.js`

```js
{
  slug: 'recap-june-10-vs-lions',   // unique URL slug, no spaces
  title: 'Beach Boys Blank Lions 4-0',
  date: '2026-06-10',
  excerpt: 'One or two sentence preview shown on the Articles page.',
  content: `Full article text goes here. Can be multiple paragraphs.
  
  Second paragraph here.`,
  imageUrl: null,                    // optional: '/assets/some-image.jpg'
  tags: ['recap', 'win'],
},
```

---

## 🔴 Mark a Game as LIVE

**File:** `src/data/games.js` — find today's game and set:

```js
status: 'live',
youtubeStreamUrl: 'https://youtu.be/STREAM_ID',  // today's live stream link
```

Revert to `status: 'completed'` and add `result` after the game ends.

---

## 📢 Other Common Updates

### Update a YouTube stream link (before a game)
`src/data/games.js` → find the game → add `youtubeStreamUrl: 'https://youtu.be/ID'`

### Change a game's time or venue
`src/data/games.js` → find the game → update `time` or `venue`

### Add a player to the roster
`src/data/roster.js` → copy an existing player entry and fill in the new player's info

---

## 📁 Key File Locations

| What | File |
|------|------|
| Game schedule & scores | `src/data/games.js` |
| Articles & recaps | `src/data/articles.js` |
| Roster | `src/data/roster.js` |
| Beachside Breakdown episodes | `src/pages/Content.jsx` (top of file) |
| Homepage layout | `src/pages/Home.jsx` |
| About page | `src/pages/About.jsx` |
| Images / logos | `public/assets/` |

---

## 🚀 Running the Site Locally

```bash
cd "/Users/dylanpaul/Downloads/Boca Beach Boys/Website & Tech/boca-beach-boys"
npm run dev
```

Then open `http://localhost:5174` in your browser.

---

## ⚡ IMPORTANT — Publishing Updates to the Live Site

After making ANY changes, run these 3 commands in Terminal to push live:

```bash
cd "/Users/dylanpaul/Downloads/Boca Beach Boys/Website & Tech/boca-beach-boys"
git add -A
git commit -m "describe what you changed"
git push
```

Netlify detects the push and rebuilds the live site automatically in ~60 seconds.
Live site: https://dpbroadcast.netlify.app

---

## Social Links (for reference)

- YouTube (primary): https://youtube.com/@dp.broadcast
- TikTok: https://www.tiktok.com/@dp__broadast
- Instagram (Dylan): https://www.instagram.com/dp.broadcast
- Instagram (Beach Boys): https://www.instagram.com/bocabeachboysbsb/
- Twitter / X (Beach Boys — live game updates): https://x.com/beachboysbsb
- Beach Boys official site: https://www.bocabeachboys.com/
