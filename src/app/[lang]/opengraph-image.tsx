import { ImageResponse } from "next/og";
import { locales } from "@/lib/i18n";

export const alt = "Wadhah Belhassen — GCC Market Entry & Growth Consultant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Latin-only so no font file is needed; Thai-specific artwork can be added per locale later.
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#070c19", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#5ad6c3", fontSize: 28, letterSpacing: 4 }}>
          THAILAND · MALAYSIA ──── GCC
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>GCC Market Entry & Growth</div>
          <div style={{ marginTop: 24, fontSize: 34, color: "#cbd5e1" }}>For businesses in Thailand, Malaysia & Southeast Asia</div>
        </div>
        <div style={{ fontSize: 32, color: "#e4bb6a" }}>Wadhah Belhassen</div>
      </div>
    ),
    size,
  );
}
