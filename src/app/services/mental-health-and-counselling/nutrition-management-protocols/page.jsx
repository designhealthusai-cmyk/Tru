import React from "react";
import ContactForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";
import HairHero from "@/components/Hair/HairHero";
import Imagetext from "@/components/Imagetext";
import BenefitsSection from "@/components/weight-management/BenefitsSection";
import ProgramFit from "@/components/NewComponent/ProgramFit";
import ProgramGoals from "@/components/ProgramGoals";
import WhatWeTrack from "@/components/weight-management/WhatWeTrack";
import CtaSection from "@/components/regenerative-therapies/CtaSection";

function Page() {
  // ✅ Centralized Data in Same File
  const data = {
    hero: {
      title: "Nutrition Management Protocols",
      mainImage: "/images/mental/nutrition/2.webp",
      circleImage: "/images/mental/nutrition/1.webp",
    },
    overview: {
      title: "Nutrition Shapes Healing and Performance",
      description:
        "Nutrition shapes healing, metabolism, immunity, cognition, and repair. At TruPeak, we take a clinical approach with precision assessments and personalized plans to manage inflammation, support therapy, aid recovery, and enhance daily performance through evidence-based guidance.",
      image: "/images/mental/nutrition/3.webp",
      reverse: true,
      bgColor: "",
      textColor: "text-two",
      radius: "true",
    },
    programGoals: {
      title: "Why It Matters",
      description:
        "Nutrition plays a direct role in everything from healing and hormone balance to energy and inflammation. Without proper guidance, even a healthy diet can fall short of desired goals. Our protocols are designed to identify what your body needs and deliver it with precision, improving both immediate well-being and long-term health.",
      image: "/images/mental/nutrition/4.webp",
      reverse: false,
    },
    whyTrupeak: {
      title: "How It Works",
      description:
        "Our nutrition protocols are based on a thorough understanding of your internal biochemistry and metabolic needs. Evaluations may include:",
      points: [
        "Macronutrient ratios, nutrient timing, and overall dietary balance",
        "Micronutrient status including vitamins, minerals, and trace elements",
        "Inflammatory markers, oxidative stress, and immune response",
        "Blood sugar control and insulin regulation",
        "Gut health, nutrient absorption, hydration, and electrolyte balance",
        "Mitochondrial function with impact on sleep, energy, body composition, and cognition",
      ],
    },
    benefitsData: {
      title: "Our Support Pathway",
      benefits: [
        {
          text: "Clinical nutrition planning for specific conditions or recovery",
          bgColor: "bg-[#122644]",
        },
        {
          text: "Food-based strategies to reduce inflammation or address sensitivities",
          bgColor: "bg-[#E2C879]",
        },
        {
          text: "Supplementation based on lab-confirmed deficiencies",
          bgColor: "bg-[#122644]",
        },
        {
          text: "Therapeutic meal structuring and nutrient timing",
          bgColor: "bg-[#2C8C72]",
        },
        {
          text: "Digestive support for better absorption and gut resilience",
          bgColor: "bg-[#122644]",
        },
      ],
      bgColor: "bg-white",
    },
    programFit: {
      heading: "Is This Program Right for You?",
      description: "This program is ideal if you:",
      image: "/images/mental/nutrition/5.webp",
      items: [
        "Struggle with persistent issues like fatigue, inflammation, or digestive discomfort despite eating “healthy”",
        "Are managing a chronic condition and want nutrition tailored to support your recovery and therapy",
        "Want precise, lab-guided strategies instead of generic diet plans",
        "Seek sustainable improvements in energy, body composition, cognition, and long-term health",
      ],
      note: "Every plan is based on clinical evidence and personalized assessments to ensure results that fit your body’s unique needs.",
    },
    cta: {
      title: "Ready to Take Control of Your Health?",
      description:
        "Take control of your health with TruPeak’s precision nutrition protocols. Book your appointment today and get a personalized plan designed for your body’s unique needs.",
      buttonText: "Book a Consultation",
      buttonLink: "/contact",
      backgroundImage: "/images/mental/nutrition/6.webp",
    },
  };

  return (
    <div>
      <HairHero {...data.hero} />
      <Imagetext {...data.overview} />
      <ProgramGoals {...data.programGoals} />
      <WhatWeTrack {...data.whyTrupeak} />
      <BenefitsSection {...data.benefitsData} />
      <ProgramFit {...data.programFit} />
      <CtaSection {...data.cta} />
      <ContactSection />
      <ContactForm />
    </div>
  );
}

export default Page;
