"use client";

import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="w-full bg-black text-white py-24 overflow-hidden">
      <div className="px-5 xl:px-30 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full flex justify-center"
        >
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#CCB078]/30 to-transparent blur-2xl -z-10" />

          {/* Image takes natural height */}
          <img
            src="/assets/oba-yellow.png"
            alt="Debra"
            className="w-full xl:h-150 object-cover"
          />
        </motion.div>

        {/* LEFT — TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="uppercase tracking-widest text-[#CCB078]/80 text-sm">
            ( About Me )
          </p>

          <h2 className="text-2xl xl:text-5xl font-extrabold leading-tight">
            Transforming Ideas into{" "}
            <span className="text-[#CCB078]">Visually Stunning Realities</span>
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Hi, I&apos;m Debra, a UI/UX Designer with over 4 years of experience
            designing for Fintech, E-commerce, Transport, and Logistics
            organisations.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I specialise in crafting intuitive, user-centered digital
            experiences that blend usability and aesthetics. Over the years,
            I’ve delivered impactful products that connect businesses and users
            meaningfully.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Outside of work, I enjoy reading novels, long walks, and working out
            — moments that help me recharge, think creatively, and stay
            inspired.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 px-7 py-3 bg-[#CCB078] text-black rounded-lg font-medium hover:bg-[#bca273] transition"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* RIGHT — IMAGE */}
      </div>
    </section>
  );
};

export default AboutUs;
