import type { Preview } from "@storybook/react"
import { GlobalStyle } from "../src/features/ui/theme/globals"
import { withThemeFromJSXProvider } from "@storybook/addon-themes"

export const decorators = [
    withThemeFromJSXProvider({
        GlobalStyles: GlobalStyle,
    }),
]

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview
