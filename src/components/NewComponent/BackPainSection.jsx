"use client";
import Image from "next/image";
import React from "react";

export default function ImageTextSection({
  title,
  description,
  imageSrc,
  imageAlt,
}) {
  return (
    <section className="bg-white py-10 px-4 md:px-16">
      <div className="flex flex-col gap-6 text-center">
        {/* Text Section */}
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-7xl  text-xl text-left mx-auto">
            {description}
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={600}
            className="rounded-xl object-cover w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
