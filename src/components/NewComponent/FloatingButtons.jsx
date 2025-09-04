"use client";
import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FloatingButtons() {
  return (
    <>
      {/* Desktop Floating Buttons - Left Side */}
      <div className="hidden md:flex fixed left-6 bottom-6 flex-col gap-4 z-50">
        {/* Book Appointment */}
       <a
  href="/book-an-appointment"
  className="group relative flex items-center bg-white text-[#1D2B53] rounded-full shadow-lg border border-[#E2C044] overflow-hidden transition-all duration-300 ease-in-out w-[60px] hover:w-[280px] h-[60px]"
>
  {/* Doctor Icon */}
  <div className="flex items-center justify-center w-[60px] h-[60px] shrink-0">
    <Image
      src="/images/cartoon.svg"
      alt="Doctor"
      width={34}
      height={34}
    />
  </div>

  {/* Text (only text fades in) */}
  <span
    className="ml-2 mr-12 whitespace-nowrap font-medium opacity-0 translate-x-[-10px] 
               group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
  >
    Book Appointment
  </span>

  {/* Arrow (absolute right side) */}
  <div
    className="absolute right-3 flex items-center justify-center w-8 h-8 rounded-full 
               bg-green-600 text-white transition-all duration-300 opacity-0 
               group-hover:opacity-100"
  >
    <ArrowRight size={18} />
  </div>
</a>


        {/* Call Us */}
        <a
          href="tel:+91 982-037-3373"
          className="group relative flex items-center bg-[#1D2B53] text-white rounded-full shadow-lg border border-one overflow-hidden transition-all duration-300 ease-in-out w-[60px] hover:w-[200px] h-[60px]"
        >
          {/* Phone Icon */}
          <div className="flex items-center justify-center w-[60px] h-[60px] shrink-0">
            <Phone size={24} className="stroke-none" style={{ fill: "#2C886A" }}/>
          </div>

          {/* Text + Arrow */}
          <div
            className="flex items-center gap-2 ml-2 opacity-0 translate-x-[-10px] scale-95 
                       group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 
                       transition-all duration-300"
          >
            <span className="whitespace-nowrap font-medium">Call Us</span>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white shrink-0">
              <ArrowRight size={18} />
            </div>
          </div>
        </a>
      </div>

      {/* Mobile Bottom Bar */}
<div className="fixed md:hidden bottom-0 left-0 right-0 flex z-50 rounded-t-3xl shadow-lg border-t border-one overflow-hidden">
  {/* Book Appointment */}
  <a
    href="/book-an-appointment"
    className="flex-1 flex flex-col items-center justify-center bg-white border-r border-one py-2"
  >
    <Image
      src="/images/cartoon.svg"
      alt="Doctor"
      width={28}
      height={28}
    />
    <span className="text-black text-xs font-medium mt-1">
      Book Appointment
    </span>
  </a>

  {/* Call Us */}
  <a
    href="tel:+91 982-037-3373"
    className="flex-1 flex flex-col items-center justify-center bg-[#1D2B53] text-white py-2"
  >
    <Phone size={20} className="stroke-none" style={{ fill: "#2C886A" }} />


    <span className="text-xs font-medium mt-1">Call Us</span>
  </a>
</div>


    </>
  );
}
