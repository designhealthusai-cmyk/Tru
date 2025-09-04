import React from "react";

export default function Content({ title, description }) {
  return (
    <section className="w-full bg-one py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-left">
        <h2 className="text-2xl md:text-2xl font-bold text-two mb-4">
          {title}
        </h2>
        <p className=" text-md md:text-lg font-semibold text-two leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
