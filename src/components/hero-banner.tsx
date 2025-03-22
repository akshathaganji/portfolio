'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  './images/reading.jpg',  // The reading image
  './images/stars.jpg',    // The stars/galaxy image
  './images/library.jpg'   // The library image
];

export default function HeroBanner() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Carousel */}
      {images.map((src, index) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
          <Image
            src={src}
            alt="Banner"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      ))}

      {/* Text Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I am Akshatha Ganji
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl mb-4"
        >
          Welcome to my data science portfolio!
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-200"
        >
          You can find my work, thoughts, and ideas here.
        </motion.p>
      </div>
    </div>
  );
}