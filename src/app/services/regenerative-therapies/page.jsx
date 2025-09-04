import React from 'react';
import CoreServices from '@/components/NewComponent/CoreServices';


import ContactForm from '@/components/ContactForm';
import InfoSection from "@/components/InfoSection";
import ServicesHero from "@/components/ServicesHero";
// ===== Content Data =====
const cardData = [

  {
    title: "Restorative Medicine",
    description: [
      "This protocol activates the body's internal repair systems."
    ],
    link: "/services/regenerative-therapies/restorative-medicine"
  },
  {
    title: "Cancer Nutrition",
    description: [
      "Supportive nutrition plans are built to manage side effects, stabilize immunity, and maintain strength."
    ],
    link: "/services/regenerative-therapies/cancer-nutrition"
  },
  {
    title: "Renal Nutrition",
    description: [
      "Designed for patients with kidney challenges, this program focuses on electrolyte balance and toxin control."
    ],
    link: "/services/regenerative-therapies/renal-nutrition"
  },
  {
    title: "Hormone Optimisation Therapy",
    description: [
      "Detailed hormone panels are used to create individualized treatment plans."
    ],
    link: "/services/regenerative-therapies/hormone-optimisation-therapy"
  },
  {
    title: "Pain Management",
    description: [
      "Pain is addressed at its origin. Therapies target inflammation and nerve imbalance."
    ],
    link: "/services/regenerative-therapies/pain-management"
  },
  {
    title: "NAD+ Therapy",
    description: [
      "These infusions boost mitochondrial energy and cellular repair."
    ],
    link: "/services/regenerative-therapies/nad-therapy"
  },
  {
    title: "IV Therapy",
    description: [
      "Custom intravenous infusions deliver nutrients, hydration, and antioxidants."
    ],
    link: "/services/regenerative-therapies/iv-therapy"
  },
  {
    title: "Post-surgical Rehabilitation",
    description: [
      "Healing is accelerated through techniques such as lymphatic support, mobility training, and therapeutic nutrition."
    ],
    link: "/services/regenerative-therapies/post-surgical"
  },
  {
    title: "Chronic Illness Management",
    description: [
      "We provide personalized care for chronic fatigue, autoimmune issues, and metabolic imbalances to enhance long-term well-being."
    ],
    link: "/services/regenerative-therapies/chronic-illness"
  }



];

const infoContent = {
  title: "Your Path to Preventive Healthcare ",
  description: `At Trupeak™ we look beyond surface symptoms to identify root-level dysfunctions 
  before they develop into chronic illness. Our interventions target multiple systems using 
  advanced diagnostics, evidence-based therapies, and a personalized, data-led care model. 
  Each protocol is crafted to optimize your metabolic, hormonal, neurological, and immune health. 
  We work to reset your biology and support long-term well-being from the inside out.`,
  buttonText: "Know More",
  buttonLink: "/services",
  images: [
    "/images/doctors/doc1.jpg",
    "/images/doctors/doc2.jpg",
    "/images/doctors/doc3.jpg"
  ]
};

// ===== Page Component =====
function Page() {
  return (
    <div>
      <ServicesHero
        title="Regenerative Therapies"
        subtitle="Science-led restoration. Tailored for performance, resilience, and longevity"
        image="/images/hero.jpg"
      />
      <InfoSection {...infoContent} />
      <CoreServices services={cardData} title="Our Core Services" />
      
      {/* <ContactSection /> */}
      <ContactForm />
    </div>
  );
}

export default Page;
