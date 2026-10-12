export const site = {
  name: "PC Outfitters",
  shortName: "PCO",
  tagline: "Outfit your next computer.",
  description:
    "Windsor–Essex computer sales and service since 1997. Custom PCs, careful repairs, gaming rigs, and next-day parts — without the upsell.",
  phone: "(519) 969-0166",
  phoneHref: "tel:+15199690166",
  fax: "(519) 969-8843",
  email: "pcoquote@gmail.com",
  emailHref: "mailto:pcoquote@gmail.com",
  address: {
    line1: "3181 Marentette Ave, Unit 2",
    city: "Windsor",
    region: "ON",
    postal: "N8X 4G1",
    country: "Canada",
    note: "Behind Devonshire Mall, in the plaza near the movie theatre.",
  },
  hours: [
    { days: "Monday – Friday", time: "10:00 AM – 5:00 PM" },
    { days: "Saturday", time: "10:00 AM – 4:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  hoursNote: "Special hours apply on holidays — call or see us in store.",
  mapEmbed:
    "https://maps.google.com/maps?q=3181%20Marentette%20Ave%20Unit%202%2C%20Windsor%2C%20ON%20N8X%204G1&z=16&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=3181+Marentette+Ave+Unit+2+Windsor+ON+N8X+4G1",
  founded: 1997,
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/builds", label: "Custom Builds" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const values = [
  {
    key: "Speed",
    title: "About speed",
    body: "Most orders are fulfilled next business day. Service averages two to three business days for most jobs.",
  },
  {
    key: "Quality",
    title: "About quality",
    body: "Hardware is handled with care. Machines are dusted when needed, data is left intact rather than wiped, and parts are chosen for years of problem-free operation. New systems include a two-year parts and labour warranty.",
  },
  {
    key: "Fun",
    title: "About fun",
    body: "Gaming rigs are built to be the fastest and most future-proof we can make them. We accept trade-ins.",
  },
  {
    key: "Business",
    title: "Means business",
    body: "From a basic office machine to a SolidWorks-capable 24-hour workstation or a server — we build systems that eat the workload.",
  },
] as const;

export const services = [
  {
    slug: "repair",
    title: "In-house repair",
    price: "$75",
    blurb: "Drop it off. We diagnose, fix, and treat the machine as if it were ours.",
    detail:
      "We service all makes and models of computers, Macs, notebooks, and netbooks. Underlying issues get hunted down — we do not reformat as a first resort.",
  },
  {
    slug: "onsite",
    title: "On-site service",
    price: "$75 / hr",
    blurb: "House calls and office visits across Windsor–Essex.",
    detail:
      "Business and residential on-site work: networks, workstations, and machines that cannot leave the building.",
  },
  {
    slug: "priority",
    title: "Priority bench",
    price: "+$45",
    blurb: "Jump the queue. Next available bench.",
    detail: "Added to a standard service when you need the machine back first.",
  },
  {
    slug: "eval",
    title: "Hardware evaluation",
    price: "$25",
    blurb: "A clear verdict before you spend.",
    detail:
      "Honest assessment of what is worth repairing, upgrading, or replacing — including when it is not worth repairing.",
  },
  {
    slug: "clone",
    title: "Data copy / clone",
    price: "$45",
    blurb: "Large-volume drive copies and system clones.",
    detail: "Move to a new drive without starting over. We take special care to leave data intact.",
  },
  {
    slug: "recovery",
    title: "Software data recovery",
    price: "$75–150",
    blurb: "Recover files lost to software failure — not a reformat.",
    detail:
      "Software-side recovery when the drive is still readable. We will tell you if hardware recovery is out of scope.",
  },
] as const;

export const extras = [
  {
    title: "Hardware install & burn-in",
    note: "Free when purchased at PCO",
    body: "Parts you buy here get installed and burned in at no charge.",
  },
  {
    title: "Custom next-day parts",
    note: "Order 9–5, Mon–Fri",
    body: "Motherboards, processors, storage, memory, GPUs, cases, PSUs, cooling, Wi-Fi, and monitors.",
  },
  {
    title: "Laptop hardware repair",
    note: "Screens, batteries, boards",
    body: "Notebook and netbook work for the machines people actually carry — including Macs.",
  },
  {
    title: "Networks & security",
    note: "Home and office",
    body: "High-speed networking, security packages, and office software/hardware.",
  },
] as const;

export const builds = [
  {
    slug: "gaming",
    title: "Gaming rigs",
    kicker: "All budgets",
    image: "/images/gaming-rig.jpg",
    body: "Built to be fast now and still fast later. We spec to the games you actually play — not a parts list someone copied from a forum.",
    points: ["Future-proof GPU / CPU balance", "Quiet cooling that holds up", "Trade-ins welcome"],
  },
  {
    slug: "office",
    title: "Home & office",
    kicker: "Quiet workhorses",
    image: "/images/workstation.jpg",
    body: "Machines that boot, last, and do not rattle. Tuned for documents, browsers, and the software a small business actually runs.",
    points: ["Two-year parts & labour", "No bloatware pile-on", "On-site setup available"],
  },
  {
    slug: "workstation",
    title: "Workstations & servers",
    kicker: "SolidWorks to 24-hour duty",
    image: "/images/hero.jpg",
    body: "For CAD, rendering, and machines that are not allowed to nap. We build to the workload, then burn it in.",
    points: ["ECC and multi-core options", "Server and NAS builds", "Business on-site support"],
  },
] as const;

export const parts = [
  "Mainboards",
  "Processors",
  "Hard drives & SSDs",
  "Memory",
  "Video cards",
  "Cases",
  "Power supplies",
  "Fans & cooling",
  "Modems & Wi-Fi",
  "Monitors",
] as const;

export const brands = [
  "AMD",
  "Intel",
  "ASUS",
  "MSI",
  "Gigabyte",
  "EVGA",
  "Corsair",
  "Cooler Master",
  "Antec",
  "Arctic",
  "Crucial",
  "Kingston",
  "Lenovo",
  "Toshiba",
] as const;

export const rates = [
  { label: "In-house service", value: "$75" },
  { label: "On-site service", value: "$75 / hour" },
  { label: "Priority bench", value: "+$45" },
  { label: "Drive copy / clone", value: "$45" },
  { label: "Hardware evaluation", value: "$25" },
  { label: "Software data recovery", value: "$75–150" },
  { label: "Install & burn-in (PCO parts)", value: "Free" },
] as const;

export const testimonials = [
  {
    quote:
      "I've been coming to these guys for the past 10 years. Excellent service, very friendly, and they will not upsell you on parts — they go out of their way to give you the most affordable quality.",
    name: "Shaun S.",
    place: "Windsor",
  },
  {
    quote:
      "Giving true meaning to the word Outfitters. They consider the use you intend to get out of your machine and cater to exactly what you need, without components you do not need.",
    name: "Longtime client",
    place: "Windsor",
  },
  {
    quote:
      "They were unable to fix one laptop and didn't charge me for it. On another they said it wouldn't be worth repairing. Honest, and not looking to rip anyone off.",
    name: "Repeat customer",
    place: "Essex County",
  },
] as const;

export const stats = [
  { value: "1997", label: "Serving Windsor–Essex" },
  { value: "2 yr", label: "Parts & labour on new systems" },
  { value: "1 day", label: "Typical parts turnaround" },
  { value: "All", label: "Makes, models, Macs & PCs" },
] as const;

export const quoteTypes = [
  "Custom PC / gaming rig",
  "Repair / diagnosis",
  "On-site visit",
  "Data recovery or clone",
  "Parts order",
  "Business / workstation",
  "Something else",
] as const;
