import ColorThief from "colorthief";
import { useEffect, useState } from "react";
const useDominantColor = (imageUrl) => {
  const [dominantColor, setDominantColor] = useState([0, 0, 0]); // Màu mặc định là đen

  useEffect(() => {
    const imgElement = new Image();
    const colorThief = new ColorThief();

    imgElement.crossOrigin = "Anonymous"; // Đảm bảo rằng ảnh có thể truy cập được từ một domain khác
    imgElement.src = imageUrl;

    imgElement.onload = () => {
      if (imgElement.complete) {
        const color = colorThief.getColor(imgElement);
        setDominantColor(color);
      }
    };
  }, [imageUrl]);

  return { dominantColor };
};
export default useDominantColor;
