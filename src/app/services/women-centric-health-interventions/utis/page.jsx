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
      title: "UTIs (Urinary Tract Infections)",
      mainImage: "/images/women/uti/2.webp", // update path as needed
      circleImage: "/images/women/uti/1.webp",
    },
    overview: {
      title: "Many women face recurring urinary tract infections that affect daily life, intimacy, and overall well-being.",
      description:
        "At TruPeak, we go beyond short-term relief by identifying root causes and restoring urinary health with advanced diagnostics and personalized care plans.",
      image: "/images/women/uti/3.webp",
      reverse: true,
      bgColor: "",
      textColor: "text-two",
      radius: "true",
    },
    whyTrupeak: {
      title: "What We Assess",
      description:
        "Recurrent UTIs are often the result of underlying imbalances. We begin by evaluating:",
      points: [
        "Urine culture and antibiotic resistance patterns",
        "Bladder wall inflammation and post-void residual urine",
        "Vaginal microbiome and estrogen status",
        "Hydration habits, hygiene practices, and hormonal shifts",
        "Gut health and systemic inflammation markers",
        "History of sexual activity, menopause, or contraceptive use",
      ],
    },
    programGoals: {
      title: "Why This Matters",
      description:
        "Frequent UTIs can disrupt work, relationships, and confidence. At Trupeak, we support your recovery with data-driven, integrative protocols that address immune response, hormonal status, and microbial health, all with physician supervision.",
      image: "/images/women/uti/5.webp",
      reverse: false,
    },
    items: [
      "Targeted antibiotic therapy based on culture sensitivity",
      "Non-antibiotic antimicrobial support and probiotics",
      "Bladder lining restoration using bioactive agents",
      "Vaginal estrogen therapy in postmenopausal women",
      "Hydration and hygiene optimization",
      "Functional urology referral in resistant or complex cases",
    ],
    infoSection: {
      title: "Is It Right for You?",
      description: "This program is ideal if you:",
      items: [
        { description: "Experience more than two UTIs per year" },
        { description: "Have not responded to standard antibiotic treatment" },
        { description: "Are postmenopausal with urinary discomfort or urgency" },
        { description: "Want to explore prevention-focused strategies for long-term urinary health" },
      ],
      bgColor: "#2C886A",
      titleColor: "#FFFFFF",
      cardBgColor: "white",
    },
    cta: {
      title:
        "Break free from recurring UTIs with TruPeak’s advanced diagnostics and personalized care.",
      description:
        "Our goal is to reduce recurrence, repair the bladder environment, and prevent long-term complications.",
      buttonText: "Book a Consultation",
      buttonLink: "/contact",
      backgroundImage: "/images/women/uti/6.webp",
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
        description="At Trupeak, UTI management goes beyond standard antibiotics. Depending on your history, we offer:"
        items={data.items}
        image="/images/women/uti/4.webp"
        footer="Your recovery is physician-led with continuous monitoring to adapt your care plan over time."
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
