import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#123f2e",
          color: "#fffdf7",
        }}
      >
        <div style={{ fontSize: 28, color: "#e0632e", fontWeight: 600 }}>
          {site.location}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {site.name}
        </div>
        <div style={{ marginTop: 24, fontSize: 32, color: "#f2ecd8" }}>
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
