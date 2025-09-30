// import {motion} from 'motion/react'
// import gsap from 'gsap'
// import { useEffect } from 'react';
// const containerVariants = {
//     initial: {},
//     hover: {},
//   };

//   const childVariants = {
//     initial: {
//       y: "0%",
//     },
//     hover: {
//       y: "-100%",
//       transition: {
//         type: "tween",
//         duration: 0.2,  
//         ease: "easeOut"
//       }
//     },
//   };

// export default function LandingPage() {

//   useEffect(()=>{
//     gsap.from()
//   },[])

//   return (
//     <div className="h-screen w-full sticky top-0 rounded-2xl bg-white">
//       <motion.nav initial={{y:-200}} animate={{y:0}} transition={{duration:1}} className="w-full flex justify-between items-center px-24 py-6 text-2xl z-10 absolute top-0 border-b">
//         <p className="font-semibold">Aryan Bola</p>
//         <div className="flex justify-between items-center gap-4 font-light">
//           <p className='hover:border border-black px-4 py-1 rounded-3xl'>About</p>
//           <p className='hover:border border-black px-4 py-1 rounded-3xl'>Tech Stack</p>
//           <p className='hover:border border-black px-4 py-1 rounded-3xl'>Projects</p>
//           <button>
//             <motion.div
//               whileHover="hover"
//               variants={containerVariants}
//               className={`h-[44px] border border-black rounded-3xl overflow-hidden`}
//             >
//               <motion.div
//                 variants={childVariants}
//                 className={`bg-black px-4 py-2 text-white rounded-3xl`}
//               >
//                 <p className="text-xl">Let's Talk</p>
//               </motion.div>
//               <motion.div
//                 variants={childVariants}
//                 className="bg-white px-4 py-2"
//               >
//                 <p className="text-xl">Let's Talk</p>
//               </motion.div>
//             </motion.div>
//           </button>
//         </div>
//       </motion.nav>
//       {/* <div className="flex flex-col justify-center items-center w-full h-full px-24">
//         <div className='overflow-hidden border border-red-500 h-48'>
//           <motion.p initial={{y:0}} animate={{y:-180}} transition={{duration:1}} className="text-black text-[12rem] font-bold line text-center">Hii</motion.p>
//           <motion.p initial={{y:0}} animate={{y:-180}} transition={{duration:1}} className="text-white text-[12rem] font-bold line">Aryan Bola</motion.p>
//           <motion.p initial={{y:0}} animate={{y:-180}} transition={{duration:1}} className="text-black text-[12rem] font-bold line">Aryan Bola</motion.p>
//         </div>
//         <div className='overflow-hidden border-blue-500 border h-48'>
//           <motion.p initial={{y:0}} animate={{y:-180}} transition={{duration:1}} className=" text-white text-[12rem] font-bold line text-center">Aryan Bola</motion.p>
//           <motion.p initial={{y:0}} animate={{y:-180}} transition={{duration:1}} className="text-stroke-3 text-white text-[12rem] font-bold line text-center">I am</motion.p>
//           <motion.p initial={{y:0}} animate={{y:-180}} transition={{duration:1}} className="text-stroke-3 text-white text-[12rem] font-bold line">Aryan Bola</motion.p>
//         </div>
//         <div className='overflow-hidden border border-green-500 h-48'>
//           <motion.p initial={{y:300}} animate={{y:0}} transition={{duration:1}} className="text-black text-[12rem] font-bold line">Aryan Bola</motion.p>
//         </div>
//       </div> */}
//       <div className="flex flex-col justify-center items-center w-full h-full px-24">
//         {/* First Text Block: Reveals "Aryan Bola" after "Hii" */}
//         <div className='overflow-hidden border border-red-500 h-48'>
//           <p className="text-black text-[12rem] font-bold line text-center">
//             Hii
//           </p>
//           <p className="text-white text-[12rem] font-bold line text-stroke-3">
//             Aryan Bola
//           </p>
//           <p className="text-black text-[12rem] font-bold line">
//             Aryan Bola
//           </p>
//         </div>

//         <div className='overflow-hidden border-blue-500 border h-48'>
//           <p className=" text-white text-[12rem] font-bold line text-center">
//             Aryan Bola
//           </p>
//           <p className="text-stroke-3 text-white text-[12rem] font-bold line text-center">
//             I am
//           </p>
//           <p className="text-stroke-3 text-white text-[12rem] font-bold line">
//             Aryan Bola
//           </p>
//         </div>

//         <div className='overflow-hidden border border-green-500 h-48'>
//           <p className="text-black text-[12rem] font-bold line">
//             Aryan Bola
//           </p>
//         </div>
//       </div>
//       <div className='w-full px-24 absolute bottom-8 left-0 z-10'>
//         <motion.div
//               whileHover="hover"
//               variants={containerVariants}
//               className={`w-20 h-20 border border-black rounded-full overflow-hidden`}
//             >
//               <motion.div
//                 variants={childVariants}
//                 className={`w-full h-full text-black bg-white flex justify-center items-center`}
//               >
//                 <p className="text-xl font-light">Scroll</p>
//               </motion.div>
//               <motion.div
//                 variants={childVariants}
//                 className="w-full h-full text-white bg-black flex justify-center items-center"
//               >
//                 <p className="text-xl font-light">Scroll</p>
//               </motion.div>
//             </motion.div>
//       </div>
//       <div className='px-24 absolute bottom-8 right-0 z-10 overflow-hidden'>
//         <motion.p initial={{x:-500, visibility:false}} animate={{x:0}} transition={{duration:0.8, delay:0.8}} className='text-4xl font-semibold text-black italic'>//Web Developer</motion.p>
//         <motion.p initial={{x:-500, visibility:false}} animate={{x:0}} transition={{duration:0.8, delay:0.8}} className='text-4xl font-semibold text-black italic'>//Web Designer</motion.p>
//       </div>
//       {/* <div className='absolute w-full h-full inset-0 -z-10 py-12 px-[20rem]'>
//         <img src="/Me.png" className='w-full h-full object-fill' alt="" />
//       </div> */}
//     </div>
//   )
// }

import { motion } from 'framer-motion'; // Assuming you meant 'framer-motion' instead of 'motion/react'
import gsap from 'gsap';
import { useEffect } from 'react';

const containerVariants = {
    initial: {},
    hover: {},
};

const childVariants = {
    initial: {
        y: "0%",
    },
    hover: {
        y: "-100%",
        transition: {
            type: "tween",
            duration: 0.2,
            ease: "easeOut"
        }
    },
};

export default function LandingPage() {

  return (
    <div className="h-screen w-full sticky top-0 rounded-2xl bg-white">
        <motion.nav initial={{ y: -200 }} animate={{ y: 0 }} transition={{ duration: 0.8 }} className="w-full flex justify-between items-center px-24 py-6 text-2xl z-10 absolute top-0 border-b">
            <p className="font-semibold">Aryan Bola</p>
            <div className="flex justify-between items-center gap-4 font-light">
                <p className='hover:border border-black px-4 py-1 rounded-3xl'>About</p>
                <p className='hover:border border-black px-4 py-1 rounded-3xl'>Tech Stack</p>
                <p className='hover:border border-black px-4 py-1 rounded-3xl'>Projects</p>
                <button>
                    <motion.div
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
                    </motion.div>
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
            <motion.div
                whileHover="hover"
                variants={containerVariants}
                className={`w-20 h-20 border border-black rounded-full overflow-hidden`}
            >
                <motion.div
                    variants={childVariants}
                    className={`w-full h-full text-black bg-white flex justify-center items-center`}
                >
                    <p className="text-xl font-light">Scroll</p>
                </motion.div>
                <motion.div
                    variants={childVariants}
                    className="w-full h-full text-white bg-black flex justify-center items-center"
                >
                    <p className="text-xl font-light">Scroll</p>
                </motion.div>
            </motion.div>
        </div>
        {/* Web Developer */}
        <div className='px-24 absolute bottom-8 right-0 z-10 overflow-hidden'>
            <motion.p initial={{ x: -500, visibility: false }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className='text-4xl font-semibold text-black italic'>//Web Developer</motion.p>
            <motion.p initial={{ x: -500, visibility: false }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className='text-4xl font-semibold text-black italic'>//Web Designer</motion.p>
        </div>
    </div>
  )
}