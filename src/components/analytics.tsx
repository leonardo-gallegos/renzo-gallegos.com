import Script from "next/script";

// Static build configuration: public identifier only, never a credential.
export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID?.trim();
  if (process.env.NODE_ENV !== "production" || !id) return null;
  if (!/^G-[A-Z0-9]+$/.test(id)) throw new Error("NEXT_PUBLIC_GA_ID must be a real GA4 Measurement ID (G-…)");

  return <>
    <Script id="ga4-config" strategy="lazyOnload">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${id}');
    `}</Script>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="lazyOnload" />
  </>;
}
