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
      title: "Psychologist Sessions",
      mainImage: "/images/mental/psychologist/2.webp",
      circleImage: "/images/mental/psychologist/1.webp",
    },
    overview: {
      title: "Personalized Sessions for Real Transformation",
      description:
        "At TruPeak, we offer personalized psychologist sessions that go beyond talk therapy, providing a safe, structured space to explore challenges, heal trauma, and build resilience. Guided by experienced clinical psychologists, each session is tailored to your needs, whether you are facing anxiety, depression, burnout, relationship stress, or life transitions, helping you process and move forward with clarity and purpose.",
      image: "/images/mental/psychologist/3.webp",
      reverse: true,
      bgColor: "",
      textColor: "text-two",
      radius: "true",
    },
    programGoals: {
      title: "Why This Matters",
      description:
        "Unaddressed emotional health can lead to physical symptoms, slower recovery, and reduced vitality. At TruPeak, we integrate therapy with clinical data to build lasting clarity, stability, and confidence. Our sessions go beyond conversation, offering science-based, personalized tools for real transformation.",
      image: "/images/mental/psychologist/4.webp",
      reverse: false,
    },
    whyTrupeak: {
      title: "How It Works",
      description:
        "Psychologist sessions at TruPeak begin with a thorough evaluation and adapt as you progress, ensuring therapy is personalized and aligned with your overall health plan. Each session may include:",
      points: [
        "A full emotional and mental health assessment",
        "Review of relevant nutrition, sleep, or hormone data",
        "Cognitive Behavioral Therapy (CBT), solution-focused therapy, or mindfulness-based techniques",
        "Goal setting and progress tracking with measurable outcomes",
        "Family or partner sessions when relationship dynamics affect well-being",
        "Coordination with functional medicine or peptide therapy (if needed)",
      ],
    },
    benefitsData: {
      title: "Our Support Pathway",
      benefits: [
        {
          text: "Initial Evaluation: Comprehensive intake to assess emotional triggers, health history, and current challenges",
          bgColor: "bg-[#122644]",
        },
        {
          text: "Custom Plan: Therapist-matched and structured based on your goals",
          bgColor: "bg-[#E2C879]",
        },
        {
          text: "Integrated Care: Therapy informed by metabolic, hormonal, or neurological insights where relevant",
          bgColor: "bg-[#122644]",
        },
        {
          text: "Ongoing Support: Consistent tracking, feedback, and collaborative care across disciplines",
          bgColor: "bg-[#2C8C72]",
        },
      ],
      bgColor: "bg-white",
    },
    programFit: {
      heading: "Is It Right for You?",
      description:
        "TruPeak psychologist sessions are ideal for individuals seeking personalized, confidential, and evidence-based mental health care. This may include:",
      image: "/images/mental/psychologist/5.webp",
      items: [
        "Chronic stress, emotional fatigue, or burnout",
        "Depression, anxiety, or post-trauma symptoms",
        "Relationship or family strain",
        "Support during recovery from cancer, hormonal shifts, or major illness",
        "Desire to improve emotional regulation, sleep, focus, or life clarity",
      ],
      note: "Your mental health is the foundation for everything else: healing, energy, and purpose. At TruPeak, we help you build that foundation with clarity and clinical care, one step at a time.",
    },
    cta: {
      title: "Ready to Begin Your Journey to Clarity?",
      description:
        "Book a psychologist session with TruPeak today and take the first step toward resilience, healing, and emotional strength.",
      buttonText: "Book a Consultation",
      buttonLink: "/contact",
      backgroundImage: "/images/mental/psychologist/6.webp",
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
