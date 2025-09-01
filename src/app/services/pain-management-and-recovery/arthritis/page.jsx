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
    title: "Arthritis",
    subtitle: "Restoring comfort and mobility through targeted, inflammation-aware care.",
    mainImage: "/images/pain/arthritis/2.webp",
    circleImage: "/images/pain/arthritis/1.webp",
  },

  addressData: {
    title: "What We Address",
    subtitle: "Your arthritis care plan is built through a comprehensive diagnostic process, including:",
    items: [
      "Health history review and full-body symptom mapping",
      "Blood work for inflammatory and autoimmune markers (CRP, ESR, RF, anti-CCP, uric acid, vitamin D)",
      "Imaging (ultrasound or MRI) to assess cartilage, synovial fluid, and bony changes",
      "Gait and posture analysis to identify biomechanical stressors on joints",
    ],
    imageSrc: "/images/pain/arthritis/4.webp",
    imageAlt: "Doctor examining arthritis patient",
  },

  whyTrupeakData: {
    title: "Why It Matters",
    subtitle:
      "Arthritis impacts more than your joints; it affects your mobility, independence, and quality of life. Our multidisciplinary protocol helps:",
    points: [
      "Reduce joint pain, stiffness, and swelling",
      "Improve cartilage lubrication and tissue resilience",
      "Restore balance in the muscles surrounding affected joints",
      "Lower systemic inflammation and flare-up risk",
    ],
    image: "/images/pain/arthritis/5.webp",
  },

  tools: [
    "Platelet-rich plasma (PRP) or hyaluronic acid injections (under ultrasound guidance)",
    "Low-level laser therapy and focused shockwave for tissue repair",
    "Immune modulation options like peptides or low-dose naltrexone (based on specialist input)",
    "Anti-inflammatory nutrition focused on omega-3s, colorful plants, and joint-supportive supplements",
    "Myofascial therapy, cryotherapy, and lymphatic techniques for swelling and discomfort",
    "Joint-friendly movement training to strengthen stabilizers and improve daily function",
  ],

  rightForYouItems: [
    {
      icon: <FaQuestionCircle className="text-white text-lg" />,
      text: "Have been diagnosed with osteoarthritis, rheumatoid arthritis, or autoimmune-related joint pain",
    },
    {
      icon: <FaVial className="text-white text-lg" />,
      text: "Experience joint stiffness, swelling, or mobility limitations",
    },
    {
      icon: <FaCapsules className="text-white text-lg" />,
      text: "Are hoping to delay surgery or manage symptoms non-invasively",
    },
    {
      icon: <FaUser className="text-white text-lg" />,
      text: "Want a biologically-rooted, multi-system plan for long-term joint health",
    },
  ],

  cta: {
    title: "Book Your Arthritis Care Consultation",
    description:
      "We track your progress closely, retesting joint function, mobility, and blood inflammation markers every few weeks. At Trupeak, arthritis care isn’t just about pain relief, it’s about restoring strength, flexibility, and freedom of movement.",
    buttonText: "Book Your Appointment",
    buttonLink: "#",
    backgroundImage: "/images/pain/arthritis/3.webp",
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
        description="At Trupeak, we recognize that multiple factors often contribute to the development of arthritis. Degenerative wear, autoimmune dysfunction, metabolic imbalances, or past injuries can each contribute to chronic joint pain and stiffness. Our arthritis protocol is designed to address these complexities, treating inflammation at its root and rebuilding joint health from the inside out."
        imageSrc="/images/pain/arthritis/3.webp"
        imageAlt="Arthritis Treatment"
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
        subtitle="Your personalized arthritis plan may include:"
        items={tools}
        iconSrc="/images/immunity-long/genetic-mapping/icon.png"
      />

      {/* ✅ Is It Right For You */}
      <IsItRightForYou
        title="Is It Right for You?"
        subtitle="This protocol is ideal for individuals who:"
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
