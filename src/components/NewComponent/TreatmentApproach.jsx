"use client";
import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const TreatmentApproach = ({ title, description, items, image, footer }) => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          {/* Title + Description */}
          <h2 className="text-3xl sm:text-4xl font-bold text-two mb-4">
            {title}
          </h2>
          <p className="text-two font-semibold mb-8 text-lg">{description}</p>

          {/* Items Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 bg-two text-white rounded-lg p-4 shadow-md"
              >
                <Play size={18} className="text-one mt-1 shrink-0" fill="currentColor" stroke="none" />

                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>

          {/* Footer */}
          {footer && (
            <p className="text-two mt-6 text-lg  font-semibold leading-relaxed">
              {footer}
            </p>
          )}
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={image}
            alt={title}
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default TreatmentApproach;
