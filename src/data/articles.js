// ─────────────────────────────────────────────────────────────
// ARTICLES — add new entries here as the season progresses.
//
// slug:     URL-safe identifier, used in /articles/:slug routes
// gameId:   matches an id in games.js (optional)
// content:  full article text — plain paragraphs separated by \n\n
//           wrap section headers in ## like markdown
// imageUrl: path to image in /public/assets/ or a full URL (optional)
// ─────────────────────────────────────────────────────────────

export const articles = [
  {
    id: "june-5-iguanas-recap",
    slug: "june-5-iguanas-recap",
    title: "Beach Boys Roll Past Iguanas 10-4",
    date: "2026-06-05",
    gameId: "game-003",
    excerpt: "Roby McClarnon went deep and Aiden Rivero dealt a gem as Boca cruised to a 10-4 road win over the Iguanas.",
    content: `The Boca Beach Boys picked up a convincing 10-4 road victory over the Iguanas on Friday morning at Keiser University, improving their 2026 SFCBL record with a balanced effort on both sides of the ball.

## Roby McClarnon: Player of the Game

Roby McClarnon was the offensive star of the afternoon, going 2-for-4 with a home run and three RBIs. His big fly provided the kind of momentum swing that put the game firmly out of reach.

## Aiden Rivero Shuts Down Iguanas Early

On the mound, starting pitcher Aiden Rivero was dominant through his three innings of work. He allowed just one hit, struck out three, and didn't surrender an earned run — setting the tone for what became a comfortable Beach Boys win.

## Up Next

The Beach Boys are back in action tomorrow as the summer schedule heats up. Stay tuned to DP.Broadcast for all the coverage.`,
    imageUrl: null,
  },
  // Add articles here after each game. Example:
  //
  // {
  //   id: "article-001",
  //   slug: "june-3-gators-orange-recap",
  //   title: "Beach Boys Open Season with Statement Win",
  //   date: "2026-06-03",
  //   gameId: "game-001",
  //   excerpt: "Dylan Paul on the call as Boca dominates from the jump.",
  //   content: `The Boca Beach Boys made a statement...\n\nFull article text here.`,
  //   imageUrl: null,
  // },
]
