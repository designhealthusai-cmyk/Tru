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
      title: "Precision Surgical Readiness programs",
      mainImage: "/images/beauty/surgery/2.webp", // ✅ Update with your actual image
      circleImage: "/images/beauty/surgery/1.webp" // ✅ Update with your actual image
    },
    overview: {
      title: "Restoring harmony between appearance and well-being",
      description:
        "At TruPeak, surgery is approached with full support. We work with board-certified Plastic and Reconstructive surgeons to provide safe, discreet care for facial, body, and intimate procedures, guiding you from assessment to recovery with personalized diagnostics and regenerative aftercare.",
      image: "/images/beauty/surgery/3.webp", // ✅ Update image path
      reverse: true,
      bgColor: "",
      textColor: "text-two",
      radius: "true"
    },
    cards: [
      {
        title: "Pre-Surgical Readiness",
        description: [
          "Comprehensive health checks, emotional support, and nutrition plans to prepare your body and mind for surgery."
        ]
      },
      {
        title: "Trusted Surgical Network",
        description: [
          "Access to expert surgeons for safe, discreet procedures like body contouring, breast and facial surgeries."
        ]
      },
      {
        title: "Post-Surgical Recovery",
        description: [
          "Regenerative care with IV therapy, peptides, scar treatment, and lymphatic support for faster healing."
        ]
      }
    ],
    programFit: {
      heading: "Is This Right for You?",
      description: "You may be a candidate for surgical referral if you:",
      image: "/images/beauty/surgery/4.webp", // ✅ Update path
      items: [
        "Have been advised by a physician to pursue surgical correction of existing ailments",
        "Are seeking a cosmetic change after significant weight loss, pregnancy, or trauma",
        "Have long-standing concerns (e.g., breast symmetry, nasal shape, intimate discomfort)",
        "Want full-spectrum pre- and post-surgical support",
        "Prefer coordinated medical oversight for elective procedures"
      ],
      note: "All surgical referral clients are first assessed through a medical consultation, during which we determine their baseline readiness, identify any contraindications, and curate their care needs."
    },
    benefits: {
      heading: "Benefits of Trupeak Surgical Referral Care",
      items: [
        "Clinical oversight throughout the surgical journey, including surgeon outreach",
        "Access to vetted, board-certified and internationally acclaimed surgeons",
        "Coordinated pre-op and post-op protocols with guided care",
        "Faster recovery through regenerative therapy and customised protocols",
        "Private, supportive environment for healing and post-surgical care"
      ],
      image: "/images/beauty/surgery/5.webp" // ✅ Update path
    },
    procedureSummary: {
      heading: "Procedure Summary",
      procedures: [
        {
          title: "Pre-Surgery",
          description: "Consultation, preparation, and surgical coordination."
        },
        {
          title: "Post-Surgery",
          description: "Therapy, wound care, and follow-up recovery."
        }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      faqs: [
        {
          question: "Will Trupeak perform my surgery?",
          answer:
            "No. We refer you to surgeons with strong reputations in their subspecialty. Our role is to guide your readiness and support recovery."
        },
        {
          question: "How do I know which surgeon is right for me?",
          answer:
            "Through doctor consultations, we match you with a suitable specialist based on your goals, case complexity, and desired outcomes."
        },
        {
          question: "Can I get a second opinion through Trupeak?",
          answer:
            "Absolutely. We frequently assist clients seeking second opinions or re-evaluations after previous surgery elsewhere."
        },
        {
          question: "What does post-surgical support involve?",
          answer:
            "Depending on your procedure, it may include IV therapy, pain management, hormonal and nutritional support, and scar minimization."
        },
        {
          question: "Can I undergo skin or laser treatments post-surgery?",
          answer:
            "Yes. Once your surgeon clears you, we offer scar-reducing laser therapy and skin regeneration to improve long-term results."
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
