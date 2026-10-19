import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { formats: ["image/avif", "image/webp"], qualities: [60, 75] },
  poweredByHeader: false,
  reactStrictMode: true,
  // English is the default locale and has no URL prefix: /services is served from the internal /en/services route.
  // Thai (/th) and Arabic (/ar) keep their prefix. There is deliberately no geo/IP/Accept-Language redirect.
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/en/" },
        { source: "/:path((?!(?:th|ar|en|api|_next|images)(?:/|$)|icon\\.svg$|sitemap\\.xml$|robots\\.txt$).+)", destination: "/en/:path" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async redirects() {
    return [
      // Retired service page: its customer-journey scope now lives in Arabic Localization & Customer Experience.
      { source: "/en/services/customer-journey-optimization", destination: "/services/arabic-localization/", permanent: true },
      { source: "/th/services/customer-journey-optimization", destination: "/th/services/arabic-localization/", permanent: true },
      // Legacy English-prefixed URLs -> canonical unprefixed URLs (full path preserved, single hop).
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
