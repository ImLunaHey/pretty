"use client";
import { cn } from "@/cn";
import { motion } from "framer-motion";

export const Glow: React.FC<{
  children?: React.ReactNode;
  width?: number;
  height?: number;
  background?: string;
}> = ({ children, width = 200, height = 200, background = "black" }) => {
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
    >
      <motion.div
        className={cn(
          "absolute top-[-25%] left-[-25%]",
          "bg-gradient-conic from-white to-[transparent]"
        )}
        style={{
          width: width * 1.5,
          height: height * 1.5,
        }}
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", duration: 3.5, repeat: Infinity }}
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
