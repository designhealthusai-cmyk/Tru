"use client";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function WhatWeAddress({
  title = "What We Address",
  subtitle = "Your personalized care plan targets the underlying triggers through:",
  items = [],
  imageSrc = "",
  imageAlt = "What we address",
  reverse = false,
}) {
  return (
    <section className="bg-two text-white py-12 px-6 md:px-16">
      <div
        className={`flex flex-col md:flex-row items-center gap-10 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-300 mb-6">{subtitle}</p>

          {/* Items */}
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-[#E5C78E] text-gray-900 font-medium rounded-lg px-4 py-3 shadow-md"
              >
                {/* Play Icon Box - Fixed Size */}
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-md bg-white shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2),_inset_-2px_-2px_6px_rgba(255,255,255,0.8)]">
                  <FaPlay className="text-two text-sm" />
                </div>

                {/* Text - Always starts after icon */}
                <div className="flex-1 text-base sm:text-lg leading-snug font-semibold">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
