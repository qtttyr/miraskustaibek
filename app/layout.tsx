import type { Metadata, Viewport } from "next";
import { Inter_Tight, Geist_Mono } from "next/font/google";
import { bio, profile } from "@/data/profile";
import "./globals.css";

const SITE_URL = profile.siteUrl;
const DESCRIPTION =
  "Miras Kustaibek — developer, startup manager and entrepreneur from Astana, Kazakhstan. Student of Cardiff University. Nine roles, one brain: builds products, brands and teams from zero.";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Miras Kustaibek — Developer, Startup Manager, Entrepreneur",
    template: "%s · Miras Kustaibek",
  },
  description: DESCRIPTION,
  applicationName: "Miras Kustaibek",
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  alternates: { canonical: "/" },
  keywords: [
    "Miras Kustaibek",
    "Miras Kustaibek Kazakhstan",
    "Miras Kustaibek developer",
    "Miras Kustaibek Astana",
    "Miras Kustaibek Cardiff",
    "Miras Kustaibek entrepreneur",
    "developer Astana",
    "startup manager Kazakhstan",
    "young entrepreneur Kazakhstan",
    "Cardiff University Kazakhstan",
    "founder Astana",
    "web developer Kazakhstan",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "gStgCMVULfih4OeZELdQrvnDmpQH9GZBTDqrUIfFzbk",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Miras Kustaibek",
    title: "Miras Kustaibek — Developer, Startup Manager, Entrepreneur",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Miras Kustaibek — Developer, Startup Manager, Entrepreneur",
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

/** Structured data so Google can build a rich person card for the name query. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: [profile.name, `${profile.first} ${profile.last}`],
  url: SITE_URL,
  "@id": `${SITE_URL}#person`,
  image: `${SITE_URL}/opengraph-image`,
  email: `mailto:${profile.email}`,
  description: bio.lead,
  jobTitle: ["Developer", "Startup Manager", "Entrepreneur"],
  knowsAbout: [
    ...profile.roles,
    "Next.js",
    "TypeScript",
    "Product design",
    "Brand strategy",
    "Marketing",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Astana",
    addressCountry: "KZ",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: profile.university,
  },
  sameAs: profile.sameAs,
  knowsLanguage: ["en", "kk", "ru"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain">
        <script
          type="application/ld+json"
          // Structured data is static, defined in this file
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
