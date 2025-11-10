// /components/ImageGrid.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const ImageGrid: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.28, delay: i * 0.06 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden"
        >
          <Image
            src={img}
            alt={`case-image-${i}`}
            width={1200}
            height={800}
            className="object-cover w-full h-56 sm:h-44 lg:h-56 rounded-xl shadow-lg border border-white/8"
          />
        </motion.div>
      ))}
    </div>
  );
};
