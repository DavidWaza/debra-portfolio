"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-full lg:h-240 xl:h-screen w-full bg-black overflow-hidden py-10 md:py-0">
      <div className="xl:max-w-400 mx-auto mt-10">
        <motion.div
          initial={{ scale: 1.1, x: "5%" }}
          animate={{ scale: 1, x: "0%" }}
          transition={{ duration: 2, ease: "circOut", delay: 0.2 }}
          className="absolute inset-0 bg-no-repeat bg-right bg-cover md:bg-size-[70%] lg:bg-size-[60%]"
          style={{
            backgroundImage: 'url("/assets/gemini-oba.png")',
            backgroundPosition: "right center",
            backgroundSize: "40%",
          }}
        />

        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />

        <motion.div
          animate={{ opacity: [0.05, 0.09, 0.05] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none"
        />

        <div className="pointer-events-none absolute inset-0 flex justify-around opacity-[0.06]">
          <span className="w-px bg-white/20"></span>
          <span className="w-px bg-white/20"></span>
          <span className="w-px bg-white/20"></span>
          <span className="w-px bg-white/20"></span>
        </div>
        <div className="flex items-center justify-between relative z-10 max-w-400 mx-auto px-10 xl:mb-10 pt-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className=" text-gray-300 text-sm tracking-widest hidden md:block"
          >
            [ WHERE BEYOND ]
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            className=" text-gray-300 text-sm tracking-widest  hidden md:block"
          >
            PRODUCT DESIGN
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
            className=" text-gray-300 text-sm tracking-widest  hidden md:block"
          >
            [ BREAK THE NORM ]
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="relative h-full max-w-420 mx-auto px-10 flex items-center">
          {/* LEFT SIDE TEXT (ONLY) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="z-10 max-w-xl"
          >
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.22 } },
              }}
              className="uppercase font-extrabold leading-[0.95] xl:mt-30"
            >
              {["Innovate", "For Design", "& execute"].map((line, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={`block text-5xl tracking-tighter lg:text-6xl  xl:text-8xl ${
                    index === 1 ? "text-[#C52429]" : "text-white"
                  }`}
                >
                  {line}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="max-w-md mt-6 text-gray-400 leading-relaxed text-base font-medium"
            >
              Our mission is to elevate your vision through groundbreaking
              design combining artistic flair with strategic insight to create
              memorable experiences that leave a lasting impression.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.4 }}
              whileTap={{ scale: 0.97 }}
              className="
              group relative mt-8 px-7 py-3 bg-[#C52429] text-white rounded-full
              flex items-center gap-2 font-medium 
              shadow-lg shadow-red-900/40 overflow-hidden
              transition-all duration-300 ease-out hover:shadow-xl hover:shadow-red-800/50
            "
            >
              <span
                className="
                absolute inset-0 block w-full h-full bg-white/10
                -skew-x-20 translate-x-[-150%] 
                transition-transform duration-700 ease-in-out
                group-hover:translate-x-[150%]
              "
              />

              {/* Content */}
              <span className="relative z-10">LET&apos;S CONTACT</span>
              <span className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                <ArrowRight size={20} />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
