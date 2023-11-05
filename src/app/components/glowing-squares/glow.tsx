'use client';
import { cn } from '@/cn';
import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

export const Glow: React.FC<{
  children?: React.ReactNode;
  width?: number;
  height?: number;
  background?: string;
}> = ({ children, width = 200, height = 200, background = 'black' }) => {
  const controls = useAnimation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      className="relative overflow-hidden"
      style={{
        width,
        height,
        background,
      }}
      onHoverStart={() => {
        controls.start({
          rotate: 360,
          transition: {
            ease: 'linear',
            duration: 3.5,
            repeat: Infinity,
          },
        });
      }}
      onHoverEnd={() => {
        setTimeout(() => {
          controls.stop();
        }, 1000);
      }}
    >
      <motion.div
        className={cn('absolute top-[-25%] left-[-25%]', 'bg-gradient-conic from-white to-[transparent]')}
        style={{
          width: width * 1.5,
          height: height * 1.5,
        }}
        animate={controls}
        transition={controls}
      />
      <div
        className="w-[94%] h-[94%] absolute top-[3%] left-[3%]"
        style={{
          background,
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};
