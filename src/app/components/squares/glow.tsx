'use client';
import { cn } from '@/cn';
import { motion, useAnimation } from 'framer-motion';

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const Glow: React.FC<{
  children?: React.ReactNode;
  width?: number;
  height?: number;
  background?: string;
}> = ({ children, width = 200, height = 200, background = 'black' }) => {
  const movementControls = useAnimation();
  const opacityControls = useAnimation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={opacityControls}
      className="relative overflow-hidden"
      style={{
        width,
        height,
        background,
      }}
      onHoverStart={() => {
        opacityControls.start({
          opacity: 1,
          transition: {
            ease: 'linear',
            duration: 1,
          },
        });
        movementControls.start({
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
          opacityControls.start({
            opacity: 0,
            transition: {
              ease: 'linear',
              duration: 1,
            },
          });
          setTimeout(() => {
            movementControls.stop();
          }, 1000);
        }, 1000);
      }}
    >
      <motion.div
        initial={{ rotate: randomNumberBetween(0, 360) }}
        className={cn('absolute top-[-25%] left-[-25%]', 'bg-gradient-conic from-white to-[transparent]')}
        style={{
          width: width * 1.5,
          height: height * 1.5,
        }}
        animate={movementControls}
        transition={movementControls}
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
