export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/collection", label: "Collection" },
  { href: "/program", label: "The Program" },
  { href: "/about", label: "About" },
];

export const ctaLink: NavLink = { href: "/inquiry", label: "Request a Quote" };

export const tickerItems = [
  "The Two Greatest Words In Sports",
  "When Everything Is On The Line",
  "Where The Game Lives On",
  "Win Or Go Home",
  "Ambition",
  "Commitment",
  "Gratitude",
  "Sacrifice",
  "Focus",
  "Preparation",
  "Passion",
  "Performance Under Pressure",
];
