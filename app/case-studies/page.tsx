// /app/case-studies/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "../utils/data";

export default function CaseStudiesIndex() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-extrabold">Case Studies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((cs) => (
          <Link key={cs.index} href={`/case-studies/${cs.index}`} className="group">
            <div className="rounded-xl overflow-hidden shadow-lg border border-white/6">
              {cs.image && (
                <Image src={cs.image} alt={cs.title} width={1200} height={700} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
              )}
              <div className="p-4 bg-(--card)">
                <h3 className="text-2xl font-semibold text-(--card-foreground)">{cs.title}</h3>
                <p className="mt-2 text-(--card-foreground)">{cs.description}</p>
                <div className="mt-3 flex gap-2">
                  {cs.industries?.map((ind, i) => {
                    const Icon = ind.icon;
                    return (
                      <div key={i} className={`${ind.color} px-2 py-1 rounded-full text-xs font-medium flex items-center gap-2`}>
                        {Icon && <Icon size={14} />}
                        {ind.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
