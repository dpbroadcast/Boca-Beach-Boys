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
  {
    id: "rivero-june-5-interview",
    slug: "rivero-june-5-interview",
    title: "Trusting His Stuff: A Conversation with Aiden Rivero",
    date: "2026-06-05",
    gameId: "game-003",
    excerpt: "After three scoreless innings to open the season, Aiden Rivero sat down to talk changeups, mental approach, poker, and what he's looking for in the fall.",
    content: `Aiden Rivero didn't need a perfect outing to make a statement on opening day. Three innings, two hits, zero runs — and a composure on the mound that made it look routine. After the game, the right-hander spoke about what went into it.

## Background

Rivero is a Miami native who played his high school ball locally, earning All-District and All-Region honors for Miami-Dade County before appearing in the Senior All-Star Game at Stetson University. He went on to play at East Georgia College, where he had a strong showing in his first taste of college competition. This fall, he'll be entering the transfer portal following the program's transition to NAIA, and is looking for a JUCO or D2 opportunity in Florida.

Heading into this summer, Rivero has been working closely with a pitching coach who spent time in the big leagues — and he says the results have been noticeable. "This whole month of May and early June, I've been working with a great pitching coach who spent some time in the bigs," he said. "He's been helping me have some mechanical unlocks. It's all working out."

## The Showcase Mindset

Today's game carried extra weight — with portal players on display, it had the feel of a showcase. Rivero acknowledged that, but said it didn't change his approach. "From the start, I was really confident. I always trust my stuff. It's just about not overthinking and not trying to get too mechanical."

His stat line backed that up. He walked two and worked around both, keeping the Iguanas off the board through three innings and handing a clean game to the bullpen.

## The Arsenal

Rivero is upfront about what he is as a pitcher. He's not a 95 mph guy. His game is built on pitch ability — a sinker that generates ground balls, and a changeup he's been throwing with confidence since his junior year of high school.

"My go-to pitch has always been the changeup," he said. "It disrupts timing and I can throw it in any count — 3-0, 3-2, doesn't matter. I always have confidence in it."

The sinker is his fastball, but the changeup is the weapon. That combination keeps pitch counts low, which in turn lets him go deeper into games.

## Staying Composed

Even with the confidence, there were moments today where he fell behind in counts. His reset is simple. "I step off the mound and just breathe," he said. "My main thing is not making the moment too big — especially when pitching with a lead."

That mindset extends to how he views run support. "I don't care if I give up a few runs as long as we get the W," he said. "I know our team is going to hit and we're going to score. It's my job to get us the win when I'm on the mound."

## Watching the First Inning

Rivero had a front-row seat for one of the most electric first innings you'll see. He was locked in on his own preparation when Roby McClarnon led off the game with a home run — then watched Logan Morris and Gio Lo Nero follow suit.

"I was just sitting down drinking water, trying to dial in for my inning," he said. "I see Roby hit that bomb and I'm like, well, that's a great start. And then I see two more and I was like — yeah, this is gonna be a dub."

## The Team So Far

For a group that had mostly just met in the days prior, Rivero said the chemistry came quickly. "From the first practice, everyone was super cool. No little cliques, no groups of people who already knew each other staying to themselves. Everyone was introducing themselves."

He sees that carrying over into a long summer. "That home run really just gelled us completely. I think this is going to be a great season."

## The Poker Connection

One of the more unexpected threads in the conversation: Rivero plays poker. A lot of it. And he thinks it's made him a better pitcher.

"I think it's made me smarter because I'm able to read players better," he said. "It sharpened the mental side of baseball — I feel like I read hitters better now."

It tracks. The same calculated patience that makes a good poker player — not overreacting to one bad hand, staying disciplined in the moment, trusting the process — shows up in how Rivero pitches. Whether it's 3-0 or bases loaded, the approach doesn't change.

If today is any indication, the Beach Boys are going to like having him in their rotation all summer.`,
    imageUrl: null,
  },
  {
    id: "bartlett-june-5-interview",
    slug: "bartlett-june-5-interview",
    title: "The Long Road Back: Sean Bartlett Is Ready",
    date: "2026-06-05",
    gameId: "game-003",
    excerpt: "Double hip surgery, a torn patellar tendon, and a long stretch away from the game. Sean Bartlett's return to the mound has been anything but easy — but he's back.",
    content: `Most players don't come back from one major injury. Sean Bartlett has come back from several. Double hip surgery. A torn patellar tendon. A stretch away from competitive pitching that would have ended a lot of careers. He's not most players.

## The Road Back

Bartlett's recovery has been built on three things: a strong support system, a deep understanding of his own mechanics, and a mental approach that keeps the noise out. He hasn't rushed. He's been meticulous — about his preparation, about how he uses his body, about what he puts on the mound every time he takes the ball.

Today was his first outing in a competitive game setting after that long absence. One inning, two hits, one earned run. The numbers weren't perfect. The mindset was.

## Not Forcing It

The thing Bartlett kept coming back to in conversation was consistency — and not trying to manufacture results. That's a hard thing to internalize when you've been away for as long as he has, when every outing carries the weight of proving you belong back out there.

He came into today focused on staying loose and trusting his preparation rather than gripping the moment too tightly. He spoke about the relief of seeing his fastball velocity where it needs to be — a benchmark that matters more than ERA in an early-season outing like this one, because it tells you where the rest of the arsenal is headed.

## What He's Building Toward

Bartlett acknowledged that mixing in more off-speed pitches will be a priority as the season progresses. The fastball and curveball were both working today, and getting a full complement of pitches operating at game speed — consistently — is the next step.

It's a process. He knows that. And the fact that he's treating it like a process, rather than trying to shortcut back to where he was before the injuries, says a lot about where his head is at.

## The Battery

One thing that clearly helped: his relationship with catcher Aaron Orozco. Bartlett was direct about how much a catcher's energy affects a pitcher's mindset on the mound.

"When a catcher adds that energy, it makes a pitcher way better," he said. If your catcher is vocal, confident, and in your corner, it changes how you operate. Orozco has made that impression on more than one pitcher on this staff early in the season.

## A Different Environment

Playing in Florida is new for Bartlett, and he's embraced it. He spoke positively about the transition and about the coaching staff — an environment that, by his account, encourages players to have fun and stay loose rather than press.

That environment suits someone in his position. Coming back from what he's come back from, the last thing you need is a tense, high-pressure atmosphere. The Beach Boys give him room to work, and he's taking advantage of it.

The road back was long. He made it. The rest of the summer is his to take.`,
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
