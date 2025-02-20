import type { AppProps } from "next/app"
import { GlobalStyle } from "@/features/ui/theme"

export const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}
