"use client";
import { useState } from "react";
import Link from "next/link";

export default function MegaMenu({ isOpen }) {
  const [activeCategory, setActiveCategory] = useState(0);

  const services = [
    {
      category: { name: "Regenerative Therapies", href: "/services/regenerative-therapies" },
      subServices: [
        { name: "Restorative Medicine", href: "/services/regenerative-therapies/restorative-medicine" },
        { name: "Cancer Nutrition", href: "/services/regenerative-therapies/cancer-nutrition" },
        { name: "Renal Nutrition", href: "/services/regenerative-therapies/renal-nutrition" },
        { name: "Hormone Optimisation Therapy", href: "/services/regenerative-therapies/hormone-optimisation-therapy" },
        { name: "Pain Management", href: "/services/regenerative-therapies/pain-management" },
        { name: "NAD+ Therapy", href: "/services/regenerative-therapies/nad-therapy" },
        { name: "IV Therapy", href: "/services/regenerative-therapies/iv-therapy" },
        { name: "Post-surgical Rehabilitation", href: "/services/regenerative-therapies/post-surgical" },
        { name: "Chronic Illness Management", href: "/services/regenerative-therapies/chronic-illness" }
      ]
    },
    {
      category: { name: "Weight and Lean Muscle Management", href: "/services/weight-and-lean-muscle-management" },
      subServices: [
        { name: "Weight Optimisation Tracking", href: "/services/weight-and-lean-muscle-management/weight-optimisation-tracking" },
        { name: "Functional Medicine Consultation", href: "/services/weight-and-lean-muscle-management/functional-medicine-consultation" },
        { name: "MuscleSound Analysis (Muscle Ultrasound)", href: "/services/weight-and-lean-muscle-management/musclesound-analysis" },
        { name: "InBody 970: Bio-electrical Impedance Analysis", href: "/services/weight-and-lean-muscle-management/inbody-970" },
        { name: "Q-NRG: Indirect Calorimetry", href: "/services/weight-and-lean-muscle-management/q-nrg" },
        { name: "Sleep Cycle Analysis", href: "/services/weight-and-lean-muscle-management/sleep-cycle-analysis" },
        { name: "Diet Management and Nutrition Counselling", href: "/services/weight-and-lean-muscle-management/diet-management-and-nutrition-counselling" }
      ]
    },
    {
      category: { name: "Immunity and Longevity", href: "/services/immunity-and-longevity" },
      subServices: [
        { name: "Immune System Assessment and Analysis", href: "/services/immunity-and-longevity/immune-system-assessment-and-analysis" },
        { name: "Genetic Mapping", href: "/services/immunity-and-longevity/genetic-mappings" },
        { name: "Gut Microbiome Mapping", href: "/services/immunity-and-longevity/gut-microbiome-mapping" },
        { name: "Biological Age Mapping", href: "/services/immunity-and-longevity/biological-age-mapping" }
      ]
    },
    {
      category: { name: "Pain Management and Recovery", href: "/services/pain-management-and-recovery" },
      subServices: [
        { name: "Chronic Back Ache Induced by Uric Acid", href: "/services/pain-management-and-recovery/chronic-back" },
        { name: "Arthritis", href: "/services/pain-management-and-recovery/arthritis" },
        { name: "Accident Recovery", href: "/services/pain-management-and-recovery/accident-recovery" },
        { name: "Joint Pain Management", href: "/services/pain-management-and-recovery/joint-pain" },
        { name: "Sports Recovery", href: "/services/pain-management-and-recovery/sports" },
        { name: "Cryotherapy", href: "/services/pain-management-and-recovery/cryotherapy" },
        { name: "Localized Cryotherapy", href: "/services/pain-management-and-recovery/localized-cryotherapy" },
      ]
    },
    {
      category: { name: "Women Centric Health Interventions", href: "/services/women-centric-health-interventions" },
      subServices: [
       { name: "PCOS and PCOD", href: "/services/women-centric-health-interventions/pcos-and-pcod" },
        { name: "Menopause Related Issues", href: "/services/women-centric-health-interventions/menopause-relate-issues" },
        { name: "Hormone Balancing", href: "/services/women-centric-health-interventions/hormone-balancing" },
        { name: "Uterine Removal Complications in Older Women", href: "/services/women-centric-health-interventions/uterine-removal-complications" },
        { name: "HPV Vaccines", href: "/services/women-centric-health-interventions/hpv-vaccines" },
        { name: "UTIs (Urinary Tract Infections)", href: "/services/women-centric-health-interventions/utis" },
        { name: "Osteoporosis", href: "/services/women-centric-health-interventions/ostheoporosis" },
      ]
    },
    {
      category: { name: "Beauty Aesthetics", href: "/services/beauty-aesthetics" },
      subServices: [
        { name: "Hair", href: "/services/beauty-aesthetics/hair" },
        { name: "Face", href: "/services/beauty-aesthetics/face" },
        { name: "Lasers", href: "/services/beauty-aesthetics/lasers" },
        { name: "Women’s Intimate Aesthetics", href: "/services/beauty-aesthetics/women-intimate-aesthetics" },
        
        { name: "Injectable Therapies (PRP, Botox, etc.)", href: "/services/beauty-aesthetics/injectable-therapies" },
        { name: "Surgical References (Plastic)", href: "/services/beauty-aesthetics/surgical-references" },
        { name: "Aesthetic Gynaecology", href: "/services/beauty-aesthetics/aesthetic-gynaecology" },
      ]
    },
    {
      category: { name: "Ergogenic Medicine", href: "/services/ergogenic-medicine" },
      subServices: [
        { name: "Sexual Health", href: "/services/ergogenic-medicine/sexual-health" },
        { name: "Fertility (Pre)", href: "/services/ergogenic-medicine/feritility" },
        { name: "Intimate Health Program", href: "/services/ergogenic-medicine/intimate-health" },
        { name: "Endurance Boost", href: "/services/ergogenic-medicine/endurance-boost" },
        { name: "Sexually Transmitted Diseases (STDs)", href: "/services/ergogenic-medicine/sexually-transmitted-diseases" },
        { name: "Athletic Boost", href: "/services/ergogenic-medicine/athletic-boost" },
        { name: "Virility", href: "/services/ergogenic-medicine/virility" },
      ]
    },
    {
      category: { name: "Mental Health and Counselling", href: "/services/mental-health-and-counselling" },
      subServices: [
        { name: "Mental Health Peptides", href: "/services/mental-health-and-counselling/mental-health-peptides" },
        { name: "Chronic Illness counselling and support (Cancer specifically)", href: "/services/mental-health-and-counselling/chronic-Illness-counselling-and-support" },
        { name: "Nutrition Management protocols", href: "/services/mental-health-and-counselling/nutrition-management-protocols" },
        { name: "Psychologist sessions", href: "/services/mental-health-and-counselling/psychologist-sessions" },
        { name: "Pediatric Counselling (ADHD and other issues)", href: "/services/mental-health-and-counselling/paediatric-counselling" },
      ]
    },
    {
      category: { name: "Technology", href: "/services/technology" },
      subServices: [
        { name: "Data-driven Healthcare", href: "/services/technology/data-driven-healthcare" },
        { name: "Data-driven tracking", href: "/services/technology/data-driven-tracking" },
        { name: "Analysing over 800 Biomarkers", href: "/services/technology/analysing-over-800-biomarkers" },
        { name: "Monthly automated reporting", href: "/services/technology/monthly-automated-reporting" },
      ]
    }
  ];

  const quickLinks = [
    { title: "Call Us", href: "tel:9820373373" },
    { title: "Book an Appointment", href: "/book-an-appointment" },
    { title: "Locations", href: "/locations" }
  ];

  return (
    <div
      className={`absolute left-0 top-full w-full bg-white shadow-lg border-t border-gray-200 z-50
      transition-all duration-300 ease-in-out
      ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"}`}
    >
      <div className="max-w-screen-xl mx-auto p-6 grid grid-cols-3 gap-6">
        
        {/* First Column - Categories */}
        {/* <div className="border-r border-gray-200">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveCategory(idx)}
              className={`p-2 cursor-pointer transition-colors duration-200 rounded 
                ${activeCategory === idx ? "bg-gray-100 font-semibold text-two" : "hover:bg-gray-50"}`}
            >
              <Link href={service.category.href}>
                {service.category.name}
              </Link>
            </div>
          ))}
        </div> */}

        {/* Second Column - Sub Services */}
        {/* <div className="border-r border-gray-200">
          {services[activeCategory]?.subServices.map((sub, subIdx) => (
            <Link
              key={subIdx}
              href={sub.href}
              className="block p-2 text-two hover:bg-gray-50 hover:text-one transition-colors duration-200"
            >
              {sub.name}
            </Link>
          ))}
        </div> */}
        <div className="border-r border-gray-200">
  {services.map((service, idx) => (
    <div
      key={idx}
      onMouseEnter={() => setActiveCategory(idx)}
      className={`p-2 cursor-pointer transition-colors duration-200 rounded 
        ${activeCategory === idx ? "bg-gray-100 font-semibold text-two" : "hover:bg-gray-50"}`}
    >
      <Link
        href={service.category.href}
        onClick={() => setMobileMenuOpen(false)}
      >
        {service.category.name}
      </Link>
    </div>
  ))}
</div>

{/* Second Column - Sub Services */}
<div className="border-r border-gray-200">
  {services[activeCategory]?.subServices.map((sub, subIdx) => (
    <Link
      key={subIdx}
      href={sub.href}
      onClick={() => setMobileMenuOpen(false)}  // ✅ Close menu when clicked
      className="block p-2 text-two hover:bg-gray-50 hover:text-one transition-colors duration-200"
    >
      {sub.name}
    </Link>
  ))}
</div>


        {/* Third Column - Quick Links */}
        <div>
  <h3 className="font-bold text-lg mb-4">Quick Links</h3>
  <ul className="space-y-2 inline-flex flex-col items-stretch">
    {quickLinks.map((link, idx) => (
      <li key={idx} className="w-full">
        <Link
          href={link.href}
          onClick={() => onClose && onClose()} // ✅ Close menu on click
          className="inline-flex items-center justify-between gap-2 px-4 py-2 bg-three text-white rounded-3xl hover:bg-two/90 transition-colors duration-200 w-full"
        >
          <span>{link.title}</span>
          <div className="bg-white p-1 rounded-full inline-flex items-center justify-center w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="green"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12l-7.5 7.5M3 12h18"
              />
            </svg>
          </div>
        </Link>
      </li>
    ))}
  </ul>
</div>


      </div>
    </div>
  );
}
