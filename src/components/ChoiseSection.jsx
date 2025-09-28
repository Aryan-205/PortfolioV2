import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BentoMarquee from './BentoMarquee';
import DesignGalleryMasonry from './DesignGalleryMansory';

export default function ChoiseSection() {
  const [expanded, setExpanded] = useState(null);


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

  // Variants for content transitions
  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
  };

  // Variants for the main div expansion
  const cardVariants = {
    initial: { width: '50vw' },
    expanded: { width: '100vw', transition: { type: 'spring', stiffness: 200, damping: 25 } },
    collapsed: { width: '0vw', transition: { type: 'spring', stiffness: 200, damping: 25 } },
  };

  return (
    <div className="h-screen w-full flex sticky top-0 overflow-hidden border-y border-black">
      
      {/* Design Section */}
      <motion.div
        className="w-full h-full text-black bg-white flex justify-center items-center overflow-hidden cursor-pointer"
        onClick={() => setExpanded('design')}
        variants={cardVariants}
        initial="initial"
        animate={expanded === 'design' ? 'expanded' : expanded === 'code' ? 'collapsed' : 'initial'}
        transition={{ duration: 0.8 }}
      >
        <AnimatePresence mode="wait">
          {expanded === null && (
            <motion.div
              key="initial-design-content"
              className="flex justify-between items-center w-full h-full pl-6"
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <img src="/left-arrow.png" className="w-10" alt="Left Arrow" />
              <p className="text-6xl font-bold">Design</p>
              <img src="/design.png" className="w-[60%] h-[60%] hover:scale-105 transition-all duration-300 ease-in-out rounded-l-xl" alt="Design Icon" />
              <div className='w-full py-6 flex justify-start items-center absolute bottom-0 gap-36'>
                <p className='text-2xl'>UI/UX Department</p>
                <div className='flex-center w-20 h-20 rounded-full border border-black -rotate-90 p-4'>
                  <img src="/left-arrow.png" alt="" />
                </div>
              </div>
            </motion.div>
          )}

          {expanded === 'design' && (
            <motion.div
              key="expanded-design-content"
              className="flex flex-col items-center justify-start p-8 w-full h-full overflow-y-auto text-black"
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-4">Design</h1>
              <p className="text-xl max-w-2xl text-center">
                Explore the world of creative design. From user interfaces to stunning visuals, this section is dedicated to the art and science of bringing ideas to life.
              </p>

              {/* this div */}
              <div className='w-full flex-grow'>
                <DesignGalleryMasonry />
              </div>
              <motion.button
                className="mt-8 px-8 py-3 bg-gray-200 text-gray-800 rounded-full shadow-lg font-bold hover:bg-gray-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setExpanded(null);
                }}
              >
                Go Back
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Code Section */}
      <motion.div
        className="w-full h-full bg-[#141414] text-white flex justify-center items-center overflow-hidden cursor-pointer"
        onClick={() => setExpanded('code')}
        variants={cardVariants}
        initial="initial"
        animate={expanded === 'code' ? 'expanded' : expanded === 'design' ? 'collapsed' : 'initial'}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {expanded === null && (
            <motion.div
              key="initial-code-content"
              className="flex justify-between items-center w-full h-full pr-6"
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <img src="/code.png" className="w-[56%] h-[60%] border border-white/50 hover:scale-105 transition-all duration-300 ease-in-out rounded-r-xl" alt="Code Icon" />
              <p className="text-6xl font-bold">Projects</p>
              <img src="/right-arrow.png" className="w-10" alt="Right Arrow" />
              <div className='h-full p-6 absolute right-0 flex flex-col justify-between items-center'>
                <p className='text-2xl italic'>Create - Build - Deploy</p>
                <button>
                  <motion.div
                    whileHover="hover"
                    variants={containerVariants}
                    className={`h-[44px] text-black rounded-3xl overflow-hidden`}
                  >
                    <motion.div
                      variants={childVariants}
                      className="bg-white px-4 py-2"
                    >
                      <p className="text-xl">View</p>
                    </motion.div>
                    <motion.div
                      variants={childVariants}
                      className={`bg-black px-4 py-2 text-white border border-white rounded-3xl`}
                    >
                      <p className="text-xl">View</p>
                    </motion.div>
                  </motion.div>
                </button>
              </div>
            </motion.div>
          )}
          
          {expanded === 'code' && (
            <motion.div
              key="expanded-code-content"
              className="flex flex-col items-center justify-center p-8 w-full h-full text-white"
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {/* Other bento grid items */}
                <div className="col-span-1 row-span-1 bg-gray-800 rounded-xl p-4">
                  {/* ... */}
                </div>

                {/* The moving image component */}
                <BentoMarquee />

                {/* More bento grid items */}
              </div>
              <motion.button
                className="mt-8 px-8 py-3 bg-gray-800 text-gray-200 rounded-full shadow-lg font-bold hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setExpanded(null);
                }}
              >
                Go Back
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
