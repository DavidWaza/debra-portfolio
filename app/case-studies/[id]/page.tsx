"use client";

import { caseStudies } from "@/app/utils/data";
import { useParams } from "next/navigation";
import IndividualCaseStudy from "../components/individualCaseStudy";


const CaseStudyPage = () => {
  const params = useParams();
  const id = params?.id;

  const caseStudy = caseStudies.find(
    (item) => item.index.toString() === id || item.buttonLink?.includes(id as string)
  );

  if (!caseStudy) {
    return <p className="text-center mt-20 text-xl">Case study not found.</p>;
  }

  return (
    <IndividualCaseStudy
      title={caseStudy.title}
      image={caseStudy.logoHero}
      role={caseStudy.role}
      duration={caseStudy.date} 
      deliverables={caseStudy.deliverables}
      tools={caseStudy.tools}
      context={caseStudy.context}
      universityBackground={caseStudy.universityBackground}
      challenges={caseStudy.challenges}
      solution={caseStudy.solution}
      solutionImages={caseStudy.solutionImages || []}
      creatingPersonas={caseStudy.CreatingPersonas}
      lightActionFigma={caseStudy.LightActionFigma}
      designProcess={caseStudy.designProcess}
    />
  );
};

export default CaseStudyPage;
