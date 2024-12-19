import http from "../utils/http";

const postLogin = async ({ email, password }) => {
  const response = await http.post("user/login", { email, password }); // Để gửi và nhận cookie);
  return response.data;
};
export default postLogin;
