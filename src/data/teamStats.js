// ─────────────────────────────────────────────────────────────
// BOCA RATON BEACH BOYS — TEAM STATS (season totals)
// Source: pro.iscorecentral.com/SFCBL/stats (filtered to BRBB)
// Update these tables as the season progresses.
//
//   batting:  one row per hitter with PA > 0
//   pitching: one row per pitcher with IP > 0
//             `outs` = innings pitched expressed in outs (for sorting /
//             qualifying ERA leaders). e.g. 11.2 IP = 35 outs.
// ─────────────────────────────────────────────────────────────

export const teamStatsUpdated = "2026-06-26"

export const teamRecord = { w: 9, l: 9, pct: ".500" }

export const battingStats = [
  { name: "Andrew Tabares",   pa: 45, ab: 39, r: 9,  h: 17, double: 2, triple: 1, hr: 2, rbi: 13, bb: 3, so: 9,  avg: ".436", obp: ".511", slg: ".692", ops: "1.203" },
  { name: "Jovan Swasey",     pa: 19, ab: 15, r: 2,  h: 5,  double: 1, triple: 0, hr: 1, rbi: 2,  bb: 3, so: 2,  avg: ".333", obp: ".474", slg: ".600", ops: "1.074" },
  { name: "Rene Ramirez",     pa: 39, ab: 31, r: 7,  h: 10, double: 2, triple: 0, hr: 0, rbi: 3,  bb: 7, so: 7,  avg: ".323", obp: ".462", slg: ".387", ops: ".849" },
  { name: "Logan Morris",     pa: 13, ab: 10, r: 4,  h: 3,  double: 0, triple: 0, hr: 1, rbi: 4,  bb: 2, so: 3,  avg: ".300", obp: ".462", slg: ".600", ops: "1.062" },
  { name: "Austin Page",      pa: 34, ab: 29, r: 8,  h: 8,  double: 1, triple: 0, hr: 1, rbi: 2,  bb: 5, so: 4,  avg: ".276", obp: ".382", slg: ".414", ops: ".796" },
  { name: "Yhirian Marrero",  pa: 32, ab: 26, r: 5,  h: 7,  double: 1, triple: 0, hr: 0, rbi: 6,  bb: 4, so: 11, avg: ".269", obp: ".406", slg: ".308", ops: ".714" },
  { name: "Joel Arroyo",      pa: 48, ab: 35, r: 12, h: 9,  double: 0, triple: 0, hr: 1, rbi: 5,  bb: 7, so: 14, avg: ".257", obp: ".458", slg: ".343", ops: ".801" },
  { name: "Frank Diaz",       pa: 18, ab: 13, r: 3,  h: 3,  double: 1, triple: 0, hr: 0, rbi: 1,  bb: 5, so: 6,  avg: ".231", obp: ".444", slg: ".308", ops: ".752" },
  { name: "Jesse Yngber",     pa: 22, ab: 18, r: 3,  h: 4,  double: 2, triple: 0, hr: 0, rbi: 4,  bb: 3, so: 11, avg: ".222", obp: ".364", slg: ".333", ops: ".697" },
  { name: "Roby McClarnon",   pa: 47, ab: 38, r: 6,  h: 8,  double: 1, triple: 0, hr: 1, rbi: 7,  bb: 8, so: 5,  avg: ".211", obp: ".362", slg: ".316", ops: ".677" },
  { name: "Tyler Little",     pa: 34, ab: 29, r: 3,  h: 6,  double: 2, triple: 0, hr: 0, rbi: 12, bb: 4, so: 11, avg: ".207", obp: ".294", slg: ".276", ops: ".570" },
  { name: "Nicholas Badillo", pa: 22, ab: 20, r: 2,  h: 4,  double: 0, triple: 0, hr: 0, rbi: 2,  bb: 0, so: 5,  avg: ".200", obp: ".273", slg: ".200", ops: ".473" },
  { name: "Silvio Giardina",  pa: 40, ab: 35, r: 5,  h: 7,  double: 0, triple: 0, hr: 1, rbi: 9,  bb: 3, so: 11, avg: ".200", obp: ".300", slg: ".286", ops: ".586" },
  { name: "Gio Lo Nero",      pa: 31, ab: 23, r: 5,  h: 4,  double: 1, triple: 0, hr: 1, rbi: 4,  bb: 7, so: 2,  avg: ".174", obp: ".387", slg: ".348", ops: ".735" },
  { name: "Dillon Moquin",    pa: 35, ab: 29, r: 5,  h: 5,  double: 1, triple: 0, hr: 0, rbi: 2,  bb: 5, so: 9,  avg: ".172", obp: ".314", slg: ".207", ops: ".521" },
  { name: "Valentino Pupo",   pa: 24, ab: 22, r: 2,  h: 3,  double: 0, triple: 0, hr: 0, rbi: 2,  bb: 1, so: 9,  avg: ".136", obp: ".208", slg: ".136", ops: ".345" },
  { name: "Michael Escobar",  pa: 22, ab: 16, r: 5,  h: 2,  double: 0, triple: 0, hr: 0, rbi: 3,  bb: 4, so: 7,  avg: ".125", obp: ".364", slg: ".125", ops: ".489" },
  { name: "Aaron Orozco",     pa: 36, ab: 22, r: 6,  h: 2,  double: 0, triple: 0, hr: 0, rbi: 3,  bb: 9, so: 10, avg: ".091", obp: ".389", slg: ".091", ops: ".480" },
  { name: "Holden Cope",      pa: 17, ab: 11, r: 2,  h: 0,  double: 0, triple: 0, hr: 0, rbi: 2,  bb: 3, so: 3,  avg: ".000", obp: ".353", slg: ".000", ops: ".353" },
  { name: "Joshua Cope",      pa: 32, ab: 30, r: 1,  h: 1,  double: 0, triple: 0, hr: 0, rbi: 0,  bb: 2, so: 13, avg: ".033", obp: ".094", slg: ".033", ops: ".127" },
]

export const pitchingStats = [
  { name: "Connor Stefan",      w: 0, l: 0, sv: 0, era: "1.13",  ip: "8.0",  outs: 24, bf: 28, hr: 0, bb: 4,  so: 10, whip: "0.50" },
  { name: "Chase Jarnagin",     w: 1, l: 0, sv: 0, era: "1.50",  ip: "12.0", outs: 36, bf: 45, hr: 0, bb: 2,  so: 12, whip: "0.58" },
  { name: "Nick Fraginals",     w: 1, l: 0, sv: 0, era: "2.25",  ip: "4.0",  outs: 12, bf: 15, hr: 0, bb: 1,  so: 8,  whip: "0.75" },
  { name: "Sean Bartlett",      w: 0, l: 0, sv: 1, era: "2.31",  ip: "11.2", outs: 35, bf: 51, hr: 0, bb: 13, so: 20, whip: "1.37" },
  { name: "Yhirian Marrero",    w: 2, l: 0, sv: 1, era: "2.57",  ip: "7.0",  outs: 21, bf: 32, hr: 0, bb: 8,  so: 10, whip: "1.71" },
  { name: "Nicholas Badillo",   w: 0, l: 0, sv: 0, era: "2.70",  ip: "3.1",  outs: 10, bf: 15, hr: 0, bb: 3,  so: 5,  whip: "1.50" },
  { name: "Grayson Smith",      w: 0, l: 0, sv: 0, era: "4.15",  ip: "4.1",  outs: 13, bf: 19, hr: 0, bb: 4,  so: 4,  whip: "1.15" },
  { name: "Matthew Pagan",      w: 0, l: 0, sv: 0, era: "4.50",  ip: "6.0",  outs: 18, bf: 25, hr: 0, bb: 3,  so: 6,  whip: "1.50" },
  { name: "Roby McClarnon",     w: 0, l: 0, sv: 0, era: "4.50",  ip: "2.0",  outs: 6,  bf: 10, hr: 0, bb: 2,  so: 5,  whip: "2.00" },
  { name: "Andrew Elkins",      w: 1, l: 1, sv: 0, era: "4.50",  ip: "8.0",  outs: 24, bf: 40, hr: 0, bb: 10, so: 7,  whip: "1.63" },
  { name: "Anthony Harvey",     w: 1, l: 0, sv: 0, era: "4.91",  ip: "7.1",  outs: 22, bf: 33, hr: 0, bb: 8,  so: 8,  whip: "1.91" },
  { name: "Andrew Allison",     w: 0, l: 1, sv: 0, era: "7.59",  ip: "10.2", outs: 32, bf: 49, hr: 0, bb: 5,  so: 3,  whip: "1.50" },
  { name: "Carter Gschwind",    w: 0, l: 1, sv: 0, era: "9.00",  ip: "5.0",  outs: 15, bf: 24, hr: 0, bb: 4,  so: 6,  whip: "2.20" },
  { name: "Aiden Rivero",       w: 1, l: 1, sv: 0, era: "9.45",  ip: "13.1", outs: 40, bf: 65, hr: 0, bb: 8,  so: 6,  whip: "2.02" },
  { name: "Luis Sosa",          w: 0, l: 0, sv: 0, era: "9.64",  ip: "4.2",  outs: 14, bf: 22, hr: 1, bb: 4,  so: 6,  whip: "1.93" },
  { name: "Mason Adkins",       w: 0, l: 3, sv: 0, era: "10.80", ip: "6.2",  outs: 20, bf: 39, hr: 0, bb: 5,  so: 2,  whip: "2.55" },
  { name: "Eduardo Echeverria", w: 0, l: 0, sv: 0, era: "11.25", ip: "4.0",  outs: 12, bf: 20, hr: 0, bb: 2,  so: 4,  whip: "1.25" },
  { name: "Ben Beck",           w: 0, l: 1, sv: 0, era: "12.96", ip: "8.1",  outs: 25, bf: 52, hr: 0, bb: 11, so: 7,  whip: "2.52" },
  { name: "Jackson Killcreas",  w: 0, l: 0, sv: 0, era: "0.00",  ip: "3.0",  outs: 9,  bf: 9,  hr: 0, bb: 1,  so: 2,  whip: "0.33" },
]
