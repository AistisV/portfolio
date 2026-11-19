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
    "IB Diploma student at Vilnius Lyceum, taking Computer Science and Mathematics at Higher Level alongside Physics and Economics. Most of my engineering work is autonomous robotics and computer vision for FIRST Tech Challenge, plus hackathons and data competitions, one of which turned into Cited. Outside of code and hardware, I race triathlons after ten years of competitive swimming.",
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
      title: "Lead Vision & Autonomous Developer",
      logoUrl: "/robotics-logo.jpeg",
      start: "Jun 2024",
      end: "Present",
      description:
        "Write autonomous driving and computer vision code for our FIRST Tech Challenge robot. Built a geometric OpenCV detector as an alternative to the team's neural network: with a fixed camera and a flat field, every pixel projects straight onto the floor, which cut detection on the Android controller from about 2 s to 200 ms with no training data. Winning Alliance Captain and Innovate Award at the Benelux qualifier; reached the European Championship final.",
    },
    {
      company: "CITED",
      href: "https://cited.lt",
      badges: ["Hackathon Winner"],
      location: "Vilnius",
      title: "Co-Founder & Lead Developer",
      logoUrl: "/cited.jpeg",
      start: "May 2026",
      end: "Present",
      description:
        "Cited shows companies what AI search engines tell their customers about them, and where it gets them wrong. Grew out of our 1st-place project at the Make It Real hackathon; piloted with the biotech firm Nando, with 40 B2B sign-ups and a €2,000 accelerator grant so far.",
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
      title: "Geometric Computer Vision Pipeline for FTC",
      href: "",
      dates: "2024 - 2025",
      active: true,
      description:
        "Detects game elements with contour analysis and projective geometry instead of a trained model, then computes their position and orientation on the field. Runs in about 200 ms on the robot's Android controller, roughly 10x faster than the stock neural-network detector.",
      technologies: ["Java", "OpenCV (EasyOpenCV)", "Robotics (FTC)", "Projective Geometry"],
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
        "Audit tool first built in 48 hours at Make It Real. Crawls a company's website, checks its structure, and queries AI search tools to measure how often they cite the brand and whether what they say matches the company's own pages.",
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
        "IB Computer Science IA: a revision app that models the Physics syllabus as a directed acyclic dependency graph instead of a linear review schedule. Topological sorting sequences topics so prerequisites always come first, and topics, prerequisites and progress are stored in a 3NF-normalised SQLite database.",
      technologies: ["Python", "SQLite", "Tkinter", "Graph Algorithms", "3NF Normalisation"],
      links: [
        {type: "Source", href: "https://github.com/AistisV/comp-sci-IA.git", icon: <Icons.github className="size-3" />,}],
      image: "/compsci.jpeg",
      video: "",
    },
    {
      title: "Model Rocket Avionics & Telemetry System",
      href: "",
      dates: "2026",
      active: true,
      description:
        "Designed and built a model rocket around a custom flight computer: five sensors, live telemetry, an on-board flight camera, and a spring-loaded parachute triggered automatically at apogee. Flown three times.",
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
        "Built the first Cited prototype in 48 hours, competing against 150+ developers. Won 1st Place Overall (€3,000) and the Nando Corporate Challenge (€1,000).",
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
      title: "FIRST Tech Challenge — Benelux Qualifier, Bladel",
      dates: "January 2025",
      location: "Bladel, Netherlands",
      description:
        "1st place as Winning Alliance Captain, plus the Innovate Award. Wrote the robot's autonomous and vision code.",
      image: "/robotics-logo.jpeg",
      links: [],
    },
    {
      title: "European Statistics Competition (Eurostat)",
      dates: "June 2025",
      location: "Luxembourg / Remote",
      description:
        "1st place in the European final (~27,000 students from 21 countries). Led a team of three analysing EU demographic and economic data in Python to test whether older generations adopt Gen Z habits; submitted a research paper and video to an international jury.",
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
        "1st place nationally in financial mathematics, out of 1,700+ competitors.",
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
      title: '"Vilnius 2050" City Vision Competition',
      dates: "March 2026",
      location: "Vilnius, Lithuania",
      description:
        "1st Place Overall (€4,000) out of 50+ entries, with teammate Paulius Sargūnas. Organised by EIKA Group with Vilnius City Municipality; our video pitched edtech and smart-city ideas for Vilnius and was produced entirely with generative AI tools.",
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