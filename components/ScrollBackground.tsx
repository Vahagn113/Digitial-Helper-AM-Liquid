'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const ScrollBackground = () => {
  const { scrollYProgress } = useScroll();

  // Parallax values for different background elements
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.6, 0.4]);

  return (
    <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none">
      {/* Subtle Grid - Increased visibility slightly */}
      <div className="absolute inset-0 bg-[radial-gradient(#808080_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.05] dark:opacity-[0.08]" />

      {/* Floating Gradient Orbs - Increased Opacity and Contrast */}
      <motion.div 
        style={{ y: y1, rotate: rotate1, opacity }}
        className="absolute -top-[15%] -left-[15%] w-[90%] h-[90%] rounded-full bg-blue-500/10 blur-[140px] dark:bg-blue-400/15"
      />
      
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[120px] dark:bg-indigo-500/15"
      />

      <motion.div 
        style={{ y: y1, opacity: 0.4 }}
        className="absolute bottom-[0%] left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[100px] dark:bg-cyan-400/15"
      />

      {/* Dynamic Digital Dust / Dots */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 3 + Math.random() * 5, 
              repeat: Infinity,
              delay: Math.random() * 5 
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            className="absolute w-1 h-1 bg-foreground/10 rounded-full"
          />
        ))}
      </div>

      {/* Modern Mesh Grid Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      
      {/* Dynamic Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full opacity-20 [background-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.05)_50%,transparent_100%)] [background-size:100%_4px]" />
      </div>
    </div>
  );
};
