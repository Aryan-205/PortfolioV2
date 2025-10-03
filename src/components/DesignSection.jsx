import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DesignGalleryMasonry from './DesignGalleryMansory';
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function DesignSection(){

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section1",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers:true
      }
    });

    tl.to("#imgBox", {
      width: "100vw",   // force viewport width
      height: "100vh",  // force viewport height
      ease: "none"
    });

    

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  return (

    <div id="section1" className="h-[200vh] w-full bg-black text-white relative">
      <div className='sticky top-0 w-full h-screen inset-0 p-24'>
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

        <div className="absolute z-10 inset-0 w-full h-screen flex justify-center items-center">
          <div className='h-60 w-40 bg-amber-500 absolute left-[6rem] top-[45%] overflow-hidden'>
            <img src="/designs/d11.png" className="h-full object-cover" alt="" />
          </div>
          <div className='h-60 w-40 bg-green-500 absolute left-[24rem] top-[60%] overflow-hidden'>
            <img src="/designs/d12.png" className="h-full object-cover" alt="" />
          </div>
          <div id="imgBox" className='bg-white absolute h-60 w-40 overflow-hidden flex justify-center items-center z-20'>
            <div className="h-full w-full bg-white overflow-hidden flex justify-center">
              <img src="/designs/d23.png" className="object-cover" alt="" />
            </div>
          </div>
          <div className='h-60 w-40 bg-red-500 absolute right-[24rem] top-[15%]'>
            <img src="/designs/d21.png" className="h-full object-cover" alt="" />
          </div>
          <div className='h-60 w-40 bg-yellow-500 absolute right-[6rem] top-[30%]'></div>
        </div>
      </div>
    </div>
  );
};