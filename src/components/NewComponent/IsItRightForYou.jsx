"use client";
import React from "react";

export default function IsItRightForYou({
  title = "Is It Right for You?",
  subtitle = "This protocol may be ideal if you:",
  items = [],
  bgColor = "#0B2240",
  cardColor = "#E5C78E",
  textColor = "#FFFFFF",
  iconBgColor = "#0B2240",
}) {
  return (
    <section
      className="py-10 px-6 md:px-16 rounded-t-3xl "
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#62C2A6]">
          {title}
        </h2>
        <p className="text-gray-300 mt-2">{subtitle}</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-xl  flex flex-col items-center text-center px-4 py-6 relative shadow-lg "
            style={{ backgroundColor: cardColor, color: "#222" }}
          >
            {/* Icon inside circle */}
            <div
              className="absolute left-6 -top-6 flex items-center justify-center w-12 h-12 rounded-full border-4 shadow-lg"
              style={{
                backgroundColor: iconBgColor,
                borderColor: cardColor,
              }}
            >
              {item.icon}
            </div>
            <p className="mt-8 text-lg md:text-xl font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
