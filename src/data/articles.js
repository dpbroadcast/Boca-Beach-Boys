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
    content: `You can't have a much hotter start to the season than this. Roby McClarnon stepped into the box to lead off the very first at-bat of the Boca Beach Boys' 2026 campaign — and promptly hit it over the fence. Then Logan Morris did the same thing. Then Gio Lo Nero did it too. Three batters, three solo home runs, all in the top of the first inning. The season was barely underway and the Iguanas were already in trouble.

From there, the Beach Boys never let up, rolling to a 10-4 road win at Keiser University behind a complete team effort on both sides of the ball.

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
    imageUrl: "/assets/team-huddle.jpg",
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
  {
    id: "rivero-june-5-interview",
    slug: "rivero-june-5-interview",
    title: "Trusting His Stuff: A Conversation with Aiden Rivero",
    date: "2026-06-05",
    gameId: "game-003",
    excerpt: "After three scoreless innings to open the season, Aiden Rivero sat down to talk pitch mix, mental approach, and what made today click.",
    content: `Aiden Rivero didn't need a perfect outing to make a statement on opening day. Three innings, two hits, zero runs — and a composure on the mound that made it look routine.

## The Mindset

Today's game had the feel of a showcase, but Rivero wasn't overthinking it. He trusted his stuff, stayed within himself, and let the results follow. His stat line — three scoreless, three strikeouts — backed that up.

When he fell behind in counts, the reset was simple: step off, breathe, focus on throwing a strike. Not making the moment bigger than it needs to be is something he's clearly worked on, and it showed.

## The Arsenal

Rivero isn't built around velocity. His game runs through a sinker that generates weak contact and keeps pitch counts low, paired with a changeup he's had full confidence in for years. The changeup is the weapon — he'll throw it in any count, any situation. That combination lets him work efficiently and go deeper into games.

He's also been putting in work with a pitching coach this offseason, and the mechanical progress he's made heading into this summer was evident today.

## Watching the First Inning

Rivero was locked into his own preparation when the offense erupted in the top of the first — three solo home runs before he ever took the mound. By the time he warmed up, the tone was already set.

"I see Roby hit that bomb and I'm like, well, that's a great start," he said. "And then two more — yeah, this is gonna be a dub."

## Early Chemistry

For a team that had only just come together, the energy was already there. Rivero credited the group's buy-in from day one, and said the first-inning explosion felt like a moment that brought everyone together fast. If today is any indication, he's going to fit right in.`,
    imageUrl: "/assets/postgame-interview.jpg",
  },
  {
    id: "bartlett-june-5-interview",
    slug: "bartlett-june-5-interview",
    title: "The Long Road Back: Sean Bartlett Is Ready",
    date: "2026-06-05",
    gameId: "game-003",
    excerpt: "Sean Bartlett overcame significant injuries to get back on the mound. After his first outing with the Beach Boys, it's clear the work has paid off.",
    content: `Sean Bartlett has put in the work to get back on a mound, and it showed today. One inning, a few hits, one earned run — not a perfect line, but a composed outing from a pitcher who came in prepared and competed.

## The Approach

Bartlett's game is built on consistency and knowing what he's doing out there. He's not trying to overpower hitters — he works with his fastball and curveball, stays within himself, and keeps things simple. The velocity has been where he wants it, which sets up everything else.

His pre-game routine reflects that same discipline. He takes his time, stays loose, and doesn't let the moment get too big. That carried over to today — even when he got into a bit of trouble, the composure was there.

## The Battery

The chemistry with catcher Aaron Orozco was a clear positive. Orozco is vocal behind the plate, brings energy, and gives pitchers something to feed off. That kind of presence matters, and Bartlett noticed it.

## Looking Ahead

There's more in the tank. Bartlett talked about working more off-speed pitches into his game as the season goes on, and with the fastball feeling good, that development should come naturally. The Beach Boys have a pitcher who knows how to compete, and the rest of the summer is an opportunity to show it.`,
    imageUrl: "/assets/bartlett-rivero-beach.jpg",
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
