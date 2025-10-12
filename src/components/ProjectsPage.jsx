export default function ProjectsPage(){
  return (
    <>
    {/* Reduced padding */}
    <div className="h-[300vh] md:h-[500vh] w-full bg-black p-6 md:p-24 rounded-t-3xl">
      {/* Sticky Sidebar Section */}
      <div className="h-[100vh] z-20 w-full md:w-fit sticky top-0">
        <div className="border-l border-white w-full h-full flex justify-start items-center">
          <div className="pl-4 backdrop-blur-sm">
            {/* Reduced text sizes */}
            <p className="w-full text-6xl md:text-[20rem] text-white font-bold ">20</p>
            <p className="w-full h-full text-white text-3xl md:text-6xl font-bold uppercase text-center">Projects</p>
            <p className="w-full text-6xl md:text-[20rem] text-white/50 font-bold">25</p>
          </div>
        </div>
      </div>
      
      {/* Projects List - Position and alignment adjusted for mobile */}
      <div className="flex flex-col items-start md:items-end justify-start gap-8 sticky top-0 z-10 -mt-[100vh]  md:pt-0">
        <div className="w-full md:w-[60%] p-2 md:p-4 border-b border-white">
          <img src="/projects/Windows.png" className="w-full" alt="" />
          {/* Reduced text sizes */}
          <p className="font-light text-3xl md:text-6xl text-white pt-4">Windows</p>
          <p className="text-white text-sm md:text-base text-light">Experience the Windows ecosystem in Browser</p>
        </div>
        <div className="w-full md:w-[60%] p-2 md:p-4 border-b border-white">
          <img src="/designs/d21.png" className="w-full" alt="" />
          {/* Reduced text sizes */}
          <p className="font-light text-3xl md:text-6xl text-white py-4">FlyHigh</p>
          <p className="text-white text-sm md:text-base text-light">A cool website built with ThreeJs</p>
        </div>
        <div className="w-full md:w-[60%] p-2 md:p-4 border-b border-white">
          <img src="/projects/AppleBentoGrid.jpeg" className="w-full" alt="" />
          {/* Reduced text sizes */}
          <p className="font-light text-3xl md:text-6xl text-white py-4">Apple Bento</p>
          <p className="text-white text-sm md:text-base text-light">Fully Interactive Bento Design with micro interaction using motion</p>
        </div>
        <div className="w-full md:w-[60%] p-2 md:p-4 border-b border-white">
          <img src="/projects/Rento.png" className="w-full" alt="" />
          {/* Reduced text sizes */}
          <p className="font-light text-3xl md:text-6xl text-white py-4">Rento</p>
          <p className="text-white text-sm md:text-base text-light">A Luxury Car Rental Website</p>
        </div>
        <div className="w-full md:w-[60%] p-2 md:p-4 border-b border-white">
          <img src="/projects/TrackO.png" className="w-full" alt="" />
          {/* Reduced text sizes */}
          <p className="font-light text-3xl md:text-6xl text-white py-4">TrackO</p>
          <p className="text-white text-sm md:text-base text-light">Community live location tracking website</p>
        </div>
      </div>
    </div>
    </>
  )
}