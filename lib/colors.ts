/**
 * Imperial Night / Imperial Ivory palette constants for contexts that can't
 * consume Tailwind classes or CSS variables — inline SVG, Three.js materials,
 * hash-based avatar colors. Mirrors the values in app/globals.css; if you
 * change a hex there, change it here too.
 */

export type ThemeName = 'dark' | 'light'

export const brand = {
  obsidian: '#0B0910',
  ivory: '#F5F1E8',
  aubergine: '#24162E',
  plum: '#3B2348',
  violet: '#8C6F99',
  champagne: '#D8B56A',
  brass: '#B89452',
  bronze: '#C58F78',
} as const

export const theme = {
  dark: {
    canvas: '#0B0910',
    surface1: '#121017',
    surface2: '#18141D',
    accent: '#D8B56A', // Champagne — primary decorative/brand accent
    accentSecondary: '#8C6F99', // Regent Violet
  },
  light: {
    canvas: '#F6F2EA',
    surface1: '#FFFCF7',
    surface2: '#F0EAE0',
    accent: '#A27E3C', // deepened Brass/Champagne for AA contrast
    accentSecondary: '#78617F',
  },
} as const

export const semantic = {
  dark: {
    success: '#79D3A7',
    warning: '#F0C36A',
    danger: '#F28C94',
    info: '#8BB9E7',
    review: '#C3A4D2',
    pending: '#BEC5CC',
  },
  light: {
    success: '#216B4A',
    warning: '#8A5B12',
    danger: '#A23843',
    info: '#315F8F',
    review: '#68497B',
    pending: '#5E6670',
  },
} as const

/** Status keys shared by DataTable/StatusBadge-style status maps. */
export const statusColors: Record<ThemeName, Record<string, string>> = {
  dark: {
    active: semantic.dark.pending,
    won: theme.dark.accent,
    paid: semantic.dark.success,
    completed: semantic.dark.success,
    done: semantic.dark.success,
    signed: semantic.dark.success,
    renewing: semantic.dark.review,
    in_progress: semantic.dark.review,
    in_review: semantic.dark.review,
    pending: semantic.dark.warning,
    at_risk: semantic.dark.warning,
    draft: '#706873',
    overdue: semantic.dark.danger,
    lost: semantic.dark.danger,
    churned: semantic.dark.danger,
  },
  light: {
    active: semantic.light.pending,
    won: theme.light.accent,
    paid: semantic.light.success,
    completed: semantic.light.success,
    done: semantic.light.success,
    signed: semantic.light.success,
    renewing: semantic.light.review,
    in_progress: semantic.light.review,
    in_review: semantic.light.review,
    pending: semantic.light.warning,
    at_risk: semantic.light.warning,
    draft: '#928A95',
    overdue: semantic.light.danger,
    lost: semantic.light.danger,
    churned: semantic.light.danger,
  },
}

/** 6-color categorical scale for charts (spec §17-18); max 6 simultaneous series. */
export const categorical: Record<ThemeName, string[]> = {
  dark: ['#B395C0', '#D8B56A', '#75A9D7', '#64AAA2', '#86AD76', '#D38F98', '#9297D2', '#B5AFBA'],
  light: ['#5B366A', '#A06F1F', '#376FA3', '#2F7C77', '#4F7B46', '#A65362', '#5A5F9C', '#6A6673'],
}

/** Low-to-high sequential scale keyed on royal violet (spec §20-21). */
export const sequential: Record<ThemeName, string[]> = {
  dark: ['#33223C', '#493052', '#64426F', '#81598E', '#A57CB2', '#CFB3D8'],
  light: ['#F3ECF6', '#DFCEE6', '#C4A7CF', '#9B72AA', '#704C7F', '#4A2B58'],
}

/** Negative -> neutral -> positive diverging scale (spec §22-23). */
export const diverging: Record<ThemeName, string[]> = {
  dark: ['#F28C94', '#B76068', '#4B4550', '#57A17A', '#79D3A7'],
  light: ['#A23843', '#D7898F', '#E9E2D9', '#8FC39E', '#216B4A'],
}

/** Deterministic hash-based avatar palette — reuses the categorical scale, extended for variety. */
export const avatarPalette: Record<ThemeName, string[]> = {
  dark: [...categorical.dark, '#79D3A7', '#F0C36A', '#8BB9E7', '#F28C94', '#E3C884', '#C58F78'],
  light: [...categorical.light, '#216B4A', '#8A5B12', '#315F8F', '#A23843', '#B8935A', '#8C5A45'],
}
