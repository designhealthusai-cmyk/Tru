"use client";
import React, { useEffect, useRef, useState } from "react";

const CoreServices = ({ title = "Core Services", services = [] }) => {
  const cardRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (cardRefs.current.length > 0) {
      const heights = cardRefs.current.map((el) =>
        el ? el.offsetHeight : 0
      );
      setMaxHeight(Math.max(...heights));
    }
  }, [services]);

  return (
    <section className="bg-[#14233C] text-white py-12 px-6  shadow-lg">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        {title}
      </h2>

      {/* Grid layout: max 3 per row, leftover centered */}
      <div className="mx-auto max-w-7xl flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{ height: maxHeight ? `${maxHeight}px` : "auto" }}
            className="
              bg-[#1E3357] rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300
              flex flex-col justify-between
              basis-full sm:basis-[calc(50%-1.5rem)] lg:basis-[calc(33.333%-1.5rem)]
              max-w-[360px] w-full
            "
          >
            <div className="flex-grow">
              <h3 className="text-lg font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                {Array.isArray(service.description)
                  ? service.description.join(" ")
                  : service.description}
              </p>
            </div>

            {service.link && (
              <a
                href={service.link}
                className="flex items-center gap-1 text-one font-medium text-sm hover:underline mt-auto"
              >
                Read More <span className="text-one">▶</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreServices;
