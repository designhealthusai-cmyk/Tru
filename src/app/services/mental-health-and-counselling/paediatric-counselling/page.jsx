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
      title: "Pediatric Counseling (ADHD and Other Issues)",
      mainImage: "/images/mental/pediatric/2.webp",
      circleImage: "/images/mental/pediatric/1.webp",
    },
    overview: {
      title: "Supporting Children and Adolescents Through Growth",
      description:
        "Children and adolescents experience distinct emotional and developmental hurdles as they grow. At TruPeak, Pediatric counseling is designed to support their mental well-being during the most critical years of growth. Whether your child is struggling with attention deficit issues, hormonal upheaval, behavioral changes, educational stress, bullying, or emotional regulation, our clinicians offer structured support with compassion and care.",
      image: "/images/mental/pediatric/3.webp",
      reverse: true,
      bgColor: "",
      textColor: "text-two",
      radius: "true",
    },
    programGoals: {
      title: "Why It Matters",
      description:
        "The early years shape lifelong mental health. When left unaddressed, behavioral or emotional difficulties can impact academic performance, social development, family relationships, and self-esteem. Pediatric counseling at TruPeak provides timely support that promotes confidence, healthy emotional expression, and improved family dynamics.",
      image: "/images/mental/pediatric/4.webp",
      reverse: false,
    },
    whyTrupeak: {
      title: "How It Works",
      description:
        "Our approach blends psychology with developmental insights to create personalized therapy plans for each child. Depending on the child’s age, condition, and needs, sessions may involve:",
      points: [
        "Play therapy and age-appropriate conversation to uncover emotional blocks",
        "Cognitive-behavioral tools for focus, mood, and impulse control",
        "Behavioral therapy to reduce defiance, aggression, or withdrawal",
        "Parent-child coaching to strengthen communication and bonding",
        "At-home strategies that reinforce emotional regulation and confidence",
        "Ongoing tracking of school performance, social development, and well-being",
      ],
    },
    benefitsData: {
      title: "Our Support Pathway",
      benefits: [
        {
          text: "Initial Evaluation: A calm, child-friendly consultation to assess behavioral concerns, emotional needs, and developmental history.",
          bgColor: "bg-[#122644]",
        },
        {
          text: "Custom Plan: A therapy framework tailored to your child’s profile with session goals, parent involvement, and clinical focus areas clearly outlined.",
          bgColor: "bg-[#E2C879]",
        },
        {
          text: "Integrated Care: Therapy that may incorporate input from pediatricians, educators, or specialists to support holistic development.",
          bgColor: "bg-[#122644]",
        },
        {
          text: "Ongoing Support: Consistent monitoring, family check-ins, and plan adjustments to track progress and support lasting change.",
          bgColor: "bg-[#2C8C72]",
        },
      ],
      bgColor: "bg-white",
    },
    programFit: {
      heading: "Is It Right for Your Child?",
      description: "This program is ideal for children or adolescents who:",
      image: "/images/mental/pediatric/5.webp",
      items: [
        "Struggle with attention, hyperactivity, or impulsive behavior",
        "Have difficulty expressing emotions or managing outbursts",
        "Show signs of anxiety, school-related stress, or social isolation",
        "Are navigating changes like divorce, grief, or bullying",
        "Need support through medical treatment or chronic health conditions",
        "Require family support to address sibling conflict or parenting stress",
      ],
      note: "Early support is key. Schedule a pediatric mental health evaluation at TruPeak to help your child build emotional stability, learning readiness, and lasting confidence.",
    },
    cta: {
      title: "Build Your Child’s Emotional Resilience",
      description:
        "At TruPeak, we provide structured pediatric counseling tailored to children and adolescents. Book an appointment today to support your child’s growth, confidence, and emotional well-being.",
      buttonText: "Book a Consultation",
      buttonLink: "/contact",
      backgroundImage: "/images/mental/pediatric/6.webp",
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
