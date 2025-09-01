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
    title: "Virility",
    mainImage: "/images/ergogenic/ergogenic/virility/2.webp", // update if needed
    circleImage: "/images/ergogenic/ergogenic/virility/1.webp"
  },

  overview: {
    description:
      "Male vitality goes beyond testosterone. At TruPeak, we see it as restoring energy, strength, motivation, and sexual confidence. If you are experiencing low libido, fatigue, mood changes, or muscle loss, we look deeper at causes like hormonal decline, poor circulation, stress, or nutrient depletion. Our care starts with advanced diagnostics of hormones, cardiovascular fitness, nutrient status, inflammation, and lifestyle factors such as sleep, stress, alcohol, and physical workload, creating a personalized plan to help you regain peak performance.",
    image: "/images/ergogenic/ergogenic/virility/3.webp",
    reverse: true,
    bgColor: "",
    textColor: "text-two",
    radius: "true"
  },

  cards: [
    {
      title: "Testosterone Optimization",
      description: [
        "When clinically necessary, we use safe, supervised protocols to bring testosterone to optimal, not just average, levels."
      ]
    },
    {
      title: "Performance Supplementation",
      description: [
        "Targeted nutrients designed for male physiology to enhance energy, stamina, and recovery."
      ]
    },
    {
      title: "Circulatory Support",
      description: [
        "Nitric Oxide boosters and vascular therapies to improve blood flow, endurance, and erectile health."
      ]
    },
    {
      title: "Cortisol & Stress Modulation",
      description: [
        "Balancing the stress hormone axis to reduce fatigue, mental fog, and hormonal suppression."
      ]
    },
    {
      title: "Muscle Support & Recovery",
      description: [
        "Amino acid and metabolic support for lean muscle retention, repair, and strength gains."
      ]
    },
    {
      title: "Advanced Regenerative Therapies",
      description: [
        "Where needed, we integrate Bio-identical Hormones, Peptides, and organ-specific regenerative care for the prostate and adrenals."
      ]
    }
  ],

  programFit: {
    heading: "Is This Program Right for You?",
    description: "Our Virility programs may be ideal if:",
    image: "/images/ergogenic/ergogenic/virility/4.webp",
    items: [
      "You are feeling consistently low on energy, drive, or motivation",
      "Your libido or performance has declined over time",
      "You have noticed muscle loss or difficulty recovering from workouts",
      "You want to improve your focus and edge, naturally and safely",
      "You are not satisfied with generic hormone solutions or supplements",
      "You want a clinical, discreet approach to men’s health"
    ]
  },

  whyTrupeak: {
    title: "Benefits of Virility Support at Trupeak",
    points: [
      "Comprehensive diagnostic testing (hormonal, vascular, metabolic)",
      "Customized male vitality protocols based on clinical evidence",
      "Full-body and lifestyle integration and not just symptom relief",
      "Safe use of hormone therapy, only when indicated",
      "Emphasis on long-term performance, not short-term fixes",
      "Supervised by medical experts with ongoing monitoring"
    ]
  },

  procedureSummary: {
    heading: "Procedure Summary",
    procedures: [
      {
        title: "Initial Diagnostic Assessment",
        description:
          "Includes hormone panel, cardiovascular and inflammatory markers, and nutrient testing."
      },
      {
        title: "Treatment Planning",
        description:
          "Testosterone therapy (if needed), supplements, peptides, or regenerative therapies as clinically appropriate."
      },
      {
        title: "Ongoing Monitoring",
        description:
          "Routine follow-ups, symptom tracking, and lab work to fine-tune your progress."
      }
    ]
  },

  faq: {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "Is testosterone therapy mandatory in this program?",
        answer:
          "No. Testosterone is only used if your clinical levels and symptoms indicate a real need. Many clients improve with lifestyle changes, peptides, or nutrient therapy alone."
      },
      {
        question: "Will this improve sexual performance, too?",
        answer:
          "Yes. Virility care includes support for libido, circulation, stamina, and confidence."
      },
      {
        question: "How is this different from a gym supplement plan?",
        answer:
          "We use lab testing, medical-grade protocols, and hormone expertise, not guesswork or off-the-shelf pills."
      },
      {
        question: "How soon will I see results?",
        answer:
          "Most men report noticeable improvement in energy and focus within weeks. Full benefits evolve as your system rebalances over time."
      },
      {
        question: "Is this private and confidential?",
        answer:
          "Absolutely. All consultations, assessments, and treatments are conducted discreetly and respectfully."
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
