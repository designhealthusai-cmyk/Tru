"use client";
import Image from "next/image";

export default function IntegratedPerformanceTools({
  title = "Integrated Performance Tools",
  subtitle = "Depending on your profile, your program may include:",
  items = [],
  iconSrc = "/images/icon.png", // update with actual icon path
}) {
  return (
    <section className="bg-one py-12 px-6 md:px-16 md:py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-two">
          {title}
        </h2>
        <p className="text-gray-800 mt-2">{subtitle}</p>
      </div>

      {/* Grid Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 text-xl text-left text-white font-semibold shadow-md flex items-start justify-start min-h-[200px] ${
  index % 2 === 0 ? "bg-two" : "bg-three"
}`}

          >
            {item}
          </div>
        ))}
      </div>

      {/* Icon in bottom left */}
      {/* <div className="mt-8 flex justify-start">
        <Image src={iconSrc} alt="Decorative Icon" width={80} height={80} />
      </div> */}
    </section>
  );
}
