// HorizontalScrollSection.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import About from "./About";
import TechStack from "./TechStack";

export default function HorizontalScrollSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div ref={containerRef} className="h-[200vh] w-screen relative">
      <div className="sticky top-0 flex items-center h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex">
          <About />
          <TechStack />
        </motion.div>
      </div>
    </div>
  );
}