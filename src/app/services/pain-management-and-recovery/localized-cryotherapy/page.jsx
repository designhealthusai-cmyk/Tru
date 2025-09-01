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
    title: "Localized Cryotherapy",
    subtitle: "Targeted cold therapy. Precision recovery. Faster relief.",
    mainImage: "/images/pain/localized-cryotherapy/2.webp",
    circleImage: "/images/pain/localized-cryotherapy/1.webp",
  },

  addressData: {
    title: "What We Address",
    subtitle: "This therapy supports your recovery through:",
    items: [
      "Spot treatment for inflamed or injured muscles",
      "Reduction of joint and soft tissue swelling",
      "Tendonitis, bursitis, or ligament flare-ups",
      "Support after orthopedic interventions or surgery",
    ],
    imageSrc: "/images/pain/localized-cryotherapy/4.webp",
    imageAlt: "Localized cryotherapy treatment",
  },

  whyTrupeakData: {
    title: "Why It Matters",
    subtitle:
      "Precision cooling can significantly accelerate healing in the short term and prevent long-term dysfunction. This modality helps:",
    points: [
      "Reduce localized pain and discomfort",
      "Improve range of motion and joint mobility",
      "Lower inflammatory markers",
      "Enhance muscle activation post-treatment",
    ],
    image: "/images/pain/localized-cryotherapy/5.webp",
  },

  tools: [
    "Functional movement therapy",
    "MuscleSound and InBody scans to assess tissue quality",
    "Sleep and hormone tracking for inflammation control",
    "Post-exercise care for optimized recovery response",
  ],

  rightForYouItems: [
    {
      icon: <FaQuestionCircle className="text-white text-lg" />,
      text: "Are recovering from trauma, injury, or orthopedic surgery",
    },
    {
      icon: <FaSnowflake className="text-white text-lg" />,
      text: "Experience frequent inflammation or chronic pain from physical activity",
    },
    {
      icon: <FaHeartbeat className="text-white text-lg" />,
      text: "Seek advanced support to reduce downtime and accelerate return to function",
    },
    {
      icon: <FaUser className="text-white text-lg" />,
      text: "Prefer non-invasive recovery tools tailored to their body’s needs",
    },
  ],

  cta: {
    title: "Book Your Localized Cryotherapy Session",
    description:
      "Your care begins with a full assessment by our musculoskeletal team, followed by a personalized recovery roadmap. With consistent monitoring and clinical oversight, we help you recover fully — not just functionally, but biologically.",
    buttonText: "Book Your Session",
    buttonLink: "#",
    backgroundImage: "/images/localized-cryotherapy/cta.webp",
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
        description="Localized cryotherapy uses medical-grade devices to target specific muscles, joints, or inflamed areas, reducing pain and swelling without affecting core body temperature. It is often integrated into Trupeak’s rehabilitation and injury recovery plans."
        imageSrc="/images/pain/localized-cryotherapy/3.webp"
        imageAlt="Localized cryotherapy device"
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
        subtitle="As part of a comprehensive recovery plan, localized cryotherapy may be combined with:"
        items={tools}
        iconSrc="/images/localized-cryotherapy/icon.webp"
      />

      {/* ✅ Is It Right for You */}
      <IsItRightForYou
        title="Is It Right for You?"
        subtitle="Localized cryotherapy may be ideal if you:"
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
