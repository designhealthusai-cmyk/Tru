import React from "react";
import Cards from "@/components/cards";
import ContactForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";
import HairHero from "@/components/Hair/HairHero";
import Imagetext from "@/components/Imagetext";
import BenefitsSection from "@/components/NewComponent/BenefitsSection";
import FAQSection from "@/components/NewComponent/FAQSection";
import ProcedureSummary from "@/components/NewComponent/ProcedureSummary";
import ProgramFit from "@/components/NewComponent/ProgramFit";
import WhoThisIsFor from "@/components/weight-management/WhoThisIsFor";
import ProgramGoals from "@/components/ProgramGoals";
import WhatWeTrack from "@/components/weight-management/WhatWeTrack";
function Page() {
  // ✅ Centralized Data in Same File
  const data = {
    hero: {
      title: "Face Aesthetics",
      mainImage: "/images/beauty/face-aestheticsface-aesthetics/2.webp",
      circleImage: "/images/beauty/face-aestheticsface-aesthetics/1.webp"
    },
    overview: {
      title: "Overview",
      description:
        "Facial ageing is natural, but the right care can shape how your skin looks and feels. At Trupeak, we offer advanced face treatments in Mumbai and Pune, starting with a diagnostic skin scan to assess texture, firmness, and collagen. From injectables to regenerative care and face laser treatments, every plan is personalized to restore strength, tone, and radiance without surgery or long downtime.",
      image: "/images/beauty/face-aestheticsface-aesthetics/3.webp",
      reverse: true,
      bgColor: "",
      textColor: "text-two",
      radius: "true"
    },
     whyTrupeak: {
  title: "What We Track",
  description:
    "Every step in your transformation is supported by targeted, clinically valid metrics. Our tracking system includes",
  points: [
    "Body Composition Monitoring through InBody970 scans",
    "Basal Metabolic Rate (BMR) Assessments to guide caloric intake",
    "Segmental Fat and Muscle Analysis to distinguish healthy change from muscle depletion",
    "Metabolic Trend Reporting based on Q-NRG testing (Using Indirect Calorimetry)",
    "Girth and Circumference measures are used when relevant for regional fat tracking"
  ]
},
    cards: [
      {
        title: "PRP Facial Therapy",
        description: [
          "Your platelet-rich plasma is used to boost collagen, improve tone, and encourage healthy skin renewal. Ideal for dull skin, early signs of ageing, and acne-related scarring."
        ]
      },
      {
        title: "Skin Boosters & Mesotherapy",
        description: [
          "Microinjections of hyaluronic acid, nutrients, and antioxidants hydrate the skin, improve radiance, and build long-term resilience."
        ]
      },
      {
        title: "Thread Lift (PDO Threads)",
        description: [
          "Fine dissolvable threads gently lift and firm sagging areas while stimulating collagen production. Often used around the cheeks, jawline, and eyes."
        ]
      }
    ],
    programFit: {
      heading: "Is This Program Right for You?",
      description: "These treatments may help if you experience:",
      image: "/images/beauty/face-aestheticsface-aesthetics/4.webp",
      items: [
        "Fine lines or sagging skin",
        "Uneven or tired-looking complexion",
        "Mild ageing signs and prefer non-surgical options",
        "Acne scarring or textural irregularities"
      ],
      note: "Each treatment begins with a full skin consultation and scan."
    },
    benefits: {
      heading: "Benefits of Face Aesthetic Treatments at Trupeak",
      items: [
        "Clinically guided procedures using your skin’s repair potential",
        "Minimal or no downtime for most services",
        "Customised to your skin type and concerns",
        "Safe for a wide range of skin tones"
      ],
      image: "/images/beauty/face-aestheticsface-aesthetics/5.webp"
    },
    procedureSummary: {
      heading: "Procedure Summary",
      procedures: [
        {
          title: "PRP Facial",
          description:
            "It takes about 45 minutes. You can return to normal activities immediately."
        },
        {
          title: "Skin Boosters",
          description:
            "Completed in 30 to 45 minutes. Some redness may appear and usually settles within a day."
        },
        {
          title: "PDO Threads",
          description:
            "Lasts 60 to 90 minutes. Minor swelling or bruising may occur and typically resolves in 2–3 days."
        }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      faqs: [
        {
          question: "When will I see results?",
          answer:
            "Most clients notice improvement within 2–4 weeks, with continued gains over 3–6 months."
        },
        {
          question: "Is the thread lift painful?",
          answer:
            "No. Only local numbing is used. You may feel some pressure, but most clients report minimal discomfort."
        },
        {
          question: "Are these suitable for sensitive skin?",
          answer: "Yes. Treatments are tailored to your skin’s tolerance and needs."
        },
        {
          question: "Can I combine treatments?",
          answer: "Yes. PRP and skin boosters can often be done together for better results."
        }
      ]
    }
  };

  return (
    <div>
      <HairHero {...data.hero} />
      <Imagetext {...data.overview} />
      <ProgramGoals {...data.programGoals} />
      <WhatWeTrack {...data.whyTrupeak} />
      <ProgramFit {...data.programFit} />
      <BenefitsSection {...data.benefits} />
      <FAQSection {...data.faq} />
      <ProcedureSummary {...data.procedureSummary} />
      <ContactSection />
      <ContactForm />
    </div>
  );
}

export default Page;
