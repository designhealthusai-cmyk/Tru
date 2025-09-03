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
      title: "PCOS and PCOD",
      mainImage: "/images/women/pcos/2.webp", // update image path if needed
      circleImage: "/images/women/pcos/1.webp",
    },
    overview: {
      title: "Precision care for a complex condition.",
      description:
        "Polycystic Ovary Syndrome (PCOS) and Polycystic Ovary Disease (PCOD) are not only reproductive or hormonal issues but also signs of deeper metabolic and inflammatory imbalances that impact menstrual health, fertility, energy, skin, mood, and long-term disease risk. At TruPeak, we use an integrative, root-cause approach to restore hormonal balance, stabilize metabolism, and support lasting wellness.",
      image: "/images/women/pcos/3.webp",
      reverse: true,
      bgColor: "",
      textColor: "text-two",
      radius: "true",
    },
    whyTrupeak: {
      title: "What We Assess",
      description:
        "A complete evaluation helps us understand how PCOS/PCOD is affecting you uniquely. Our assessment includes:",
      points: [
        "Hormonal panel (LH, FSH, testosterone, estrogen, progesterone, DHEA)",
        "Insulin resistance markers and fasting glucose/insulin ratio",
        "Inflammatory markers (CRP, homocysteine)",
        "Thyroid and adrenal hormone balance",
        "Vitamin and micronutrient levels (e.g., vitamin D, B12, inositol status)",
        "Cycle mapping and ovulatory pattern tracking",
      ],
    },
    programGoals: {
      title: "Why This Matters",
      description:
        "Left untreated or poorly managed, PCOS/PCOD can increase the risk of infertility, diabetes, cardiovascular disease, and emotional distress. Trupeak combines medical diagnostics with integrative therapies to go beyond symptom suppression, supporting long-term hormonal and metabolic resilience.",
      image: "/images/women/pcos/5.webp",
      reverse: false,
    },
    items: [
      "Endocrine regulation using bioidentical hormones when indicated",
      "Myo-inositol and micronutrient supplementation tailored to your labs",
      "Clinical nutrition focused on insulin sensitivity and inflammation control",
      "Targeted therapies to regulate menstrual cycles and ovulation",
      "Support for acne, hirsutism, mood, and metabolic weight gain",
      "Lifestyle coaching for sustainable hormone-friendly habits",
    ],
    infoSection: {
      title: "Is It Right for You?",
      description: "You might benefit from this program if you:",
      items: [
        { description: "Have irregular, absent, or painful menstrual cycles" },
        { description: "Are experiencing acne, facial hair growth, or mood swings tied to hormonal shifts" },
        { description: "Struggle with unexplained weight gain, especially around the midsection" },
        { description: "Are trying to conceive but have had limited success" },
        { description: "Have been diagnosed with PCOS/PCOD, but have not found effective long-term care" },
      ],
      bgColor: "#2C886A",
      titleColor: "#FFFFFF",
      cardBgColor: "white",
    },
    cta: {
      title: "At TruPeak, you’ll receive expert guidance grounded in data, not assumptions.",
      description:
        "Move forward with clarity and confidence. Book your consultation to explore personalized PCOS/PCOD care at TruPeak.",
      buttonText: "Book a Consultation",
      buttonLink: "/contact",
      backgroundImage: "/images/women/pcos/6.webp",
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
        description="Each protocol is customized to your hormonal profile, metabolic health, and reproductive goals. It may include:"
        items={data.items}
        image="/images/women/pcos/4.webp"
        footer="We adapt your care plan as your body responds, tracking progress through both lab markers and symptom relief."
      />

      {/* Why This Matters */}
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
