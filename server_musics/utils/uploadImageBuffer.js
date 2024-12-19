import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

const uploadImageBuffer = async (imageBuffer, folderName, imageName) => {
  // Tạo publicId với thư mục và tên hình ảnh
  const publicId = `${folderName}/${imageName}`;

  try {
    // Trả về một Promise cho upload_stream
    const result = await new Promise((resolve, reject) => {
      // Sử dụng Cloudinary uploader với tùy chọn `resource_type: 'auto'` để Cloudinary tự nhận diện loại file
      const stream = cloudinary.uploader.upload_stream(
        {
          public_id: publicId,
          resource_type: "auto",
          width: 320, // Chiều rộng mong muốn
          height: 320, // Chiều cao mong muốn
          crop: "crop", // Crop ảnh để phù hợp với kích thước
        },
        (error, result) => {
          if (error) {
            return reject(error);
          }
          resolve(result);
        }
      );

      // Truyền buffer vào stream
      streamifier.createReadStream(imageBuffer).pipe(stream);
    });

    return result; // Trả về kết quả nếu upload thành công
  } catch (error) {
    console.error("Upload buffer error:", error);
    throw error; // Ném lại lỗi nếu có
  }
};

export default uploadImageBuffer;
