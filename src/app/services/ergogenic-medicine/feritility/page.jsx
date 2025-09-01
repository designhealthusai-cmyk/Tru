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

// ✅ Centralized Data in Same File
const pageData = {
  hero: {
    title: "Fertility",
    mainImage: "/images/ergogenic/ergogenic/fertility/2.webp", // Adjust image path if needed
    circleImage: "/images/ergogenic/ergogenic/fertility/1.webp" // Adjust image path if needed
  },

  overview: {
    description:
      "Preparing for pregnancy is about building a strong foundation for parenthood. At TruPeak, we create personalized, data-driven programs for both men and women, assessing hormones, ovulation, nutrition, and conditions like PCOS or thyroid imbalance in women, and semen quality, hormones, and lifestyle factors in men. Based on results, we provide targeted interventions such as functional nutrition, supplements, detox support, hormone balancing, and peptide therapy, while also addressing sleep, stress, gut health, and metabolism to optimize the body for conception.",
    image: "/images/ergogenic/ergogenic/fertility/3.webp",
    reverse: true,
    bgColor: "",
    textColor: "text-two",
    radius: "true"
  },

  cards: [
    {
      title: "Hormone & Cycle Evaluation",
      description: [
        "Comprehensive hormone testing to assess ovulation, luteal function, estrogen-progesterone balance, and cycle regularity."
      ]
    },
    {
      title: "Semen Analysis & Male Fertility Screening",
      description: [
        "Detailed evaluation of sperm count, motility, morphology, and hormonal markers linked to male fertility."
      ]
    },
    {
      title: "Personalized Nutrition & Supplementation",
      description: [
        "Targeted plans to address deficiencies, support egg/sperm quality, and improve nutrient availability for conception."
      ]
    },
    {
      title: "Metabolic & Inflammatory Assessment",
      description: [
        "Screening for blood sugar imbalances, chronic inflammation, and gut health issues that may interfere with fertility."
      ]
    },
    {
      title: "Peptide & Detox Support (if needed)",
      description: [
        "Advanced therapies to reduce oxidative stress, improve mitochondrial function, and support reproductive resilience."
      ]
    }
  ],

  programFit: {
    heading: "Is This Program Right for You?",
    description: "Our pre-fertility programs may benefit you if:",
    image: "/images/ergogenic/ergogenic/fertility/4.webp",
    items: [
      "You are planning to conceive naturally and want to optimize your health beforehand",
      "You have experienced irregular cycles, PCOS, or suboptimal semen parameters",
      "You are preparing for IUI or IVF and want to improve success rates",
      "You have had previous pregnancy challenges or want to rule out hidden barriers",
      "You are looking for a non-invasive, science-based approach to fertility enhancement"
    ]
  },

  whyTrupeak: {
    title: "Benefits of Fertility Support at Trupeak",
    points: [
      "Data-backed fertility evaluation for both partners",
      "Focus on egg and sperm quality and not just hormone levels",
      "Integrative support for stress, sleep, and gut function",
      "Personalized, doctor-supervised plans",
      "Suitable for natural conception or IVF/IUI prep",
      "Discreet, compassionate care throughout your journey"
    ]
  },

  procedureSummary: {
    heading: "Procedure Summary",
    procedures: [
      {
        title: "Initial Consultation",
        description:
          "Full history review, cycle tracking (if applicable), hormone and semen testing."
      },
      {
        title: "Diagnostic Testing",
        description:
          "Includes hormone panels, nutrient levels, inflammatory markers, and optional gut/metabolic tests."
      },
      {
        title: "Ongoing Support",
        description:
          "Lifestyle coaching, supplement protocols, peptide therapy (if needed), and progress tracking."
      }
    ]
  },

  faq: {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "When should I start preconception care?",
        answer:
          "Ideally 3 to 6 months before trying to conceive. This allows enough time to improve egg/sperm quality and address underlying imbalances."
      },
      {
        question: "Do I need to take hormones or medication?",
        answer:
          "Not always. Many clients benefit from nutrition, detox, and supplements alone. Hormone therapy is used only when necessary."
      },
      {
        question: "Can this support IVF or assisted reproduction?",
        answer:
          "Yes. We often work alongside fertility clinics to improve egg retrieval outcomes or sperm parameters before ART."
      },
      {
        question: "Is this suitable for men too?",
        answer:
          "Absolutely. We offer full male fertility assessments and programs to improve sperm health, hormone levels, and vitality."
      },
      {
        question: "How long does the program last?",
        answer:
          "Typically, 3 to 6 months. Timelines vary based on your cycle, lab findings, and conception goals."
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
      
      <FAQSection {...faq} />
      <ProcedureSummary {...procedureSummary} />
      <ContactSection />
      <ContactForm />
    </div>
  );
}

export default Page;
