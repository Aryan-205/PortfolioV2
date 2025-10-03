import {motion} from 'motion/react'

const imagePlaceholders = [
  { id: 1, alt: "War Shoe Poster", className: 'top-[350px] left-20 w-[200px] h-[300px] bg-red-800' },
  { id: 2, alt: "Peace Poster", className: 'top-[550px] left-80 w-[180px] h-[350px] bg-blue-500 transform -rotate-3' },
  { id: 3, alt: "Department Poster", className: 'top-[250px] left-1/2 -translate-x-1/2 w-[250px] h-[400px] bg-gray-500' },
  { id: 4, alt: "Scissors Poster", className: 'top-[180px] right-[350px] w-[300px] h-[300px] bg-red-600 transform rotate-5' },
  { id: 5, alt: "Man/Text Grid Poster", className: 'top-[350px] right-24 w-[200px] h-[300px] bg-white' },
];

const DesignSection = () => {
  return (

    <div className="relative h-screen w-full bg-black text-white overflow-hidden p-24">
      <div className='h-full w-full flex flex-col justify-between'>
        <p 
          className="font-extrabold leading-none tracking-tight uppercase text-8xl text-start"
          style={{ letterSpacing: '-0.05em' }} 
        >
          Designs
        </p>

        <p 
          className="font-extrabold leading-none tracking-widest uppercase text-8xl text-end"
          style={{ letterSpacing: '-0.05em' }}
        >
          That Inspire
        </p>
      </div>

      <div className="absolute z-10 inset-0 w-full h-screen">
        <div className='h-60 w-40 bg-amber-500 absolute left-[6rem] top-[45%]'></div>
        <div className='h-60 w-40 bg-green-500 absolute left-[24rem] top-[60%]'></div>
        <div className='h-60 w-40 bg-blue-500 absolute left-[40rem] top-[30%]'></div>
        <div className='h-60 w-40 bg-red-500 absolute right-[24rem] top-[15%]'></div>
        <div className='h-60 w-40 bg-yellow-500 absolute right-[6rem] top-[30%]'></div>
      </div>

      <motion.div
        key="expanded-design-content"
        className="flex flex-col items-center justify-start p-8 w-full h-full overflow-y-auto text-black"
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className='h-full w-full flex flex-col justify-between'>
          <h1 className="text-6xl md:text-8xl font-semibold mb-4 text-start">Projects</h1>
          <h1 className="text-6xl md:text-8xl font-semibold mb-4 text-end">Creation</h1>
        </div>

        <div className='flex justify-center'>
          <div className='w-full flex-grow'>
            <DesignGalleryMasonry />
          </div>
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

    </div>
  );
};

export default DesignSection;