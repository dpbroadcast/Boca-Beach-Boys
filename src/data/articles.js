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
    content: `The Boca Beach Boys opened their 2026 SFCBL season in style, rolling past the Iguanas 10-4 on the road at Keiser University. Three home runs, five innings of combined shutout pitching from the top of the bullpen, and contributions up and down the lineup made for a statement opener.

## Roby McClarnon: Player of the Game

Roby McClarnon set the tone for the entire afternoon. The Beach Boys first baseman went 2-for-4 with a home run and three RBIs, doing the most damage of anyone in the lineup. His home run was the kind of swing that changes the feel of a game — from that moment on, Boca never looked back. McClarnon also came around to score twice, making him the clear standout on a day full of offensive contributions.

## Three-Homer Day

McClarnon wasn't the only one going deep. Logan Morris matched him with a solo shot of his own, going 1-for-4 with an RBI. Gio Lo Nero added a third home run on the day, also finishing 1-for-3 with an RBI. Three different players clearing the fences in the season opener is a strong early sign for an offense with plenty of pop.

Jesse Yngber was the other offensive standout, going 2-for-2 with a walk, an RBI, and a run scored — the most efficient line in the box. Tyler Little chipped in a double and two RBIs, and Boca drew enough walks throughout the lineup to keep the pressure on all game.

## Rivero and Fraginals Combine for Five Dominant Innings

The pitching staff was equally impressive. Starter Aiden Rivero went three innings, allowing two hits while striking out three and keeping the Iguanas off the board entirely. He walked two, but worked around traffic both times — a composed outing to open his 2026 campaign.

Rivero handed the ball to Nick Fraginals, who was simply electric. The right-hander threw two perfect innings — no hits, no walks, and four strikeouts. In just six outs, Fraginals retired every batter he faced and punched out four of them. It was the most dominant stretch of pitching on the day and a huge early-season statement for Fraginals coming out of the bullpen.

Sean Bartlett and Mason Adkins split the final two innings, allowing the Iguanas to make it look somewhat respectable with four late runs. But by that point, the Beach Boys had long put the game away.

## Up Next

Boca carries this momentum into a busy stretch of the schedule. Stay tuned to DP.Broadcast for full coverage all summer long.`,
    imageUrl: null,
    boxScore: {
      batting: [
        { name: "McClarnon, Roby",  ab: 4, h: 1, hr: 1, r: 2, rbi: 2, bb: 0, so: 0 },
        { name: "Morris, Logan",    ab: 4, h: 1, hr: 1, r: 1, rbi: 1, bb: 0, so: 1 },
        { name: "Yngber, Jesse",    ab: 2, h: 2, hr: 0, r: 1, rbi: 2, bb: 1, so: 0 },
        { name: "Little, Tyler",    ab: 3, h: 1, hr: 0, r: 1, rbi: 2, bb: 0, so: 2 },
        { name: "Lo Nero, Gio",     ab: 3, h: 1, hr: 1, r: 1, rbi: 1, bb: 0, so: 0 },
        { name: "Tabares, Andrew",  ab: 3, h: 0, hr: 0, r: 0, rbi: 0, bb: 1, so: 2 },
        { name: "Orozco, Aaron",    ab: 2, h: 0, hr: 0, r: 0, rbi: 1, bb: 1, so: 1 },
        { name: "Cope, Joshua",     ab: 2, h: 0, hr: 0, r: 1, rbi: 0, bb: 1, so: 1 },
        { name: "Moquin, Dillon",   ab: 2, h: 0, hr: 0, r: 1, rbi: 0, bb: 1, so: 1 },
        { name: "Escobar, Michael", ab: 1, h: 0, hr: 0, r: 1, rbi: 0, bb: 1, so: 1 },
      ],
      pitching: [
        { name: "Rivero, Aiden",   ip: "3.0", h: 2, r: 0, er: 0, bb: 2, so: 3, note: "W" },
        { name: "Fraginals, Nick", ip: "2.0", h: 0, r: 0, er: 0, bb: 0, so: 4, note: null },
        { name: "Bartlett, Sean",  ip: "1.0", h: 2, r: 1, er: 1, bb: 1, so: 2, note: null },
        { name: "Adkins, Mason",   ip: "1.0", h: 1, r: 2, er: 2, bb: 0, so: 1, note: null },
      ],
    },
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
