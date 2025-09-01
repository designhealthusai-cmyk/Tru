import React from "react";
import Hero from "@/components/regenerative-therapies/Hero";
import ImageTextSection from "@/components/NewComponent/BackPainSection";
import WhatWeAddress from "@/components/NewComponent/WhatWeAddress";
import IntegratedPerformanceTools from "@/components/NewComponent/IntegratedPerformanceTools";
import WhyTrupeakBeauty from "../../beauty-aesthetics/WhyTrupeakBeauty";
import CtaSection from "@/components/regenerative-therapies/CtaSection";
import IsItRightForYou from "@/components/NewComponent/IsItRightForYou";
import ContactForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";
import { FaUser, FaVial, FaCapsules, FaQuestionCircle } from "react-icons/fa";

const pageData = {
  hero: {
    title: "Accident Recovery",
    subtitle: "Repair beyond rest. Recover with clinical precision.",
    mainImage: "/images/pain/accident/2.webp",
    circleImage: "/images/pain/accident/1.webp",
  },

  addressData: {
    title: "What We Address",
    subtitle:
      "Each recovery plan is customized based on injury severity, pain patterns, and mobility limitations. Key focus areas include:",
    items: [
      "Joint alignment and post-trauma stabilization",
      "Muscle memory reactivation and neuromuscular training",
      "Cryotherapy and IV nutrient support for inflammation control",
      "Manual therapy to manage scar tissue and soft-tissue restriction",
    ],
    imageSrc: "/images/pain/accident/4.webp",
    imageAlt: "Accident recovery therapy",
  },

  whyTrupeakData: {
    title: "Why It Matters",
    subtitle:
      "Improper or incomplete recovery after an accident can lead to long-term pain, limited mobility, or chronic compensatory injuries. Our physician-led model ensures:",
    points: [
      "Preservation of muscle and joint function",
      "Reduced inflammation and edema",
      "Protection against nerve impingement",
      "Structured milestones for mobility and strength",
    ],
    image: "/images/pain/accident/5.webp",
  },

  tools: [
    "Functional diagnostics to identify healing delays",
    "Targeted pain management",
    "Nutrition support for tissue repair and immunity",
    "Cryotherapy for deep muscular and joint recovery",
  ],

  rightForYouItems: [
    {
      icon: <FaQuestionCircle className="text-one text-lg" />,
      text: "Are healing from trauma, falls, or surgery",
    },
    {
      icon: <FaVial className="text-one text-lg" />,
      text: "Experience post-injury stiffness, swelling, or pain",
    },
    {
      icon: <FaCapsules className="text-one text-lg" />,
      text: "Want a structured return-to-function protocol",
    },
    {
      icon: <FaUser className="text-one text-lg" />,
      text: "Require medical oversight for complex injuries",
    },
  ],

  cta: {
    title: "Book Your Accident Recovery Consultation",
    description:
      "With regular check-ins and progressive assessments, your body recovers the right way, not the fast way. At Trupeak, our structured accident recovery program ensures healing that’s safe, effective, and lasting.",
    buttonText: "Book Your Appointment",
    buttonLink: "#",
    backgroundImage: "/images/pain/accident/3.webp",
  },
};

function Page() {
  const { hero, addressData, whyTrupeakData, tools, rightForYouItems, cta } = pageData;

  return (
    <div className="flex flex-col ">
      {/* ✅ Hero Section */}
      <Hero {...hero} />

      {/* ✅ Image + Text Section */}
      <ImageTextSection
        description="At TruPeak, accident recovery is guided by physicians and clinical metrics to help you regain functional movement, reduce inflammation, and prevent long-term complications. Designed for those recovering from trauma, surgery, or injury-related immobility, the program tracks and adapts every phase to support safe, effective healing."
        imageSrc="/images/pain/accident/3.webp"
        imageAlt="Accident Recovery Program"
        reverse={false}
      />

      {/* ✅ What We Address */}
      <WhatWeAddress {...addressData} />

      {/* ✅ Why Trupeak Section */}
      <WhyTrupeakBeauty
        title={whyTrupeakData.title}
        subtitle={whyTrupeakData.subtitle}
        points={whyTrupeakData.points}
        image={whyTrupeakData.image}
      />

      {/* ✅ Integrated Performance Tools */}
      <IntegratedPerformanceTools
        title="Integrated Clinical Support"
        subtitle="Your recovery program may also include:"
        items={tools}
        iconSrc="/images/immunity-long/genetic-mapping/icon.png"
      />

      {/* ✅ Is It Right For You */}
      <IsItRightForYou
        title="Is It Right for You?"
        subtitle="This recovery pathway is ideal if you:"
        items={rightForYouItems}
      />

      {/* ✅ CTA Section */}
      <CtaSection {...cta} />
      <ContactSection />
      <ContactForm />
    </div>
  );
}

export default Page;
