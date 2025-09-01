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
  // ✅ Centralized Data
  const data = {
    hero: {
      title: "Laser Treatments",
      mainImage: "/images/beauty/laser-treatments/2.webp", // update with actual image
      circleImage: "/images/beauty/laser-treatments/1.webp" // update with actual image
    },
    overview: {
      title: "Overview",
      description:
        "Laser therapies at Trupeak use calibrated wavelengths to target pigmentation, vascular concerns, and texture without harming surrounding tissue. Each plan is customized to your skin tone and condition, combining medical-grade technology with expert consultation and post-care for safe, effective results with minimal downtime.",
      image: "/images/beauty/laser-treatments/3.webp", // update with actual image
      reverse: true,
      bgColor: "",
      textColor: "text-two",
      radius: "true"
    },
    cards: [
      {
        title: "Laser Skin Rejuvenation",
        description: [
          "Improves overall texture and tone by stimulating collagen production and removing surface irregularities. Ideal for dullness, fine lines, and sun damage."
        ]
      },
      {
        title: "Pigmentation & Redness Correction",
        description: [
          "Targets excess melanin or broken capillaries, reducing sunspots, melasma, and rosacea without harming surrounding skin."
        ]
      },
      {
        title: "Laser Hair Removal",
        description: [
          "Uses diodes or Nd:YAG technology, depending on your skin type. Achieves long-term hair reduction safely and comfortably."
        ]
      },
      {
        title: "Laser Scar & Acne Mark Resurfacing",
        description: [
          "Fractional lasers break down scar tissue and stimulate healthy cell turnover. Excellent for acne scars and stretch marks."
        ]
      }
    ],
    programFit: {
      heading: "Is This Right for You?",
      description: "You may benefit from laser treatments if you experience:",
      image: "/images/beauty/laser-treatments/4.webp", // update with actual image
      items: [
        "Sun damage, age spots, or pigmentation irregularities",
        "Facial redness, rosacea, or visible veins",
        "Textural concerns such as acne scars or enlarged pores",
        "Unwanted facial or body hair",
        "Skin dullness or early signs of ageing"
      ],
      note: "Laser treatment suitability is determined after a patch test and full skin scan."
    },
    benefits: {
      heading: "Benefits of Trupeak Laser Treatments",
      items: [
        "Safe for various skin tones with appropriate laser settings",
        "Non-invasive treatment options with rapid recovery",
        "Long-term improvement in tone, clarity, and firmness",
        "Can be paired with PRP or skin boosters for enhanced effect"
      ],
      image: "/images/beauty/laser-treatments/5.webp" // update with actual image
    },
    procedureSummary: {
      heading: "Procedure Summary",
      procedures: [
        {
          title: "Skin Rejuvenation & Pigment Correction",
          description: "30–60 min per session"
        },
        {
          title: "Hair Removal",
          description: "15–45 min per area, depending on size"
        },
        {
          title: "Acne & Scar Resurfacing",
          description: "45–75 min, with healing phase guidance"
        }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      faqs: [
        {
          question: "Is laser treatment safe for darker skin tones?",
          answer:
            "Yes. Technologies like Nd:YAG are specifically chosen to treat deeper skin tones safely and effectively."
        },
        {
          question: "Will I need downtime after laser treatment?",
          answer:
            "Mild redness can occur for 1–2 days. For deeper resurfacing, recovery may take up to a week."
        },
        {
          question: "How many sessions are needed for pigmentation or scars?",
          answer:
            "Some results are visible after one session, but 3 to 5 treatments are usually needed for best results."
        },
        {
          question: "Is laser hair removal permanent?",
          answer:
            "It offers long-term hair reduction. Most people need 6 to 8 sessions, with occasional touch-ups afterward."
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
