"use client";
import { useEffect, useState, useRef } from "react";
import { CheckCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

export default function WhoThisIsFor({
  title,
  description,
  items,
  bgColor = "#FFFFFF",
  titleColor = "#FFFFFF",
  cardBgColor = "#FFFFFF",
}) {
  const [maxHeight, setMaxHeight] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (cardRefs.current.length > 0) {
      const tallest = Math.max(
        ...cardRefs.current.map((el) => (el ? el.offsetHeight : 0))
      );
      setMaxHeight(tallest);
    }
  }, [items]);

  return (
    <section className="shadow-lg" style={{ backgroundColor: bgColor }}>
      <div
        style={{ backgroundColor: bgColor }}
        className="p-10 max-w-8xl mx-auto py-16 relative overflow-hidden rounded-t-2xl -top-4"
      >
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-4" style={{ color: titleColor }}>
          {title}
        </h2>
        <p className="mb-8 text-gray-200">{description}</p>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="flex"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className="flex">
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className="rounded-xl shadow-md p-5 flex items-start gap-3 border-one border-4 w-full"
                style={{
                  backgroundColor: cardBgColor,
                  color: "black",
                  height: maxHeight ? `${maxHeight}px` : "auto",
                }}
              >
                <CheckCircle className="text-three font-bold w-8 h-8 flex-shrink-0" />
                <p className="text-sm font-medium">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
