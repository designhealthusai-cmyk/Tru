import React from "react";
import ContactForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";
import HairHero from "@/components/Hair/HairHero";
import Imagetext from "@/components/Imagetext";
import TreatmentApproach from "@/components/NewComponent/TreatmentApproach";
import ProgramGoals from "@/components/NewComponent/ProgramGoals";
import WhatWeTrack from "@/components/weight-management/WhatWeTrack";
import CtaSection from "@/components/regenerative-therapies/CtaSection";
import WhoThisIsFor from "@/components/weight-management/WhoThisIsFor";

function Page() {
  const data = {
    hero: {
      title: "Hormone Balancing",
      mainImage: "/images/women/hormone/2.webp", // update path if needed
      circleImage: "/images/women/hormone/1.webp",
    },
    overview: {
      title:
        "When hormones fall out of rhythm, the effects ripple across every system in the body.",
      description:
        "At TruPeak, we view hormone imbalances as whole-body issues rather than isolated lab results. Whether it’s thyroid dysfunction, adrenal fatigue, insulin resistance, or sex hormone irregularities, we begin by identifying the root cause. Our approach combines advanced diagnostics, targeted therapy, and ongoing tracking to restore balance and build long-term resilience.",
      image: "/images/women/hormone/3.webp",
      reverse: true,
      bgColor: "",
      textColor: "text-two",
      radius: "true",
    },
    whyTrupeak: {
      title: "What We Assess",
      description:
        "Hormones influence metabolism, mood, energy, reproductive health, and immune function. Our comprehensive assessment covers:",
      points: [
        "Thyroid health (TSH, T3, T4, reverse T3)",
        "Cortisol and adrenal rhythm (diurnal curve)",
        "Sex hormones (estrogen, progesterone, testosterone, DHEA)",
        "Insulin and glucose response",
        "Leptin, ghrelin, and appetite-regulating hormones",
        "Sleep, cognitive clarity, body composition, and inflammatory markers",
      ],
    },
    programGoals: {
      title: "Why It Matters",
      description:
        "Left unaddressed, hormone dysregulation can trigger metabolic slowdown, fatigue, anxiety, sleep disruption, and weight gain. At Trupeak, your protocol is designed to address both the symptoms and the root mechanisms behind them.",
      image: "/images/women/hormone/5.webp",
      reverse: false,
    },
    items: [
      "Bioidentical or low-dose hormone therapy tailored to individual needs",
      "Adrenal adaptogen protocols to support healthy cortisol rhythm",
      "Thyroid care through nutritional optimization or medical therapy, depending on root cause",
      "Clinical nutrition strategies to improve insulin sensitivity and regulate leptin",
      "Targeted supplementation to correct vitamin and mineral deficiencies",
      "Lifestyle and functional support to sustain hormonal and metabolic balance",
    ],
    infoSection: {
      title: "Is It Right for You?",
      description:
        "This service is for women who want more than symptom suppression. It’s designed for those who want clarity, vitality, and functional restoration. This program is ideal if you:",
      items: [
        {
          description:
            "Struggle with low energy, poor sleep, or persistent mood changes",
        },
        {
          description:
            "Have symptoms of thyroid, adrenal, or sex hormone imbalance",
        },
        {
          description:
            "Experience weight fluctuations, sugar cravings, or metabolic slowdown",
        },
        {
          description:
            "Are navigating perimenopause, menopause, or postpartum changes",
        },
        {
          description:
            "Want a deeper, data-driven approach beyond generic hormone treatments",
        },
      ],
      bgColor: "#2C886A",
      titleColor: "#FFFFFF",
      cardBgColor: "white",
    },
    cta: {
      title: "At TruPeak, hormone care is not just about balance.",
      description:
        "It’s about restoring your full biological rhythm with precision, personalization, and ongoing support. Book your consultation today to begin your journey toward resilience and vitality.",
      buttonText: "Book a Consultation",
      buttonLink: "/contact",
      backgroundImage: "/images/women/hormone/6.webp",
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <HairHero {...data.hero} />

      {/* Overview Section */}
      <Imagetext {...data.overview} />

      {/* What We Assess */}
      <WhatWeTrack {...data.whyTrupeak} />

      {/* Treatment Approach */}
      <TreatmentApproach
        title="Treatment Approach"
        description="Our hormone-balancing protocols are individualized and may include:"
        items={data.items}
        image="/images/women/hormone/4.webp"
        footer="Your plan evolves with you — supported by ongoing lab tracking and adaptive care."
      />

      {/* Why It Matters */}
      <ProgramGoals {...data.programGoals} />

      {/* Is It Right for You */}
      <WhoThisIsFor {...data.infoSection} />

      {/* CTA */}
      <CtaSection {...data.cta} />

      {/* Contact */}
      <ContactSection />
      <ContactForm />
    </div>
  );
}

export default Page;
