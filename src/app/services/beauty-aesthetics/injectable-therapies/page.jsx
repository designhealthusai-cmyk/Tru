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
      title: "Injectable Therapies",
      mainImage: "/images/beauty/injectables/2.webp",
      circleImage: "/images/beauty/injectables/1.webp"
    },
    overview: {
      title: "Overview",
      description:
        "At Trupeak, injectable therapies are designed to enhance your natural features with subtle refinement rather than drastic change. Administered by licensed experts trained in facial anatomy, these treatments support skin structure, reduce signs of ageing, and improve overall quality using only safe, clinically validated products for natural and reliable results.",
      image: "/images/beauty/injectables/3.webp",
      reverse: true,
      bgColor: "",
      textColor: "text-two",
      radius: "true"
    },
    cards: [
      {
        title: "Botox (Neuromodulators)",
        description: [
          "Botox at Trupeak relaxes facial muscles to smooth lines and prevent wrinkles while keeping natural expression."
        ]
      },
      {
        title: "Hyaluronic Acid Fillers",
        description: [
          "Restores volume to lips, cheeks, jawline, and under-eye hollows while preserving natural expression. Used to refine symmetry and youthful contours."
        ]
      },
      {
        title: "PRP Injectables",
        description: [
          "Our PRP treatment uses your own platelets to naturally improve skin texture, under-eye tone, and early hair thinning, delivering regenerative benefits without added volume."
        ]
      },
      {
        title: "Biostimulators (e.g., Sculptra)",
        description: [
          "Stimulates collagen to provide gradual, lasting lift and firmness, ideal for mid-face, temples, and lower facial contours."
        ]
      }
    ],
    programFit: {
      heading: "Is This Right for You?",
      description: "Injectables may help if you have:",
      image: "/images/beauty/injectables/4.webp",
      items: [
        "Expression lines or emerging wrinkles",
        "Volume loss in cheeks, lips, or jawline",
        "Dull, thinning, or crepey skin",
        "Under-eye hollows or a tired look",
        "A preference for subtle, refreshed results"
      ],
      note: "Every plan starts with a detailed facial assessment to select the right product, placement, and dose."
    },
    benefits: {
      heading: "Benefits of Injectables at Trupeak",
      items: [
        "Performed by medical professionals",
        "Doses tailored for balanced, natural movement",
        "Refined enhancements, never overfilled",
        "Option to combine with skin boosters or PRP for longer-term support",
        "Recognized for precision and subtlety, Trupeak is trusted for offering the best Botox treatment in Mumbai for those seeking natural, refined results."
      ],
      image: "/images/beauty/injectables/5.webp"
    },
    procedureSummary: {
      heading: "Procedure Summary",
      procedures: [
        {
          title: "Botox",
          description: "It takes 15–20 min. No downtime"
        },
        {
          title: "Fillers",
          description: "It takes 30–45 min. Mild swelling 1–2 days"
        },
        {
          title: "PRP",
          description: "It takes 30–45 min. No downtime"
        },
        {
          title: "Biostimulators",
          description: "It takes 30–45 min. Results build over 4–6 weeks"
        }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      faqs: [
        {
          question: "Will Botox make my face look stiff?",
          answer:
            "No. Precise, conservative dosing softens lines while keeping normal expression."
        },
        {
          question: "How long do fillers last?",
          answer:
            "Most Hyaluronic acid fillers last six to twelve months, depending on the area treated."
        },
        {
          question: "Does PRP replace filler?",
          answer:
            "No, PRP improves texture and tone but does not provide added volume like a filler."
        },
        {
          question: "Are injectables painful?",
          answer:
            "Not really, a numbing cream is applied first. Clients typically report only mild pressure or brief pinching."
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
