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

function Page() {
  const data = {
    hero: {
      title: "Women’s Intimate Aesthetics",
      mainImage: "/images/beauty/womens-intimate-aesthetics/2.webp", // update with actual image
      circleImage: "/images/beauty/womens-intimate-aesthetics/1.webp" // update with actual image
    },
    overview: {
      title: "Overview",
      description:
        "At Trupeak, we provide discreet, science-based care with non-invasive therapies that support women’s intimate health, enhance comfort, and restore confidence. Each treatment is personalized through a thorough consultation that considers your symptoms, health history, and goals, ensuring care tailored to every stage of life.",
      image: "/images/beauty/womens-intimate-aesthetics/3.webp", // update with actual image
      reverse: true,
      bgColor: "",
      textColor: "text-two",
      radius: "true"
    },
    cards: [
      {
        title: "Laser Vaginal Rejuvenation",
        description: [
          "A non-invasive treatment that restores vaginal tone, elasticity, and hydration by stimulating collagen, often chosen after childbirth or during menopause."
        ]
      },
      {
        title: "Intimate Area Peels and Brightening",
        description: [
          "Targeted chemical peels for the labial and perineal areas reduce pigmentation and improve skin texture, helping create a more even, refreshed appearance."
        ]
      },
      {
        title: "Non-surgical Labial Contouring",
        description: [
          "Uses Radiofrequency or gentle injectable treatments to restore volume, balance, and firmness without incisions or surgical downtime."
        ]
      }
    ],
    programFit: {
      heading: "Is This Right for You?",
      description: "You may benefit from these treatments if you are experiencing:",
      image: "/images/beauty/womens-intimate-aesthetics/4.webp", // update with actual image
      items: [
        "Vaginal dryness, irritation, or discomfort",
        "Laxity or loss of tone post-pregnancy or post-menopause",
        "Reduced sexual satisfaction or confidence",
        "Mild urinary leakage during exercise or coughing",
        "Concerns about pigmentation or symmetry in intimate areas"
      ],
      note: "All therapies are provided discreetly after a full consultation, supporting women’s intimate health at every life stage with clarity, guidance, and effective care."
    },
    benefits: {
      heading: "Benefits of Trupeak Intimate Health Treatments",
      items: [
        "Non-surgical options with minimal downtime",
        "Improved tone, hydration, and elasticity",
        "Support for post-childbirth and menopausal changes",
        "Confidential care in a safe, private environment"
      ],
      image: "/images/beauty/womens-intimate-aesthetics/5.webp" // update with actual image
    },
    procedureSummary: {
      heading: "Procedure Summary",
      procedures: [
        {
          title: "Laser Therapy",
          description: "It takes 15–30 minutes. No downtime."
        },
        {
          title: "PRP",
          description: "It takes 30 minutes. There is mild discomfort, but there is no downtime."
        },
        {
          title: "Brightening Peels",
          description: "It takes 20 minutes. The procedure causes minor sensitivity for 24–48 hours."
        },
        {
          title: "Labial Contouring",
          description: "It takes 30–40 minutes. No incisions or recovery needed."
        }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      faqs: [
        {
          question: "How long does laser vaginal rejuvenation take?",
          answer:
            "The treatment takes about 15–30 minutes. Most clients require 2–3 sessions spaced several weeks apart."
        },
        {
          question: "Is there any downtime?",
          answer:
            "Most patients can resume normal activity the same day. We advise avoiding intercourse or intense physical activity for 48 hours after treatment."
        },
        {
          question: "Is PRP intimate therapy safe?",
          answer:
            "Yes. Because it uses blood plasma, PRP carries a low risk of adverse reactions. It’s a well-tolerated treatment with growing clinical support."
        },
        {
          question: "Can these treatments help with postnatal issues?",
          answer:
            "Yes. We regularly support women recovering from childbirth who are experiencing tissue laxity, dryness, or sensitivity loss."
        }
      ]
    }
  };

  return (
    <div>
      <HairHero {...data.hero} />
      <Imagetext {...data.overview} />
      <Cards data={data.cards} />
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
