// Builds a safe image path: img("swapniil (16).jpg") -> /swapimgs/swapniil%20(16).jpg
export const img = (name) => encodeURI(`/swapimgs/${name}`);

export const WHATSAPP = "919967253567"; // country code first, no +

export const ROLES = ["Entrepreneur", "Content Creator", "Chairman, ST Group", "Mentor", "Fitness Enthusiast"];

export const NAV = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Companies", href: "#companies" },
  { label: "Awards", href: "#awards" },
  { label: "Giving Back", href: "#giving" },
];

export const TIMELINE = [
  { year: "1992", text: "Born" },
  { year: "2008", text: "Completed schooling" },
  { year: "2011", text: "Dropped out of engineering & took first job" },
  { year: "2013", text: "Career shift begins" },
  { year: "2014", text: "Founded Planning Labs" },
  { year: "2019", text: "Started Dezain Labs" },
  { year: "2023–24", text: "Entered trading business" },
  { year: "2025", text: "Recognition with multiple awards" },
  { year: "2025", text: "Owns 5 companies" },
];

// change these numbers to your real ones
export const STATS = [
  { value: 10, label: "Cities" },
  { value: 5, label: "Countries" },
  { value: 3, label: "Continents" },
];

export const COMPANIES = [
  {
    id: "pl", logo: "swap1.png", name: "Planning Labs", tag: "Experiential & Digital Marketing",
    text: [
      "An agency known for turning concepts into impactful brand experiences: BTL activations, corporate events, exhibitions, product launches and team-building activities.",
      "On the digital side: social media management, paid advertising, content creation, influencer campaigns and design solutions.",
    ],
  },
  {
    id: "dl", logo: "swap3.png", name: "Dezain Labs", tag: "Interior Design",
    text: ["An interior design studio focused on innovative space-saving solutions. It maximizes functionality in compact homes and offices, blending modern aesthetics with smart utility."],
  },
  {
    id: "te", logo: "swap4.png", name: "Tarsh Enterprises", tag: "Trading & Supply",
    text: ["Founded in 2022. Medical equipment supply, trading, market research, import-export and bulk procurement, serving large-scale supply and international trade."],
  },
  {
    id: "tr", logo: "swap2.png", name: "Trishala Realty", tag: "Real Estate",
    text: ["A real estate consultancy for commercial property sales, home loan assistance and investment advisory, bridging real estate and smart investing."],
  },
  {
    id: "bd", logo: "WHITE 2.png", name: "Bandhan", tag: "Cross-Culture Weddings",
    text: ["Beautifully blended celebrations where diverse traditions, rituals and families come together, from Indian-South African to Maharashtrian-Bengali fusion weddings."],
  },
];

export const AWARDS = [
  { image: "award/Glaze Iconic.png", title: "The Glaze Iconic Awards India 2023", text: "Honors visionary leaders and change-makers driving innovation and excellence across sectors." },
  { image: "award/40 under 40.png", title: "Glaze 40 Under 40", text: "Celebrates 40 young leaders and entrepreneurs under 40 who are redefining success." },
  { image: "award/ISA .png", title: "ISA Maharashtra Section Appreciation Award", text: "Presented to Planning Labs as a valuable partner at the Power, Petroleum and Automation Convention, CIDCO Navi Mumbai, February 2024." },
  { image: "award/iconic of Asia.png", title: "Icons of Asia", text: "Honors influential leaders and entrepreneurs setting benchmarks in innovation and leadership." },
  { image: "award/Azadi ka amarit.png", title: "Azadi Ka Amrit Mahotsav Recognition", text: "A national initiative celebrating 75 years of India’s independence." },
  { image: "award/IEMS.png", title: "Indian Entrepreneurship Awards 2023", text: "Presented by IEMS to visionary leaders making impactful contributions to business and innovation." },
];

export const GIVING = [
  { image: "company-culture (1).jpg", title: "Company Culture", text: "Every festival, birthday and team achievement is celebrated with enthusiasm. A happy team is a high-performing team, and creativity thrives where everyone feels valued." },
  { image: "community-upliftment (2).jpeg", title: "Community Upliftment", text: "From building a cricket club in his hometown of Boste to supporting youth development and local engagement, giving back is a purpose-driven mission." },
  { image: "meal-for-changes (4).jpeg", title: "Meals For Changes", text: "No child should go hungry. Swapniil supports food donations and school meal distribution, because it is about fueling futures." },
];

export const SOCIALS = [
  { name: "YouTube", url: "https://www.youtube.com/@Swapniilontherise", icon: "/images/youtube-icon.svg" },
  { name: "Instagram", url: "https://www.instagram.com/swapniilontherise/", icon: "/images/Instagram.svg" },
  { name: "Facebook", url: "https://www.facebook.com/share/16ShLuZNQa/?mibextid=qi2Omg", icon: "/swapimgs/facebook-svgrepo-com.svg" },
];

export const FOOTER_LINKS = [
  { name: "YouTube", url: "https://www.youtube.com/@Swapniilontherise" },
  { name: "Instagram", url: "https://www.instagram.com/swapniilontherise/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/dr-swapnil-tambe-70610985/" },
];