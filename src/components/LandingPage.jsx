// import { motion } from 'framer-motion';
// import AnimatedButton from './AnimatedButton';
// import { useEffect, useRef, useState } from 'react';

// export default function LandingPage() {

//     const [isPlaying, setIsPlaying] = useState(true);
//     // 2. Ref to access the HTML audio element
//     const audioRef = useRef(null); 

//     // 3. Effect to set up and start the audio on component mount
//     useEffect(() => {
//         const audio = audioRef.current;
//         if (audio) {
//             // Set up audio properties (e.g., loop)
//             audio.loop = true;
//             audio.volume = 0.5; // Optional: lower the volume

//             // Attempt to play, but it will likely be blocked initially.
//             // We need a user interaction to actually start it.
//             const playPromise = audio.play();

//             if (playPromise !== undefined) {
//                 playPromise.then(() => {
//                     // Playback started successfully
//                     setIsPlaying(true);
//                 }).catch(() => {
//                     // Autoplay was prevented. Set state to paused.
//                     setIsPlaying(false);
//                 });
//             }
//         }
//     }, []);

//     // 4. Toggle function for the button click
//     const togglePlayPause = () => {
//         const audio = audioRef.current;
//         if (audio) {
//             if (isPlaying) {
//                 audio.pause();
//                 setIsPlaying(false);
//             } else {
//                 // Play starts from where it was paused
//                 audio.play().then(() => {
//                     setIsPlaying(true);
//                 }).catch((error) => {
//                     console.error("Audio playback failed:", error);
//                     // Handle cases where play might still fail
//                 });
//             }
//         }
//     };

//   return (
//     <div className="h-screen w-full rounded-t-2xl bg-white relative">
//         <audio ref={audioRef} src="/KennyGSaxSongBird.mp3" autoPlay preload="auto" />
//         <motion.nav initial={{ y: -200 }} animate={{ y: 0 }} transition={{ duration: 0.8 }} className="w-full flex justify-between items-center px-12 md:px-24 py-3 md:py-6 text-md md:text-2xl z-10 absolute top-0 ">
//             <p className="font-semibold">Aryan Bola</p>
//             <div className="flex justify-between items-center md:gap-4 font-light">
//                 <p className='hover:border border-black px-4 py-1 rounded-3xl'>About</p>
//                 <p className='hover:border border-black px-4 py-1 rounded-3xl'>Tech Stack</p>
//                 <p className='hover:border border-black px-4 py-1 rounded-3xl'>Projects</p>
//                 <button>
//                     <AnimatedButton text={"Let's Talk"} className={"h-[44px] rounded-3xl"}/>
//                 </button>
//             </div>
//         </motion.nav>
//         {/* img */}
//         <div className='w-full h-full inset-0 absolute flex justify-center items-center'>
//           <motion.img initial={{scale:5, zIndex:100}} animate={{scale:1, zIndex:0}} transition={{duration:0.8}} src="/bg3.jpeg" className='w-[20rem] md:w-[40rem] md:h-[35rem]'  alt="" />
//         </div>
//         {/* Central Name */}
//         <div className="flex flex-col justify-center items-center w-full h-full px-8 md:px-24 z-10">
//             {/* Text Blocks with added class names for GSAP targeting */}
//             <div className='overflow-hidden h-48'>
//                 <motion.p initial={{y:0}} animate={{y:-180}} transition={{duration:0.8,delay:0.8}} className="text-white text-4xl md:text-[12rem] font-bold line opacity-0">
//                     Aryan Bola
//                 </motion.p>
//                 <motion.p initial={{y:0}} animate={{y:-180}} transition={{duration:0.8,delay:0.8}} className="text-black text-4xl md:text-[12rem] font-bold line ">
//                     Aryan Bola
//                 </motion.p>
//             </div>

//             <div className='overflow-hidden h-48'>
//                 <motion.p initial={{y:0}} animate={{y:-180}} transition={{duration:0.8,delay:0.8}} className="text-white text-4xl md:text-[12rem] font-bold line opacity-0">
//                     Aryan Bola
//                 </motion.p>
//                 <motion.p initial={{y:0}} animate={{y:-180}} transition={{duration:0.8,delay:0.8}} className="text-stroke-3 text-white text-4xl md:text-[12rem] font-bold line">
//                     Aryan Bola
//                 </motion.p>
//             </div>

//             <div className='overflow-hidden h-48'>
//                 <motion.p initial={{y:0}} animate={{y:-180}} transition={{duration:0.8,delay:0.8}} className="text-white text-4xl md:text-[12rem] font-bold line opacity-0">
//                     Aryan Bola
//                 </motion.p>
//                 <motion.p initial={{y:0}} animate={{y:-180}} transition={{duration:0.8,delay:0.8}} className="text-black text-4xl md:text-[12rem] font-bold line">
//                     Aryan Bola
//                 </motion.p>
//             </div>
//         </div>
//         {/* scroll button */}
//         <div className='w-full px-8 md:px-24 absolute bottom-4 md:bottom-8 left-0 z-10'>
//             <img onClick={togglePlayPause} src="/record2.png" className=' w-20 md:w-40 h-20 md:h-40 animate-spin' alt="" />
//         </div>
//         {/* Web Developer */}
//         <div className='px-8 md:px-24 absolute bottom-4 mdbottom-8 right-0 z-10 overflow-hidden'>
//             <motion.p initial={{ x: -500, visibility: false }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className='text-2xl md:text-4xl font-semibold text-black italic'>//Web Developer</motion.p>
//             <motion.p initial={{ x: -500, visibility: false }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className='text-2xl md:text-4xl font-semibold text-black italic'>//Web Designer</motion.p>
//         </div>
//     </div>
//   )
// }

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// FIX: Inlined AnimatedButton component to resolve the 'Could not resolve' error.
const AnimatedButton = ({ text, className }) => {
    return (
        <button className={`relative overflow-hidden group transition-all duration-300 ${className} px-6 py-2 bg-black text-white hover:bg-white hover:text-black border-2 border-black rounded-3xl`}>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0">
                {text}
            </span>
            <span className="absolute inset-0 bg-white transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
            <span className="absolute inset-0 bg-black transition-transform duration-300 transform translate-x-0 group-hover:translate-x-full"></span>
        </button>
    );
};


// Helper component for the repeating name block with responsive sizes
const NameBlock = ({ text, isStroke }) => { 
    // Determine the vertical translation based on the container height (100% of the single line)
    const animateTo = { y: '-100%' };
    const transition = { duration: 0.8, delay: 0.8 };
    const baseClasses = "text-6xl md:text-8xl lg:text-[12rem] font-extrabold leading-none";
    const containerClasses = 'overflow-hidden h-24 md:h-24 lg:h-52'; // Responsive container height

    // Define the classes for the second (scrolling) line based on the required effect.
    const scrollingLineClasses = isStroke 
        ? 'text-stroke-3 text-white' // Using the user's custom 'text-stroke-3' class
        : 'text-black'; // Standard text fill for the other blocks

    return (
        <div className={containerClasses}>
            {/* First line (Placeholder for the line that is "pushed up") - kept white for contrast */}
            <motion.p 
                initial={{y: 100}} 
                animate={animateTo} 
                transition={transition} 
                className={`${baseClasses} text-white opacity-0`}
            >
                {text}
            </motion.p>
            {/* Second line (The line that scrolls in) */}
            <motion.p 
                initial={{y: 100}} 
                animate={animateTo} 
                transition={transition} 
                className={`${baseClasses} ${scrollingLineClasses}`} 
            >
                {text}
            </motion.p>
        </div>
    );
}

// 2. Main LandingPage component
export default function LandingPage() {
    // State to control the rotation/visual effect of the icon
    const [isPlaying, setIsPlaying] = useState(false);
    
    // NOTE: External audio resources are still omitted due to environment limitations.
    const togglePlayPause = () => {
        // In a real app, this would toggle audio playback. Here, it toggles a visual state.
        setIsPlaying(prev => !prev);
    };

    return (
        <div className="min-h-screen w-full bg-white relative flex flex-col">
            {/* Navigation */}
            <motion.nav 
                initial={{ y: -100, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5 }} 
                className="w-full flex justify-between items-center px-4 md:px-12 py-6 text-sm md:text-xl z-20 absolute top-0 bg-transparent text-black"
            >
                <p className="font-bold text-lg md:text-2xl">Aryan Bola</p>
                <div className="flex justify-between items-center space-x-2 md:space-x-4 font-light">
                    {['About', 'Tech Stack', 'Projects'].map((item) => (
                        <p key={item} className='hidden sm:block hover:text-gray-300 transition duration-300 cursor-pointer px-2 py-1 md:px-4 md:py-1 rounded-full'>
                            {item}
                        </p>
                    ))}
                    {/* Using the inlined AnimatedButton */}
                    <AnimatedButton text={"Let's Talk"} className={"h-9 md:h-12 text-xs md:text-base px-4 py-1"}/>
                </div>
            </motion.nav>
            
            <div className='absolute inset-0 w-full h-full flex justify-center items-center'>
                <img src="/bg3.jpeg" className='w-[24rem] md:w-[42rem] h-[24rem] md:h-[36rem]' alt="" />
            </div>

            {/* Central Name Text Blocks */}
            <div className="flex flex-col justify-center items-center w-full flex-grow px-4 md:px-24 z-10 text-white">
                <NameBlock text={"Aryan Bola"} isStroke={false} />
                <NameBlock text={"Aryan Bola"} isStroke={true} />
                <NameBlock text={"Aryan Bola"} isStroke={false} />
            </div>

            {/* Footer Elements */}
            <div className='w-full flex justify-between items-end px-4 md:px-12 py-4 md:py-8 z-20 absolute bottom-0'>
                
                {/* Scroll Button / Music Toggle Icon */}
                <div className='flex items-center space-x-2 cursor-pointer'>
                    <motion.div 
                        onClick={togglePlayPause} 
                        animate={{ rotate: isPlaying ? 360 : 0 }}
                        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                        className='w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white flex justify-center items-center bg-black/50'
                    >
                        {/* Vinyl Record / Play-Pause Icon Placeholder */}
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                            <circle cx="12" cy="12" r="3" fill="currentColor"/>
                            <rect x="11.5" y="1.5" width="1" height="2" fill="currentColor"/>
                            <rect x="11.5" y="20.5" width="1" height="2" fill="currentColor"/>
                            <rect x="1.5" y="11.5" width="2" height="1" fill="currentColor"/>
                            <rect x="20.5" y="11.5" width="2" height="1" fill="currentColor"/>
                        </svg>
                    </motion.div>
                    <p className='text-xs text-white font-light'>
                        {isPlaying ? 'SOUND ON' : 'SOUND OFF'}
                    </p>
                </div>
                
                {/* Web Developer Text */}
                <div className='px-8 md:px-24 absolute bottom-8 right-0 z-10 overflow-hidden'>
                    <motion.p initial={{ x: -500, visibility: false }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className='text-2xl md:text-4xl font-semibold text-black italic'>//Web Developer</motion.p>
                    <motion.p initial={{ x: -500, visibility: false }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className='text-2xl md:text-4xl font-semibold text-black italic'>//Web Designer</motion.p>
                </div>
            </div>
        </div>
    );
}
