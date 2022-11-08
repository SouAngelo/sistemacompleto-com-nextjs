import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(){
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Lato:wght@400;700&family=Poppins:wght@400;500;600;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
