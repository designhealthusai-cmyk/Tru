import React from "react";
import ContactForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";
import HairHero from "@/components/Hair/HairHero";
import Imagetext from "@/components/Imagetext";
import BenefitsSection from "@/components/weight-management/BenefitsSection";
import ProgramFit from "@/components/NewComponent/ProgramFit";
import ProgramGoals from "@/components/ProgramGoals";
import WhatWeTrack from "@/components/weight-management/WhatWeTrack";
import CtaSection from "@/components/regenerative-therapies/CtaSection";

function Page() {
  // ✅ Centralized Data in Same File
  const data = {
    hero: {
      title: "Chronic Illness Counselling and Support (Cancer-Specific)",
      mainImage: "/images/mental/chronic/2.webp",
      circleImage: "/images/mental/chronic/1.webp",
    },
    overview: {
      title: "Cancer Impacts More Than Just the Body",
      description:
        "Cancer affects not only health but also emotions, relationships, and daily life. At TruPeak, we provide chronic illness counseling tailored for cancer patients to offer personalized support during treatment, remission, or survivorship. Since many patients face anxiety or depression that can impact decision-making, treatment adherence, and quality of life, our focus is on integrating mental health care as a vital part of the cancer journey.",
      image: "/images/mental/chronic/3.webp",
      reverse: true,
      bgColor: "",
      textColor: "text-two",
      radius: "true",
    },
    programGoals: {
      title: "Why This Matters",
      description:
        "Emotional distress is directly correlated with poor health outcomes in cancer care. Patients with unaddressed psychological needs are 1.5 to 2 times more likely to discontinue treatment prematurely. At TruPeak, our goal is not just survival, but helping you restore mental clarity, emotional strength, and life engagement.",
      image: "/images/mental/chronic/4.webp",
      reverse: false,
    },
    whyTrupeak: {
      title: "How It Works",
      description:
        "Living with cancer often brings a continuous cycle of emotional highs and lows. Our support focuses on helping you navigate these challenges with expert, personalized care. We address:",
      points: [
        "Persistent anxiety related to scans, procedures, or medical results",
        "Depression, emotional numbness, or overwhelming fatigue",
        "Identity shifts following hair loss, surgery, or body image changes",
        "Feelings of isolation or withdrawal from social and family life",
        "Grief around loss of independence, fertility, or future plans",
        "Relationship strain or conflicts with caregivers or loved ones",
      ],
    },
    benefitsData: {
      title: "Our Support Pathway",
      benefits: [
        {
          text: "Each client is paired with a licensed therapist trained in psycho-oncology and trauma-informed therapy",
          bgColor: "bg-[#122644]",
        },
        {
          text: "Cognitive-behavioral, acceptance-based, and mindfulness therapies for stress and emotional balance",
          bgColor: "bg-[#E2C879]",
        },
        {
          text: "Grief counseling, trauma recovery, and adjustment-to-illness support",
          bgColor: "bg-[#122644]",
        },
        {
          text: "Guided family communication strategies to strengthen relationships",
          bgColor: "bg-[#2C8C72]",
        },
        {
          text: "Integrated care with TruPeak experts in nutrition, hormone balance, and functional medicine",
          bgColor: "bg-[#122644]",
        },
      ],
      bgColor: "bg-white",
    },
    programFit: {
      heading: "Is It Right for You?",
      description: "This service is ideal if you:",
      image: "/images/mental/chronic/5.webp",
      items: [
        "Feel emotionally overwhelmed during or after cancer care",
        "Experience unresolved grief, fear, or fatigue",
        "Want to improve resilience during ongoing treatments",
        "Are a caregiver struggling with guilt, fatigue, or emotional depletion",
      ],
      note: "You deserve care that includes your mind and emotions, not just your labs and scans. We’re here to help you build back your life with strength and clarity.",
    },
    cta: {
      title: "Ready to Rebuild Emotional Strength During Your Cancer Journey?",
      description:
        "At TruPeak, our goal is to help you restore balance, clarity, and emotional resilience so you can face treatment and survivorship with strength. Book your consultation today.",
      buttonText: "Book a Consultation",
      buttonLink: "/contact",
      backgroundImage: "/images/mental/chronic/cta.webp",
    },
  };

  return (
    <div>
      <HairHero {...data.hero} />
      <Imagetext {...data.overview} />
      <ProgramGoals {...data.programGoals} />
      <WhatWeTrack {...data.whyTrupeak} />
      <BenefitsSection {...data.benefitsData} />
      <ProgramFit {...data.programFit} />
      <CtaSection {...data.cta} />
      <ContactSection />
      <ContactForm />
    </div>
  );
}

export default Page;
