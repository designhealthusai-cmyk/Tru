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
      title: "Menopause-Related Issues",
      mainImage: "/images/women/menopause/2.webp", // update as needed
      circleImage: "/images/women/menopause/1.webp",
    },
    overview: {
      title: "Clinically guided relief for every phase of the transition.",
      description:
        "Menopause is not a single event; it’s a biological transition that can affect hormones, metabolism, bone density, brain function, mood, and sexual health. At Trupeak, we approach menopause as a multidimensional shift, not just the end of menstruation. Our goal is to restore internal balance, protect long-term health, and help women move through this stage with clarity, confidence, and strength.",
      image: "/images/women/menopause/3.webp",
      reverse: true,
      bgColor: "",
      textColor: "text-two",
      radius: "true",
    },
    whyTrupeak: {
      title: "What We Assess",
      description:
        "Menopausal changes often begin years before periods stop. Our assessment includes:",
      points: [
        "Comprehensive hormonal testing (estrogen, progesterone, testosterone, DHEA)",
        "Thyroid and adrenal function (cortisol) profiling",
        "Metabolic screening for insulin resistance and cholesterol changes",
        "Cognitive, mood, and mental health evaluation",
        "Vaginal, urogenital, and bone health assessment (osteoporosis risk)",
        "Sleep quality and body temperature regulation analysis",
      ],
    },
    programGoals: {
      title: "Why This Matters",
      description:
        "Many women experience disruptive symptoms during perimenopause and menopause, such as hot flashes, mood changes, weight gain, low libido, and brain fog, but are often dismissed or offered one-size-fits-all solutions. At Trupeak, we treat menopause as a pivotal health phase that deserves personalized, preventive care to reduce both short-term discomfort and long-term health risks.",
      image: "/images/women/menopause/5.webp",
      reverse: false,
    },
    items: [
      "Bioidentical Hormone Replacement Therapy (BHRT), when appropriate",
      "Non-hormonal therapies for those with contraindications or a cancer history",
      "Precision nutrition to support metabolism and hormone balance",
      "Sleep and mood support through integrative strategies and supplementation",
      "Pelvic and sexual health therapy to improve comfort and tissue integrity",
      "Lifestyle and movement guidance to support bone, brain, and cardiovascular health",
      "Continuous monitoring of labs and symptoms for adaptive decisions",
    ],
    infoSection: {
      title: "Is It Right for You?",
      description: "You might benefit from this program if you:",
      items: [
        {
          description:
            "Are between 40–55 years of age and noticing cycle changes, mood swings, or sleep issues",
        },
        {
          description:
            "Have already entered menopause and struggle with ongoing symptoms",
        },
        {
          description:
            "Are looking for personalized, natural alternatives to traditional hormone therapy",
        },
        {
          description:
            "Want to reduce your risk of osteoporosis, cognitive decline, or cardiovascular changes",
        },
        {
          description:
            "Are ready for a plan that adapts as your hormones and body evolve",
        },
      ],
      bgColor: "#2C886A",
      titleColor: "#FFFFFF",
      cardBgColor: "white",
    },
    cta: {
      title:
        "Your care starts with a complete hormonal and metabolic workup.",
      description:
        "From there, we create a tailored transition plan and adjust it with you, ensuring comfort, safety, and long-term vitality at every step.",
      buttonText: "Book a Consultation",
      buttonLink: "/contact",
      backgroundImage: "/images/women/menopause/6.webp",
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
        description="At Trupeak, care is individualized and physician-led. Depending on your needs, your plan may include:"
        items={data.items}
        image="/images/women/menopause/4.webp"
        footer="We continuously monitor your labs and symptoms to make informed, adaptive decisions."
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

