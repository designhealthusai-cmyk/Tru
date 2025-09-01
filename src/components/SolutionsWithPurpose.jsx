// import React from "react";

// const GSAPPopOutCards = () => {
  
//   return (
//     <div className="bg-two rounded-3xl">
//       <div className="py-12 px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto">
//         <h2 className="sm:text-xl md:text-xl lg:text-4xl font-semibold text-[#E1C78F] mb-8 ps-12">
//           Solutions With Purpose
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Card 1 */}
//           <div className="relative group rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 max-w-[380px] sm:max-w-[380px] mx-auto border-4 border-[#E1C78F] h-[450px]">
//             {/* Background Image */}
//             <img
//               src="/images/home-cards/card-1.webp"
//               alt="Regenerative Therapies"
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
//             {/* Text Content */}
//             <div className="relative z-10 p-4 flex flex-col justify-start h-full">
//               <h2 className="text-white font-semibold mb-2 text-base sm:text-lg md:text-xl lg:text-2xl mt-3">
//                 Regenerative Therapies
//               </h2>
//               <p className="text-white text-base sm:text-lg md:text-lg lg:text-lg mb-3 mt-3 font-semibold">
//                 NAD⁺ therapy, targeted peptides, and intravenous treatments are
//                 crafted to enhance vitality, support immune function, and
//                 promote cellular recovery.
//               </p>
//               <button className="mt-auto w-full bg-[#E8D3A2] text-two py-3 rounded-full text-base font-semibold hover:bg-[#d1b77b] transition-colors duration-300">
//                 <a href="/services/regenerative-therapies/restorative-medicine">
//                   Know More
//                 </a>
//               </button>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="relative max-w-[380px] sm:max-w-[380px] mx-auto h-[450px] rounded-2xl overflow-hidden shadow-lg">
//             <img
//               src="/images/home-cards/card-2.webp"
//               alt="Dr. Sanjith CEO Protocol"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute bottom-0 left-0 right-0 p-4 bg-[rgba(24,36,58,0.8)]">
//               <h3 className="text-white font-bold text-lg text-center">
//                  CEO Protocol
//               </h3>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="relative max-w-[380px] sm:max-w-[380px] mx-auto h-[450px] rounded-2xl overflow-hidden shadow-lg">
//             <img
//               src="/images/home-cards/card-3.webp"
//               alt="Dr. Sanjith CEO Protocol"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute bottom-0 left-0 right-0 p-4 bg-[rgba(24,36,58,0.8)]">
//               <h3 className="text-white font-bold text-lg text-center">
//                 Immunity & Longevity
//               </h3>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="relative max-w-[380px] sm:max-w-[380px] mx-auto h-[450px] rounded-2xl overflow-hidden shadow-lg">
//             <img
//               src="/images/home-cards/card-4.webp"
//               alt="Dr. Sanjith CEO Protocol"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute bottom-0 left-0 right-0 p-4 bg-[rgba(24,36,58,0.8)]">
//               <h3 className="text-white font-bold text-lg text-center">
//                 Women-Centric Health
//               </h3>
//             </div>
//           </div>

//           {/* Card 5 */}
//           <div className="relative max-w-[380px] sm:max-w-[380px] mx-auto h-[450px] rounded-2xl overflow-hidden shadow-lg">
//             <img
//               src="/images/home-cards/card-5.webp"
//               alt="Dr. Sanjith CEO Protocol"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute bottom-0 left-0 right-0 p-4 bg-[rgba(24,36,58,0.8)]">
//               <h3 className="text-white font-bold text-lg text-center">
//                 Beauty & Aesthetics
//               </h3>
//             </div>
//           </div>

//           {/* Card 6 */}
//           <div className="relative max-w-[380px] sm:max-w-[380px] mx-auto h-[450px] rounded-2xl overflow-hidden shadow-lg">
//             <img
//               src="/images/home-cards/card-6.webp"
//               alt="Dr. Sanjith CEO Protocol"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute bottom-0 left-0 right-0 p-4 bg-[rgba(24,36,58,0.8)]">
//               <h3 className="text-white font-bold text-lg text-center">
//                 Pain Management & Recovery
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GSAPPopOutCards;
import React from "react";

const GSAPPopOutCards = () => {
  const cards = [
    {
      title: "Regenerative Therapies",
      description:
        "NAD⁺ therapy, targeted peptides, and intravenous treatments crafted to enhance vitality, support immune function, and promote cellular recovery.",
      img: "/images/home-cards/card-1.webp",
      link: "/services/regenerative-therapies/restorative-medicine",
    },
    {
      title: "CEO Protocol",
      description:
        "Elite performance and recovery program tailored for executives balancing health, stress, and high-demand lifestyles.",
      img: "/images/home-cards/card-2.webp",
      link: "#",
    },
    {
      title: "Immunity & Longevity",
      description:
        "Advanced immune support and longevity strategies for lasting health and resilience.",
      img: "/images/home-cards/card-3.webp",
      link: "#",
    },
    {
      title: "Women-Centric Health",
      description:
        "Personalized care for hormonal health, recovery, and vitality at every stage of life.",
      img: "/images/home-cards/card-4.webp",
      link: "#",
    },
    {
      title: "Beauty & Aesthetics",
      description:
        "Cutting-edge regenerative aesthetics to enhance natural beauty and slow visible aging.",
      img: "/images/home-cards/card-5.webp",
      link: "#",
    },
    {
      title: "Pain Management & Recovery",
      description:
        "Targeted therapies to restore mobility, reduce pain, and accelerate functional recovery.",
      img: "/images/home-cards/card-6.webp",
      link: "#",
    },
  ];

  return (
    <div className="bg-two rounded-3xl">
      <div className="py-12 px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto">
        <h2 className="sm:text-xl md:text-xl lg:text-4xl font-semibold text-[#E1C78F] mb-8 ps-12">
          Solutions With Purpose
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative group rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 max-w-[380px] mx-auto border-4 border-[#E1C78F] h-[450px]"
            >
              {/* Background Image */}
              <img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-500"></div>
              {/* Text Content */}
              <div className="relative z-10 p-6 flex flex-col h-full">
                <h2 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-2">
                  {card.title}
                </h2>
                <p className="text-white text-sm sm:text-base md:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {card.description}
                </p>
                <a
                  href={card.link}
                  className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <button className="w-full bg-[#E8D3A2] text-two py-3 rounded-full text-base font-semibold hover:bg-[#d1b77b] transition-colors duration-300">
                    Know More
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GSAPPopOutCards;
