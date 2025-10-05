// DesignGalleryMasonry.jsx

import React from 'react';
import {motion} from "motion/react"

const designs = Array.from({ length: 21 }, (_, i) => ({
  id: i + 1,
  src: `/designs/d${i + 1}.png`, 
}));

const DesignCard = ({ design }) => {
    return (
        <motion.div 
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                type: "spring", 
                stiffness: 100, 
                damping: 18,    
                duration: 0.8   
            }}
            className='group transition-all duration-300 ease-in-out overflow-hidden relative mb-4'>
            <img 
                src={design.src}
                className="w-full h-auto block object-cover transition-all duration-500 "
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/80  to-transparent 
                flex flex-col justify-end p-6 z-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                <p className='text-sm text-gray-300'>Design by <span className="font-medium text-amber-500">Aryan Bola</span></p>
            </div>
        </motion.div>
    );
};

export default function DesignGalleryMasonry() {
    return (
        // Added max-w-6xl for better centering and padding-y for breathing room
        <div className="w-full h-full pt-8 pb-16 px-4">
            <div 
                className="max-w-6xl columns-2 md:columns-4"
            >
                {designs.map(design => (
                    <DesignCard key={design.id} design={design} />
                ))}
            </div>
        </div>
    );
};