import axios from "axios";

class Http {
  static http = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  // Hàm để gọi API với multipart/form-data (dùng khi cần gửi kèm file)
  static async postFormData(url, formData, config = {}) {
    const finalConfig = {
      ...config,
      headers: {
        ...config.headers,
        "Content-Type": "multipart/form-data",
      },
    };
    return await this.http.post(url, formData, finalConfig);
  }
}

export default Http.http;
export { Http };
