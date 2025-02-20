import type { DocumentContext, DocumentInitialProps } from "next/document"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"
import React from "react"

const getInitialProps = async (
    ctx: DocumentContext
): Promise<DocumentInitialProps> => {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: App => appProps =>
                    sheet.collectStyles(<App {...appProps} />),
            })

        const initialProps = await NextDocument.getInitialProps(ctx)
        return {
            ...initialProps,
            styles: [
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>,
            ],
        }
    } finally {
        sheet.seal()
    }
}

export const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

Document.getInitialProps = getInitialProps

export default Document
