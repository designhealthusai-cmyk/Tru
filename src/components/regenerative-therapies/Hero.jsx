// "use client"; 
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// const Hero = ({ title, subtitle, mainImage, circleImage }) => {
//   return (
//    <section className="relative w-full bg-two overflow-hidden mt-20 ">
//         <div className="flex flex-col md:flex-row items-stretch w-full relative lg:min-h-[90vh]">      
        
//         {/* Left Section (Text) */}
//         {/* <div className="
//             bg-two text-white flex flex-col justify-center 
//           items-center md:items-start text-center md:text-right
//           px-6 sm:px-12 md:px-26 lg:px-48
//           py-12 md:w-1/2 relative z-10
//            mx-auto

//             "
//           >
//           <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
//             {title}
//           </h1>
//           <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl">
//             {subtitle}
//           </p>
//         </div> */}
//         <div
//   className="
//     bg-two text-white flex flex-col justify-center 
//     items-center md:items-start text-center md:text-right
//     px-6 sm:px-12 md:px-26 lg:px-48
//     py-12 md:w-1/2 relative z-10
//     mx-auto
//   "
// >
//   <motion.h1
//     className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
//     initial={{ opacity: 0, x: -80 }} // start left
//     animate={{ opacity: 1, x: 0 }}   // move to place
//     transition={{ duration: 1, ease: "easeOut" }}
//   >
//     {title}
//   </motion.h1>

//   <motion.p
//     className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl"
//     initial={{ opacity: 0, x: -60 }}
//     animate={{ opacity: 1, x: 0 }}
//     transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
//   >
//     {subtitle}
//   </motion.p>
// </div>


//         {/* Right Section (Main Image) */}
//         <motion.div
//   className="relative md:w-1/2 h-[400px] sm:h-[500px] md:h-auto"
//   initial={{ opacity: 0, x: 80 }} // 👈 start off-screen right
//   animate={{ opacity: 1, x: 0 }}  // 👈 fade & slide into place
//   transition={{ duration: 1, ease: "easeOut" }}
// >
//   <Image
//     src={mainImage}
//     alt="Main banner"
//     fill
//     className="object-cover"
//     priority
//   />
// </motion.div>

//         {/* Center Overlay Circle */}
//         {/* {circleImage && (
//           <div
//             className="absolute z-20 rounded-full overflow-hidden
//                        w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72
//                        left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                       
//                        hidden sm:block"
//           >
//             <Image
//               src={circleImage}
//               alt="Circular overlay"
//               fill
//               className="object-cover rounded-full"
//             />
//           </div>
//         )} */}
//         {circleImage && (
//   <motion.div
//     className="absolute z-20 rounded-full overflow-hidden
//                w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72
//                left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
//                hidden sm:block"
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     transition={{ duration: 1, ease: "easeOut" }}
//   >
//     <Image
//       src={circleImage}
//       alt="Circular overlay"
//       fill
//       className="object-cover rounded-full"
//     />
//   </motion.div>
// )}

//       </div>
//     </section>
//   );
// };

// export default Hero;
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = ({ title, subtitle, mainImage, circleImage }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // trigger when 20% visible
    triggerOnce: true, // animate only once
  });

  return (
    <section
      ref={ref}
      className="relative w-full bg-two overflow-hidden mt-20"
    >
      <div className="flex flex-col md:flex-row items-stretch w-full relative lg:min-h-[90vh]">
        {/* Left Section (Text) */}
        <div
          className="
            bg-two text-white flex flex-col justify-center 
            items-center md:items-start text-center md:text-right
            px-6 sm:px-12 md:px-26 lg:px-48
            py-12 md:w-1/2 relative z-10 mx-auto
          "
        >
          <motion.h1
            className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Right Section (Main Image) */}
        <motion.div
          className="relative md:w-1/2 h-[400px] sm:h-[500px] md:h-auto"
          initial={{ opacity: 0, x: 80 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src={mainImage}
            alt="Main banner"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Center Overlay Circle */}
        {circleImage && (
          <motion.div
    className="absolute z-20 rounded-full overflow-hidden
               w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72
               left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
               hidden sm:block"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <Image
      src={circleImage}
      alt="Circular overlay"
      fill
      className="object-cover rounded-full"
    />
  </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
