export const screenSize = {
    xs: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1200,
}

export const mediaQueries = {
    xs: `@media (min-width: ${screenSize.xs / 16}em)`,
    sm: `@media (min-width: ${screenSize.sm / 16}em)`,
    md: `@media (min-width: ${screenSize.md / 16}em)`,
    lg: `@media (min-width: ${screenSize.lg / 16}em)`,
    xl: `@media (min-width: ${screenSize.xl / 16}em)`,
}
