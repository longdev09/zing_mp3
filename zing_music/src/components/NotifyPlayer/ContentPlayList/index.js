import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchApiGetSong } from "../../../redux/features/music/musicPlaySlice";
import ItemSong from "../ItemSong";

export default function ContentPlayList() {
  const dispatch = useDispatch();
  const { playList, song } = useSelector((state) => state.musicPlay);

  const initialSlide =
    playList?.findIndex((i) => i.encodeId === song.idSong) ?? 0;

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
    <div className="h-full w-full flex justify-center items-center">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        initialSlide={initialSlide}
        spaceBetween={40}
        slidesPerView={3}
        centeredSlides={true}
        onSwiper={setSwiperRef}
        // className="h-3/4 w-full"
        breakpoints={{
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {playList?.map((item, index) => (
          <SwiperSlide key={item.encodeId} virtualIndex={index}>
            <ItemSong
              idSong={item.encodeId}
              handleSetItemSong={() => handleSetItemSong(item.encodeId, index)}
              thumbnailM={item.thumbnailM}
              title={item.title}
              artists={item.artists}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
