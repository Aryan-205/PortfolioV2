import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";

export default function About() {

  const [time, setTime] = useState(new Date());
  const [svgActive, setSvgActive] = useState(false); 

  // useScroll returns scrollYProgress as a MotionValue
  const {scrollYProgress} = useScroll(); 

  useEffect(() => {
    // 1. Setup for the clock interval
    const interval = setInterval(() => {
      setTime(new Date());  
    }, 1000);

    // 2. Setup for the scroll event listener (MotionValue subscription)
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Trigger the animation when the scroll progress is almost at the end (e.g., > 95%)
      if (latest > 0.95) {
        setSvgActive(true);
      } else {
        setSvgActive(false);
      }
    });

    // 3. Cleanup function for both the interval and the scroll subscription
    return () => {
        clearInterval(interval);
        unsubscribe(); // Stop listening to the MotionValue changes
    };
  }, [scrollYProgress]);

  return (
    <div className="h-screen w-full relative bg-white border-black">
      <div className="py-6 px-8">
        <p className="text-9xl text-semibold">Know about Me </p>
      </div>
      <div className="p-6 h-[76%]">
        <div className="flex justify-center items-center w-full h-full bg-black rounded-[48px] p-12">
          <img
            src="/Me1.jpeg"
            className="h-full rounded-l-2xl"
            alt=""
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
                <p>
                  {
                    time.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true
                  })}
                </p>
                <p>Delhi, India</p>
              </div>
              <div className="absolute bottom-10 right-20 z-50">
                {/* <img className="w-0 object-contain" src="/Sign1.png"/> */}
                <svg className={svgActive ? "active w-80 object-contain" : ""}  viewBox="0 0 973 635" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M140 306C140 306 147.752 340.505 183 365.5C276.001 431.448 367.921 195.821 408.662 71.6995C414.046 55.2967 439.478 57.0665 442.161 74.1205L480.636 318.691C483.016 333.818 464.686 343.52 453.431 333.136C396.642 280.739 286.04 182.141 247.323 172.017C241.953 170.613 237.669 174.79 236.415 180.197C228.258 215.37 201.657 346.065 258.5 339.593C382.66 325.456 435.534 289.077 500.3 177.081C501.086 175.721 501.728 173.999 502.099 172.473C517.121 110.756 487.634 363.284 571 351C653.199 338.888 644.868 224.5 644.868 149.5C644.868 -8.95898 636.023 468.003 633.605 601.375C633.36 614.902 617.834 621.372 608.231 611.843C581.759 585.571 541.743 541.036 528 500C470.47 328.221 814.172 299.393 755.5 128C742.208 89.1702 729.074 62.0336 718.82 44.1045C711.994 32.1686 697.01 36.4405 695.739 50.1318L669.002 338.162C667.227 357.279 697.015 363.546 703.691 345.545C719.25 303.589 734.908 266.282 744.5 256.5C795 205 815.5 259.5 815.5 321C815.5 375.669 859 373 859 373" stroke="url(#paint0_linear_367_183)" stroke-width="32" stroke-linecap="round" class="svg-elem-1"></path>
                <path d="M16 476.5C22.4 476.5 645.667 398.833 956.5 360" stroke="url(#paint1_linear_367_183)" stroke-width="32" stroke-linecap="round" class="svg-elem-2"></path>
                <path d="M16 542.5L925.678 414.826C938.572 413.016 948.113 426.544 942.082 438.083L887.5 542.5" stroke="url(#paint2_linear_367_183)" stroke-width="32" stroke-linecap="round" class="svg-elem-3"></path>
                <path d="M140 306C140 306 147.752 340.505 183 365.5C276.001 431.448 367.921 195.821 408.662 71.6995C414.046 55.2967 439.478 57.0665 442.161 74.1205L480.636 318.691C483.016 333.818 464.686 343.52 453.431 333.136C396.642 280.739 286.04 182.141 247.323 172.017C241.953 170.613 237.669 174.79 236.415 180.197C228.258 215.37 201.657 346.065 258.5 339.593C382.66 325.456 435.534 289.077 500.3 177.081C501.086 175.721 501.728 173.999 502.099 172.473C517.121 110.756 487.634 363.284 571 351C653.199 338.888 644.868 224.5 644.868 149.5C644.868 -8.95898 636.023 468.003 633.605 601.375C633.36 614.902 617.834 621.372 608.231 611.843C581.759 585.571 541.743 541.036 528 500C470.47 328.221 814.172 299.393 755.5 128C742.208 89.1702 729.074 62.0336 718.82 44.1045C711.994 32.1686 697.01 36.4405 695.739 50.1318L669.002 338.162C667.227 357.279 697.015 363.546 703.691 345.545C719.25 303.589 734.908 266.282 744.5 256.5C795 205 815.5 259.5 815.5 321C815.5 375.669 859 373 859 373" stroke="#161716" stroke-width="5" stroke-linecap="round" class="svg-elem-4"></path>
                <path d="M16 476.5C22.4 476.5 645.667 398.833 956.5 360" stroke="#161716" stroke-width="5" stroke-linecap="round" class="svg-elem-5"></path>
                <path d="M16 542.5L925.678 414.826C938.572 413.016 948.113 426.544 942.082 438.083L887.5 542.5" stroke="#161716" stroke-width="5" stroke-linecap="round" class="svg-elem-6"></path>
                <defs>
                <linearGradient id="paint0_linear_367_183" x1="499.5" y1="0" x2="499.5" y2="635" gradientUnits="userSpaceOnUse">
                <stop stop-color="#43DA40"></stop>
                <stop offset="1" stop-color="#2F28A9"></stop>
                </linearGradient>
                <linearGradient id="paint1_linear_367_183" x1="486.25" y1="360" x2="486.25" y2="476.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#43DA40"></stop>
                <stop offset="1" stop-color="#2F28A9"></stop>
                </linearGradient>
                <linearGradient id="paint2_linear_367_183" x1="486.25" y1="410.5" x2="486.25" y2="542.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#43DA40"></stop>
                <stop offset="1" stop-color="#2F28A9"></stop>
                </linearGradient>
                </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
