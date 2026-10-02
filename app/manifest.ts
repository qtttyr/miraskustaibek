import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Miras Kustaibek",
    short_name: "MK/17",
    description: "Business card of Miras Kustaibek — developer, startup manager, entrepreneur.",
    start_url: "/",
    display: "standalone",
    background_color: "#ece9e2",
    theme_color: "#0b0b0c",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}