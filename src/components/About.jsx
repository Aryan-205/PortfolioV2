import { motion, useInView, useAnimate } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { MdMyLocation } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";

export default function About() {
  const [time, setTime] = useState(new Date());
  
  // 1. Ref for the SVG container to track visibility
  const svgContainerRef = useRef(null);
  const isInView = useInView(svgContainerRef, {
    margin: "0px 0px -100px 0px", // Starts animation early
  });

  // 2. Ref and animate hook for the main path (path0)
  const [scope, animate] = useAnimate();

  // 3. Effect for the clock and to trigger the SVG animation once
  useEffect(() => {
    // Clock interval setup
    const interval = setInterval(() => {
      setTime(new Date());  
    }, 1000);

    // Animation trigger
    if (isInView) {
      // The animate function from useAnimate targets elements within its scope
      animate(
        '#path-main', // Target the main path by ID
        { pathLength: [0, 1] }, // Animate pathLength from 0 to 1
        { 
          duration: 2.5, 
          ease: "easeInOut",
          delay: 0.2 // A small delay after component loads
        }
      );
      // Animate the two bottom lines
      animate(
        '#path-line-1, #path-line-2', // Target the two bottom lines
        { pathLength: [0, 1] },
        { 
          duration: 1.5, 
          ease: "easeOut",
          delay: 1.5 
        }
      );
    }
    
    return () => {
        clearInterval(interval);
    };
  }, [isInView, animate]); // Re-run when isInView changes

  return (
    <div className="h-screen w-full relative bg-white border-black overflow-hidden">
      <div className="py-6 px-8">
        <p className="text-9xl font-bold tracking-tighter">Know about Me </p>
      </div>
      <div className="p-6 h-[76%]">
        <div className="flex justify-center items-center w-full h-full bg-black rounded-[48px] p-12">
          <img
            src="/Me1.jpeg"
            className="h-full rounded-l-2xl"
            alt="Aryan Bola"
          />
          <div className="w-full h-full pl-6 text-white flex flex-col justify-between items-start gap-12">
            <p className="text-4xl font-semibold">Who am I?</p>
            <div className="flex flex-col gap-4">
              <p className="text-xl font-light">
                Hi, I am <span className="text-orange-500">Aryan Bola</span>, 20 years old and a 2nd year student at Kirori Mal College, DU
              </p>
              <p className="text-xl font-light">
                I am a self-taught creative{" "}
                <span className="text-orange-500 italic">
                  {" "}
                  Web Developer
                </span>
                ,{" "}
                <span className="text-blue-500 font-semibold">Web Designer</span>,
                and <span className="text-green-500 italic">UI/UX designer</span>{" "}
                based in Delhi, India. I am passionate in catering my works for
                emerging start ups and small businesses that make an impact,
                inspire and connect with people.
              </p>
              <p className="text-xl font-light">
                When I am not developing or designing, I'm constantly seeking new
                ways to learn and grow. I’m always on the lookout for the next
                challenge. I also enjoy spending time distracting myself by
                reading some cool books, travelling or binge shows.
              </p>
            </div>
            <div className="flex justify-between w-full gap-4 text-2xl font-extralight">
              <div className="flex gap-4">
                <p className="flex items-center gap-2">
                  <FaRegClock />
                  {
                    time.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true
                  })}
                </p>
                <p className="flex items-center gap-2">
                  <MdMyLocation />
                  Delhi, India</p>
              </div>
              
              {/* SVG Signature - Ref for view tracking, scope for animation targets */}
              <div ref={svgContainerRef} className="absolute bottom-10 right-20 z-50">
                <motion.svg 
                    ref={scope} // The animation scope targets elements within this SVG
                    className="w-80 object-contain"  
                    viewBox="0 0 973 635" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                
                    {/* Path 0 (Main Signature Line - Gradient Version) */}
                    <motion.path 
                        id="path-main"
                        d="M140 306C140 306 147.752 340.505 183 365.5C276.001 431.448 367.921 195.821 408.662 71.6995C414.046 55.2967 439.478 57.0665 442.161 74.1205L480.636 318.691C483.016 333.818 464.686 343.52 453.431 333.136C396.642 280.739 286.04 182.141 247.323 172.017C241.953 170.613 237.669 174.79 236.415 180.197C228.258 215.37 201.657 346.065 258.5 339.593C382.66 325.456 435.534 289.077 500.3 177.081C501.086 175.721 501.728 173.999 502.099 172.473C517.121 110.756 487.634 363.284 571 351C653.199 338.888 644.868 224.5 644.868 149.5C644.868 -8.95898 636.023 468.003 633.605 601.375C633.36 614.902 617.834 621.372 608.231 611.843C581.759 585.571 541.743 541.036 528 500C470.47 328.221 814.172 299.393 755.5 128C742.208 89.1702 729.074 62.0336 718.82 44.1045C711.994 32.1686 697.01 36.4405 695.739 50.1318L669.002 338.162C667.227 357.279 697.015 363.546 703.691 345.545C719.25 303.589 734.908 266.282 744.5 256.5C795 205 815.5 259.5 815.5 321C815.5 375.669 859 373 859 373" 
                        stroke="url(#paint0_linear_367_183)" 
                        strokeWidth="32" 
                        strokeLinecap="round" 
                        initial={{ pathLength: 0 }}
                    />
                    
                    {/* Path 1 (Bottom Line 1 - Gradient Version) */}
                    <motion.path 
                        id="path-line-1"
                        d="M16 476.5C22.4 476.5 645.667 398.833 956.5 360" 
                        stroke="url(#paint1_linear_367_183)" 
                        strokeWidth="32" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                    />
                    
                    {/* Path 2 (Bottom Line 2 - Gradient Version) */}
                    <motion.path 
                        id="path-line-2"
                        d="M16 542.5L925.678 414.826C938.572 413.016 948.113 426.544 942.082 438.083L887.5 542.5" 
                        stroke="url(#paint2_linear_367_183)" 
                        strokeWidth="32" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                    />
                    
                    {/* All Solid Black Paths (Kept them in the code just in case, though they overlap with the gradient paths) */}
                    <path d="M140 306C140 306 147.752 340.505 183 365.5C276.001 431.448 367.921 195.821 408.662 71.6995C414.046 55.2967 439.478 57.0665 442.161 74.1205L480.636 318.691C483.016 333.818 464.686 343.52 453.431 333.136C396.642 280.739 286.04 182.141 247.323 172.017C241.953 170.613 237.669 174.79 236.415 180.197C228.258 215.37 201.657 346.065 258.5 339.593C382.66 325.456 435.534 289.077 500.3 177.081C501.086 175.721 501.728 173.999 502.099 172.473C517.121 110.756 487.634 363.284 571 351C653.199 338.888 644.868 224.5 644.868 149.5C644.868 -8.95898 636.023 468.003 633.605 601.375C633.36 614.902 617.834 621.372 608.231 611.843C581.759 585.571 541.743 541.036 528 500C470.47 328.221 814.172 299.393 755.5 128C742.208 89.1702 729.074 62.0336 718.82 44.1045C711.994 32.1686 697.01 36.4405 695.739 50.1318L669.002 338.162C667.227 357.279 697.015 363.546 703.691 345.545C719.25 303.589 734.908 266.282 744.5 256.5C795 205 815.5 259.5 815.5 321C815.5 375.669 859 373 859 373" stroke="#161716" strokeWidth="5" strokeLinecap="round" />
                    <path d="M16 476.5C22.4 476.5 645.667 398.833 956.5 360" stroke="#161716" strokeWidth="5" strokeLinecap="round" />
                    <path d="M16 542.5L925.678 414.826C938.572 413.016 948.113 426.544 942.082 438.083L887.5 542.5" stroke="#161716" strokeWidth="5" strokeLinecap="round" />
                    
                    {/* Original Defs (Gradients) */}
                    <defs>
                    <linearGradient id="paint0_linear_367_183" x1="499.5" y1="0" x2="499.5" y2="635" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#43DA40"></stop>
                    <stop offset="1" stopColor="#2F28A9"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_367_183" x1="486.25" y1="360" x2="486.25" y2="476.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#43DA40"></stop>
                    <stop offset="1" stopColor="#2F28A9"></stop>
                    </linearGradient>
                    <linearGradient id="paint2_linear_367_183" x1="486.25" y1="410.5" x2="486.25" y2="542.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#43DA40"></stop>
                    <stop offset="1" stopColor="#2F28A9"></stop>
                    </linearGradient>
                    </defs>
                </motion.svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}