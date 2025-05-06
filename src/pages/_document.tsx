import { siteConfig } from "@/constants/config";
import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>{siteConfig.name}</title>
        <meta name="description" content={siteConfig.description} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="i5nPhV7idKcbYAPGICkVpw" async></script>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
