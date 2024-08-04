import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

export default function ListWeekChart({ data }) {
  return (
    <div className="px-2 mt-5">
      <Swiper spaceBetween={20} slidesPerView={3}>
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-lg cursor-pointer">
              <img
                className="rounded-lg hover:scale-110 transition duration-300"
                src={item.cover}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
