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
      title: "Osteoporosis",
      mainImage: "/images/women/osteoporosis/2.webp", // update path
      circleImage: "/images/women/osteoporosis/1.webp",
    },
    overview: {
      title:
        "Osteoporosis often develops silently due to hormonal shifts, nutritional gaps, and metabolic imbalances, with bone loss usually detected only after a fracture.",
      description:
        "At TruPeak, we take a proactive approach focused on early detection, hormonal support, bone regeneration, and movement rehabilitation to protect long-term strength and independence.",
      image: "/images/women/osteoporosis/3.webp",
      reverse: true,
      bgColor: "",
      textColor: "text-two",
      radius: "true",
    },
    whyTrupeak: {
      title: "What We Assess",
      description:
        "Bone health is influenced by age, hormones, lifestyle, and genetics. Our evaluation includes:",
      points: [
        "DEXA scan to measure Bone Mineral Density (BMD)",
        "Lab work to check levels of vitamin D, calcium, and parathyroid hormone",
        "Estrogen and thyroid panel for hormonal contributions",
        "Fall risk and mobility screening",
        "Inflammatory markers linked to bone turnover",
        "Nutrition, body composition, and muscle mass analysis",
      ],
    },
    programGoals: {
      title: "Why This Matters",
      description:
        "One in three women over 50 will experience an osteoporosis-related fracture. Such injuries may cause discomfort, limit movement, and affect self-assurance. At Trupeak, our goal is to reduce that risk by addressing the root causes, not just the symptoms.",
      image: "/images/women/osteoporosis/5.webp",
      reverse: false,
    },
    items: [
      "Bioidentical hormone replacement therapy, where appropriate",
      "Vitamin D and mineral repletion guided by lab levels",
      "Weight-bearing and resistance-based physiotherapy",
      "Guidance on eating for strong bones, with a focus on calcium, protein, and anti-inflammatory foods",
      "Bone-stimulating medications when indicated",
      "Fall prevention strategies and posture correction",
    ],
    infoSection: {
      title: "Is It Right for You?",
      description: "You might find this program helpful if you:",
      items: [
        { description: "Are postmenopausal or over 50 with declining bone density" },
        { description: "Have a family background of osteoporosis or bone fractures" },
        { description: "Are experiencing height loss, back pain, or poor posture" },
        { description: "Are recovering from a fracture or have low muscle mass" },
      ],
      bgColor: "#2C886A",
      titleColor: "#FFFFFF",
      cardBgColor: "white",
    },
    cta: {
      title:
        "Protect your bones and independence with TruPeak’s proactive osteoporosis care.",
      description:
        "Our mission is to help you age with strength, balance, and resilience, so you stay active and independent for longer.",
      buttonText: "Book a Consultation",
      buttonLink: "/contact",
      backgroundImage: "/images/women/osteoporosis/6.webp",
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
        description="Trupeak takes an integrated approach to rebuild and protect bone strength. Based on your profile, your treatment plan may include:"
        items={data.items}
        image="/images/women/osteoporosis/4.webp"
        footer="We adapt your plan as your bone health improves over time."
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
