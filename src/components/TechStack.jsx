import { motion } from 'motion/react'
import React from 'react';

// ... (Icon imports remain the same)
import { 
    SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss, 
    SiPostgresql, SiPrisma, SiExpress, SiVite, SiTypescript, 
    SiHtml5, SiPython, SiRedux, SiAuth0, SiGithub, SiFigma, SiCanva,
    SiFramer, SiJavascript, SiCplusplus,
    SiZod
} from 'react-icons/si';
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaReact, FaLock, FaLink, FaDatabase, FaToolbox, FaGlobe, FaLaptopCode, FaServer } from 'react-icons/fa'; 
import { IoLogoTux } from "react-icons/io"; 

// --- Inline SVG Icons for Category Headers (Kept for compatibility) ---
const LayersIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12.83 2.189 6.862 3.43a2 2 0 0 1 1.058 1.776v9.06a2 2 0 0 1-1.058 1.775l-6.86 3.43a2 2 0 0 1-1.804 0l-6.86-3.43A2 2 0 0 1 3 16.456v-9.06a2 2 0 0 1 1.058-1.775l6.86-3.43a2 2 0 0 1 1.804 0Z" />
        <path d="m3 7.5 7.7 3.85a2 2 0 0 0 2.6 0L21 7.5" />
        <path d="m3 12 7.85 3.93a2 2 0 0 0 2.3 0L21 12" />
    </svg>
);
const ServerIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6" y1="6" y2="6" />
        <line x1="6" x2="6" y1="18" y2="18" />
    </svg>
);
const DatabaseIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" />
    </svg>
);
const WrenchIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94-7.94l-3.76 3.76a1 1 0 0 0 0 1.4z" />
        <path d="M20.3 7.7l-3.76-3.76a4 4 0 0 0-5.66 5.66l6.45 6.45M18.8 13.8l-1.6 1.6" />
        <path d="M2.1 21.4l6.3-6.3a1 1 0 0 0 0-1.4L4.8 11.2a1 1 0 0 0-1.4 0l-3.7 3.7a6 6 0 0 0 7.9 7.9l3.7-3.7a1 1 0 0 0 0-1.4" />
    </svg>
);

const techStack = [
    {
        title: "Frontend",
        icon: LayersIcon, 
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
        icon: ServerIcon, 
        cols: 2,
        technologies: [
            { name: "Node.js", Icon: SiNodedotjs },
            { name: "Express", Icon: SiExpress },
            { name: "Python", Icon: SiPython },
            { name: "Zod", Icon: SiZod },
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
        icon: DatabaseIcon, 
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
        icon: WrenchIcon, 
        cols: 4,
        technologies: [
            { name: "Git / GitHub", Icon: SiGithub },
            { name: "Framer", Icon: SiFramer },
            { name: "Figma", Icon: SiFigma },
            { name: "Canva", Icon: SiCanva },
        ],
    },
];

// TechStackCard Component - Adjusted padding and text sizes
const TechStackCard = ({ title, Icon, technologies, cols }) => (
    <div className={`group p-4 sm:p-8 border border-white rounded-2xl bg-white text-black transition duration-500 ease-in-out hover:bg-white hover:text-black shadow-2xl`}>
        <div className="flex items-center space-x-4 mb-4 sm:mb-6">
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 stroke-black transition duration-500" />
            {/* Reduced text size for mobile */}
            <h2 className="text-xl sm:text-3xl font-black uppercase tracking-wider">{title}</h2>
        </div>
        {/* Adjusted grid for inner list to use cols prop for a more balanced layout */}
        <div className={`grid grid-cols-2 lg:grid-cols-${cols} gap-3`}>
            {technologies.map((tech) => (
                <div key={tech.name} className="flex items-center space-x-3 text-sm sm:text-lg font-semibold">
                    <tech.Icon className="w-4 h-4 sm:w-5 sm:h-5 text-black transition duration-500" />
                    <span>{tech.name}</span>
                </div>
            ))}
        </div>
    </div>
);


export default function TechStack() {
  // Reduced padding and heading size
  return (
    <div className="h-full md:h-screen w-full relative bg-white px-6 md:px-24 pb-6 md:pb-12 pt-4 gap-4 flex flex-col border border-black">
      <p className='w-full text-5xl md:text-8xl font-bold tracking-tight'>Skills I Got</p>
      <div className='h-full w-full'>
        <section id="tech-stack" className="w-full h-full bg-black text-white p-4 sm:p-8 flex flex-col items-center rounded-3xl ">
            {/* Switched to a single column on mobile, two columns on medium screens and up */}
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
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