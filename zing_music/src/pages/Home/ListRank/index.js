import CartRank from "../../../components/CartRank";
// Import Swiper React components
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TextHeading from "../../../components/TextHeading";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
export default function ListRank({ title, data }) {
  return (
    <div className="mt-12">
      <div className="flex  justify-between items-center  px-2">
        <TextHeading text={title} />
        <h2 className="text-[var(--text-sub)] uppercase  text-sm cursor-pointer hover:text-[var(--text-pink)] font-bold">
          Tất cả
        </h2>
      </div>
      <div className="px-2 mt-5">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation={true} // Thêm navigation vào Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000, // Thời gian chờ giữa các slide, tính bằng milliseconds
            disableOnInteraction: false, // Không dừng autoplay khi người dùng tương tác
          }}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
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
