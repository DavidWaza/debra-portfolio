import { GraduationCap, HouseLine } from "@phosphor-icons/react";
import { Wallet, Receipt } from "@phosphor-icons/react/dist/ssr";
import { s } from "motion/react-client";

export const caseStudies = [
  {
    index: 1,
    title: "Asterlio CRM.",
    date: "August 2025",
    role: "UX research and flow design, Information architecture & wireframing, UI design and dashboard visualization, Usability testing and iteration.",
    subRole: "Product Designer | UI/UX Designer",
    location: "Abuja, Nigeria",
    description:
      "Asterlio is a client facing customer relationship management system designed to help organizations handle real time customer interactions efficiently. Asterlio was built for scalability, transparency...",
    projectType: "Content Management System",
    image: "/assets/kippacase.avif",
    logoHero: "/assets/kippa.webp",
    buttonText: "Read Full Case Study",
    buttonLink: "/case-studies/asterlio",

    industries: [
      {
        name: "SAAS",
        icon: Wallet,
        color: "bg-blue-600 text-blue-100",
      },
    ],

    // Optional fields
    deliverables: "Low & High Fidelity Interfaces",
    tools: "Figma, Google Docs",
    context: `Asterlio is a client facing customer relationship management system designed to help organizations handle real time customer interactions efficiently. Asterlio was built for scalability, transparency, and speed, the MVP was developed as an in-house alternative to third-party solutions like Tidio, cutting costs while paving the way for a future SaaS product under Omniswift`,
    goals: [
      "Manage real-time chats and tickets efficiently.",
      "Improve average response and resolution times.",
      "Gain visibility into agent performance and customer satisfaction.",
      "Maintain a clean, intuitive, and scalable interface that supports future SaaS expansion.",
    ],
    objectives: [
      "Transparency: Provide clear visibility into ticket status, response times, and agent activity.",
      "Speed: Ensure quick access to key insights within 2–3 clicks.",
      "Scalability: Design flexible layouts and components to accommodate future SaaS adoption.",
      "User Experience Consistency: Create a unified experience for Admins and Agents through structured navigation and clean data visualization.",
    ],
    challenges: [
      "Limited customization and branding control.",
      "High subscription costs as customer base grew.",
      "No integrated dashboard summarizing activity across channels.",
    ],
    solution: [
      `Color Palette: Blue for trust and consistency, balanced with white backgrounds for readability.`,
      "Typography: Clean sans-serif typeface for clear hierarchy.",
      "Data Visualization: Line graphs and pie charts simplify trend tracking.",
      "Status Indicators: Color-coded tags for ticket categories (Technical, Billing, General, Feature Requests).",
    ],

    solutionImages: ["/assets/kippa/case-2.webp"],
    designProcess: {
      informationArchitecture:
        "Mapped all key workflows and created clear navigation.",
      wireframing:
        "Low-fidelity wireframes followed by clickable high-fidelity prototypes.",
      visualDesign: "Updated color palette, typography, and iconography.",
      responsiveDesign: "Ensured compatibility across web and mobile.",
      accessibility: "Applied WCAG standards for text contrast and usability.",
    },
    CreatingPersonas: [
      "/assets/kippa/case-3.webp",
      "/assets/kippa/case-4.webp",
    ],
    LightActionFigma: [
      "/assets/kippa/case-5.webp",
      "/assets/kippa/case-6.webp",
      "/assets/kippa/case-7.webp",
      "/assets/kippa/case-8.webp",
      "/assets/kippa/case-9.webp",
      "/assets/kippa/case-10.webp",
      "/assets/kippa/case-11.webp",
      "/assets/kippa/case-4.webp",
    ],
  },
  {
    index: 2,
    title: "Kippa.",
    date: "February 2023",
    role: "Product Designer",
    subRole: "Product Designer | UI/UX Designer",
    location: "Lagos, Nigeria",
    description:
      "Kippa Business is a transformative unification process, merging Kippa Core (Book Keeping), KippaPay (POS), and KippaStart (Business registration and legalization) into a single, seamless experience.",
    projectType: "End-to-end Application",
    image: "/assets/kippacase.avif",
    logoHero: "/assets/kippa.webp",
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

    // Optional fields
    deliverables: "Low & High Fidelity Interfaces",
    tools: "Figma, Notion, Google Meet, Google Docs",
    context:
      "The goal was to unify Kippa's ecosystem into a seamless experience and improve usability across all services.",
    universityBackground: undefined,
    challenges: [
      "Fragmented user experience across products.",
      "Complex workflows causing confusion for new users.",
      "Inconsistent UI elements between Kippa apps.",
    ],
    solution: [
      "Redesigned the UI for consistency.",
      "Simplified workflows for key tasks.",
      "Created a unified design system.",
    ],
    solutionImages: ["/assets/kippa/case-2.webp"],
    designProcess: {
      informationArchitecture:
        "Mapped all key workflows and created clear navigation.",
      wireframing:
        "Low-fidelity wireframes followed by clickable high-fidelity prototypes.",
      visualDesign: "Updated color palette, typography, and iconography.",
      responsiveDesign: "Ensured compatibility across web and mobile.",
      accessibility: "Applied WCAG standards for text contrast and usability.",
    },
    CreatingPersonas: [
      "/assets/kippa/case-3.webp",
      "/assets/kippa/case-4.webp",
    ],
    LightActionFigma: [
      "/assets/kippa/case-5.webp",
      "/assets/kippa/case-6.webp",
      "/assets/kippa/case-7.webp",
      "/assets/kippa/case-8.webp",
      "/assets/kippa/case-9.webp",
      "/assets/kippa/case-10.webp",
      "/assets/kippa/case-11.webp",
      "/assets/kippa/case-4.webp",
    ],
  },

  {
    index: 3,
    title: "Residentley.",
    date: "January 2024",
    role: "Product Designer",
    subRole: "Product Designer | UI/UX Designer",
    location: "Lagos, Nigeria",
    description:
      "Residentley is a mobile and web application that improves how residents in gated communities interact with property owners or estate managers.",
    projectType: "Mobile & Web Application",
    image: "/assets/residency.avif",
    logoHero: "/assets/residency.avif",

    buttonText: "Read Full Case Study",
    buttonLink: "/case-studies/residentley",

    industries: [
      {
        name: "Real Estate",
        icon: HouseLine,
        color: "bg-red-600 text-red-100",
      },
    ],

    // Optional fields
    deliverables: "UI/UX designs for mobile and web",
    tools: "Figma, Notion, User Testing",
    context:
      "Aimed to improve resident satisfaction and streamline communication with estate management.",
    universityBackground: undefined,
    goals: [
      "Create a unified platform for property admin management",
      "Improve communication between landlords, property managers, and tenants.",
      "Visitor access through host profile",
      "Design an intuitive and accessible mobile app for all user types.",
    ],
    goalsImages: ["/assets/residently/case-4.webp"],
    challenges: [
      "Fragmented Processes: Property management tasks were handled through multiple platforms, causing confusion and inefficiency..",
      "Poor Communication: Inability of estate occupants to channel and follow up the their complain through the right  leads to delay in resolving tenant issues.",
      "Difficulty in granting visitors access: Grant easy access to guest coming into the estate.",
    ],
    challengesImages: ["/assets/residency/case-6.webp"],

    solution: [
      "Centralized communication platform.",
      "Intuitive interface for reporting issues and paying dues.",
    ],
    solutionImages: [
      "/assets/residently/case-2.webp",
      "/assets/residently/case-3.webp",
    ],
    designProcess: {
      informationArchitecture:
        "Created user flows for residents and estate managers.",
      wireframing:
        "Designed low and high fidelity wireframes for mobile and web.",
      visualDesign: "Modern, clean UI with clear hierarchy.",
      responsiveDesign: "Mobile-first design approach.",
      accessibility: "Ensured clear text and touch targets.",
      personas: "Residents, estate managers, and property owners.",
      componentsLibrary: "Reusable UI kit for both platforms.",
    },
  },

  {
    index: 4,
    title: "Veritas University.",
    date: "October 2024",
    role: "Product Designer",
    subRole: "Product Designer | UI/UX Designer",
    location: "Nigeria",
    description:
      "Redesigned the website for Veritas University to enhance a modern experience for users.",
    projectType: "Web Application",
    image: "/assets/veritas.avif",
    logoHero: "/assets/veritas.avif",
    buttonText: "Read Full Case Study",
    buttonLink: "/case-studies/veritas",

    industries: [
      {
        name: "Education",
        icon: GraduationCap,
        color: "bg-green-600 text-green-100",
      },
    ],

    // Optional fields
    deliverables: "Website redesign with updated UI and UX",
    tools: "Figma, Notion, User Research",
    context:
      "Veritas University wanted a modern website to improve usability and engagement for students, parents, and alumni.",
    universityBackground:
      "Veritas University, located in Abuja, Nigeria, was established over 23 years ago by the Catholic Church.",
    challenges: [
      "Outdated design with poor navigation.",
      "Low mobile responsiveness.",
      "High bounce rates due to poor UX.",
    ],
    solution: [
      "Redesigned the website with modern UI/UX.",
      "Improved navigation and accessibility.",
      "Implemented responsive design.",
    ],
    designProcess: {
      informationArchitecture:
        "Restructured website sections and navigation menus.",
      wireframing: "Created wireframes for desktop and mobile screens.",
      visualDesign:
        "Modern color palette and typography consistent with brand.",
      responsiveDesign: "Fully responsive design across all devices.",
      accessibility: "Ensured compliance with WCAG guidelines.",
      personas: "Students, parents, faculty, and alumni.",
      componentsLibrary:
        "Built Figma component library for future scalability.",
    },
  },
];
