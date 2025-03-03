import type { AppProps } from "next/app"
import { GlobalStyle } from "@/features/ui/theme"
import Head from "next/head"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <GlobalStyle />
            <Head>
                <meta name="viewport" content="viewport-fit=cover" />
            </Head>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </>
    )
}

export default App
