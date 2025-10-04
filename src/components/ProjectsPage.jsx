export default function ProjectsPage(){
  return (
    <>
    <div className="h-[200vh] w-full bg-black p-24 rounded-t-3xl">
      <div className="h-[100vh] z-10 w-fit border border-green-500 sticky top-0">
        <div className="border-l border-white w-full h-full flex justify-start items-center">
          <div>
            <p className="w-full text-[20rem] text-white font-bold -mb-24">20</p>
            <p className="w-full h-full text-white text-6xl font-bold uppercase text-center">Projects</p>
            <p className="w-full text-[20rem] text-white/50 font-bold -mt-24">25</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-start">
        <div className="w-[60%] p-4 border border-white">
          <img src="/designs/d21.png" className="w-full" alt="" />
          <p className="font-light text-6xl text-white py-4">FlyHigh</p>
        </div>
        <div className="w-[60%] p-4 border border-white">
          <img src="/designs/d21.png" className="w-full" alt="" />
          <p className="font-light text-6xl text-white py-4">FlyHigh</p>
        </div>
        <div className="w-[60%] p-4 border border-white">
          <img src="/designs/d21.png" className="w-full" alt="" />
          <p className="font-light text-6xl text-white py-4">FlyHigh</p>
        </div>
      </div>
    </div>
    </>
  )
}

function ProjectCard(){
  return (
    <>
      <div className="w-full h-full overflow-hidden">
        <img src="/designs/d17.png" className="" alt="" />
      </div>
    </>
  )
}

const projects = [

]