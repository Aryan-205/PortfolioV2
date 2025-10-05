import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);


export default function PreChoise(){

    useEffect(() => {

      const elements = ["#p1", "#p2", "#p3"];

      gsap.set(elements, { 
        y: '100vh',
        scale: 10, 
        opacity: 0
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#section",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        }
      });

      tl.to(elements, {
        y: 0, 
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        ease: "power2.out"
      });

      return () => {
        tl.kill(); 
        ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
      };

    }, []);

  return (
    <>
    <div id="section" className="h-screen w-full bg-white relative p-24 overflow-hidden">
      <div className='flex flex-col justify-between border-x border-black px-4 w-full h-full'>
        <div className='flex flex-col justify-between'>
          <div id='p1' className='flex justify-between'>
            <p className='text-9xl font-bold'>01</p>
            <p className='text-9xl font-light'>Designer</p>
          </div>
          <div id='p2' className='flex justify-between'>
            <p className='text-9xl font-bold'>02</p>
            <p className='text-9xl font-light'>Developer</p>
          </div>
        </div>
        <p id='p3' className="text-4xl font-light">Get a chance to hire a Designer and Developer both in one</p>
      </div>
    </div>
    </>
  )
}