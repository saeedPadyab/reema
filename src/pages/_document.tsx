import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

interface IDocumentProps {
  lang: string;
  dir: string;
}
export default class MyDocument extends Document<IDocumentProps> {
  static async getInitialProps(ctx: any) {
    const { req } = ctx;
    const additionalProps = {
      lang: req.language,
      dir: req.i18n && req.i18n.dir(req.language),
    };

    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        ...additionalProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    const { lang, dir } = this.props;
    return (
      <html lang={lang} dir={dir} prefix="og: http://ogp.me/ns#">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body className="font-sans">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
