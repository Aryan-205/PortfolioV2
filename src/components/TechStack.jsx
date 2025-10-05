// import { motion} from 'motion/react'
// import { FaReact } from "react-icons/fa";

// export default function TechStack() {

//   return (
//     <div className="h-screen w-full relative bg-white px-24 pb-12 pt-4 gap-4 flex flex-col border border-black">
//       <p className='w-full text-8xl font-bold tracking-tight'>Skills I Got</p>
//       <div className='h-full w-full'>
//         <section id="tech-stack" className="w-full h-full bg-black text-white p-6 sm:p-12 md:p-4 flex flex-col items-center rounded-3xl ">
//             {/* Categories Grid */}
//             <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
//                 {techStack.map((category) => (
//                     <TechStackCard
//                         key={category.title}
//                         title={category.title}
//                         Icon={category.icon}
//                         technologies={category.technologies}
//                         cols={category.cols}
//                     />
//                 ))}
//             </div>
//         </section>
//       </div>
//     </div>
//   );
// }


// import React from 'react';

// // --- Inline SVG Icons (for portability and simplicity) ---

// // Layers Icon (Frontend)
// const LayersIcon = ({ className }) => (
//     <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="m12.83 2.189 6.862 3.43a2 2 0 0 1 1.058 1.776v9.06a2 2 0 0 1-1.058 1.775l-6.86 3.43a2 2 0 0 1-1.804 0l-6.86-3.43A2 2 0 0 1 3 16.456v-9.06a2 2 0 0 1 1.058-1.775l6.86-3.43a2 2 0 0 1 1.804 0Z" />
//         <path d="m3 7.5 7.7 3.85a2 2 0 0 0 2.6 0L21 7.5" />
//         <path d="m3 12 7.85 3.93a2 2 0 0 0 2.3 0L21 12" />
//     </svg>
// );

// // Server Icon (Backend)
// const ServerIcon = ({ className }) => (
//     <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
//         <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
//         <line x1="6" x2="6" y1="6" y2="6" />
//         <line x1="6" x2="6" y1="18" y2="18" />
//     </svg>
// );

// // Database Icon (Databases)
// const DatabaseIcon = ({ className }) => (
//     <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <ellipse cx="12" cy="5" rx="9" ry="3" />
//         <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
//         <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" />
//     </svg>
// );

// // Wrench Icon (Tools & DevOps)
// const WrenchIcon = ({ className }) => (
//     <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94-7.94l-3.76 3.76a1 1 0 0 0 0 1.4z" />
//         <path d="M20.3 7.7l-3.76-3.76a4 4 0 0 0-5.66 5.66l6.45 6.45M18.8 13.8l-1.6 1.6" />
//         <path d="M2.1 21.4l6.3-6.3a1 1 0 0 0 0-1.4L4.8 11.2a1 1 0 0 0-1.4 0l-3.7 3.7a6 6 0 0 0 7.9 7.9l3.7-3.7a1 1 0 0 0 0-1.4" />
//     </svg>
// );

// // Data structure for the tech stack categories
// const techStack = [
//     {
//         title: "Frontend",
//         icon: LayersIcon,
//         cols: 2,
//         technologies: ["React", "Next.js", "Motion", "Tailwind CSS", "Zustand","Redux", "HTML5 & CSS3", "Vite","ThreeJS","GSAP"],
//         icon: [<FaReact />]
//     },
//     {
//         title: "Backend",
//         icon: ServerIcon,
//         cols: 2,
//         technologies: ["Node.js ","Express", "Python", "Zod", "JavaScript", "TypeScript","Auth0" , "JWT", "WebSocket" , "C++"],
//         icon: [<FaReact />]
//     },
//     {
//         title: "Databases",
//         icon: DatabaseIcon,
//         cols: 4,
//         technologies: ["PostgreSQL", "MongoDB", "Prisma", "Appwrite"],
//         icon: [<FaReact />]
//     },
//     {
//         title: "Tools",
//         icon: WrenchIcon,
//         cols: 4,
//         technologies: ["Git / GitHub", "Framer", "Figma", "Canva"],
//         icon: [<FaReact />]
//     },
// ];

// // TechStackCard Component
// const TechStackCard = ({ title, Icon, technologies, cols, span }) => (
//     <div className={`group p-8 border border-white rounded-2xl bg-white text-black transition duration-500 ease-in-out hover:bg-white hover:text-black shadow-2xl`}>
//         <div className="flex items-center space-x-4 mb-6">
//             <Icon className="w-8 h-8 group-hover:stroke-black stroke-white transition duration-500" />
//             <h2 className="text-3xl font-black uppercase tracking-wider">{title}</h2>
//         </div>
//         <div className={`grid grid-cols-2 sm:grid-cols-${cols} gap-4`}>
//             {technologies.map((tech, index) => (
//                 <div key={index} className="flex items-center space-x-3 text-lg font-semibold">
//                     <span className="text-xl group-hover:text-black text-white transition duration-500">•</span>
//                     <span>{tech}</span>
//                     {icon}
//                 </div>
//             ))}
//         </div>
//     </div>
// );


import { motion } from 'motion/react'
import React from 'react';

// Import all necessary icons from react-icons/si and react-icons/fa
import { 
    SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss, 
    SiPostgresql, SiPrisma, SiExpress, SiVite, SiTypescript, 
    SiHtml5, SiPython, SiRedux, SiAuth0, SiGithub, SiFigma, SiCanva,
    SiFramer, SiJavascript, SiCplusplus,
    SiZod
} from 'react-icons/si';
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaReact, FaLock, FaLink, FaDatabase, FaToolbox, FaGlobe, FaLaptopCode, FaServer } from 'react-icons/fa'; 
import { IoLogoTux } from "react-icons/io"; // Using a different icon for "Zod"

// --- Inline SVG Icons for Category Headers (Kept for compatibility) ---
// Layers Icon (Frontend)
const LayersIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12.83 2.189 6.862 3.43a2 2 0 0 1 1.058 1.776v9.06a2 2 0 0 1-1.058 1.775l-6.86 3.43a2 2 0 0 1-1.804 0l-6.86-3.43A2 2 0 0 1 3 16.456v-9.06a2 2 0 0 1 1.058-1.775l6.86-3.43a2 2 0 0 1 1.804 0Z" />
        <path d="m3 7.5 7.7 3.85a2 2 0 0 0 2.6 0L21 7.5" />
        <path d="m3 12 7.85 3.93a2 2 0 0 0 2.3 0L21 12" />
    </svg>
);
// Server Icon (Backend)
const ServerIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6" y1="6" y2="6" />
        <line x1="6" x2="6" y1="18" y2="18" />
    </svg>
);
// Database Icon (Databases)
const DatabaseIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" />
    </svg>
);
// Wrench Icon (Tools & DevOps)
const WrenchIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94-7.94l-3.76 3.76a1 1 0 0 0 0 1.4z" />
        <path d="M20.3 7.7l-3.76-3.76a4 4 0 0 0-5.66 5.66l6.45 6.45M18.8 13.8l-1.6 1.6" />
        <path d="M2.1 21.4l6.3-6.3a1 1 0 0 0 0-1.4L4.8 11.2a1 1 0 0 0-1.4 0l-3.7 3.7a6 6 0 0 0 7.9 7.9l3.7-3.7a1 1 0 0 0 0-1.4" />
    </svg>
);


// Data structure for the tech stack categories - NOW WITH ICONS
const techStack = [
    {
        title: "Frontend",
        icon: LayersIcon, // Category Icon (Uses the SVG component)
        cols: 2,
        technologies: [
            { name: "React", Icon: FaReact },
            { name: "Next.js", Icon: SiNextdotjs },
            { name: "Motion", Icon: TbBrandFramerMotion },
            { name: "Tailwind CSS", Icon: SiTailwindcss },
            { name: "Zustand", Icon: FaGlobe },
            { name: "Redux", Icon: SiRedux },
            { name: "HTML5 & CSS3", Icon: SiHtml5 },
            { name: "Vite", Icon: SiVite },
            { name: "ThreeJS", Icon:SiVite},
            { name: "GSAP",  Icon:SiVite},
        ],
    },
    {
        title: "Backend",
        icon: ServerIcon, // Category Icon
        cols: 2,
        technologies: [
            { name: "Node.js", Icon: SiNodedotjs },
            { name: "Express", Icon: SiExpress },
            { name: "Python", Icon: SiPython },
            { name: "Zod", Icon: SiZod }, // Using a clean icon for Zod
            { name: "JavaScript", Icon: SiJavascript },
            { name: "TypeScript", Icon: SiTypescript },
            { name: "Auth0", Icon: SiAuth0 },
            { name: "JWT", Icon: FaLock },
            { name: "WebSocket", Icon: FaLink },
            { name: "C++", Icon: SiCplusplus },
        ],
    },
    {
        title: "Databases",
        icon: DatabaseIcon, // Category Icon
        cols: 4,
        technologies: [
            { name: "PostgreSQL", Icon: SiPostgresql },
            { name: "MongoDB", Icon: SiMongodb },
            { name: "Prisma", Icon: SiPrisma },
            { name: "Appwrite", Icon: FaDatabase },
        ],
    },
    {
        title: "Tools",
        icon: WrenchIcon, // Category Icon
        cols: 4,
        technologies: [
            { name: "Git / GitHub", Icon: SiGithub },
            { name: "Framer", Icon: SiFramer },
            { name: "Figma", Icon: SiFigma },
            { name: "Canva", Icon: SiCanva },
        ],
    },
];

// TechStackCard Component
const TechStackCard = ({ title, Icon, technologies, cols }) => (
    <div className={`group p-8 border border-white rounded-2xl bg-white text-black transition duration-500 ease-in-out hover:bg-white hover:text-black shadow-2xl`}>
        <div className="flex items-center space-x-4 mb-6">
            {/* Renders the Category Icon (LayersIcon, ServerIcon, etc.) */}
            <Icon className="w-8 h-8 stroke-black transition duration-500" />
            <h2 className="text-3xl font-black uppercase tracking-wider">{title}</h2>
        </div>
        <div className={`grid grid-cols-2 sm:grid-cols-${cols} gap-4`}>
            {technologies.map((tech) => (
                <div key={tech.name} className="flex items-center space-x-3 text-lg font-semibold">
                    {/* Renders the Tech Icon (FaReact, SiNextdotjs, etc.) */}
                    <tech.Icon className="w-5 h-5 text-black transition duration-500" />
                    <span>{tech.name}</span>
                </div>
            ))}
        </div>
    </div>
);


export default function TechStack() {
  return (
    <div className="h-screen w-full relative bg-white px-24 pb-12 pt-4 gap-4 flex flex-col border border-black">
      <p className='w-full text-8xl font-bold tracking-tight'>Skills I Got</p>
      <div className='h-full w-full'>
        <section id="tech-stack" className="w-full h-full bg-black text-white p-6 sm:p-12 md:p-4 flex flex-col items-center rounded-3xl ">
            {/* Categories Grid */}
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
                {techStack.map((category) => (
                    <TechStackCard
                        key={category.title}
                        title={category.title}
                        Icon={category.icon}
                        technologies={category.technologies}
                        cols={category.cols}
                    />
                ))}
            </div>
        </section>
      </div>
    </div>
  );
}