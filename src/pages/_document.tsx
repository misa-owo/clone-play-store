import { siteConfig } from "@/constants/config";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Core SEO */}
        <title>{siteConfig.name}</title>
        <meta name="description" content={siteConfig.description} />
        <link rel="canonical" href="https://sweet-bonanza-play.com/" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* Open Graph for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteConfig.name} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content="https://sweet-bonanza-play.com/social-preview.jpg" />
        <meta property="og:url" content="https://sweet-bonanza-play.com/" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.name} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content="https://sweet-bonanza-play.com/social-preview.jpg" />

        {/* Ahrefs Analytics */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="i5nPhV7idKcbYAPGICkVpw"
          async
        ></script>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
