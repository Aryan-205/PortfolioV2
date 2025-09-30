import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function About() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());  
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full sticky top-0 bg-white border-t-2 border-black rounded-t-2xl">
      <div className="py-6 px-8">
        <p className="text-9xl text-semibold">Know about Me </p>
      </div>
      <div className="p-6 h-[76%]">
        <div className="flex justify-center items-center w-full h-full bg-black rounded-[48px] p-12">
          <img
            src="/Me1.jpeg"
            className="h-full object-contain rounded-l-2xl"
            alt=""
          />
          <div className="w-full h-full pl-6 text-white flex flex-col justify-start items-start gap-12">
            <p className="text-4xl font-semibold">Who am I?</p>
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
            <div>
              <p>
                {
                  time.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: true
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
