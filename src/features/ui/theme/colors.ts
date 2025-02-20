import { palette } from "./palette"

export const colors = {
    text: {
        base: palette.grey[700],
        dark: palette.black,
        light: palette.grey[200],
        dimmed: palette.grey[500],
    },
    background: {
        base: palette.white,
        dark: palette.black,
    },
    accent: {
        primary: palette.orange[100],
        secondary: palette.orange[200],
    },
    button: {
        primary: palette.black,
        secondary: palette.orange[100],
        text: palette.white,
        disabled: palette.grey[500],
    },
}
