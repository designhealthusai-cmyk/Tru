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
    title: "STD Support",
    mainImage: "/images/ergogenic/ergogenic/std/2.webp",
    circleImage: "/images/ergogenic/ergogenic/std/1.webp"
  },

  overview: {
    description:
      "Sexually Transmitted Diseases (STDs) affect more than reproductive health, impacting immunity, brain function, cardiovascular wellness, and emotional well-being if untreated. At TruPeak, we provide discreet and personalized STD care with advanced diagnostics, fast treatment, and compassionate counseling. Whether for routine screening, treatment, or long-term support, our medically guided care is tailored to your needs in a fully confidential setting.",
    image: "/images/ergogenic/ergogenic/std/3.webp",
    reverse: true,
    bgColor: "",
    textColor: "text-two",
    radius: "true"
  },

  cards: [
    {
      title: "Comprehensive STD Testing",
      description: [
        "Screening for Chlamydia, Gonorrhea, Syphilis, HSV-1/2, HPV, HIV, and Hepatitis B/C."
      ]
    },
    {
      title: "Evidence-Based Treatment Plans",
      description: [
        "Rapid treatment for bacterial STDs and long-term antiviral therapy when needed."
      ]
    },
    {
      title: "HPV Vaccination & Wart Management",
      description: [
        "Prevention and care protocols to reduce transmission and symptoms."
      ]
    },
    {
      title: "Immune Support & Recovery",
      description: [
        "Nutraceuticals and lifestyle strategies to support healing and reduce recurrence."
      ]
    },
    {
      title: "Confidential Counseling & Education",
      description: [
        "Emotional support, relationship counseling, and sexual health education."
      ]
    }
  ],

  programFit: {
    heading: "Is This Right for You?",
    description: "You may benefit from STD Support if:",
    image: "/images/ergogenic/ergogenic/std/4.webp",
    items: [
      "You are sexually active and haven’t been recently tested",
      "You have symptoms such as discharge, pain, or sores",
      "You have had unprotected sex or multiple partners",
      "You are starting a new relationship and want to screen proactively",
      "You need a safe, non-judgmental space for sexual health discussions"
    ]
  },

  whyTrupeak: {
    title: "Benefits of STD Support at Trupeak",
    points: [
      "100% confidential consultations and testing",
      "Advanced diagnostics with fast and accurate results",
      "Non-judgmental medical team experienced in sexual health",
      "Whole-person care, including emotional and immune support",
      "Designed for both short-term treatment and long-term wellness"
    ]
  },

  procedureSummary: {
    heading: "Procedure Summary",
    procedures: [
      {
        title: "Initial Consultation",
        description:
          "Confidential discussion of sexual history, symptoms, and screening needs."
      },
      {
        title: "Diagnostic Testing",
        description:
          "Blood and swab-based testing for a complete STD panel."
      },
      {
        title: "Treatment & Counseling",
        description:
          "Medical intervention with optional emotional support and follow-up care."
      }
    ]
  },

  faq: {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "Is STD testing confidential?",
        answer:
          "Yes. All services at Trupeak are fully confidential, with no data shared without consent."
      },
      {
        question: "Do I need symptoms to get tested?",
        answer:
          "No. Many STDs show no early symptoms; routine screening is recommended for sexually active individuals."
      },
      {
        question: "How long do results take?",
        answer:
          "Most test results are available within 24–72 hours, depending on the test type."
      },
      {
        question: "Can I get treatment on the same day?",
        answer:
          "Yes. For most bacterial infections, treatment can begin immediately after diagnosis."
      },
      {
        question: "What if I need emotional or relationship support?",
        answer:
          "We offer in-house counseling to help you manage the emotional aspects of STD diagnosis and recovery."
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
