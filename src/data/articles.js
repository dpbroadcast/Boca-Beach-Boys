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
    imageUrl: null,
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
    imageUrl: null,
  },
  {
    id: "june-8-iguanas-recap",
    slug: "june-8-iguanas-recap",
    title: "Beach Boys Walk Their Way to a 7-3 Win Over Iguanas",
    date: "2026-06-08",
    gameId: "game-005",
    excerpt: "Yhirian Marrero earned the win and Boca drew nine walks to outlast West Palm Beach 7-3 at Keiser.",
    content: `Seven runs on four hits. On paper, that looks like a strange box score — but the Boca Raton Beach Boys turned a parade of walks into a comfortable 7-3 road win over the West Palm Beach Iguanas on Monday at Keiser University. Nine free passes, nine opportunities, and the Beach Boys made them count.

Yhirian Marrero picked up the win out of the bullpen, tossing two innings and allowing just one earned run. It wasn't spotless, but it was enough. The Beach Boys bullpen combination of Matthew Pagan, Chase Jarnagin, Connor Stefan, and Marrero held the Iguanas to three runs over the full nine — a solid collective effort on the mound.

## The Offense Didn't Need Hits

Four hits is a humble total for a seven-run output, but Boca found another way. Joel Arroyo was at the center of it, crossing the plate twice and serving as a catalyst through the middle of the order. Aaron Orozco made the most of his at-bats, reaching base and driving in a pair of runs. Logan Morris, Roby McClarnon, Tyler Little, and Jesse Yngber all scored, collectively building a lead that never felt seriously threatened.

The Iguanas' pitching staff issued walks in bunches — and the Beach Boys were patient enough to capitalize every time. When you put runners on base against a lineup this deep, even a quiet offensive day can produce results.

## A Four-Man Bullpen Does the Job

Matthew Pagan opened with two clean innings, allowing just one hit and keeping the Iguanas off the board entirely. Chase Jarnagin followed with three innings of work — his only blemish was a two-run stretch that brought the Iguanas briefly within reach. Connor Stefan came in and shut the door with two scoreless frames, and Marrero closed it out.

The win improved Marrero to 2-0 on the season. For a bullpen that's been mixing and matching throughout the early schedule, this was a complete team pitching performance.

## Up Next

Boca returns to action Tuesday for a doubleheader against the Coconut Creek Diamond Ducks at Lynn University. Back-to-back games, one day after this road win — the schedule doesn't slow down.`,
    imageUrl: null,
    boxScore: {
      batting: [
        { name: "Pupo, Valentino",   ab: 4, h: 0, hr: 0, r: 0, rbi: 0, bb: 0, so: 3 },
        { name: "Swasey, Jovan",     ab: 2, h: 1, hr: 0, r: 0, rbi: 0, bb: 0, so: 0 },
        { name: "McClarnon, Roby",   ab: 2, h: 1, hr: 0, r: 1, rbi: 0, bb: 1, so: 0 },
        { name: "Morris, Logan",     ab: 3, h: 0, hr: 0, r: 1, rbi: 2, bb: 1, so: 1 },
        { name: "Orozco, Aaron",     ab: 3, h: 1, hr: 0, r: 1, rbi: 2, bb: 1, so: 0 },
        { name: "Cope, Holden",      ab: 3, h: 0, hr: 0, r: 0, rbi: 1, bb: 0, so: 1 },
        { name: "Little, Tyler",     ab: 3, h: 0, hr: 0, r: 1, rbi: 0, bb: 1, so: 1 },
        { name: "Lo Nero, Gio",      ab: 2, h: 0, hr: 0, r: 0, rbi: 0, bb: 2, so: 1 },
        { name: "Escobar, Michael",  ab: 2, h: 0, hr: 0, r: 0, rbi: 0, bb: 1, so: 2 },
        { name: "Arroyo, Joel",      ab: 3, h: 1, hr: 0, r: 2, rbi: 0, bb: 1, so: 0 },
        { name: "Yngber, Jesse",     ab: 3, h: 1, hr: 0, r: 1, rbi: 0, bb: 1, so: 0 },
      ],
      pitching: [
        { name: "Pagan, Matthew",    ip: "2.0", h: 1, r: 0, er: 0, bb: 0, so: 1, note: null },
        { name: "Jarnagin, Chase",   ip: "3.0", h: 2, r: 2, er: 2, bb: 1, so: 4, note: null },
        { name: "Stefan, Connor",    ip: "2.0", h: 0, r: 0, er: 0, bb: 1, so: 3, note: null },
        { name: "Marrero, Yhirian",  ip: "2.0", h: 2, r: 1, er: 1, bb: 4, so: 0, note: "W" },
      ],
    },
  },
  {
    id: "june-9-ducks-game1-recap",
    slug: "june-9-ducks-game1-recap",
    title: "Ducks Rally for 7-2 Win Over Beach Boys in Game One",
    date: "2026-06-09",
    gameId: "game-006",
    excerpt: "A five-run fifth inning put the game away as Coconut Creek handed Boca a tough loss at Lynn University.",
    content: `The first game of Tuesday's doubleheader at Lynn University started with promise and ended in frustration. The Coconut Creek Diamond Ducks broke the game open with a five-run fifth inning and went on to beat the Boca Raton Beach Boys 7-2, handing Boca its first home loss of the young season.

The Beach Boys scratched out two runs in the fourth — Andrew Tabares came through with an RBI in the frame — but couldn't build on it. Once the Ducks got rolling in the fifth, the game was effectively over.

## Ben Beck Takes the Loss

Grayson Smith started and got through three innings and a third before running into trouble. He allowed two earned runs and four walks, but kept the game manageable early. The decisive moment came when Ben Beck entered and was immediately hit hard — the Ducks put up five runs off the second-year arm in just one inning. Beck took the loss, dropping to 0-2 on the season.

Luis Sosa came in to stop the bleeding and delivered his best outing of the year: 2.2 innings, two hits, zero runs, and two strikeouts. It was too late to change the outcome, but Sosa gave the team something to feel good about heading into the nightcap.

## Stranded Opportunities

The Beach Boys managed traffic on the basepaths but couldn't find the big hit when they needed it. Jesse Yngber, the team's hottest hitter, was on base but the lineup couldn't cash in consistently. Boca left runners stranded and the Ducks, to their credit, didn't make the same mistake.

## Looking to Game Two

A loss in a doubleheader opener is tough, but the Beach Boys had less than three hours before they had to do it all over again. The challenge: reset, regroup, and find something they couldn't get in Game 1 — a big swing at the right moment.`,
    imageUrl: null,
    boxScore: {
      batting: [
        { name: "Giardina, Silvio",  ab: 3, h: 0, hr: 0, r: 0, rbi: 0, bb: 0, so: 1 },
        { name: "Page, Austin",      ab: 2, h: 0, hr: 0, r: 1, rbi: 0, bb: 1, so: 0 },
        { name: "McClarnon, Roby",   ab: 2, h: 0, hr: 0, r: 0, rbi: 0, bb: 1, so: 0 },
        { name: "Tabares, Andrew",   ab: 2, h: 1, hr: 0, r: 1, rbi: 1, bb: 1, so: 0 },
        { name: "Little, Tyler",     ab: 2, h: 0, hr: 0, r: 0, rbi: 0, bb: 0, so: 0 },
        { name: "Moquin, Dillon",    ab: 3, h: 0, hr: 0, r: 0, rbi: 0, bb: 0, so: 1 },
        { name: "Cope, Joshua",      ab: 2, h: 0, hr: 0, r: 0, rbi: 0, bb: 0, so: 0 },
        { name: "Escobar, Michael",  ab: 2, h: 0, hr: 0, r: 0, rbi: 0, bb: 0, so: 0 },
        { name: "Marrero, Yhirian",  ab: 2, h: 0, hr: 0, r: 0, rbi: 0, bb: 0, so: 0 },
        { name: "Yngber, Jesse",     ab: 2, h: 0, hr: 0, r: 0, rbi: 0, bb: 1, so: 1 },
      ],
      pitching: [
        { name: "Smith, Grayson",    ip: "3.1", h: 1, r: 2, er: 2, bb: 4, so: 3, note: null },
        { name: "Beck, Ben",         ip: "1.0", h: 2, r: 5, er: 4, bb: 2, so: 0, note: "L" },
        { name: "Sosa, Luis",        ip: "2.2", h: 2, r: 0, er: 0, bb: 2, so: 2, note: null },
      ],
    },
  },
  {
    id: "june-9-ducks-game2-recap",
    slug: "june-9-ducks-game2-recap",
    title: "Ducks Complete Sweep with 2-1 Game Two Win",
    date: "2026-06-09",
    gameId: "game-007",
    excerpt: "Preston Andrews was dominant through five innings as Coconut Creek edged out a tight 2-1 decision to sweep the doubleheader.",
    content: `If Game One was a loss that got away, Game Two was one that felt within reach every inning — until it wasn't. The Coconut Creek Diamond Ducks held on for a 2-1 win in the nightcap, completing the doubleheader sweep of the Boca Raton Beach Boys at Lynn University.

Preston Andrews was the story. The Ducks right-hander threw five shutout innings, allowing just one hit while striking out five. His ERA sits at 0.00 through two outings, and on Tuesday evening he gave the Beach Boys nothing to work with.

## A Game of Inches

Andrew Tabares was the offensive bright spot for Boca, going 2-for-3 to lead the team in hits. Nicholas Badillo drove in the team's only run. But five hits — spread thin across the lineup — weren't enough against a pitcher as locked in as Andrews.

Sean Bartlett pitched well in a no-decision, working four innings and allowing just one run on no hits. He battled through four walks but kept the Ducks off-balance. The trouble came in the sixth when Mason Adkins allowed the second Coconut Creek run, and that one-run cushion proved to be all the Ducks needed.

## Closing Out a Long Day

Sweeping a doubleheader is hard in any league. Boca put up a fight in both games — the Game Two final was one swing away from a tie — but Coconut Creek played cleaner and got the key hit when it mattered. The Beach Boys stranded multiple runners in the late innings and couldn't deliver.

Nicholas Cucchi closed out the final two innings for the Ducks, locking down the win after Andrews handed it off.

## Moving Forward

Back-to-back losses in a doubleheader sting, but the Beach Boys still have a winning record and a deep schedule ahead. The pitching is there. The lineup has the pieces. Tuesday was a step back — the next game is a chance to answer.`,
    imageUrl: null,
    boxScore: {
      batting: [
        { name: "McClarnon, Roby",   ab: 2, h: 0, hr: 0, r: 0, rbi: 0, bb: 1, so: 0 },
        { name: "Ramirez, Rene",     ab: 2, h: 0, hr: 0, r: 0, rbi: 0, bb: 1, so: 0 },
        { name: "Orozco, Aaron",     ab: 3, h: 1, hr: 0, r: 0, rbi: 0, bb: 1, so: 0 },
        { name: "Tabares, Andrew",   ab: 3, h: 2, hr: 0, r: 1, rbi: 0, bb: 0, so: 0 },
        { name: "Lo Nero, Gio",      ab: 3, h: 0, hr: 0, r: 0, rbi: 0, bb: 0, so: 1 },
        { name: "Badillo, Nicholas", ab: 3, h: 1, hr: 0, r: 0, rbi: 1, bb: 0, so: 0 },
        { name: "Moquin, Dillon",    ab: 3, h: 0, hr: 0, r: 0, rbi: 0, bb: 0, so: 1 },
        { name: "Arroyo, Joel",      ab: 3, h: 1, hr: 0, r: 0, rbi: 0, bb: 0, so: 0 },
        { name: "Cope, Joshua",      ab: 2, h: 0, hr: 0, r: 0, rbi: 0, bb: 0, so: 1 },
        { name: "Giardina, Silvio",  ab: 2, h: 0, hr: 0, r: 0, rbi: 0, bb: 0, so: 1 },
      ],
      pitching: [
        { name: "Bartlett, Sean",    ip: "4.0", h: 0, r: 1, er: 0, bb: 4, so: 5, note: null },
        { name: "Adkins, Mason",     ip: "2.0", h: 2, r: 1, er: 1, bb: 0, so: 0, note: "L" },
      ],
    },
  },
]
