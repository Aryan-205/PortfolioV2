import { motion} from 'motion/react'
export default function TechStack() {

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
        duration: 0.4,  
        ease: "easeInOut"
      }
    },
  };

  const skillsData = [
    {
      label: 'Frontend',
      skill: [
        { id:1, name: 'React', img: '/react.png' },
        { id:2, name: 'Vite', img: '/vite.svg' },
        { id:3, name: 'HTML', img: '/html.png' },
        { id:4, name: 'CSS', img: '/css.png' },
        { id:16, name: 'NextJS', img: '/.png' },
        { id:5, name: 'Tailwind', img: '/tailwind.png' },
        { id:6, name: 'Motion', img: '/motion.png' },
        { id:17, name: 'ThreeJS', img: '/motion.png' },
        { id:18, name: 'GSAP', img: '/motion.png' },
      ]
    },
    {
      label: 'Backend',
      skill: [
        {id:7, name: 'Node.js', img: '/nodejs.png' },
        {id:8, name: 'Express', img: '/express.png' },
        {id:9, name: 'JS', img: '/js.png' },
        {id:10, name: 'TS', img: '/ts.png' },
        {id:11, name: 'Zod', img: '/zod.svg' },
        {id:24, name: 'Redux', img: '/zod.svg' },
        {id:12, name: 'C++', img: '/cpp.png' },
        {id:19, name: 'NextJS', img: '/cpp.png' },
      ]
    },
    {
      label: 'Database',
      skill: [
        {id:13, name: 'MongoDB', img: '/mongodb.png' },
        {id:20, name: 'PostGres', img: '/mongodb.png' },
        {id:21, name: 'Prisma', img: '/mongodb.png' },
      ]
    },
    {
      label: 'Designing',
      skill: [
        {id:14, name: 'Figma', img: '/figma.png' },
        {id:15, name: 'Canva', img: '/canva.png' },
        {id:22, name: 'Framer', img: '/canva.png' },
        {id:23, name: 'GitHub', img: '/canva.png' },
      ]
    }
  ];

  return (
    <div className="h-screen w-full relative bg-white px-20 pb-12 pt-4 gap-4 flex flex-col border-t border-black">
      <p className='w-full text-center text-6xl font-semibold'>Tech Stack</p>
      <div className="h-full w-full flex justify items-center border-y border-black">
        <motion.div
          whileHover="hover"
          variants={containerVariants}
          className={`w-[25%] h-[100%] border-r overflow-hidden`}
        >
          <motion.div
            variants={childVariants}
            className="h-[100%] w-full bg-white flex flex-col justify-between items-center px-8 py-12 relative"
          >
            <p className="text-4xl font-bold">01</p>
            <img src="/frontendBlack.png" className="w-60 top-32 -right-24 h-auto absolute" alt="" />
            <p className="text-4xl font-semibold">Frontend</p>
          </motion.div>
          <motion.div
            variants={childVariants}
            className={`h-[100%] w-full bg-black flex flex-col justify-between items-center px-8 py-12 text-white relative`}
          >
            <p className="text-4xl font-bold">01</p>
            <div className="flex flex-col gap-4">
              <img src="/frontendWhite.png" className="w-60 top-32 -right-24 h-auto absolute" alt="" />
              <p className="text-2xl font-bold">Frontend</p>
              <div className='grid grid-cols-2 gap-4 z-10'>
                {skillsData[0].skill.map(s=>(
                  <div className='[box-shadow:inset_1px_-1px_4px_0.5px_rgba(255,255,255)] bg-black border border-white text-white rounded-2xl px-4 py-2 hover:bg-white hover:text-black'>
                    <p key={s.id}>{s.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          whileHover="hover"
          variants={containerVariants}
          className={`w-[25%] h-[100%] border-r overflow-hidden`}
        >
          <motion.div
            variants={childVariants}
            className="h-[100%] w-full bg-white flex flex-col justify-between items-center px-8 py-12 relative"
          >
            <p className="text-4xl font-bold">02</p>
            <img src="/backendBlack.png" className="w-60 top-32 -right-24 h-auto absolute" alt="" />
            <p className="text-4xl font-semibold">Backend</p>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="h-[100%] w-full bg-black flex flex-col justify-between items-center px-8 py-12 text-white relative"
          >
            <p className="text-4xl font-bold">02</p>
            <div className="flex flex-col gap-4">
              <img src="/backendWhite.png" className="w-60 top-32 -right-24 h-auto absolute" alt="" />
              <p className="text-2xl font-bold">Backend</p>
              <div className='grid grid-cols-2 gap-4'>
                {skillsData[1].skill.map(s=>(
                  <div className='[box-shadow:inset_1px_-1px_4px_0.5px_rgba(255,255,255)] bg-black border border-white text-white rounded-2xl px-4 py-2 hover:bg-white hover:text-black'>
                    <p key={s.id}>{s.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          whileHover="hover"
          variants={containerVariants}
          className={`w-[25%] h-[100%] border-r overflow-hidden`}
        >
          <motion.div
            variants={childVariants}
            className="h-[100%] w-full bg-white flex flex-col justify-between items-center px-8 py-12 relative"
          >
            <p className="text-4xl font-bold">03</p>
            <img src="/databaseBlack.png" className="w-60 top-32 -right-24 h-auto absolute" alt="" />
            <p className="text-4xl font-semibold">Database</p>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="h-[100%] w-full bg-black flex flex-col justify-between items-center px-8 py-12 text-white relative"
          >
            <p className="text-4xl font-bold">03</p>
            <div className="flex flex-col gap-4">
              <img src="/databaseWhite.png" className="w-60 top-28 -right-24 h-auto absolute" alt="" />
              <p className="text-2xl font-bold">Database</p>
              <div className='grid grid-cols-2 gap-4'>
                {skillsData[2].skill.map(s=>(
                  <div className='[box-shadow:inset_1px_-1px_4px_0.5px_rgba(255,255,255)] border border-white text-white rounded-2xl px-4 py-2 hover:bg-white hover:text-black'>
                    <p key={s.id}>{s.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          whileHover="hover"
          variants={containerVariants}
          className={`w-[25%] h-[100%] overflow-hidden`}
        >
          <motion.div
            variants={childVariants}
            className="h-[100%] w-full bg-white flex flex-col justify-between items-center px-8 py-12 relative"
          >
            <p className="text-4xl font-bold">04</p>
            <img src="/ToolsBlack.png" className="w-60 top-32 -right-24 h-auto absolute" alt="" />
            <p className="text-4xl font-semibold">Tools</p>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="h-[100%] w-full flex flex-col justify-between items-center px-8 py-12 bg-black text-white relative"
          >
            <p className="text-4xl font-bold">04</p>
            <div className="flex flex-col gap-4">
              <img src="/ToolsWhite.png" className="w-60 top-32 -right-24 h-auto absolute" alt="" />
              <p className="text-2xl font-bold">Tools</p>
              <div className='grid grid-cols-2 gap-4'>
                {skillsData[3].skill.map(s=>(
                  <div className='[box-shadow:inset_1px_-1px_4px_0.5px_rgba(255,255,255)] border border-white text-white rounded-2xl px-4 py-2 hover:bg-white hover:text-black'>
                    <p key={s.id}>{s.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}