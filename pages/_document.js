import Document, { Head, Main, NextScript } from 'next/document';
import { getInitialProps, getStyles } from 'cf-style-nextjs';

export default class MyDocument extends Document {
  static getInitialProps = getInitialProps();

  render() {
    return (
      <html>
        <Head>
          <title>Minesweeper</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                *{ box-sizing: border-box; }
                body { margin: 0; text-align: center; display: center; background-color: #587291}
                html { font-family: 'Open Sans', sans-serif; text-align: center;}
               `
            }}
          />
          {getStyles(this.props)}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

        </body>
      </html>
    );
  }
}
