"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-two px-6 sm:px-12 md:px-24 lg:px-36 py-28">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-three">
          Privacy Policy
        </h1>

        {/* Intro */}
        <p className="text-lg mb-6">
          How we protect patient information and ensure confidentiality.
        </p>
        <p className="mb-8">
          Your privacy is important to us. This policy explains how patient
          information is collected, used, safeguarded, and retained during
          visits, online interactions, and services provided.
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-three">
              Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Personal details such as name, contact number, and email for
                appointment booking.
              </li>
              <li>
                Medical history and eye health details for accurate diagnosis
                and treatment planning.
              </li>
              <li>
                Payment details for billing and transaction purposes.
              </li>
            </ul>
          </section>

          {/* How We Use the Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-three">
              How We Use the Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve clinical services.</li>
              <li>To schedule and confirm appointments.</li>
              <li>
                To send important updates related to treatments, safety, and eye
                care tips (with consent).
              </li>
            </ul>
          </section>

          {/* Data Security Measures */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-three">
              Data Security Measures
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                All personal and medical data is stored securely with restricted
                access.
              </li>
              <li>
                Advanced encryption is used for online forms and transactions.
              </li>
              <li>
                Staff undergoes regular training on confidentiality protocols.
              </li>
            </ul>
          </section>

          {/* Third-Party Sharing */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-three">
              Third-Party Sharing
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do not sell or share patient data for marketing purposes.</li>
              <li>
                Information is shared only with diagnostic partners or labs
                involved in your care, and only when necessary.
              </li>
            </ul>
          </section>

          {/* Data Retention Period */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-three">
              Data Retention Period
            </h2>
            <p className="mb-4">
              Personal and medical data is retained only for as long as
              necessary to fulfill the purposes outlined in this policy or as
              required by law. After this period, data is securely deleted or
              anonymized.
            </p>
          </section>

          {/* Patient Rights */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-three">
              Patient Rights
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request a copy of personal data held by us.</li>
              <li>Ask for corrections to inaccurate information.</li>
              <li>Withdraw consent for marketing communication anytime.</li>
            </ul>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-three">
              Policy Updates
            </h2>
            <p>
              This policy may be updated periodically to meet regulatory and
              operational needs. The latest version will always be available on
              this page.
            </p>
          </section>

          {/* Compliance and Additional Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-three">
              Compliance and Additional Information
            </h2>
            <p className="mb-4">
              We comply with applicable Indian data protection laws, including
              the Information Technology Act, 2000 and related rules. For
              patients from other jurisdictions, we aim to adhere to relevant
              privacy requirements.
            </p>
            <p>
              For more details, please refer to our{" "}
              <a
                href="/terms"
                className="text-three hover:underline font-medium"
              >
                Terms & Conditions
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
