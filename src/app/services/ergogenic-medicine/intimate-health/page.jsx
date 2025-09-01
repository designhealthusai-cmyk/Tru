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
    title: "Intimate Health Program",
    mainImage: "/images/ergogenic/ergogenic/intimate-health/2.webp",
    circleImage: "/images/ergogenic/ergogenic/intimate-health/1.webp"
  },

  overview: {
    description:
      "Intimate health is a vital part of overall well-being, yet it is often overlooked. At TruPeak, we provide discreet, clinically guided care for concerns such as dryness, low libido, discomfort during intimacy, or changes in sensation. Hormonal shifts, stress, aging, childbirth, or surgery can all affect intimate wellness, but these issues are treatable. With non-surgical, personalized therapies, we help restore comfort, sensitivity, and connection, always with complete confidentiality.",
    image: "/images/ergogenic/ergogenic/intimate-health/3.webp",
    reverse: true,
    bgColor: "",
    textColor: "text-two",
    radius: "true"
  },

  cards: [
    {
      title: "Hormone Balancing Therapy (HBT)",
      description: [
        "Precise, localized hormonal support to restore libido, tissue health, and arousal response."
      ]
    },
    {
      title: "Peptide-Based Rejuvenation",
      description: [
        "Topical or injectable peptide therapies that promote vaginal and penile tissue regeneration."
      ]
    },
    {
      title: "Low-Level Laser & PRP Therapy",
      description: [
        "Stimulate collagen production and blood flow using minimally invasive technologies."
      ]
    },
    {
      title: "Pelvic Physiotherapy & Relaxation Techniques",
      description: [
        "Target muscle tension and stress-related factors contributing to discomfort or dysfunction."
      ]
    },
    {
      title: "Emotional & Psychological Support",
      description: [
        "Compassionate coaching to address relationship concerns, confidence, or performance anxiety."
      ]
    }
  ],

  programFit: {
    heading: "Is This Program Right for You?",
    description: "You may benefit from the Intimate Health Program if:",
    image: "/images/ergogenic/ergogenic/intimate-health/4.webp",
    items: [
      "You experience discomfort, dryness, or reduced sensitivity during intimacy",
      "Your libido has changed due to stress, childbirth, menopause, or medical conditions",
      "You want non-surgical options to improve tissue health and arousal",
      "You feel emotionally disconnected or self-conscious about intimacy",
      "You want a safe, private environment to address intimate health concerns"
    ]
  },

  whyTrupeak: {
    title: "Benefits of Intimate Health Care at Trupeak",
    points: [
      "Personalized protocols with hormone and circulatory assessments",
      "Non-invasive treatments that prioritize comfort and privacy",
      "Support for both physical and psychological aspects of intimacy",
      "Trusted by individuals across life stages from post-partum to post-menopausal care",
      "Supervised by medical experts in sexual health and hormone optimization"
    ]
  },

  procedureSummary: {
    heading: "Procedure Summary",
    procedures: [
      {
        title: "Confidential Assessment",
        description:
          "We evaluate hormonal balance, tissue condition, circulation, and personal concerns."
      },
      {
        title: "Personalized Treatment Plan",
        description:
          "Includes HBT, peptides, PRP, pelvic therapy, and psychological support as needed."
      },
      {
        title: "Ongoing Support",
        description:
          "Regular follow-ups ensure improvement in both physical outcomes and emotional wellness."
      }
    ]
  },

  faq: {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        question: "Is this program for both men and women?",
        answer:
          "Yes. We offer tailored protocols for men and women based on their specific concerns and physiology."
      },
      {
        question: "Will my treatment be completely confidential?",
        answer:
          "Absolutely. Every step of your care is handled with discretion and professionalism."
      },
      {
        question: "What happens during the first consultation?",
        answer:
          "We conduct a detailed, confidential assessment of hormone levels, tissue health, circulation, and psychological factors."
      },
      {
        question: "Do you offer solutions for post-partum issues?",
        answer:
          "Yes. We support women dealing with post-childbirth changes in comfort, sensation, or libido."
      },
      {
        question: "Are treatments painful or surgical?",
        answer:
          "No. Our protocols are minimally invasive or non-invasive, with a focus on comfort and recovery."
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
