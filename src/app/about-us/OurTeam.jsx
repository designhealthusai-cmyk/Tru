"use client";
import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. Vikramaditya Salvi",
    role1: "Founder & Director",
    role: "Director of Dermatology and Aesthetic Surgery",
    image: "/images/our-team/1.webp",
  },
  {
    name: "Dr. Amit Chakraborty",
    role1: "Founder & Director",
    role: "Head of Oncology Nutrition and Research",
    image: "/images/our-team/2.webp",
  },
  {
    name: "Dr. Varun Tripathi",
    role1: "Founder & Director",
    role: "Head of Oncology Nutrition and Research",
    image: "/images/our-team/3.webp",
  },
  {
    name: "Dr. Sanjith Saseedharan",
    role1: "Founder & Director",
    role: "Medical Director and creator of our Muscle and Metabolic optimization program known as the “CEO” Protocol",
    image: "/images/our-team/4.webp",
  },
  {
    name: "Dr. Gaurav Mishra",
    role1: "Founder & Director",
    role: "Head of Obesity, Bariatric and General Surgery",
    image: "/images/our-team/5.webp",
  },
  {
    name: "",
    role: "",
    image: "/images/our-team/6.webp",
    isOffice: true,
  },
];

export default function OurTeam() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-two">Our Team</h2>
        <div className="w-16 h-[3px] bg-[#2E9E79] mt-2 mb-6"></div>
        <p className="text-gray-600 max-w-6xl">
          Trupeak is home to a collaborative group of medical professionals who
          believe in solving problems, not just managing them. Your care team
          may include physicians, registered dietitians and nutritionists,
          clinical psychologists, physiotherapists, and research scientists who
          work together, not in silos.
        </p>
        <p className="mt-6 font-semibold text-lg">Leaders include:</p>
      </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {teamMembers.map((member, idx) =>
    member.isOffice ? (
      // Office card
      <div
        key={idx}
        className="relative rounded-3xl overflow-hidden h-96 md:h-64"
      >
        <Image
          src={member.image}
          alt="Trupeak Office"
          fill
          className="object-cover"
        />
      </div>
    ) : (
      // Doctor card
      <div
        key={idx}
        className="bg-[#0F1C3F] rounded-3xl overflow-hidden flex flex-col md:flex-row items-start p-4 gap-4  md:h-64"
      >
        {/* Image */}
        <div className="relative w-full md:w-48 h-60 md:h-full flex-shrink-0 rounded-xl overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-start overflow-hidden mt-4 md:mt-0 text-center md:text-left">
          <h3 className="text-2xl md:text-2xl font-bold text-one">{member.name}</h3>
          <p className="text-xl md:text-xl text-one mt-1 line-clamp-4 font-semibold">{member.role1}</p>
          <p className="text-lg md:text-lg text-gray-200 mt-1 line-clamp-4">{member.role}</p>
        </div>
      </div>
    )
  )}
</div>







    </section>
  );
}
