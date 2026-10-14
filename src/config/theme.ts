/**
 * VERSO V3 color tokens.
 * Layout injects these as CSS variables, and Tailwind utilities read them.
 * Change a value here to recolor the template.
 */
export const theme = {
  darkGraphite: "#1D2521",
  deepGreen: "#202A23",
  ink: "#252B27",
  mutedOlive: "#657365",
  paper: "#F1EFE7",
  softStone: "#E8E6DE",
  champagne: "#E7CD94",
  softOliveSurface: "#D5DACD",
  oliveSurface: "#D0D5C8",
  border: "#CBC9BF",
  contactChampagne: "#D7B779",
  chapter: "#E5E2D8",
  workSurface: "#1C2822",
} as const;

export type Theme = typeof theme;
