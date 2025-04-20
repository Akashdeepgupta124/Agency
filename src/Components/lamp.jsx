// components/ui/Lamp.jsx

import React from "react";
import { motion } from "framer-motion";
import NavBar from "./Navbar";

// Utility function for className merging
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex h-screen flex-col items-center justify-center overflow-hidden bg-black w-full",
        className
      )}
    >
        <NavBar/>
        
        
        
      <div className="relative flex top-10 w-full flex-1 scale-y-125 items-center justify-center isolate">
        {/* Left Lamp Glow */}
        <motion.div
          initial={{ opacity: 0.3, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.2,
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1], // Custom cubic bezier for smoother animation
          }}
          className="absolute right-1/2 h-56 w-[30rem] bg-gradient-to-r from-orange-500/60 via-orange-400/20 to-transparent"
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, rgb(249, 115, 22), transparent)`,
          }}
        >
          <div className="absolute left-0 bottom-0 w-full h-40 bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute left-0 bottom-0 w-40 h-full bg-black [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right Lamp Glow */}
        <motion.div
          initial={{ opacity: 0.3, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.2,
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1], // Custom cubic bezier for smoother animation
          }}
          className="absolute left-1/2 h-56 w-[30rem] bg-gradient-to-l from-transparent via-orange-400/20 to-orange-500/60"
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, transparent, rgb(249, 115, 22))`,
          }}
        >
          <div className="absolute right-0 bottom-0 w-40 h-full bg-black [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute right-0 bottom-0 w-full h-40 bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Background Blur Effects */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl" />
        <div className="absolute top-1/2 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute -translate-y-1/2 h-40 w-full max-w-md rounded-full bg-orange-400/40 blur-3xl" />

        {/* Animated Glow Circle */}
        <motion.div
          initial={{ width: "8rem", opacity: 0.5 }}
          whileInView={{ width: "16rem", opacity: 0.8 }}
          transition={{
            delay: 0.3,
            duration: 1.5,
            ease: "easeOut",
          }}
          className="absolute -translate-y-24 h-36 w-64 rounded-full bg-orange-300/50 blur-2xl"
        />

        {/* Animated Horizontal Line */}
        <motion.div
          initial={{ width: "15rem", opacity: 0.7 }}
          whileInView={{ width: "30rem", opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: [0.34, 1.56, 0.64, 1], // Spring-like effect
          }}
          className="absolute -translate-y-28 h-0.5 w-full max-w-lg bg-orange-300"
        />

        {/* Subtle Pulsing Effect */}
        <motion.div
          animate={{ 
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute -translate-y-40 h-32 w-32 rounded-full bg-orange-500/30 blur-3xl"
        />

        {/* Top Cover */}
        <div className="absolute -translate-y-52 h-44 w-full bg-black" />
      </div>

      {/* Content Container */}
      <div className="relative flex -translate-y-60 flex-col items-center px-5">
        {children}
      </div>

    </div>
  );
};

// LampDemo component
const LampDemo = () => {
  return (
    <>
    
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1], // Custom ease for text animation
        }}
        className="mt-8 bg-gradient-to-br from-white to-gray-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build Brands <br /> the right way
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.8, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="mt-4 text-center text-white/60 text-lg max-w-lg"
      >
        Creating stunning website with modern design principles
      </motion.p>
    </LampContainer>
   
    </>
  );
};

// Adding a default export for the main component
export default LampDemo;