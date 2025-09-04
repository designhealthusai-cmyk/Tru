// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import clsx from "clsx";

// export default function Imagetext({
//   title,
//   description,
//   extraText,
//   image,
//   reverse = false,
//   bgColor = "bg-white",
//   textColor = "text-gray-800",
//   buttonText,
//   buttonLink,
//   radius
// }) {
//   return (
//     <section className={clsx("w-full py-12 px-6 md:px-12", bgColor)}>
//       <div
//         className={clsx(
//           "max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8",
//           reverse && "md:flex-row-reverse"
//         )}
//       >
//         {/* Text Content */}
//         <div className="w-full md:w-1/2">
//           <h2 className={clsx("text-2xl md:text-3xl font-bold mb-4", textColor)}>
//             {title}
//           </h2>
//           <p className={clsx("text-lg leading-relaxed mb-4", textColor)}>
//             {description}
//           </p>
//           {extraText && (
//             <p className={clsx("text-base leading-relaxed mb-4", textColor)}>
//               {extraText}
//             </p>
//           )}
//           {buttonText && (
//             <a
//               href={buttonLink || "#"}
//               className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105"
//             >
//               {buttonText}
//               <span className="ml-2">▶</span>
//             </a>
//           )}
//         </div>

//         {/* Image */}
//         <div className={`w-full md:w-1/2 rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-xl ${radius === "true" ? "rounded-3xl" : ''}`}>
//           <Image
//             src={image}
//             alt={title}
//             width={500}
//             height={400}
//             className="object-cover w-full h-full "
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Imagetext({
  title,
  description,
  extraText,
  image,
  reverse = false,
  bgColor = "bg-white",
  textColor = "text-gray-800",
  buttonText,
  buttonLink,
  radius,
}) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false, // 👈 ensures animation runs every time
  });

  return (
    <section ref={ref} className={clsx("w-full py-12 px-6 md:px-12", bgColor)}>
      <div
        className={clsx(
          "max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8",
          reverse && "md:flex-row-reverse"
        )}
      >
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: reverse ? 80 : -80 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? 80 : -80 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className={clsx("text-2xl md:text-3xl font-bold mb-4", textColor)}>
            {title}
          </h2>
          <p className={clsx("text-lg leading-relaxed mb-4", textColor)}>
            {description}
          </p>
          {extraText && (
            <p className={clsx("text-base leading-relaxed mb-4", textColor)}>
              {extraText}
            </p>
          )}
          {buttonText && (
            <a
              href={buttonLink || "#"}
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105"
            >
              {buttonText}
              <span className="ml-2">▶</span>
            </a>
          )}
        </motion.div>

        {/* Image */}
        <motion.div
          className={`w-full md:w-1/2 rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-xl ${
            radius === "true" ? "rounded-3xl" : ""
          }`}
          initial={{ opacity: 0, x: reverse ? -80 : 80 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? -80 : 80 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src={image}
            alt={title}
            width={500}
            height={400}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
