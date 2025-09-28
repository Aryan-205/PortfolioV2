// DesignGalleryMasonry.jsx

import React from 'react';

const designs = Array.from({ length: 21 }, (_, i) => ({
  id: i + 1,
  src: `/designs/d${i + 1}.png`, 
}));

const DesignCard = ({ design }) => {
    return (
        <div className='pb-4 hover:scale-105 transition-all duration-300 ease-in-out'>
            <img 
                src={design.src} 
                alt={design.title} 
                className="w-full h-auto block rounded-md"
            />
        </div>
    );
};

export default function DesignGalleryMasonry() {
    return (
        // Added max-w-6xl for better centering and padding-y for breathing room
        <div className="w-full h-full pt-8 pb-16 px-4">
            <div 
                className="max-w-6xl mx-auto md:columns-4"
            >
                {designs.map(design => (
                    <DesignCard key={design.id} design={design} />
                ))}
            </div>
        </div>
    );
};