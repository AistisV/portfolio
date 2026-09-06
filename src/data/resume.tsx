import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Aistis Verkauskas",
  initials: "AV",
  url: "https://aistis.dev",
  location: "Vilnius, Lithuania",
  locationLink: "https://www.google.com/maps/place/Vilnius",
  description:
    "IB student at Vilnius Lyceum. Building robotics software, computer vision systems, and applied prototypes.",
  summary:
    "High school student studying Computer Science, Physics, and Mathematics at Vilnius Lyceum. Most of my engineering focus is on autonomous robotics (FTC), computer vision in OpenCV, and competing in hackathons and data competitions. Outside of writing code and building hardware, I train for triathlons.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "OpenCV", icon: Python },
    { name: "Java", icon: Java },
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "PostgreSQL", icon: Postgresql },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  sections: {
    projects: {
      tag: "Projects",
      title: "Featured Builds",
      description:
        "Selected technical systems, computer vision algorithms, and prototypes built under tight deadlines.",
    },
    hackathons: {
      tag: "Recognition",
      title: "Competitions & Awards",
      description:
        "Competitive track record across robotics championships, international hackathons, data competitions, and national olympiads.",
    },
    contact: {
      tag: "Contact",
      title: "Get in Touch",
      description:
        "Want to collaborate at a hackathon, discuss systems engineering, or chat?",
    },
  },
  contact: {
    email: "aistis.verkauskas@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AistisV",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aistis-verkauskas-230b56311/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hello@aistis.dev",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Vilnius Lyceum Robotics",
      href: "https://licejus.lt",
      badges: ["FTC Team #24474"],
      location: "Vilnius",
      title: "Software & Vision Lead",
      logoUrl: "/robotics-logo.jpeg",
      start: "Jun 2024",
      end: "Present",
      description:
        "Engineered autonomous robotics software for FIRST Tech Challenge. Built a Python/OpenCV pipeline using 3D perspective geometry to localize game elements and calculate ground coordinates (X, Y) in under 30ms. Served as Winning Alliance Captain and secured the Innovate Award at the Netherlands Qualifier in Bladel.",
    },
    {
      company: "CITED",
      href: "https://aistis.dev",
      badges: ["Hackathon Winner"],
      location: "Vilnius",
      title: "Co-Founder & Developer",
      logoUrl: "/cited.jpeg",
      start: "May 2026",
      end: "Present",
      description:
        "Engineered an automated pipeline to evaluate web page indexing heuristics and citation rates across generative AI search engines. Spun out of the Make It Real hackathon where we won 1st Place overall.",
    },
  ],

  education: [
    {
      school: "Vilnius Lyceum",
      href: "https://licejus.lt",
      degree: "International Baccalaureate Diploma Programme (IBDP)",
      logoUrl: "/ib.png",
      start: "2023",
      end: "2027",
    },
  ],

  projects: [
    {
      title: "3D Real-Time Computer Vision Pipeline",
      href: "",
      dates: "2024 - 2025",
      active: true,
      description:
        "Real-time vision pipeline running on FTC robots. Calculates real-world coordinates and rotational orientation of game elements from perspective camera streams in under 30ms using contour analysis and 3D projective geometry.",
      technologies: ["Python", "OpenCV", "Robotics (FTC)", "Linear Algebra"],
      links: [{type: "", href: "https://github.com/AistisV/FTC-ITD-vision", icon: <Icons.github className="size-3" />,}],
      image: "cv-pipeline.jpeg",
      video: "",
    },
    {
      title: "CITED — AI Search Optimization Engine",
      href: "",
      dates: "May 2026",
      active: true,
      description:
        "Automated website ingestion audit tool built in 48 hours. Scrapes web architectures, validates semantic structure, and runs automated queries against LLM search tools to measure brand visibility and citation retention.",
      technologies: ["Python", "LLM APIs", "Web Scraping", "React"],
      links: [
        {type: "", href: "https://github.com/AistisV/hack-repo", icon: <Icons.github className="size-3" />,}
      ],
      image: "",
      video: "/aitooldemo.mp4",
    },
    {
      title: "DAG Revision Engine",
      href: "",
      dates: "2026",
      active: true,
      description:
        "Replaced linear review schedules with an algorithmic dependency graph. Uses topological sorting to sequence syllabus prerequisites and stores relations in a 3NF normalized SQL database to eliminate redundant cyclic dependencies.",
      technologies: ["Python", "SQL (PostgreSQL)", "Graph Algorithms", "3NF Normalization"],
      links: [
        {type: "Source", href: "https://github.com/AistisV/comp-sci-IA.git", icon: <Icons.github className="size-3" />,}],
      image: "/compsci.jpeg",
      video: "",
    },
    {
      title: "Model Rocket Avionics & Telemetry System",
      href: "https://github.com/AistisV",
      dates: "2026",
      active: true,
      description:
        "Designed and fabricated an instrumented model rocket powered by a DIY solid motor. Integrated on-board telemetry logging (barometric pressure, altitude calculation, flight camera) and an automated spring-loaded parachute deployment mechanism.",
      technologies: ["Embedded Systems", "Sensors", "Hardware Prototyping", "Telemetry"],
      links: [
        // {
        //   type: "Source",
        //   href: "https://github.com/AistisV",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/rocket.jpg",
      video: "",
    },
  ],

  hackathons: [
    {
      title: 'Jaunaragiai "Make It Real" International Hackathon',
      dates: "May 2026",
      location: "Vilnius, Lithuania",
      description:
        "Built and shipped the CITED prototype in 48 hours. Won 1st Place Overall (€3,000) and the Nando Corporate Challenge (€1,000).",
      image: "/jaunaragiai.jpeg",
      links: [
        {
          title: "Announcement",
          icon: <Icons.globe className="size-3" />,
          href: "https://www.linkedin.com/posts/jaunaragiai_we-made-it-real-its-been-a-week-since-activity-7464664668528066563-NmIH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE9e0sQBk5i6Vq3vjM4BQ0N-vh-DYsydj6M",
        },
      ],
    },
    {
      title: "FIRST Tech Challenge — NL Qualifier Bladel",
      dates: "January 2025",
      location: "Bladel, Netherlands",
      description:
        "Winning Alliance Captain & Innovate Award. Led robotics tournament strategy, autonomous vision targeting, and mechanical integration across eliminations.",
      image: "/robotics-logo.jpeg",
      links: [],
    },
    {
      title: "European Statistics Competition (Eurostat)",
      dates: "June 2025",
      location: "Luxembourg / Remote",
      description:
        "1st Place Winner. Multi-stage European data analysis competition: analyzed EU datasets, authored a quantitative research paper, and produced explanatory video media for an international jury.",
      image: "/eurostat.png",
      links: [
        {
          title: "Announcement",
          icon: <Icons.globe className="size-3" />,
          href: "https://www.statscompetition.eu/esc2025/index.html",
        },
      ],
    },
    {
      title: 'Telia "National IT Challenge"',
      dates: "May 2024",
      location: "Lithuania",
      description:
        "1st Prize Winner. Competed across technical software problems and engineered a functional 3D game engine project against 11,000+ participants nationwide.",
      image: "/telia.png",
      links: [
        {
          title: "Announcement",
          icon: <Icons.globe className="size-3" />,
          href: "https://www.elta.lt/lt/pranesimai-spaudai/apdovanoti-antrojo-nacionalinio-it-issukio-nugaletojai-programavimo-zinias-gilino-ir-it-karjera-domejosi-daugiau-nei-11-tukst-moksleiviu-247172",
        },
      ],
    },
    {
      title: 'Vilnius Tech "National Finance Olympiad"',
      dates: "March 2026",
      location: "Vilnius, Lithuania",
      description:
        "1st Place Nationwide. Evaluated on quantitative economic modeling, macro-financial analysis, and market systems design.",
      image: "/vilniustech.jpg",
      links: [
        {
          title: "Announcement",
          icon: <Icons.globe className="size-3" />,
          href: "https://zfi.lt/naujienos/finansu-olimpiados-laimetojai-vilniaus-licejaus-mokiniai/240",
        },
      ],
    },
    {
      title: '"Vilniaus vizija 2050" AI Systems Competition',
      dates: "March 2026",
      location: "Vilnius, Lithuania",
      description:
        "1st Place Overall (€4,000). Designed an autonomous transit and infrastructure framework; produced presentation video entirely with generative AI tools.",
      image: "/vilnius_logo.jpeg",
      links: [
                {
          title: "Announcement",
          icon: <Icons.globe className="size-3" />,
          href: "https://eikagroup.lt/moksleiviai-kuria-vilniaus-ateiti-paaiskejo-geriausios-sostines-vizijos/",
        },
      ],
    },
  ],
} as const;