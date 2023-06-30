import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Custom Icon */}
                {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" /> */}

                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
                {/* Space Grotesk */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                ></link>
                {/* Iceberg */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Iceberg&display=swap%27"
                    rel="stylesheet"
                ></link>
                {/* Rubik Glitch */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap"
                    rel="stylesheet"
                ></link>
                {/* Chakra Petch */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=Rubik+Glitch&display=swap"
                    rel="stylesheet"
                ></link>
                {/* Sono */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Sono:wght@200;300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
