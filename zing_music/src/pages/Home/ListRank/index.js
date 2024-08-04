import CartRank from "../../../components/CartRank";
// Import Swiper React components
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
export default function ListRank({ title, data }) {
  return (
    <div className="mt-12">
      <div className="flex  justify-between  px-2">
        <h2 className="text-white font-extrabold text-xl">{title}</h2>
        <h2 className="text-[var(--text-sub)] uppercase  text-sm cursor-pointer hover:text-[var(--text-pink)] font-bold">
          Tất cả
        </h2>
      </div>
      <div className="px-2 mt-5">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation={true} // Thêm navigation vào Swiper
          modules={[Navigation]}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <CartRank
                thumbnail={item.thumbnail}
                title={item.title}
                artistsNames={item.artistsNames}
                i={index}
                timestamp={item.releaseDate}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
