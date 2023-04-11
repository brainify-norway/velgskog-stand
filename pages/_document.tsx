import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html lang="no">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/dcw3wug.css"
                />
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-09DB7WV1E1"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){window.dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-09DB7WV1E1');
                    `}
                </Script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
