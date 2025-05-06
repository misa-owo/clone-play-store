import { siteConfig } from "@/constants/config";
import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>{siteConfig.name}</title>
        <meta name="description" content={siteConfig.description} />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
