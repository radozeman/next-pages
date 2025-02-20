import { css } from "styled-components"
import { colors } from "./colors"

export const font = {
    base: '"Tenor Sans", serif;',
    headings: '"Tenor Sans", serif;',
}

const allHeadingsStyles = css`
    font-family: ${font.headings};
    font-weight: inherit;
`

const allParagraphsStyles = css`
    font-family: ${font.base};
    color: ${colors.text.base};
`

export const typography = {
    heading: {
        all: allHeadingsStyles,
        h1: css`
            ${allHeadingsStyles}
            font-size: 1.125rem;
            line-height: 2.5rem;
        `,
        h2: css`
            ${allHeadingsStyles}
            font-size: 1rem;
            line-height: 1.5rem;
        `,
        h3: css`
            ${allHeadingsStyles}
            font-size: 0.875rem;
            line-height: 1.25rem;
        `,
    },
    paragraph: {
        sm: css`
            ${allParagraphsStyles}
            font-size: 0.75rem;
            line-height: 1.125rem;
        `,
        md: css`
            ${allParagraphsStyles}
            font-size: 1rem;
            line-height: 0.875rem;
        `,
        lg: css`
            ${allParagraphsStyles}
            font-size: 1rem;
            line-height: 1.5rem;
        `,
    },
}
