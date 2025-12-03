import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    gemini
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },

  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  // {
  //     imageUrl: motion,
  //     name: "Motion",
  //     type: "Animation",
  // },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: gemini,
    name: "Gemini AI",
    type: "AI/ML",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "TD",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2022 – Present",
    points: [
      "React & Frontend Development – Proficient in React.js, React Router, and state management tools like Redux to build scalable applications.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Bug fixing and performance optimization to enhance application stability and user experience.",
      "AI/ML Integration – Developed conversational AI chatbot using Google Gemini LLM with RAG (Retrieval-Augmented Generation) for context-aware responses.",
    ],
  },
  
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
  // Your Projects

  {
    iconUrl: '', // Add appropriate icon
    theme: 'btn-back-pink',
    name: 'SwiftTalk – Real-Time Chat & Media Sharing',
    description: 'SwiftTalk is a real-time chat app built with React and Supabase. It supports text, audio/video calls, voice messages, and file sharing.',
    link: 'https://chat-osbe.onrender.com/',
  },
  {
    iconUrl: gemini, // AI/ML project icon
    theme: 'btn-back-yellow',
    name: 'Mad Wanderings – AI-Powered Multilingual Book Chatbot',
    description: 'Built a conversational AI chatbot using React + Express.js with Google Gemini LLM integration. Features RAG (Retrieval-Augmented Generation) for accurate book-based responses, multilingual support (Tamil, English, Hindi, Telugu, Malayalam, German), and smart context-aware AI conversations.',
    link: 'https://madwanderings.vercel.app/',
  },
  {
    iconUrl: '', // Add appropriate icon
    theme: 'btn-back-green',
    name: '3D Portfolio Website',
    description: 'A personal 3D portfolio website showcasing projects, skills, and experiences.',
    link: 'https://3-d-david-portfolio-ysab.vercel.app/',
  },
  {
    iconUrl: '', // Add appropriate icon
    theme: 'btn-back-pink',
    name: '2D Portfolio Website',
    description: 'A personal 2D portfolio website showcasing projects, skills, and experiences.',
    link: 'https://david-portfolio-two.vercel.app/',
  },
  {
    iconUrl: '', // Add appropriate icon
    theme: 'btn-back-yellow',
    name: 'Feedback System',
    description: 'A MERN-based feedback system built with TypeScript, Jest, and a custom NPM package for unique ID generation.',
    link: 'https://my-feedback-app-nu.vercel.app/',
  },
  {
    iconUrl: '', // Add appropriate icon
    theme: 'btn-back-green',
    name: 'Mini eCommerce Platform',
    description: 'A full-stack MERN-based eCommerce platform with product management and shopping features.',
    link: 'https://mini-ecommerce-project-6mai.vercel.app/',
  },
  {
    iconUrl: '', // Add appropriate icon
    theme: 'btn-back-blue',
    name: 'Quiz App',
    description: 'A React-based quiz app with HTML5 and Sass, featuring dynamic questions and scoring.',
    link: 'https://davidsusairaj.github.io/quiz-react-app/',
  },
  {
    iconUrl: '', // Add appropriate icon
    theme: 'btn-back-red',
    name: 'Todo App',
    description: 'A simple task management app built with React and Sass.',
    link: 'https://davidsusairaj.github.io/todo-react-app/',
  },
  {
    iconUrl: '', // Add appropriate icon
    theme: 'btn-back-pink',
    name: 'RoadmapMaster – Planning Tool',
    description: 'A web-based roadmap planning tool designed with HTML5, Sass, and React.',
    link: 'https://davidsusairaj.github.io/web-design-react/',
  },
  {
    iconUrl: '', // Add appropriate icon
    theme: 'btn-back-green',
    name: 'Journey Learning Project',
    description: 'A project documenting the learning journey using HTML5, Sass, and JavaScript.',
    link: 'https://davidsusairaj.github.io/Web-first-Design/',
  },
  {
    iconUrl: '', // Add appropriate icon
    theme: 'btn-back-orange',
    name: 'Stopwatch App',
    description: 'A stopwatch app built using HTML5, Sass, and ReactJS.',
    link: 'https://davidsusairaj.github.io/stopwatch-react-app/',
  },
  {
    iconUrl: '', // Add appropriate icon
    theme: 'btn-back-blue',
    name: 'Counter App',
    description: 'A counter app using React, Redux, and Sass.',
    link: 'https://davidsusairaj.github.io/redux-counter-app/',
  },
];
