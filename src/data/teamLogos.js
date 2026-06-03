// Maps opponent names (as used in games.js) to their logo paths
export const TEAM_LOGOS = {
  'Gators Orange': '/assets/teams/gators-orange.jpg',
  'Gators Blue':   '/assets/teams/gators-blue.jpg',
  'Bucs':          '/assets/teams/bucs.png',
  'Iguanas':       '/assets/teams/iguanas.avif',
  'Lions':         '/assets/teams/lions.png',
  'Ducks':         '/assets/teams/ducks.jpg',
  'Lightning':     '/assets/teams/lightning.png',
  'Matadors':      '/assets/teams/matadors.jpg',
  'Blazers':       '/assets/teams/blazers.png',
  'Hooks':         '/assets/teams/hooks.jpg',
  'X Team':        '/assets/teams/x-team.png',
  'Xtreme':        '/assets/teams/xtreme.png',
  'Makos':         '/assets/teams/makos.png',
  'Snappers':      '/assets/teams/snappers.png',
  'Wave':          '/assets/teams/wave.jpg',
  'Beach Boys':    '/assets/teams/beach-boys.jpg',
}

export function getTeamLogo(opponent) {
  return TEAM_LOGOS[opponent] ?? null
}
