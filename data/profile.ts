export const profile = {
  first: "miras",
  last: "kustaibek",
  name: "Miras Kustaibek",
  headline: "I'm CEO, Beach",
  roles: [
    "Developer",
    "Startup Manager",
    "Entrepreneur",
    "Footballer",
    "Chess Player",
    "Dancer",
    "Designer",
    "Photographer",
    "Marketing Manager",
  ],
  university: "Cardiff University — Kazakhstan",
  location: "Astana, KZ",
  timezone: "Asia/Almaty",
  email: "miras@kustaibek.com",
  telegram: "@mmespiderman",
  github: "https://github.com/qtttyr",
  x: "https://x.com/",
  instagram: "https://www.instagram.com/vaprooll",
  portfolio: "miraskustaibek.com",
  siteUrl: "https://miraskustaibek.com",
  sameAs: [
    "https://github.com/qtttyr",
    "https://x.com/vaprolol",
    "https://www.instagram.com/vaprooll/",
    "https://t.me/mmespiderman",
  ],
} as const;

/** Short, factual bio used for SEO / structured data / "about" block. */
export const bio = {
  eyebrow: "About",
  title: "Seventeen. Cardiff. Kazakhstan.",
  lead: "I’m a developer, startup manager and entrepreneur building things that don’t exist yet — interfaces that load fast, brands that feel inevitable, and teams that ship on purpose.",
  body: "Nine roles, one brain: developer, startup manager, entrepreneur, footballer, chess player, dancer, designer, photographer, marketing manager. Same obsession, different shirt — make it clear, make it useful, make it ship.",
  facts: [
    { k: "Based in", v: "Astana, Kazakhstan · UTC+5" },
    { k: "Studying at", v: "Cardiff University — Kazakhstan" },
    { k: "Building", v: "Products, brands and teams from zero" },
    { k: "Open to", v: "Co-founder roles · freelance · interesting problems" },
  ],
};

export const manifesto: { text: string; accent?: boolean }[] = [
  { text: "I don’t collect titles." },
  { text: "I ship them." , accent: true },
  { text: "Seventeen. Cardiff. Kazakhstan." },
  { text: "Nine lives, one brain, zero boring ideas." },
];

export const roster = [
  {
    id: "01",
    role: "Developer",
    detail: "Full-stack. I turn caffeine into interfaces that load fast and don’t cry.",
    tags: ["TypeScript", "Next.js", "Systems"],
  },
  {
    id: "02",
    role: "Startup Manager",
    detail: "Zero to one. Strategy, ops, and the art of making chaos executable.",
    tags: ["Ops", "Roadmaps", "Growth"],
  },
  {
    id: "03",
    role: "Entrepreneur",
    detail: "I build things that don’t exist yet, then make them impossible to ignore.",
    tags: ["Ideas", "MVPs", "Risk"],
  },
  {
    id: "04",
    role: "Footballer",
    detail: "Tactics, stamina, team instinct. The same three things startups need.",
    tags: ["Pressing", "Vision", "Ninety-six"],
  },
  {
    id: "05",
    role: "Chess Player",
    detail: "Ten moves ahead or nothing. Strategy is the only sport that pays later.",
    tags: ["Opening", "Tempo", "Endgame"],
  },
  {
    id: "06",
    role: "Dancer",
    detail: "Movement as language. Rhythm is a design skill most people lack.",
    tags: ["Groove", "Timing", "Stage"],
  },
  {
    id: "07",
    role: "Designer",
    detail: "Restraint. If it needs decoration, the idea isn’t finished.",
    tags: ["Minimal", "Type", "Systems"],
  },
  {
    id: "08",
    role: "Photographer",
    detail: "Light is the whole job. Everything else is just pointing a camera.",
    tags: ["Light", "Frames", "Film"],
  },
  {
    id: "09",
    role: "Marketing Manager",
    detail: "Nobody knows what you built until the right eleven people hear it.",
    tags: ["Positioning", "Content", "Narrative"],
  },
];

export const timeline = [
  {
    year: "NOW",
    title: "Building in public",
    body: "Shipping products, running a startup, studying in Cardiff. Learning in public so nobody can keep up quietly.",
  },
  {
    year: "2025",
    title: "Founder",
    body: "Stopped waiting for permission. Started shipping. Discovered that 17 is not a limitation, it’s a deadline.",
  },
  {
    year: "2024",
    title: "First real code",
    body: "Wrote a full app. Broke it. Rewrote it. Learned that the boring parts are the product.",
  },
  {
    year: "2023",
    title: "Design & photo",
    body: "Fell in love with restraint — fewer elements, better ones. Started documenting everything.",
  },
  {
    year: "2009",
    title: "Born in Kazakhstan",
    body: "Started with no manual. Still running without one.",
  },
];

export const stats = [
  { value: 17, suffix: "", label: "Years old", note: "and still shipping" },
  { value: 9, suffix: "", label: "Roles", note: "one brain" },
  { value: 1, suffix: "", label: "Mindset", note: "no compromise" },
];
