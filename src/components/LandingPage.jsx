import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import { useEffect, useRef, useState } from 'react';

export default function LandingPage() {

    const [isPlaying, setIsPlaying] = useState(true);
    // 2. Ref to access the HTML audio element
    const audioRef = useRef(null); 

    // 3. Effect to set up and start the audio on component mount
    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            // Set up audio properties (e.g., loop)
            audio.loop = true;
            audio.volume = 0.5; // Optional: lower the volume

            // Attempt to play, but it will likely be blocked initially.
            // We need a user interaction to actually start it.
            const playPromise = audio.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    // Playback started successfully
                    setIsPlaying(true);
                }).catch(() => {
                    // Autoplay was prevented. Set state to paused.
                    setIsPlaying(false);
                });
            }
        }
    }, []);

    // 4. Toggle function for the button click
    const togglePlayPause = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
                setIsPlaying(false);
            } else {
                // Play starts from where it was paused
                audio.play().then(() => {
                    setIsPlaying(true);
                }).catch((error) => {
                    console.error("Audio playback failed:", error);
                    // Handle cases where play might still fail
                });
            }
        }
    };

  return (
    <div className="h-screen w-full rounded-t-2xl bg-white relative">
        <audio ref={audioRef} src="/KennyGSaxSongBird.mp3" autoPlay preload="auto" />
        <motion.nav initial={{ y: -200 }} animate={{ y: 0 }} transition={{ duration: 0.8 }} className="w-full flex justify-between items-center px-24 py-6 text-2xl z-10 absolute top-0 ">
            <p className="font-semibold">Aryan Bola</p>
            <div className="flex justify-between items-center gap-4 font-light">
                <p className='hover:border border-black px-4 py-1 rounded-3xl'>About</p>
                <p className='hover:border border-black px-4 py-1 rounded-3xl'>Tech Stack</p>
                <p className='hover:border border-black px-4 py-1 rounded-3xl'>Projects</p>
                <button>
                    {/* <motion.div
                        whileHover="hover"
                        variants={containerVariants}
                        className={`h-[44px] border border-black rounded-3xl overflow-hidden`}
                    >
                        <motion.div
                            variants={childVariants}
                            className={`bg-black px-4 py-2 text-white rounded-3xl`}
                        >
                            <p className="text-xl">Let's Talk</p>
                        </motion.div>
                        <motion.div
                            variants={childVariants}
                            className="bg-white px-4 py-2"
                        >
                            <p className="text-xl">Let's Talk</p>
                        </motion.div>
                    </motion.div> */}
                    <AnimatedButton text={"Let's Talk"} className={"h-[44px] rounded-3xl"}/>
                </button>
            </div>
        </motion.nav>
        {/* img */}
        <div className='w-full h-full inset-0 absolute flex justify-center items-center'>
          <motion.img initial={{scale:5, zIndex:100}} animate={{scale:1, zIndex:0}} transition={{duration:0.8}} src="/bg3.jpeg" className='w-[40rem] h-[35rem]'  alt="" />
        </div>
        {/* Central Name */}
        <div className="flex flex-col justify-center items-center w-full h-full px-24 z-10">
            {/* Text Blocks with added class names for GSAP targeting */}
            <div className='overflow-hidden h-48'>
                <motion.p initial={{y:0}} animate={{y:-180}} transition={{duration:0.8,delay:0.8}} className="text-white text-[12rem] font-bold line opacity-0">
                    Aryan Bola
                </motion.p>
                <motion.p initial={{y:0}} animate={{y:-180}} transition={{duration:0.8,delay:0.8}} className="text-black text-[12rem] font-bold line ">
                    Aryan Bola
                </motion.p>
            </div>

            <div className='overflow-hidden h-48'>
                <motion.p initial={{y:0}} animate={{y:-180}} transition={{duration:0.8,delay:0.8}} className="text-white text-[12rem] font-bold line opacity-0">
                    Aryan Bola
                </motion.p>
                <motion.p initial={{y:0}} animate={{y:-180}} transition={{duration:0.8,delay:0.8}} className="text-stroke-3 text-white text-[12rem] font-bold line">
                    Aryan Bola
                </motion.p>
            </div>

            <div className='overflow-hidden h-48'>
                <motion.p initial={{y:0}} animate={{y:-180}} transition={{duration:0.8,delay:0.8}} className="text-white text-[12rem] font-bold line opacity-0">
                    Aryan Bola
                </motion.p>
                <motion.p initial={{y:0}} animate={{y:-180}} transition={{duration:0.8,delay:0.8}} className="text-black text-[12rem] font-bold line">
                    Aryan Bola
                </motion.p>
            </div>
        </div>
        {/* scroll button */}
        <div className='w-full px-24 absolute bottom-8 left-0 z-10'>
            <img onClick={togglePlayPause} src="/record2.png" className='w-40 h-40 animate-spin' alt="" />
        </div>
        {/* Web Developer */}
        <div className='px-24 absolute bottom-8 right-0 z-10 overflow-hidden'>
            <motion.p initial={{ x: -500, visibility: false }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className='text-4xl font-semibold text-black italic'>//Web Developer</motion.p>
            <motion.p initial={{ x: -500, visibility: false }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className='text-4xl font-semibold text-black italic'>//Web Designer</motion.p>
        </div>
    </div>
  )
}