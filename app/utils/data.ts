import { GraduationCap, HouseLine } from "@phosphor-icons/react";
import { Wallet, Receipt } from "@phosphor-icons/react/dist/ssr";

export const caseStudies = [
  {
    index: 1,
    title: "Kippa.",
    date: "February 2023",
    role: "Product Designer",
    subRole: "Product Designer | UI/UX Designer",
    location: "Lagos, Nigeria",
    description:
      "Kippa Business is a transformative unification process, merging Kippa Core (Book Keeping), KippaPay (POS), and KippaStart (Business registration and legalization) into a single, seamless experience.",
    projectType: "End-to-end Application",
    image: "/assets/kippacase.avif",
    buttonText: "Read Full Case Study",
    buttonLink: "/case-studies/kippa",

    industries: [
      {
        name: "Fintech",
        icon: Wallet,
        color: "bg-blue-600 text-blue-100",
      },
      {
        name: "Bookkeeping",
        icon: Receipt,
        color: "bg-emerald-600 text-emerald-100",
      },
    ],
  },

  {
    index: 2,
    title: "Residentley.",
    date: "January 2024",
    role: "Product Designer",
    subRole: "Product Designer | UI/UX Designer",
    location: "Lagos, Nigeria",
    description:
      "Residentley is a mobile and web application that aims to improve how residents in a gated community interact with property owners or estate managers.",
    projectType: "Mobile & Web Application",
    image: "/assets/residency.avif",
    buttonText: "Read Full Case Study",
    buttonLink: "/case-studies/residentley",

    industries: [
      {
        name: "Real Estate",
        icon: HouseLine, 
        color: "bg-red-600 text-red-100",
      },
    ],
  },

  {
    index: 3,
    title: "Veritas University.",
    date: "October 2024",
    role: "Product Designer",
    subRole: "Product Designer | UI/UX Designer",
    location: "Nigeria",
    description:
      "Redesigned the website for Veritas University to ehance a modern experience for users.",
    projectType: "Web Application",
    image: "/assets/veritas.avif",
    buttonText: "Read Full Case Study",
    buttonLink: "/case-studies/veritas",

    industries: [
      {
        name: "Education",
        icon: GraduationCap, 
        color: "bg-green-600 text-green-100",
      },
    ],
  },
];
