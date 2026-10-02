import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — developer, startup manager, entrepreneur`;
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
          background: "#ece9e2",
          color: "#0b0b0c",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        {/* left: copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 26, letterSpacing: 6, color: "#1a2fd6" }}>
              MK/17 · ASTANA, KZ
            </div>
            <div
              style={{
                fontSize: 96,
                fontWeight: 800,
                letterSpacing: -4,
                lineHeight: 1,
                marginTop: 28,
              }}
            >
              {profile.name}
            </div>
            <div
              style={{
                fontSize: 34,
                color: "#1a2fd6",
                marginTop: 18,
              }}
            >
              Developer · Startup manager · Entrepreneur
            </div>
          </div>

          <div style={{ display: "flex", fontSize: 24, color: "#0b0b0c66" }}>
            {profile.university} · miraskustaibek.com
          </div>
        </div>

        {/* right: the card, as on the site */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 380,
            height: 470,
            padding: 34,
            background: "#f7f5ef",
            borderRadius: 18,
            boxShadow: "0 30px 60px -20px rgba(0,0,0,0.35)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontWeight: 800,
              color: "#1a2fd6",
              textTransform: "uppercase",
              letterSpacing: -1.5,
              lineHeight: 1,
            }}
          >
            {profile.headline}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 30,
                fontWeight: 600,
                color: "#1a2fd6",
                letterSpacing: -0.5,
              }}
            >
              {profile.first} {profile.last}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 19,
                color: "#1a2fd6",
                marginTop: 8,
              }}
            >
              {profile.roles.slice(0, 3).join(" · ")}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 12,
              background: "#1a2fd6",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}