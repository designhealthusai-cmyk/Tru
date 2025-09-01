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
    title: "Athletic Boost",
    mainImage: "/images/ergogenic/ergogenic/athletic-boost/2.webp",
    circleImage: "/images/ergogenic/ergogenic/athletic-boost/1.webp"
  },

  overview: {
    description:
      "Athletes need more than training alone; they require internal balance, efficient recovery, and optimal cellular performance. At TruPeak, our Athletic Boost Program helps you train harder, recover faster, and reach peak potential by addressing hidden imbalances in hormones, hydration, mitochondrial energy, and inflammation. Using advanced biomarker testing of over 800 markers, we analyze oxygen use, energy production, hydration, inflammation, and muscle integrity to design a personalized recovery and performance plan.",
    image: "/images/ergogenic/ergogenic/athletic-boost/3.webp",
    reverse: true,
    bgColor: "",
    textColor: "text-two",
    radius: "true"
  },

  cards: [
    {
      title: "NAD⁺ & ATP Optimization",
      description: [
        "Boost mitochondrial function and energy output with IV NAD⁺ infusions and cellular ATP support."
      ]
    },
    {
      title: "Amino Acid Recovery Therapy",
      description: [
        "Customized amino blends to accelerate muscle repair, reduce soreness, and prevent overtraining."
      ]
    },
    {
      title: "IV Hydration & Electrolyte Balance",
      description: [
        "Rehydrate at the cellular level with tailored IV protocols to restore fluid, minerals, and nutrients post-exertion."
      ]
    },
    {
      title: "Peptide-Based Performance Enhancers",
      description: [
        "Support stamina, endurance, and tissue recovery with targeted peptides that enhance physical resilience."
      ]
    },
    {
      title: "Anti-Inflammatory & Joint Protection Protocols",
      description: [
        "Minimize wear-and-tear with systemic anti-inflammatory support and joint-repair interventions."
      ]
    },
    {
      title: "Lifestyle & Performance Coaching",
      description: [
        "Guidance on sleep cycles, nutrient timing, and recovery habits to reduce burnout and enhance results."
      ]
    }
  ],

  programFit: {
    heading: "Is This Program Right for You?",
    description: "You may benefit from Athletic Boost care if:",
    image: "/images/ergogenic/ergogenic/athletic-boost/4.webp",
    items: [
      "You train consistently but struggle with recovery or performance plateaus",
      "You experience frequent fatigue, soreness, or minor injuries",
      "You want to enhance your muscle repair and energy production naturally",
      "You’re looking for a structured, data-driven performance program",
      "You’re preparing for an event, competition, or high-intensity training cycle",
      "You want long-term athletic sustainability, not just short-term results"
    ]
  },

  whyTrupeak: {
    title: "Benefits of Athletic Boost at Trupeak",
    points: [
      "Over 800 biomarkers assessed to guide your plan",
      "Personalized, science-backed protocols and not generic supplements",
      "Cellular-level energy enhancement with NAD⁺ & peptide support",
      "Faster recovery, fewer injuries, and better training capacity",
      "Trusted by competitive athletes, coaches, and weekend warriors",
      "Supervised by experts in metabolic and performance medicine"
    ]
  },

  procedureSummary: {
    heading: "Procedure Summary",
    procedures: [
      {
        title: "Performance Assessment",
        description:
          "Includes 800+ biomarkers evaluating energy metabolism, hydration, muscle health, and oxidative stress."
      },
      {
        title: "Personalized Boost Plan",
        description:
          "IV therapy, amino acids, peptides, and anti-inflammatory support designed for your training goals."
      },
      {
        title: "Recovery & Monitoring",
        description:
          "Follow-up assessments, recovery tracking, and plan adjustments to ensure consistent progress."
      }
    ]
  },

  faq: {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "Is this only for professional athletes?",
        answer:
          "No. Anyone with an active lifestyle, from gym-goers to recreational runners, can benefit from this program."
      },
      {
        question: "Will I get a customized supplement plan?",
        answer:
          "Yes. All protocols are tailored to your physiology, training load, and performance goals."
      },
      {
        question: "What kind of testing is done before starting?",
        answer:
          "We use advanced biomarker panels assessing inflammation, oxygen use, nutrient levels, mitochondrial function, and more."
      },
      {
        question: "How is this different from a regular sports nutritionist?",
        answer:
          "Our program integrates diagnostics, IV therapy, peptides, and cellular-level interventions beyond basic nutrition."
      },
      {
        question: "Can this be used for injury recovery?",
        answer:
          "Yes. We incorporate joint protection, inflammation control, and muscle regeneration to support safe recovery."
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
