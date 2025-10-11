import { motion, scale } from 'framer-motion';

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


const NameBlock = ({ text, isStroke }) => { 

    const animateTo = { y: '-100%' };
    const transition = { duration: 0.8, delay: 0.8 };
    const baseClasses = "text-6xl md:text-8xl lg:text-[12rem] font-extrabold leading-none";
    const containerClasses = 'overflow-hidden h-24 md:h-24 lg:h-52'; 

    const scrollingLineClasses = isStroke 
        ? 'text-stroke-3 text-white' 
        : 'text-black'; 

    return (
        <div className={containerClasses}>
            <motion.p 
                initial={{y: 100}} 
                animate={animateTo} 
                transition={transition} 
                className={`${baseClasses} text-white opacity-0`}
            >
                {text}
            </motion.p>
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

export default function LandingPage() {

    return (
        <div className="min-h-screen w-full bg-white relative flex flex-col overflow-hidden">
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
                    <AnimatedButton text={"Let's Talk"} className={"h-9 md:h-12 text-xs md:text-base px-4 py-1"}/>
                </div>
            </motion.nav>
            
            <div className='absolute inset-0 w-full h-full flex justify-center items-center'>
                <motion.img initial={{scale:5, zIndex:10}} animate={{scale:1, zIndex:0}} transition={{duration:0.8, ease:"easeInOut"}} src="/bg3.jpeg" className='w-[20rem] md:w-[42rem] h-[32rem] md:h-[36rem]' alt="" />
            </div>

            {/* Central Name Text Blocks */}
            <div className="flex flex-col justify-center items-center w-full flex-grow px-4 md:px-24 z-10 text-white">
                <NameBlock text={"Aryan Bola"} isStroke={false} />
                <NameBlock text={"Aryan Bola"} isStroke={true} />
                <NameBlock text={"Aryan Bola"} isStroke={false} />
            </div>

            {/* Footer Elements */}
            <div className='w-full flex justify-between items-end px-4 md:px-12 py-4 md:py-8 z-20 absolute bottom-8'>
                
                {/* Scroll Button / Music Toggle Icon */}
                <div className='flex gap-2 justify-center items-center cursor-pointer'>
                    <AnimatedButton text={"Scroll Down"}/>
                </div>
                
                {/* Web Developer Text */}
                <div className='px-8 md:px-24 absolute bottom-0 right-0 z-10 overflow-hidden'>
                    <motion.p initial={{ x: -500, visibility: false }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className='text-2xl md:text-4xl font-semibold text-black italic'>//Web Developer</motion.p>
                    <motion.p initial={{ x: -500, visibility: false }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className='text-2xl md:text-4xl font-semibold text-black italic'>//Web Designer</motion.p>
                </div>
            </div>
        </div>
    );
}
