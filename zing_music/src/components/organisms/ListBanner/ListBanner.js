import { useEffect, useState } from "react";
import "swiper/css";

const styless = [
  {
    name: "first",
    style: "hidden transform translate-x-[-20%] md:block",
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
      "transform lg:translate-x-[100%] opacity-100 md:opacity-0 lg:opacity-100 z-10",
  },
  {
    name: "last",
    style: "hidden transform translate-x-[20%] md:block",
  },
  { name: "none", style: "" }, // Thêm style mặc định
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
    <div className="relative mt-3 h-[52vw] w-full md:h-[23vw] lg:h-[18vw] xl:h-[18vw]">
      <div className="relative flex h-full w-full items-center justify-center">
        {data &&
          data.concat(data).map((item, index) => (
            <div
              key={index} // Thêm key để tránh cảnh báo
              className={`absolute z-0 w-full translate-x-1 px-3 opacity-0 transition-all duration-500 md:w-[50%] lg:w-[33.33%] ${
                styles && styles[index]?.style ? styles[index].style : ""
              }`}
            >
              <a href={item.link || "#"}>
                {" "}
                {/* Thêm liên kết nếu cần */}
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={item.img}
                  alt={item.alt || "Banner"} // Thêm alt cho hình ảnh để tốt hơn cho SEO
                />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
