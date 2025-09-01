"use client";
import React from "react";
import HairHero from "@/components/Hair/HairHero";
import Imagetext from "@/components/Imagetext";
import Cards from "@/components/cards";
import ProgramFit from "@/components/NewComponent/ProgramFit";
import WhatWeTrack from "@/components/weight-management/WhatWeTrack";
import FAQSection from "@/components/NewComponent/FAQSection";
import ProcedureSummary from "@/components/NewComponent/ProcedureSummary";
import ContactSection from "@/components/ContactSection";
import ContactForm from "@/components/ContactForm";

// ✅ Centralized Data
const pageData = {
  hero: {
    title: "Endurance Boost",
    mainImage: "/images/ergogenic/ergogenic/endurance-boost/2.webp",
    circleImage: "/images/ergogenic/ergogenic/endurance-boost/1.webp"
  },

  overview: {
    description:
      "Endurance is about how well your body performs under physical, mental, and emotional stress. Whether you are an athlete, professional, or recovering from illness, it relies on optimized energy, recovery, and resilience. At TruPeak, our Endurance Boost Program uses metabolic insights and performance biomarkers to help you go further, stay focused, and recover faster, safely and sustainably.",
    image: "/images/ergogenic/ergogenic/endurance-boost/3.webp",
    reverse: true,
    bgColor: "",
    textColor: "text-two",
    radius: "true"
  },

  cards: [
    {
      title: "NAD⁺ & B-Complex Infusions",
      description: [
        "Improve mitochondrial energy production and reduce fatigue at the cellular level."
      ]
    },
    {
      title: "Amino Acid Support",
      description: [
        "Custom blends to maintain muscle function and endurance over longer activity periods."
      ]
    },
    {
      title: "Adaptogens & Peptide Therapy",
      description: [
        "Regulate stress response, reduce inflammation, and support hormonal balance."
      ]
    },
    {
      title: "IV Therapy for Hydration & Micronutrients",
      description: [
        "Replenish electrolytes, clear toxins, and restore internal balance."
      ]
    },
    {
      title: "Oxygenation & Breathing Support",
      description: [
        "Enhance VO₂ efficiency and post-exertion oxygen recovery."
      ]
    }
  ],

  programFit: {
    heading: "Is This Right for You?",
    description: "You may benefit from the Endurance Boost program if:",
    image: "/images/ergogenic/ergogenic/endurance-boost/4.webp",
    items: [
      "You struggle with fatigue during physical or mental tasks",
      "You are preparing for endurance events or intense physical training",
      "You are recovering from chronic fatigue, illness, or burnout",
      "You want to enhance your energy levels without stimulants",
      "You are looking for clinical solutions beyond supplements or training apps"
    ]
  },

  whyTrupeak: {
    title: "Benefits of Endurance Boost at Trupeak",
    points: [
      "Personalized, data-driven programs targeting endurance systems",
      "Cellular-level interventions that improve energy and performance",
      "Safe, non-surgical solutions with physician monitoring",
      "Ideal for athletes, professionals, and recovery patients",
      "Focused on both stamina and recovery optimization"
    ]
  },

  procedureSummary: {
    heading: "Procedure Summary",
    procedures: [
      {
        title: "Biological Assessment",
        description:
          "We evaluate mitochondrial efficiency, oxygen use, inflammatory status, and nutrient gaps."
      },
      {
        title: "Customized Intervention Plan",
        description:
          "Includes NAD⁺, peptides, amino acids, IV support, and lifestyle coaching."
      },
      {
        title: "Monitoring & Support",
        description:
          "Ongoing tracking of fatigue, sleep, and performance metrics with expert adjustments."
      }
    ]
  },

  faq: {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What’s the difference between this and general fitness coaching?",
        answer:
          "Our program is medically designed using real-time biological data, not just workout routines or diet advice."
      },
      {
        question: "Will this help with brain fog or post-illness fatigue?",
        answer:
          "Yes. Many patients see improved mental clarity and energy after fatigue-related illnesses."
      },
      {
        question: "How soon can I expect to feel results?",
        answer:
          "Most clients report noticeable improvements in energy and recovery within 2–4 weeks."
      },
      {
        question: "Is NAD⁺ therapy safe?",
        answer:
          "Yes. It’s administered under medical supervision and tailored to your cellular needs."
      },
      {
        question: "Can non-athletes enroll in this program?",
        answer:
          "Absolutely. This program benefits anyone looking to improve stamina and resilience."
      }
    ]
  }
};

function Page() {
  const { hero, overview, cards, programFit, whyTrupeak, procedureSummary, faq } =
    pageData;

  return (
    <div>
      <HairHero {...hero} />
      <Imagetext {...overview} />
      <Cards data={cards} />
      <ProgramFit {...programFit} />
      <WhatWeTrack {...whyTrupeak} />
      <ProcedureSummary {...procedureSummary} />
      <FAQSection {...faq} />
      <ContactSection />
      <ContactForm />
    </div>
  );
}

export default Page;
