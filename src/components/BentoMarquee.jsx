// BentoMarquee.jsx
import { motion } from 'framer-motion';

const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"], // Animate from 0% to -100% of its own width
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 2, // Adjust duration for speed
        ease: "linear",
      },
    },
  },
};

const BentoMarquee = () => {
  return (
    <div className="bento-grid-item overflow-hidden">
      <motion.div
        className="flex"
        variants={marqueeVariants}
        animate="animate"
      >
        {/* Your project images */}
        <img src="your-project-image.jpg" alt="Project Image 1" className="w-full h-auto object-cover flex-shrink-0" />
        <img src="your-project-image.jpg" alt="Project Image 2" className="w-full h-auto object-cover flex-shrink-0" />
        <img src="your-project-image.jpg" alt="Project Image 1" className="w-full h-auto object-cover flex-shrink-0" />
        <img src="your-project-image.jpg" alt="Project Image 2" className="w-full h-auto object-cover flex-shrink-0" />
        <img src="your-project-image.jpg" alt="Project Image 1" className="w-full h-auto object-cover flex-shrink-0" />
        <img src="your-project-image.jpg" alt="Project Image 2" className="w-full h-auto object-cover flex-shrink-0" />
      </motion.div>
    </div>
  );
};

export default BentoMarquee;