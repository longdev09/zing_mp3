import { CartSong } from "../../molecules/cart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ListCart({ title, viewAll, data }) {
  return (
    <div className="mt-12">
      <div className="flex items-center justify-between px-2">
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
              <CartSong item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ListCart;
