// ─────────────────────────────────────────────────────────────
// SFCBL 2026 STANDINGS — source: pro.iscorecentral.com/SFCBL/standings
// Update the W/L/pct/streak fields here as the season progresses.
// `bb: true` flags the Boca Raton Beach Boys row for highlighting.
// ─────────────────────────────────────────────────────────────

export const standingsUpdated = "2026-06-26"

export const standings = {
  North: [
    { team: "Palm Beach Xtreme",        abbr: "PBX",  w: 15, l: 6,  pct: ".714", gb: "—",   home: "7-3",  road: "8-3", l10: "7-3",  strk: "W6",  rs: 169, ra: 128, diff: 41 },
    { team: "Boynton Beach Buccaneers",  abbr: "BBB",  w: 13, l: 6,  pct: ".684", gb: "1",   home: "10-4", road: "3-2", l10: "7-3",  strk: "W1",  rs: 168, ra: 101, diff: 67 },
    { team: "Delray Beach Lightning",    abbr: "DBL",  w: 14, l: 7,  pct: ".667", gb: "1",   home: "8-4",  road: "6-3", l10: "10-0", strk: "W10", rs: 141, ra: 108, diff: 33 },
    { team: "Boca Raton Beach Boys",     abbr: "BRBB", w: 9,  l: 9,  pct: ".500", gb: "5",   home: "4-3",  road: "5-6", l10: "3-7",  strk: "L3",  rs: 98,  ra: 93,  diff: 5,  bb: true },
    { team: "Palm Beach Matadors",       abbr: "PBM",  w: 7,  l: 11, pct: ".389", gb: "6.5", home: "4-5",  road: "3-6", l10: "4-6",  strk: "L2",  rs: 76,  ra: 82,  diff: -6 },
    { team: "Wellington Gators Orange",  abbr: "WGO",  w: 4,  l: 7,  pct: ".364", gb: "6",   home: "3-3",  road: "1-4", l10: "4-6",  strk: "L2",  rs: 65,  ra: 81,  diff: -16 },
    { team: "Wellington Gators Blue",    abbr: "WGB",  w: 5,  l: 10, pct: ".333", gb: "7",   home: "2-7",  road: "3-3", l10: "3-7",  strk: "W1",  rs: 75,  ra: 128, diff: -53 },
    { team: "West Palm Beach Iguanas",   abbr: "WPI",  w: 4,  l: 14, pct: ".222", gb: "9.5", home: "1-9",  road: "3-5", l10: "2-8",  strk: "L3",  rs: 94,  ra: 150, diff: -56 },
  ],
  South: [
    { team: "Coconut Creek Diamond Ducks", abbr: "CCDD", w: 16, l: 5,  pct: ".762", gb: "—",   home: "8-2", road: "8-3", l10: "6-4", strk: "W3", rs: 195, ra: 122, diff: 73 },
    { team: "Boca Raton Blazers",          abbr: "BRB",  w: 13, l: 5,  pct: ".722", gb: "1.5", home: "8-2", road: "5-3", l10: "8-2", strk: "W4", rs: 130, ra: 81,  diff: 49 },
    { team: "Coconut Creek X-Team",        abbr: "CCXT", w: 10, l: 9,  pct: ".526", gb: "5",   home: "2-4", road: "8-5", l10: "4-6", strk: "L2", rs: 136, ra: 127, diff: 9 },
    { team: "Pompano Beach Wave",          abbr: "PBW",  w: 9,  l: 11, pct: ".450", gb: "6.5", home: "4-5", road: "5-6", l10: "5-5", strk: "W1", rs: 114, ra: 158, diff: -44 },
    { team: "Fort Lauderdale Hooks",       abbr: "FLH",  w: 7,  l: 9,  pct: ".438", gb: "6.5", home: "1-3", road: "6-6", l10: "5-5", strk: "L4", rs: 109, ra: 95,  diff: 14 },
    { team: "West Boca Snappers",          abbr: "WBS",  w: 7,  l: 11, pct: ".389", gb: "7.5", home: "4-4", road: "3-7", l10: "4-6", strk: "W1", rs: 99,  ra: 136, diff: -37 },
    { team: "Miami Gardens Makos",         abbr: "MGM",  w: 4,  l: 10, pct: ".286", gb: "8.5", home: "2-5", road: "2-5", l10: "1-9", strk: "L6", rs: 75,  ra: 119, diff: -44 },
    { team: "Hialeah Gardens Lions",       abbr: "HGL",  w: 3,  l: 11, pct: ".214", gb: "9.5", home: "2-7", road: "1-4", l10: "3-7", strk: "L1", rs: 77,  ra: 114, diff: -37 },
  ],
}
