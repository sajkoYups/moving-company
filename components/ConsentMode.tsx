"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Consent Mode v2: default consent denied. CookieBanner calls gtag('consent', 'update') on accept/reject.
 * Set NEXT_PUBLIC_GA_ID to enable Google Analytics/Ads.
 */
export function ConsentMode() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
          `,
        }}
      />
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-config" strategy="afterInteractive">
            {`gtag('config', '${GA_ID}');`}
          </Script>
        </>
      )}
    </>
  );
}
