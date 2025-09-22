import {motion} from 'motion/react'

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
    <div className="h-screen w-full relative">
      <nav className="w-full flex justify-between items-center px-24 py-6 text-2xl z-10 absolute top-0 border-b">
        <p className="font-semibold">Aryan Bola</p>
        <div className="flex justify-between items-center gap-4 font-light">
          <p className='hover:border border-black px-4 py-1 rounded-3xl'>About</p>
          <p className='hover:border border-black px-4 py-1 rounded-3xl'>Projects</p>
          <p className='hover:border border-black px-4 py-1 rounded-3xl'>Designs</p>
          <button>
            <motion.div
              whileHover="hover"
              variants={containerVariants}
              className={`h-[44px] border border-black rounded-3xl overflow-hidden`}
            >
              <motion.div
                variants={childVariants}
                className={`bg-black px-4 py-2 text-white`}
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
      </nav>
      <div className="flex flex-col justify-center items-center w-full h-full py-20 border border-red-500">
        <p className="text-black text-[12rem] font-bold">Aryan Bola</p>
        <p className="text-stroke-3 text-white text-[12rem] -my-24 font-bold">Aryan Bola</p>
        <p className="text-black text-[12rem] font-bold">Aryan Bola</p>
      </div>
      <div className='w-full flex justify-end px-24 absolute bottom-12 right-0 z-10'>
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
      {/* <div className='absolute w-full h-full inset-0 -z-10 py-12 px-[30rem]'>
        <img src="/bg2.jpg" className='w-full h-full object-fill' alt="" />
      </div> */}
    </div>
  )
}