"use client";
import CaseBlock from "./CaseBlock";
import { useRouter } from "next/navigation";
import { caseStudies } from "../utils/data";

const CaseStudy = () => {
  const router = useRouter();
  return (
    <div className="py-20 w-full max-w-400 mx-auto px-10">
      <div className="py-20">
        <p className="text-4xl xl:text-6xl uppercase font-bold">Case study</p>
      </div>
    <div className="space-y-10">
      {caseStudies.map((item, idx) => (
        <CaseBlock
          key={idx}
          index={item.index}
          title={item.title}
          date={item.date}
          role={item.role}
          subRole={item.subRole}
          location={item.location}
          description={item.description}
          projectType={item.projectType}
          image={item.image}
          buttonText={item.buttonText}
          industries={item.industries.map((ind) => {
            const Icon = ind.icon;
            return { ...ind, icon: <Icon /> };
          })}
         onButtonClick={() => router.push(`/case-studies/${item?.index}`)}

        />
      ))}
    </div>
    </div>
  );
};

export default CaseStudy;
