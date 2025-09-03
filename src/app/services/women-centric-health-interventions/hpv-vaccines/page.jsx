import React from "react";
import ContactForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";
import HairHero from "@/components/Hair/HairHero";
import Imagetext from "@/components/Imagetext";
import TreatmentApproach from "@/components/NewComponent/TreatmentApproach";
import ProgramGoals from "@/components/NewComponent/ProgramGoals";
import WhatWeTrack from "@/components/weight-management/WhatWeTrack";
import CtaSection from "@/components/regenerative-therapies/CtaSection";
import WhoThisIsFor from "@/components/weight-management/WhoThisIsFor";

function Page() {
  const data = {
    hero: {
      title: "HPV Vaccines",
      mainImage: "/images/women/hpv/2.webp", // update path as needed
      circleImage: "/images/women/hpv/1.webp",
    },
    overview: {
      title: "Protecting women’s health begins with prevention.",
      description:
        "Human Papillomavirus (HPV), a common infection linked to cervical, vaginal, vulvar, and anal cancers, can be effectively managed through timely care. At TruPeak, we provide personalized HPV vaccination and screening programs that are evidence-based, safe, and guided by expert gynecologists for both young women and parents planning protection for their daughters.",
      image: "/images/women/hpv/3.webp",
      reverse: true,
      bgColor: "",
      textColor: "text-two",
      radius: "true",
    },
    whyTrupeak: {
      title: "What We Assess",
      description:
        "HPV-related risks can vary based on age, immune status, and sexual history. Our preventive assessment includes:",
      points: [
        "Risk profiling based on lifestyle factors",
        "Risk profiling based on medical history",
        "Review of past Pap smear results",
        "Review of previous HPV test results",
        "Counseling for vaccine eligibility and timing",
        "HPV DNA screening and cervical health planning for women over 30 when indicated",
      ],
    },
    programGoals: {
      title: "Why This Matters",
      description:
        "HPV-related cancers are preventable, yet still underdiagnosed. At Trupeak, we believe taking steps to prevent illness can be just as impactful as addressing it. We ensure that every woman receives guidance, protection, and follow-up care based on the most current scientific evidence.",
      image: "/images/women/hpv/5.webp",
      reverse: false,
    },
    items: [
      "Individualized risk review and timing",
      "Cervarix, Gardasil, or Gardasil-9 based on patient profile",
      "Either a 2- or 3-dose schedule, depending on age and how the immune system responds",
      "Post-vaccination follow-up and cervical cancer screening reminders",
      "Integration into your full preventive care timeline",
    ],
    infoSection: {
      title: "Is It Right for You?",
      description: "This program is for you if you:",
      items: [
        {
          description:
            "Are younger than 45 years of age and haven’t had the HPV vaccine yet",
        },
        { description: "Want to protect your daughter or teen from HPV risks" },
        {
          description:
            "Have a personal or family history of cervical abnormalities",
        },
        {
          description:
            "Need guidance on HPV screening and cervical wellness",
        },
      ],
      bgColor: "#2C886A",
      titleColor: "#FFFFFF",
      cardBgColor: "white",
    },
    cta: {
      title:
        "Take charge of your cervical health with TruPeak’s expert-led HPV prevention program.",
      description:
        "We integrate vaccination into your full preventive care timeline for lasting peace of mind.",
      buttonText: "Book a Consultation",
      buttonLink: "/contact",
      backgroundImage: "/images/women/hpv/6.webp",
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <HairHero {...data.hero} />

      {/* Overview Section */}
      <Imagetext {...data.overview} />

      {/* What We Assess */}
      <WhatWeTrack {...data.whyTrupeak} />

      {/* Vaccine Protocol (Treatment Approach) */}
      <TreatmentApproach
        title="Vaccine Protocol"
        description="The HPV vaccine works best when administered before exposure to the virus, ideally during adolescence or early adulthood. However, it can still benefit women up to age 45. At Trupeak, our vaccination plan includes:"
        items={data.items}
        image="/images/women/hpv/4.webp"
        footer="We adapt your care plan as your body responds, tracking progress through both lab markers and symptom relief."
      />

      {/* Why This Matters */}
      <ProgramGoals {...data.programGoals} />

      {/* Is It Right for You */}
      <WhoThisIsFor {...data.infoSection} />

      {/* CTA */}
      <CtaSection {...data.cta} />

      {/* Contact */}
      <ContactSection />
      <ContactForm />
    </div>
  );
}

export default Page;
