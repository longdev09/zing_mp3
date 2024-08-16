import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchApiGetSong } from "../../../redux/features/music/musicPlaySlice";
import ItemSong from "../ItemSong";
export default function ContentPlayList({ list }) {
  const { song } = useSelector((state) => state.musicPlay);
  const dispatch = useDispatch();
  const initialSlide = list?.findIndex((i) => i.encodeId === song.idSong) ?? 0;

  const [swiperRef, setSwiperRef] = useState(null);

  const handleSetItemSong = (item, index) => {
    if (swiperRef) {
      swiperRef.slideTo(index);
    }
    dispatch(fetchApiGetSong(item));
  };

  useEffect(() => {
    if (swiperRef && initialSlide !== undefined) {
      swiperRef.slideTo(initialSlide);
    }
  }, [swiperRef, initialSlide]);

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        initialSlide={initialSlide}
        spaceBetween={40}
        slidesPerView={5}
        centeredSlides={true}
        onSwiper={setSwiperRef} // Lưu tham chiếu đến Swiper
      >
        {list?.map((item, index) => (
          <SwiperSlide key={item.encodeId} virtualIndex={index}>
            <ItemSong
              idSong={item.encodeId}
              handleSetItemSong={() => handleSetItemSong(item.encodeId, index)} // Truyền index để trượt
              thumbnailM={item.thumbnailM}
              title={item.title}
              artists={item.artists}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
