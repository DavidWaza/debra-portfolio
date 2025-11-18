"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface DesignProcess {
  informationArchitecture?: string;
  wireframing?: string;
  visualDesign?: string;
  responsiveDesign?: string;
  accessibility?: string;
  personas?: string;
  componentsLibrary?: string;
}

interface CaseStudyProps {
  title?: string;
  role?: string;
  duration?: string;
  deliverables?: string;
  tools?: string;
  context?: string;
  universityBackground?: string;
  challenges?: string[];
  solution?: string[];
  solutionImages?: string[];
  designProcess?: DesignProcess;
  creatingPersonas?: string[];
  lightActionFigma?: string[];
  image?: string;
  goals?: string[];
  goalsImages?: string[];
  objective?: string[];
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12 },
  }),
};

// ✅ Reusable Section Component
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Card className="bg-(--card) shadow-lg border border-white/10">
    <CardHeader className="text-2xl font-bold text-(--card-foreground)">
      {title}
    </CardHeader>
    <CardContent className="text-(--card-foreground) space-y-4">
      {children}
    </CardContent>
  </Card>
);

// ✅ Reusable Image Grid Component
const ImageGrid = ({ images }: { images: string[] }) => (
  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {images.map((img, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Image
          alt={`case-study-image-${idx}`}
          src={img}
          width={800}
          height={600}
          className="rounded-xl shadow-lg border border-white/10 object-cover"
        />
      </motion.div>
    ))}
  </div>
);

const IndividualCaseStudy: React.FC<CaseStudyProps> = ({
  title,
  role,
  duration,
  deliverables,
  tools,
  context,
  universityBackground,
  goals,
  goalsImages,
  challenges,
  solution,
  solutionImages,
  designProcess,
  creatingPersonas,
  lightActionFigma,
  objective,
  image,
}) => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12 text-white">
      {/* ✅ BEAUTIFUL HERO IMAGE */}
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src={image}
            alt={title || "hero image"}
            width={1600}
            height={800}
            className="w-full h-[420px] object-cover rounded-2xl shadow-xl border border-white/10"
          />
        </motion.div>
      )}

      {/* ✅ HEADER SECTION */}
      <div className="space-y-4">
        {title && (
          <h1 className="text-5xl font-extrabold tracking-tight">{title}</h1>
        )}

        <div className="space-y-2 text-lg text-gray-300">
          {role && (
            <p>
              <b className="text-white">Role(s):</b> {role}
            </p>
          )}
          {duration && (
            <p>
              <b className="text-white">Duration:</b> {duration}
            </p>
          )}
          {deliverables && (
            <p>
              <b className="text-white">Deliverables:</b> {deliverables}
            </p>
          )}
          {tools && (
            <p>
              <b className="text-white">Tools:</b> {tools}
            </p>
          )}
        </div>
      </div>

      {/* ✅ CONTEXT */}
      {context && (
        <Section title="Project Context">
          <p>{context}</p>
        </Section>
      )}

      {/* GOALS */}
      {goals && goals.length > 0 && (
        <Section title="Goals">
          <ul className="space-y-2 list-disc list-inside">
            {goals.map((s, i) => (
              <motion.li
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
              >
                {s}
              </motion.li>
            ))}
          </ul>

          {goalsImages && goalsImages.length > 0 && (
            <ImageGrid images={goalsImages} />
          )}
        </Section>
      )}

      {/* OBJECTIVES */}
      {objective && objective.length > 0 && (
        <Section title="Objective">
          <ul className="space-y-2 list-disc list-inside">
            {objective.map((s, i) => (
              <motion.li
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
              >
                {s}
              </motion.li>
            ))}
          </ul>
        </Section>
      )}

      {/* ✅ UNIVERSITY BACKGROUND */}
      {universityBackground && (
        <Section title="University Background">
          <p>{universityBackground}</p>
        </Section>
      )}

      {/* ✅ CHALLENGES */}
      {challenges && challenges.length > 0 && (
        <Section title="Challenges">
          <ul className="space-y-2 list-disc list-inside">
            {challenges.map((c, i) => (
              <motion.li
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
              >
                {c}
              </motion.li>
            ))}
          </ul>
        </Section>
      )}
      {/* ✅ SOLUTION */}
      {solution && solution.length > 0 && (
        <Section title="Solution">
          <ul className="space-y-2 list-disc list-inside">
            {solution.map((s, i) => (
              <motion.li
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
              >
                {s}
              </motion.li>
            ))}
          </ul>

          {solutionImages && solutionImages.length > 0 && (
            <ImageGrid images={solutionImages} />
          )}
        </Section>
      )}

      {/* ✅ DESIGN PROCESS */}
      {designProcess && (
        <Section title="Design Process">
          {Object.entries(designProcess).map(([key, value], i) =>
            value ? (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
                className="space-y-1"
              >
                <h3 className="text-xl font-semibold">
                  {key.replace(/([A-Z])/g, " $1")}
                </h3>
                <p>{value}</p>
              </motion.div>
            ) : null
          )}
        </Section>
      )}

      {/* ✅ PERSONA IMAGES */}
      {creatingPersonas && creatingPersonas.length > 0 && (
        <Section title="Creating Personas">
          <ImageGrid images={creatingPersonas} />
        </Section>
      )}

      {/* ✅ FIGMA LIGHT ACTION IMAGES */}
      {lightActionFigma && lightActionFigma.length > 0 && (
        <Section title="Figma UI Screens">
          <ImageGrid images={lightActionFigma} />
        </Section>
      )}
    </div>
  );
};

export default IndividualCaseStudy;
