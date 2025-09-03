// src/app/terms/page.jsx
"use client";
import React from "react";
import Head from "next/head";

export default function TermsPage() {
  const sections = [
    {
      title: "Use of Website and Services",
      points: [
        "The website is intended for informational purposes and appointment scheduling only.",
        "Medical advice provided online is general in nature and does not replace an in-person consultation.",
      ],
    },
    {
      title: "Appointments and Cancellations",
      points: [
        "Bookings can be made through our website, phone, or in person.",
        "Cancellations or rescheduling should be informed at least 24 hours in advance.",
      ],
    },
    {
      title: "Payments and Refunds",
      points: [
        "All payments must be completed as per the agreed schedule for services.",
        "Refunds, if applicable, will be processed according to Trupeak’s internal policy.",
      ],
    },
    {
      title: "Intellectual Property",
      points: [
        "All content on this website, including text, images, and videos, is owned by Trupeak and cannot be copied or reproduced without permission.",
      ],
    },
    {
      title: "Limitation of Liability",
      points: [
        "While we strive for accurate and timely care, Trupeak is not liable for indirect or unforeseen damages arising from use of the website or services.",
      ],
    },
    {
      title: "External Links",
      points: [
        "Our website may include links to third-party resources. Trupeak is not responsible for the content or privacy practices of external websites.",
      ],
    },
    {
      title: "Changes to Terms",
      points: [
        "Trupeak reserves the right to update these terms without prior notice. Continued use of the website signifies acceptance of the updated terms.",
      ],
    },
    {
      title: "Contact Information",
      points: [
        "For questions regarding these terms, email info@trupeakhealth.in or call +91-982-037-3373.",
      ],
    },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Terms & Conditions | Trupeak Health</title>
        <meta
          name="description"
          content="Read the terms and conditions for using Trupeak Health's services, website, and appointment system."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.trupeakhealth.com/terms" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Trupeak Health",
              url: "https://www.trupeakhealth.com/terms",
              description:
                "Guidelines for using Trupeak Health's services, website, and appointment systems.",
              publisher: {
                "@type": "Organization",
                name: "Trupeak Health",
                url: "https://www.trupeakhealth.com",
              },
            }),
          }}
        />
      </Head>

      {/* Page Content */}
      <section className="max-w-4xl mx-auto px-6 py-36 text-two">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>
        <p className="text-lg mb-10">
          These terms and conditions govern the use of Trupeak’s services,
          website, and booking systems. By accessing our website or booking an
          appointment, you agree to the terms outlined below.
        </p>

        {sections.map((section, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
            <ul className="list-disc list-inside space-y-2">
              {section.points.map((point, i) => (
                <li key={i} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
