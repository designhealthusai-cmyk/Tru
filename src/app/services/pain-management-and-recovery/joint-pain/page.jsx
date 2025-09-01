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
    title: "Joint Pain Management",
    subtitle: "Reclaim mobility with structural correction and functional support.",
    mainImage: "/images/pain/joint/2.webp",
    circleImage: "/images/pain/joint/1.webp",
  },

  addressData: {
    title: "What We Address",
    subtitle:
      "Our program is designed to relieve joint pain and restore function through:",
    items: [
      "Postural and gait evaluation to identify movement imbalances",
      "Ultrasound or MRI imaging to assess cartilage health and inflammation",
      "Manual therapy to ease joint tension and improve tissue mobility",
      "Movement retraining to reactivate stabilizing muscle groups",
    ],
    imageSrc: "/images/pain/joint/4.webp",
    imageAlt: "Joint pain therapy",
  },

  whyTrupeakData: {
    title: "Why It Matters",
    subtitle:
      "Chronic joint pain doesn’t just hurt; it changes how you move, stand, and live. Our protocol helps:",
    points: [
      "Reduce joint inflammation and stiffness",
      "Improve alignment and mobility",
      "Reactivate and rebalance support muscles",
      "Prevent further wear and tear through better movement mechanics",
    ],
    image: "/images/pain/joint/5.webp",
  },

  tools: [
    "Manual and myofascial therapy",
    "Functional rehab and progressive resistance training",
    "Nutritional guidance to manage inflammation and support repair",
    "Precision supplements such as omega-3s and curcumin",
    "Hydration strategies for joint fluid balance",
    "Posture and movement re-education to optimize joint mechanics",
  ],

  rightForYouItems: [
    {
      icon: <FaQuestionCircle className="text-white text-lg" />,
      text: "Experience chronic or recurring joint pain in the knees, hips, shoulders, back, or wrists",
    },
    {
      icon: <FaVial className="text-white text-lg" />,
      text: "Are recovering from an injury or managing degenerative changes",
    },
    {
      icon: <FaCapsules className="text-white text-lg" />,
      text: "Want to restore mobility and prevent further dysfunction",
    },
    {
      icon: <FaUser className="text-white text-lg" />,
      text: "Prefer a non-surgical, root-cause approach to joint care",
    },
  ],

  cta: {
    title: "Book Your Joint Pain Consultation",
    description:
      "Every plan begins with a movement and structural assessment by our clinical team. From there, we create a personalized roadmap to reduce pain, support your joints, and get you moving with strength and confidence.",
    buttonText: "Book Your Appointment",
    buttonLink: "#",
    backgroundImage: "/images/pain/joint/3.webp",
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
        description="At TruPeak, Joint Pain Management focuses on how your body moves and adapts to stress. Whether from age, injury, or strain, joint discomfort can limit daily life. Our approach uses diagnostics, hands-on therapy, targeted movement, and nutrition to address the root cause, not just the pain."
        imageSrc="/images/pain/joint/3.webp"
        imageAlt="Joint Pain Management Program"
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
        subtitle="Depending on your condition, your joint recovery plan may include:"
        items={tools}
        iconSrc="/images/immunity-long/genetic-mapping/icon.png"
      />

      {/* ✅ Is It Right For You */}
      <IsItRightForYou
        title="Is It Right for You?"
        subtitle="Consider this program if you:"
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
