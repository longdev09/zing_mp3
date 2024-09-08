// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";

const styless = [
  {
    name: "first",
    style: "hidden transform translate-x-[-20%] md:block ",
  },
  {
    name: "previous",
    style:
      "transform hidden translate-x-[-50%] lg:translate-x-[-100%] md:opacity-100 md:block z-10",
  },
  {
    name: "selected",
    style:
      "transform hidden translate-x-[50%] lg:translate-x-0 md:opacity-100 md:block z-30",
  },
  {
    name: "next",
    style:
      "transform  lg:translate-x-[100%] opacity-100 md:opacity-0 lg:opacity-100 z-10",
  },
  {
    name: "last",
    style: "hidden transform translate-x-[20%] md:block",
  },
  { name: "none", style: "" }, // Thêm thuộc tính style rỗng hoặc mặc định
];

export default function ListBanner({ data }) {
  const [styles, setStyles] = useState(styless);

  useEffect(() => {
    const interval = setInterval(() => {
      setStyles((prev) => {
        const newStyles = [...prev];
        newStyles.unshift(newStyles.pop());
        return newStyles; // Trả về mảng mới để cập nhật trạng thái
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mt-3 h-[50vw] md:h-[20vw] lg:h-[10vw] xl:h-[14vw] 2xl:h-[15vw] ">
      <div className="flex items-center justify-center relative w-full h-full ">
        {data?.concat(data).map((item, index) => (
          <div
            className={`absolute w-full md:w-[50%] lg:w-[33.33%] px-3 opacity-0 z-0 transition-all duration-500 translate-x-1 ${
              styles && styles[index]?.style ? styles[index].style : ""
            }`}
          >
            <a>
              <img className="rounded-lg" src={item.banner} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
