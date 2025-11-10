"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

interface CaseBlockProps {
  index?: number;
  title: string;
  date: string;
  role: string;
  subRole?: string;
  location: string;
  description: string;
  projectType: string;
  industries?: {
    name: string;
    icon: React.ReactNode;
    color: string;
  }[];
  image: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const CaseBlock: React.FC<CaseBlockProps> = ({
  index = 1,
  title,
  date,
  role,
  subRole,
  location,
  description,
  projectType,
  industries = [],
  image,
  buttonText = "View Case Study",
  onButtonClick,
}) => {
  const indexColors = [
    { bg: "bg-blue-900", ring: "ring-blue-700/40" },
    { bg: "bg-red-900", ring: "ring-red-700/40" },
    { bg: "bg-emerald-900", ring: "ring-emerald-700/40" },
    { bg: "bg-purple-900", ring: "ring-purple-700/40" },
    { bg: "bg-yellow-800", ring: "ring-yellow-600/40" },
    { bg: "bg-orange-900", ring: "ring-orange-700/40" },
  ];

  const color = indexColors[(index - 1) % indexColors.length];

  return (
    <div className="w-full flex items-center xl:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-20 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="xl:flex items-start gap-10">
            {/* INDEX BADGE */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, ease: "backOut" }}
              viewport={{ once: true }}
              className={`
    p-5 text-white text-xl mb-5 font-bold rounded-3xl shadow-lg
    flex items-center justify-center aspect-square h-16 w-16
    ${color.bg} ring-4 ${color.ring}
  `}
            >
              {index}
            </motion.div>

            {/* IMAGE + BUTTON */}
            <div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={image}
                  alt={title}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* BUTTON */}
              <div className="hidden xl:flex items-center justify-center mt-20">
                <button
                  onClick={onButtonClick}
                  className={`rounded-xl py-2 px-4 ${color.bg} hover:${color.ring} cursor-pointer
                             text-white font-semibold shadow-lg hover:shadow-xl 
                             transition-shadow duration-300`}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          {/* TITLE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            {title}
          </motion.p>

          {/* DATE + ROLE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="text-xl mt-5 font-extrabold tracking-tight text-gray-500"
          >
            {date} &nbsp;||&nbsp;
            <span className="text-white">{role}</span>&nbsp;||&nbsp;
            {location}
          </motion.p>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-5 text-gray-400 text-lg max-w-md leading-relaxed"
          >
            {description}
          </motion.p>

          {/* PRODUCT DETAILS */}
          <div className="mt-10 space-y-5">
            {/* Project Type */}
            <DetailItem label="Project Type" value={projectType} />

            <DetailItem label="Role(s)" value={subRole || ""} />

            {/* Industries */}
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500 font-medium mb-2">
                Industry
              </p>
              <div className="flex flex-wrap gap-3">
                {industries.map((ind, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold ${ind.color} shadow-md`}
                  >
                    {ind.icon}
                    {ind.name}
                  </motion.div>
                ))}
              </div>
              <div className="xl:hidden flex items-center justify-start my-10">
                <button
                  onClick={onButtonClick}
                  className={`rounded-xl py-2 px-4 ${color.bg} hover:${color.ring} cursor-pointer
                             text-white font-semibold shadow-lg hover:shadow-xl 
                             transition-shadow duration-300`}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface DetailItemProps {
  label: React.ReactNode;
  value: React.ReactNode;
  icon?: React.ReactNode;
}
const DetailItem: React.FC<DetailItemProps> = ({ label, value, icon }) => (
  <div>
    <p className="text-sm uppercase tracking-wide text-gray-500 font-medium mb-1">
      {label}
    </p>

    <div className="flex items-center gap-3 text-white text-lg font-semibold">
      {icon && (
        <span className="text-gray-400">
          {typeof icon === "function" ? (
            React.createElement(icon, { size: 30, weight: "fill" })
          ) : (
            icon
          )}
        </span>
      )}
      {value}
    </div>
  </div>
);


export default CaseBlock;
