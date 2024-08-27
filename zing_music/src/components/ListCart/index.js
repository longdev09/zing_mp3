import Cart from "../Cart";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
export default function ListCart({ title, viewAll, data }) {
  return (
    <div className="mt-12">
      <div className="flex  justify-between  px-2">
        <h2 className="text-white font-extrabold text-xl">{title}</h2>
        <h2 className="text-[var(--text-sub)] uppercase  text-sm cursor-pointer hover:text-[var(--text-pink)] font-bold">
          {viewAll ? "Tất cả" : ""}
        </h2>
      </div>
      <div className="mt-5">
        <Swiper
          spaceBetween={5}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {data?.slice(0, 5).map((item, index) => (
            <SwiperSlide key={index}>
              <Cart
                nameSong={item.sortDescription}
                thumbnail={item.thumbnail}
                idList={item.encodeId}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
