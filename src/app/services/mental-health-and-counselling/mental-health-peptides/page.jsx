import React from "react";
import ContactForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";
import HairHero from "@/components/Hair/HairHero";
import Imagetext from "@/components/Imagetext";
import BenefitsSection from '@/components/weight-management/BenefitsSection';
import ProgramFit from "@/components/NewComponent/ProgramFit";
import ProgramGoals from "@/components/ProgramGoals";
import WhatWeTrack from "@/components/weight-management/WhatWeTrack";
import CtaSection from "@/components/regenerative-therapies/CtaSection";
function Page() {
  // ✅ Centralized Data in Same File
  const data = {
    hero: {
      title: "Mental Health Peptides",
      mainImage: "/images/mental/mental/2.webp",
      circleImage: "/images/mental/mental/1.webp",
    },
    overview: {
      title: "At TruPeak, Your Emotional Wellness Matters",
      description:
        "At TruPeak, we understand that emotional wellness is closely tied to biology. Mental health peptides offer a promising therapy for anxiety, depression, cognitive fatigue, trauma, and mood imbalances by influencing neurotransmitters, hormones, and inflammation that shape resilience. We use peptide therapy as a precision tool to restore balance and support long-term emotional stability, never as a shortcut.",
      image: "/images/mental/mental/3.webp",
      reverse: true,
      bgColor: "",
      textColor: "text-two",
      radius: "true",
    },
    programGoals: {
      title: "Why It Matters",
      description:
        "Conventional mental health care often overlooks the biological variables behind emotional symptoms. At TruPeak, we believe mental clarity and emotional balance are not just psychological goals; they are also biochemical realities that can be addressed scientifically.",
      image: "/images/mental/mental/4.webp",
      reverse: false,
    },
    whyTrupeak: {
      title: "How It Works",
      description:
        "Mental health peptides interact with receptors in the brain, nervous system, and gut to modulate pathways involved in stress, inflammation, cognition, and mood regulation. Specific peptides may:",
      points: [
        "Promote neurogenesis and synaptic repair",
        "Regulate cortisol and stress responses",
        "Support serotonin, dopamine, and GABA signalling",
        "Improve sleep quality and circadian rhythm",
        "Reduce neuro-inflammation associated with trauma and burnout",
      ],
    },
    benefitsData: {
      title: "Our Support Pathway",
      benefits: [
        {
          text: "Care begins with a detailed assessment of your mental and biochemical health",
          bgColor: "bg-[#122644]",
        },
        {
          text: "Personalized peptide protocols tailored to your profile",
          bgColor: "bg-[#E2C879]",
        },
        {
          text: "Supported by nutrition, lifestyle, and psychological guidance",
          bgColor: "bg-[#122644]",
        },
        {
          text: "Close monitoring for safety and results by licensed experts",
          bgColor: "bg-[#2C8C72]",
        },
      ],
      bgColor: "bg-white",
    },
    programFit: {
      heading: "Is It Right for You?",
      description: "Mental health peptides may benefit individuals who:",
      image: "/images/mental/mental/5.webp",
      items: [
        "Struggle with constant stress, low mood, or fatigue that affects daily life",
        "Are navigating trauma recovery or post-illness emotional depletion",
        "Want to support cognitive focus without stimulants",
        "Have not responded well to traditional therapies",
      ],
      note: "Every protocol is guided by licensed experts with close monitoring for safety and results.",
    },
    cta: {
      title: "Ready to Strengthen Your Mental Resilience?",
      description:
        "At the cellular level, mental wellness becomes a strong foundation for overall vitality and true peak performance. Book your consultation to explore peptide therapy at TruPeak.",
      buttonText: "Book a Consultation",
      buttonLink: "/contact",
      backgroundImage: "/images/mental/mental/6.webp",
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
