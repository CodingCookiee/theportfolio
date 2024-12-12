export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
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
    subdesc:"Effortlessly manage, explore, and stream your favorite movies—all in one sleek, intuitive platform!",
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
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};


export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];


