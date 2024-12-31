import {
  SiFreelancer,
  SiGithub,
  SiGit,
  SiVite,
  SiWebpack,
  SiStripe,
  SiDocker,
  SiAmazon,
  SiFigma,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJest,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiFramer,
  SiGooglecloud,
  SiCloudinary
} from "react-icons/si";
import {
  TbApi,
  TbBrandThreejs,
  TbBrandVscode,
  TbBrandFirebase,
} from "react-icons/tb";
import { MdDomainVerification } from "react-icons/md";

export const navLinks = [
  {
    id: "home",
    name: "Home",
    href: "#home",
  },
  {
    id: "about",
    name: "About",
    href: "#about",
  },
  {
    id: "work",
    name: "Work",
    href: "#work",
  },
  {
    id: "skills",
    name: "Skills",
    href: "#skills",
  },
  {
    id: "contact",
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
{
  title: "TaskFlow - Smart Task Management",
  desc: "TaskFlow is a modern task management platform built with Next.js 15 and React, featuring real-time updates and smart authentication. The platform offers priority levels, categories, and a minimalistic UI for efficient task organization.",
  subdesc: "Streamline your workflow with real-time task management and smart categorization.",
  href: "https://github.com/CodingCookiee/TaskFlow-Pro",
  texture: "/textures/projects/taskflowpro.mp4", 
  logo: "/assets/projects/task.png", 
  logoStyle: {
    backgroundColor: "#1E293B",
    border: "0.2px solid #334155",
    boxShadow: "0px 0px 60px 0px #3B82F64D",
  },
  spotlight: "/assets/spotlight5.png", 
tags: [
  {
    id: 1,
    name: "Next.js",
    path: "/assets/next.svg"
  },
  {
    id: 2,
    name: "React.js",
    path: "/assets/react.svg",
  },
  {
    id: 3,
    name: "TailwindCSS",
    path: "/assets/tailwindcss.png",
  },
  {
    id: 4,
    name: "PostgreSQL",
    path: '/assets/postgre.svg'
  },
  {
    id: 5,
    name: "Prisma",
    path: '/assets/prisma.svg'
  },
  {
    id: 6,
    name: "NextAuth",
    path: '/assets/next.svg'
  },
  {
    id: 7,
    name: "Google Cloud",
    path: '/assets/googlecloud.svg'
  },
  {
    id: 8,
    name: "Cloudinary",
    path: '/assets/cloudinary.svg'
  }
]


},
  {
    title: "PANDA AI - AI Chatbot",
    desc: "PANDA AI is an intelligent chatbot platform built with the MERN stack and styled with TailwindCSS. Designed for fast, responsive, and engaging conversations, PANDA AI delivers smooth interactions, powerful AI responses, and a sleek, modern interface. ",
    subdesc:
      "A smart, responsive chatbot built with the MERN stack and TailwindCSS for seamless AI conversations.",
    href: "https://github.com/CodingCookiee/PANDA-AI",
    texture: "/textures/projects/pandaai.mp4",
    logo: "/assets/projects/panda.svg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Nodejs",
        path: "/assets/tech/nodejs.png",
      },
      {
        id: 4,
        name: "Express",
        path: "/assets/tech/express.png",
      },

      {
        id: 5,
        name: "MongoDB",
        path: "/assets/tech/mongo.png",
      },
    ],
  },
  {
    title: "PandaPlay - Movies Management Platform",
    desc: "PandaPlay is a modern movies management platform built with the MERN stack and styled with TailwindCSS. Effortlessly organize, explore, and stream your favorite films with a sleek, responsive interface designed for seamless user experience.",
    subdesc:
      "Effortlessly manage, explore, and stream your favorite movies—all in one sleek, intuitive platform!",
    href: "https://github.com/CodingCookiee/moviesapp",
    texture: "/textures/projects/pandaplay.mp4",
    logo: "/assets/projects/Movie.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Nodejs",
        path: "/assets/tech/nodejs.png",
      },
      {
        id: 4,
        name: "Express",
        path: "/assets/tech/express.png",
      },

      {
        id: 5,
        name: "MongoDB",
        path: "/assets/tech/mongo.png",
      },
    ],
  },
  {
    title: "FiverrServices - Fiverr Clone",
    desc: "FiverrServices is a dynamic freelance marketplace platform inspired by Fiverr, designed for seamless gig posting, and browsing. The platform is built for scalability and user-friendly interactions.",
    subdesc:
      " A feature-rich Fiverr clone for connecting freelancers and clients with ease.",
    href: "https://github.com/CodingCookiee/FiverrClone",
    texture: "/textures/projects/fiverr.mp4",
    logo: "/assets/projects/fiverr.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Nodejs",
        path: "/assets/tech/nodejs.png",
      },
      {
        id: 4,
        name: "Express",
        path: "/assets/tech/express.png",
      },

      {
        id: 5,
        name: "MongoDB",
        path: "/assets/tech/mongo.png",
      },
    ],
  },
  {
    title: "ZentryCentral - Explore Gaming World",
    desc: "ZentryCentral offers an immersive gateway to the gaming world, featuring dynamic scroll-based animations, stunning clip-path transitions, interactive 3D hover effects, and seamless video transitions. With smooth UI/UX and full responsiveness, enjoy an engaging and intuitive experience across all devices",
    subdesc:
      "Dive into the gaming world with dynamic animations, 3D effects, and a seamless, responsive experience.",
    href: "https://github.com/CodingCookiee/ZentryCentral",
    texture: "/textures/projects/Zentry.mp4",
    logo: "/assets/projects/favicon.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "GSAP",
        path: "/assets/tech/gsap.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Freelancing",
    pos: "FullStack Web Developer",
    duration: "2023 - Present",
    title:
      "Freelancing serves as my gateway to real-world web development. I craft full-stack solutions, bringing ideas to life and delivering seamless user experiences for clients.",
    icon: "/assets/freelancer.svg",
    animation: "victory",
  },
];

export const skills = [
  {
    title: "Languages",
    icon: "/assets/tech/programming.png",
    iconBg: "#383E56",
    points: {
      images: [SiHtml5, SiCss3, SiJavascript],
      names: ["HTML5", "CSS3", "JavaScript"],
    },
  },
  {
    title: "FrontEnd Libraries/Frameworks",
    icon: "/assets/tech/frontend.png",
    iconBg: "#f1f1f1",
    points: {
      images: [SiReact, SiTailwindcss, TbBrandThreejs],
      names: ["React js", "Tailwind CSS", "Three Js"],
    },
  },
  {
    title: "BackEnd Libraries/Frameworks & Databases",
    icon: "/assets/tech/backend.png",
    iconBg: "#383E56",
    points: {
      images: [SiNodedotjs, SiExpress, SiMongodb, SiMysql, TbBrandFirebase],
      names: ["Node Js", "Express Js", "MongoDB", "Sql", "Firebase"],
    },
  },
  {
    title: "Dev Tools",
    icon: "/assets/tech/dev_tools.png",
    iconBg: "#f1f1f1",
    points: {
      images: [
        TbBrandVscode,
        SiGithub,
        SiGit,
        SiVite,
        SiWebpack,
        TbApi,
        SiJest,
        SiStripe,
        SiDocker,
        SiAmazon,
        SiFigma,
        SiPostman,
        MdDomainVerification,
      ],
      names: [
        "Vs Code",
        "Github",
        "Git",
        "Vite",
        "Webpack",
        "RESTful",
        "Jest",
        "Stripe",
        "Docker",
        "Aws",
        "Figma",
        "Postman",
        "Domain Integration",
      ],
    },
  },
];
