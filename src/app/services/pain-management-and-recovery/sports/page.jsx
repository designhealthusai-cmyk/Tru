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
import { FaUser, FaDumbbell, FaHeartbeat, FaRunning } from "react-icons/fa";

const pageData = {
  hero: {
    title: "Sports Recovery",
    subtitle: "Train harder. Recover smarter. Perform stronger.",
    mainImage: "/images/pain/sports-recovery/2.webp",
    circleImage: "/images/pain/sports-recovery/1.webp",
  },

  addressData: {
    title: "What We Address",
    subtitle:
      "We tailor our recovery model to your performance demands, incorporating the following elements:",
    items: [
      "Muscle & Hormone Recovery: Evaluation of tissue quality and fatigue markers",
      "Mobility & Myofascial Restoration: Improving joint and soft tissue function",
      "Inflammation & Soreness Management: Cryotherapy for faster recovery",
      "IV Support & Nutrition: Rehydration and micronutrient replenishment",
    ],
    imageSrc: "/images/pain/sports-recovery/4.webp",
    imageAlt: "Sports recovery treatment",
  },

  whyTrupeakData: {
    title: "Why It Matters",
    subtitle:
      "Recovery is the key to performance. Without it, progress stalls and injuries mount. Our program helps:",
    points: [
      "Shorten recovery windows",
      "Reduce muscle breakdown",
      "Improve neuromuscular readiness",
      "Prevent repetitive stress injuries",
    ],
    image: "/images/pain/sports-recovery/5.webp",
  },

  tools: [
    "InBody and MuscleSound analysis",
    "Metabolic rate and stress hormone mapping",
    "Post-training compression therapy",
    "Precision nutrition aligned with energy and inflammation markers",
  ],

  rightForYouItems: [
    {
      icon: <FaRunning className="text-white text-lg" />,
      text: "Are training for an event or athletic season",
    },
    {
      icon: <FaHeartbeat className="text-white text-lg" />,
      text: "Experience soreness or performance dips",
    },
    {
      icon: <FaDumbbell className="text-white text-lg" />,
      text: "Need faster post-exertion recovery",
    },
    {
      icon: <FaUser className="text-white text-lg" />,
      text: "Want to optimise results through data",
    },
  ],

  cta: {
    title: "Book Your Sports Recovery Session",
    description:
      "Your body is the vehicle for your performance. We help you maintain it at peak condition.",
    buttonText: "Book Your Session",
    buttonLink: "#",
    backgroundImage: "/images/pain/sports-recovery/5.webp",
  },
};

function Page() {
  const { hero, addressData, whyTrupeakData, tools, rightForYouItems, cta } =
    pageData;

  return (
    <div className="flex flex-col ">
      {/* ✅ Hero Section */}
      <Hero {...hero} />

      {/* ✅ Image + Text Section */}
      <ImageTextSection
        description="At Trupeak, sports recovery is designed to help athletes and active individuals bounce back faster and perform better. Our recovery tools support your body between sessions, whether you train full-time or just for fun."
        imageSrc="/images/pain/sports-recovery/3.webp"
        imageAlt="Sports Recovery Treatment"
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
        subtitle="Our sports recovery may include:"
        items={tools}
        iconSrc="/images/immunity-long/genetic-mapping/icon.png"
      />

      {/* ✅ Is It Right For You */}
      <IsItRightForYou
        title="Is It Right for You?"
        subtitle="Choose this track if you:"
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
