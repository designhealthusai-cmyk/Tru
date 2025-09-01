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
import { FaUser, FaSnowflake, FaHeartbeat, FaQuestionCircle } from "react-icons/fa";

const pageData = {
  hero: {
    title: "Cryotherapy",
    subtitle: "Precision cold exposure. Whole-body benefits.",
    mainImage: "/images/pain/cryotherapy/2.webp",
    circleImage: "/images/pain/cryotherapy/1.webp",
  },

  addressData: {
    title: "What We Address",
    subtitle: "Each cryotherapy session can support:",
    items: [
      "Inflammation reduction for joints and muscles",
      "Post-workout or injury recovery and immune system stimulation",
      "Enhanced circulation and lymphatic drainage",
      "Improved sleep patterns and hormonal rhythm",
    ],
    imageSrc: "/images/pain/cryotherapy/4.webp",
    imageAlt: "Cryotherapy treatment session",
  },

  whyTrupeakData: {
    title: "Why It Matters",
    subtitle: "Brief cold exposure triggers the body’s natural recovery response. It:",
    points: [
      "Reduces swelling and oxidative stress",
      "Decreases chronic pain pathways",
      "Supports mental clarity and energy",
      "Accelerates healing without medication",
    ],
    image: "/images/pain/cryotherapy/5.webp",
  },

  tools: [
    "Cryotherapy: Nitrogen-cooled chambers with customized duration and temperature",
    "Safety Monitoring: Continuous supervision throughout each session",
    "Neuromuscular Activation: Techniques to improve muscle function and coordination",
    "Hydration & Nutrient Support: IV or oral strategies to optimize recovery and performance",
  ],

  rightForYouItems: [
    {
      icon: <FaQuestionCircle className="text-white text-lg" />,
      text: "Want systemic inflammation control",
    },
    {
      icon: <FaSnowflake className="text-white text-lg" />,
      text: "Are dealing with arthritis, fatigue, or mood imbalance",
    },
    {
      icon: <FaHeartbeat className="text-white text-lg" />,
      text: "Need support during athletic recovery",
    },
    {
      icon: <FaUser className="text-white text-lg" />,
      text: "Prefer drug-free pain and stress relief",
    },
  ],

  cta: {
    title: "Book Your Cryotherapy Session",
    description:
      "Cryotherapy at Trupeak is safe, clinically supervised, and tailored to your health profile. More than just cold, it’s a targeted biological reset that supports your recovery, resilience, and performance.",
    buttonText: "Book Your Session",
    buttonLink: "#",
    backgroundImage: "/images/cryotherapy/cta.webp",
  },
};

function Page() {
  const { hero, addressData, whyTrupeakData, tools, rightForYouItems, cta } = pageData;

  return (
    <div className="flex flex-col">
      {/* ✅ Hero Section */}
      <Hero {...hero} />

      {/* ✅ Intro Section */}
      <ImageTextSection
        description="Cryotherapy at Trupeak is delivered through controlled, medical-grade chambers that expose your body to ultra-low temperatures. The short exposure activates anti-inflammatory, circulatory, and metabolic responses — supporting recovery, resilience, and mood regulation."
        imageSrc="/images/pain/cryotherapy/3.webp"
        imageAlt="Cryotherapy chamber"
        reverse={false}
      />

      {/* ✅ What We Address */}
      <WhatWeAddress {...addressData} />

      {/* ✅ Why It Matters */}
      <WhyTrupeakBeauty
        title={whyTrupeakData.title}
        subtitle={whyTrupeakData.subtitle}
        points={whyTrupeakData.points}
        image={whyTrupeakData.image}
      />

      {/* ✅ Integrated Performance Tools */}
      <IntegratedPerformanceTools
        title="Integrated Performance Tools"
        subtitle="Every cryotherapy program is supported by:"
        items={tools}
        iconSrc="/images/cryotherapy/icon.webp"
      />

      {/* ✅ Is It Right for You */}
      <IsItRightForYou
        title="Is It Right for You?"
        subtitle="Cryotherapy may be ideal if you:"
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
