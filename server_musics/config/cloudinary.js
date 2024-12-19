// config/cloudinary.js
import { v2 as cloudinary } from "cloudinary";

// Cấu hình Cloudinary ngay lập tức
cloudinary.config({
  cloud_name: "dfs2bnvhq",
  api_key: "313355162188865",
  api_secret: "kKRY0mCUKIZV87nr1BvdT-izjT0", // Click 'View API Keys' above to copy your API secret
});

export default cloudinary;
