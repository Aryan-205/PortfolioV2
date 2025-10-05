import { motion } from "motion/react";

export default function ContactMe(){

  // Defined for the 'SEND MAIL' button
  const EMAIL_HREF = 'mailto:aaryann5002@gmail.com'; 

  return (
    <section id='section' className="h-screen bg-white text-black px-24 py-8 font-sans flex border-t border-black">
      <div className="h-full flex flex-col justify-between ">
        <p className="text-4xl font-bold text-white w-fit px-4 py-2 tracking-tighter bg-black">Contact Me</p>
        
        {/* List of Contact Links - Hardcoded without map/li */}
        <div className="flex flex-col justify-center gap-8 items-start h-full w-full">
            <motion.a
              initial={{scale:2,opacity:0}}
              whileInView={{scale:1, opacity:1}}
              transition={{duration:1, ease:"easeInOut"}}
              id="p0"
              href="mailto:aaryann5002@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderBottom: '4px solid black',
                lineHeight: 1.1,
              }}
            >
              <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-black hover:text-white hover:bg-black transition duration-300">
                EMAIL
              </p>
            </motion.a>

            <motion.a
              initial={{scale:2,opacity:0}}
              whileInView={{scale:1, opacity:1}}
              transition={{duration:1, ease:"easeInOut"}}
              id="p1"
              href="https://www.linkedin.com/in/aryan-bola-a95913316/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderBottom: '4px solid black',
                lineHeight: 1.1,
              }}
            >
              <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-black hover:text-white hover:bg-black transition duration-300">
                LINKEDIN
              </p>
            </motion.a>

            <motion.a
              initial={{scale:2,opacity:0}}
              whileInView={{scale:1, opacity:1}}
              transition={{duration:1, ease:"easeInOut"}}
              id="p2"
              href="https://github.com/Aryan-205"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderBottom: '4px solid black',
                lineHeight: 1.1,
              }}
            >
              <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-black hover:text-white hover:bg-black transition duration-300">
                GITHUB
              </p>
            </motion.a>

            <motion.a
              initial={{scale:2,opacity:0}}
              whileInView={{scale:1, opacity:1}}
              transition={{duration:1, ease:"easeInOut"}}
              id="p3"
              href="https://x.com/BolaJi_69"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderBottom: '4px solid black',
                lineHeight: 1.1,
              }}
              className="relative"
            >
              <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-black hover:text-white hover:bg-black transition duration-300">
                TWITTER
              </p>
              <p className="absolute bg-black text-white -bottom-7 right-0 p-1">Most Active</p>
            </motion.a>
        </div>

        <div className="">
          <a
            href={EMAIL_HREF}
            className="inline-block px-8 py-4 border-4 border-black bg-black text-white text-xl md:text-2xl font-extrabold uppercase tracking-wider  hover:bg-gray-800 transition duration-300"
          >
            SEND MAIL
          </a>
        </div>
      </div>
      <div className="flex justify-center tracking-tight text-xl md:text-6xl flex-col items-end gap-8 font-light w-full">
        <motion.p
          initial={{scale:2,opacity:0}}
          whileInView={{scale:1, opacity:1}}
          transition={{duration:1, ease:"easeInOut"}}
        >
          Got a project in mind?
        </motion.p>
        <motion.p  
          initial={{scale:2,opacity:0}}
          whileInView={{scale:1, opacity:1}}
          transition={{duration:1, ease:"easeInOut"}}
        >
          Want to talk tech stack?
        </motion.p>
        <motion.p
          initial={{scale:2,opacity:0}}
          whileInView={{scale:1, opacity:1}}
          transition={{duration:1, ease:"easeInOut"}}
        >
          My inbox is always open.
        </motion.p>
        <motion.p
          initial={{scale:2,opacity:0}}
          whileInView={{scale:1, opacity:1}}
          transition={{duration:1, ease:"easeInOut"}}
          className="w-[40rem] text-end"
        >
          Find me across the web, or drop me a direct line.
        </motion.p>
      </div>
      
    </section>
  );
};