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
    title: "Chronic Backache Induced by Uric Acid",
    subtitle: "Precision care for spinal inflammation linked to metabolic imbalance.",
    mainImage: "/images/pain/chronic/2.webp",
    circleImage: "/images/pain/chronic/1.webp",
  },

  addressData: {
    title: "What We Address",
    subtitle: "Your personalized care plan targets the underlying triggers through:",
    items: [
      "Diagnostic Testing: Comprehensive bloodwork including uric acid, CRP, ESR, kidney function, and inflammation markers",
      "Targeted Nutrition & IV Support: Diet strategies to reduce purine load and IV therapy for detox, hydration, and inflammation control",
      "Therapeutic Interventions: Manual therapy and spinal decompression to relieve pressure and restore mobility",
      "Posture & Ergonomics: Adjustments to minimize strain and prevent flare-ups",
    ],
    imageSrc: "/images/pain/chronic/4.webp",
    imageAlt: "Doctor examining back pain",
  },

  whyTrupeakData: {
    title: "Why It Matters",
    subtitle:
      "Spine-related gout or uric acid-induced pain often goes misdiagnosed or mistreated. Our integrated model helps:",
    points: [
      "Reduce inflammation and stiffness at the spinal level",
      "Restore pain-free mobility without heavy medication",
      "Improve metabolic balance to prevent recurrence",
      "Support joint longevity through early, targeted care",
    ],
    image: "/images/pain/chronic/5.webp",
  },

  tools: [
    "IV infusions with magnesium, vitamin C, glutathione, and bicarbonate",
    "Hydration and micronutrient optimization",
    "Spinal fascial release and neuromuscular reactivation therapy",
    "Sleep and posture correction techniques",
    "Regular biomarker tracking to assess response and recalibrate care",
    "Personalized exercise and mobility plans to enhance strength and endurance",
  ],

  rightForYouItems: [
    {
      icon: <FaQuestionCircle className="text-white text-lg" />,
      text: "Have persistent or recurring lower back pain without a clear orthopedic cause",
    },
    {
      icon: <FaVial className="text-white text-lg" />,
      text: "Have a history of elevated uric acid or gout-related symptoms",
    },
    {
      icon: <FaCapsules className="text-white text-lg" />,
      text: "Want to reduce dependence on painkillers or anti-inflammatory medications",
    },
    {
      icon: <FaUser className="text-white text-lg" />,
      text: "Are looking for a comprehensive, biology-driven solution",
    },
  ],

  cta: {
    title: "Book Your Appointment",
    description:
      "At Trupeak, we combine data, movement, and metabolic correction to help you move beyond chronic inflammation. Our goal is not just symptom relief but spinal recovery that’s sustainable, measurable, and aligned with your body’s biochemistry.",
    buttonText: "Book Your Appointment",
    buttonLink: "#",
    backgroundImage: "/images/pain/chronic/3.webp",
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
        description="Chronic back pain isn’t always mechanical; sometimes, it’s metabolic. Elevated uric acid levels can trigger inflammation in the spinal joints, leading to stiffness, aching, and recurring discomfort. At Trupeak, we take a root-cause approach that addresses both the biochemical and structural factors contributing to your pain."
        imageSrc="/images/pain/chronic/3.webp"
        imageAlt="Chronic Back Pain Treatment"
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
        title="Integrated Performance Tools"
        subtitle="Depending on your profile, your program may include:"
        items={tools}
        iconSrc="/images/immunity-long/genetic-mapping/icon.png"
      />

      {/* ✅ Is It Right For You */}
      <IsItRightForYou
        title="Is It Right for You?"
        subtitle="This protocol may be ideal if you:"
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
