"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TwitterLogo,
  InstagramLogo,
  Envelope,
  BehanceLogo,
  LinkedinLogo,
  Phone,
} from "@phosphor-icons/react";

const socials = [
  {
    icon: <TwitterLogo size={28} weight="fill" />, // slightly smaller for mobile
    link: "https://x.com/debrajukpor?s=21&t=HRs1jcDIrAKmHLtPgobXJQ",
  },
  {
    icon: <LinkedinLogo size={28} weight="fill" />,
    link: "https://www.linkedin.com/in/deborah-jukpor-a541b4173?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  { icon: <Phone size={28} weight="fill" />, link: "#" },
  { icon: <Envelope size={28} weight="fill" />, link: "#" },
];

const ReachMe = () => {
  return (
    <div className="w-full bg-white px-6 py-16 sm:px-10 md:px-16 lg:px-20">
      <div className="max-w-400 mx-auto text-center">
        <p className="text-3xl sm:text-4xl xl:text-6xl font-bold mb-3 text-black tracking-tighter">
          Have an Idea?
        </p>
        <p className="text-xl sm:text-2xl xl:text-4xl font-medium mb-10 text-black tracking-tighter">
          Let&apos;s Connect!
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 mt-10">
          {socials.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              whileHover={{
                y: -6,
                scale: 1.12,
                boxShadow: "0px 12px 25px rgba(0,0,0,0.20)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="bg-white p-4 sm:p-5 rounded-3xl shadow-md border border-gray-200 
                         flex items-center justify-center
                         hover:shadow-xl cursor-pointer 
                         active:scale-95"
            >
              <div className="text-black">{item.icon}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReachMe;
