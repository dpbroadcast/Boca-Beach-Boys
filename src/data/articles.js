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

## Aiden Rivero: Trusting His Stuff

After the game, Rivero spoke about what made today's outing click. For a game that carried extra weight — with portal players on showcase — Rivero kept it simple.

"From the start, I was really confident," he said. "I always trust my stuff. It's just about not overthinking and not trying to get too mechanical."

Rivero, a Miami native who played high school ball locally before earning All-District and All-Region honors and appearing in the Miami-Dade County Senior All-Star Game at Stetson, spent last season at East Georgia. He's entering the transfer portal this fall after the program's transition to NAIA, and is looking for a JUCO or D2 opportunity in Florida. He credits work with a pitching coach who has big league experience for helping him find some mechanical unlocks heading into this summer.

The stat line — three innings, two hits, zero runs — speaks for itself, but Rivero was quick to point to his pitch mix as the foundation. He's not a 95 mph guy and doesn't pretend to be. His game is built around a changeup, a sinker, and the ability to generate weak contact and keep pitch counts low.

"My go-to pitch since junior year has always been the changeup," he said. "I have the most confidence with it. It disrupts timing, and I can throw it in any count — 3-0, 3-2, doesn't matter."

When he got behind in counts today, his reset was the same as it always is: step off, breathe, and focus on throwing a strike. "My main thing is just breathing and not making the moment too big," he said. "Especially when pitching with a lead."

He also had a front-row seat for the first inning. "I was just sitting down drinking water, trying to dial in for my inning," Rivero said. "I see Roby hit that bomb and I'm like, well, that's a great start — and then I see two more and I was like, yeah, this is gonna be a dub."

Rivero is quick to credit the team environment as a factor too. From the first practice, he said, there were no cliques — just a group of guys introducing themselves and buying in. "That home run really just gelled us completely," he said. "I think this is going to be a great season."

## Sean Bartlett: Back and Ready

Sean Bartlett's road to this mound was longer than most. The right-hander has battled through double hip surgery and a torn patellar tendon — injuries that would end careers for less determined players. He's rebuilt himself through a combination of physical recovery, mechanical refinement, and a mental approach that clearly translates to the mound.

Today's outing — one inning, two hits, one earned run — was Bartlett's first appearance in a game setting after a long stretch away from pitching in competition. The results were imperfect, but his mindset wasn't. He came in focused, stayed loose, and leaned on preparation he's put in over months of work.

Bartlett spoke about the importance of not trying to force results — a mindset that's easier said than done when you're returning from serious injury in a showcase environment. He was particularly relieved to see his fastball velocity where it needed to be, a major marker for where his stuff is heading.

He also highlighted his chemistry with catcher Aaron Orozco. "When a catcher adds that energy, it makes a pitcher way better," he noted — echoing a sentiment Rivero shared as well. Orozco's vocal presence behind the plate has clearly made an impression on the pitching staff early.

Looking ahead, Bartlett acknowledged the need to mix in more off-speed pitches as the season progresses. But the foundation is there, and the resilience it took just to get back on a mound speaks volumes about what he brings to this staff.

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
