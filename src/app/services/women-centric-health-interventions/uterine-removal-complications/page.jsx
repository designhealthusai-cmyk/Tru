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
      title: "Uterine Removal Complications in Older Women",
      mainImage: "/images/women/hysterectomy/2.webp", // update path as needed
      circleImage: "/images/women/hysterectomy/1.webp",
    },
    overview: {
      title:
        "Hysterectomy can relieve chronic gynecological issues but may also trigger complications.",
      description:
        "These include hormonal shifts, pelvic floor dysfunction, sexual changes, and bladder instability, especially in older women. At TruPeak, we address these challenges early with science-led, multidisciplinary care to support recovery and restore quality of life.",
      image: "/images/women/hysterectomy/3.webp",
      reverse: true,
      bgColor: "",
      textColor: "text-two",
      radius: "true",
    },
    whyTrupeak: {
      title: "What We Assess",
      description: "Recovery after uterine removal is complex. We start by evaluating:",
      points: [
        "Hormonal shifts, including estrogen depletion or sudden drops after ovary removal",
        "Pelvic floor muscle integrity",
        "Pelvic floor coordination",
        "Bladder health, urgency, and stress incontinence",
        "Vaginal dryness, laxity, or pain during intimacy",
        "Mood disturbances, sleep disruption, or joint pain due to hormonal changes",
      ],
    },
    programGoals: {
      title: "Why This Matters",
      description:
        "Many women are left navigating hysterectomy-related changes alone. At Trupeak, we believe that surgical recovery must include hormonal, muscular, sexual, and emotional health support, especially for older patients more vulnerable to systemic imbalances.",
      image: "/images/women/hysterectomy/5.webp",
      reverse: false,
    },
    items: [
      "Hormonal restoration therapy (bioidentical or topical)",
      "Pelvic floor rehabilitation with physiotherapists",
      "Vaginal rejuvenation treatments for tissue support and hydration",
      "Nutritional support for bone, muscle, and cognitive health",
      "Urogynecologic review for persistent urinary symptoms",
      "Physician-supervised protocols with continuous monitoring",
    ],
    infoSection: {
      title: "Is It Right for You?",
      description: "This program is ideal if you:",
      items: [
        { description: "Are experiencing new or worsening symptoms post-hysterectomy" },
        { description: "Have concerns about bladder, vaginal, or pelvic health after surgery" },
        { description: "Want to understand whether hormone therapy is right for you" },
        { description: "Seek structured, science-based recovery rather than generic reassurance" },
      ],
      bgColor: "#2C886A",
      titleColor: "#FFFFFF",
      cardBgColor: "white",
    },
    cta: {
      title: "At TruPeak, recovery is more than healing — it’s rebuilding strength and confidence.",
      description:
        "Your care doesn’t stop after surgery. We provide personalized support to help you restore balance, intimacy, and comfort after uterine removal.",
      buttonText: "Book a Consultation",
      buttonLink: "/contact",
      backgroundImage: "/images/women/hysterectomy/6.webp",
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
        description="Trupeak provides personalized recovery plans for each individual. Based on your needs, care options may include:"
        items={data.items}
        image="/images/women/hysterectomy/4.webp"
        footer="Your recovery journey is guided by experts who adapt your care plan as your body heals and evolves."
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
