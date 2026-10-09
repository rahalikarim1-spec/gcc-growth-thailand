import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Thai } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content";
import { isLocale, localeMeta, locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "../globals.css";

const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap", variable: "--font-plex" });
// Thai glyphs are served via unicode-range only when Thai text is on the page.
const plexThai = IBM_Plex_Sans_Thai({ subsets: ["thai", "latin"], weight: ["400", "500", "600"], display: "swap", variable: "--font-plex-thai", preload: false });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = { themeColor: "#070c19", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Wadhah Belhassen",
  authors: [{ name: "Wadhah Belhassen" }],
  formatDetection: { telephone: false },
};

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html lang={localeMeta[lang].htmlLang} className={`${plex.variable} ${plexThai.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink-900">
          {dict.nav.skip}
        </a>
        <Header locale={lang} dict={dict} />
        <main id="main">{children}</main>
        <Footer locale={lang} dict={dict} />
      </body>
    </html>
  );
}
