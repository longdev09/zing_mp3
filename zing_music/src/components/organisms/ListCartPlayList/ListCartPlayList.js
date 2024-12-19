import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { CartSongPlayList } from "../../molecules/cart";

function ListCartPlayList({ title, viewAll, data }) {
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-extrabold text-white">{title}</h2>
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
              <CartSongPlayList item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ListCartPlayList;
