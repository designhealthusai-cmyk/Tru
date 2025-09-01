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
      title: "Aesthetic Gynaecology",
      mainImage: "/images/beauty/aesthetic-gynaecology/2.webp", // ✅ Replace with actual image
      circleImage: "/images/beauty/aesthetic-gynaecology/1.webp" // ✅ Replace with actual image
    },
    overview: {
      title: "",
      description:
        "Aesthetic gynecology at Trupeak combines medical precision with compassionate care, offering advanced non-surgical treatments and trusted surgical referrals while supporting women through all life stages, including childbirth, post-natal care, IVF, hormonal imbalances, menstrual issues, menopause, and recovery.",
      image: "/images/beauty/aesthetic-gynaecology/3.webp", // ✅ Replace image path
      reverse: true,
      bgColor: "",
      textColor: "text-two",
      radius: "true"
    },
    cards: [
      {
        title: "Labiaplasty & Vaginoplasty Referrals",
        description: [
          "Plastic surgical procedures to improve symmetry, comfort, and tone. We coordinate these procedures with experienced aesthetic gynaecologists."
        ]
      },
      {
        title: "Pelvic Floor & Perineal Repair",
        description: [
          "Supportive referrals for clients recovering from childbirth trauma, scar tissue, or chronic laxity."
        ]
      },
      {
        title: "Post-Surgery Regenerative Support",
        description: [
          "Includes PRP for tissue healing, IV therapy, and laser scar reduction to ensure improved recovery and comfort."
        ]
      },
      {
        title: "Emotional & Sexual Wellness Support",
        description: [
          "Psychological counselling and hormone assessment are available upon request."
        ]
      }
    ],
    programFit: {
      heading: "Is This Right for You?",
      description: "You may consider aesthetic gynaecology services if you experience:",
      image: "/images/beauty/aesthetic-gynaecology/4.webp", // ✅ Replace image
      items: [
        "Labial asymmetry or physical discomfort",
        "Post-delivery trauma or perineal scarring",
        "Reduced sensation or tone post-menopause or childbirth",
        "History of surgical complications or pelvic discomfort"
      ]
    },
    benefits: {
      heading: "Benefits of Trupeak Aesthetic Gynaecology Support",
      items: [
        "Access to expert female-led surgical partners",
        "Confidential, respectful consultations",
        "Clinical and hormonal evaluation included",
        "Full integration with regenerative care pathways"
      ],
      image: "/images/beauty/aesthetic-gynaecology/5.webp" // ✅ Replace image
    },
    procedureSummary: {
      heading: "Procedure Summary",
      procedures: [
        {
          title: "Consultation",
          description: "60-minute session to review goals and medical history."
        },
        {
          title: "Referral",
          description: "Specialist connection within 5–7 days."
        },
        {
          title: "Recovery",
          description: "Post-procedure support with PRP, IV nutrition, and hormone care."
        }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      faqs: [
        {
          question: "Is Labiaplasty only a cosmetic procedure?",
          answer:
            "Not necessarily. Many women choose it to reduce physical discomfort, improve mobility, or address functional concerns in addition to aesthetic reasons."
        },
        {
          question: "Does Trupeak offer support beyond the procedure?",
          answer:
            "Yes. We connect clients with trusted professionals for emotional support, sexual health counselling, and overall wellness guidance."
        },
        {
          question: "What’s the recovery time like for gynecologic surgery?",
          answer:
            "Most clients recover within 7 to 10 days, with swelling typically easing in 2 to 4 weeks. Healing is supported through personalized postoperative care and guidance."
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
