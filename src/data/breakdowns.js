// ─────────────────────────────────────────────────────────────
// BEACHSIDE BREAKDOWN EPISODES
//
// Add new episodes here. Fields:
//   id           — unique string, e.g. "bsb-005"
//   title        — episode title
//   date         — "YYYY-MM-DD"
//   description  — short blurb (1-2 sentences)
//   instagramUrl — link to the Instagram post/reel (preferred)
//   youtubeUrl   — YouTube link if also posted there (optional)
//   thumbnailUrl — path in /public/assets/ or null
//   gameId       — links to a game in games.js (optional)
//   articleId    — links to an article in articles.js (optional)
// ─────────────────────────────────────────────────────────────

export const breakdowns = [
  {
    id: "bsb-001",
    title: "Pre-season Sit-down with Coach Trastoy",
    date: "2026-06-02",
    description: "Dylan sits down with Beach Boys head coach for a pre-season conversation ahead of the 2026 SFCBL season.",
    instagramUrl: "https://www.instagram.com/reel/DZH1N_fu26g/",
    youtubeUrl: null,
    thumbnailUrl: "/assets/bsb-001-thumb.jpg",
    gameId: null,
    articleId: null,
  },
  {
    id: "bsb-002",
    title: "Pre-season Interview with Josh Cope, Aaron Orozco & Andrew Elkins",
    date: "2026-06-03",
    description: "Dylan catches up with three Beach Boys players ahead of opening day.",
    instagramUrl: "https://www.instagram.com/reel/DZISHImu_ai/",
    youtubeUrl: null,
    thumbnailUrl: "/assets/bsb-002-thumb.jpg",
    gameId: null,
    articleId: null,
  },
  {
    id: "bsb-003",
    title: "Pre-season Sit-down with Andrew Tabares",
    date: "2026-06-05",
    description: "A pre-season conversation with Beach Boys infielder Andrew Tabares ahead of the 2026 campaign.",
    instagramUrl: "https://www.instagram.com/p/DZLXFD_JZn_/",
    youtubeUrl: null,
    thumbnailUrl: "/assets/bsb-003-thumb.jpg",
    gameId: null,
    articleId: null,
  },
  {
    id: "bsb-004",
    title: "Postgame with Roby McClarnon & Aiden Rivero",
    date: "2026-06-05",
    description: "Roby McClarnon (HR, 2 RBI) and Aiden Rivero (3 IP, 0 ER, 3 K) break down Boca's 9-3 opening win over the Iguanas.",
    instagramUrl: "https://www.instagram.com/p/DZOA8lIJmrb/",
    youtubeUrl: null,
    thumbnailUrl: "/assets/bsb-004-thumb.jpg",
    gameId: "game-003",
    articleId: "june-5-iguanas-recap",
  },
  {
    id: "bsb-005",
    title: "Beachside Breakdown with Sean Bartlett after win over Blazers",
    date: "2026-06-16",
    description: "Sean Bartlett (5 IP, 1 H, 9 K) joins Dylan to break down Boca's 1-0 combined one-hitter over the Blazers.",
    instagramUrl: "https://www.instagram.com/p/DZqn1nepqoH/",
    youtubeUrl: null,
    thumbnailUrl: null,
    gameId: "game-013",
    articleId: "june-16-blazers-recap",
  },
  {
    id: "bsb-006",
    title: "Beachside Breakdown with Chase Jarnagin after win over Gators Blue",
    date: "2026-06-20",
    description: "Chase Jarnagin (4 IP, 0 R, 5 K) breaks down Boca's 10-0 run-rule win over the Wellington Gators Blue.",
    instagramUrl: "https://www.instagram.com/p/DZ0XJU8JrLp/",
    youtubeUrl: null,
    thumbnailUrl: null,
    gameId: "game-018",
    articleId: "june-20-gators-blue-recap",
  },
]
