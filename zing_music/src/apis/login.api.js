import http from "../utils/http";

const postLogin = async (email, password) => {
  const response = await http.post("user", { email, password });
  return response;
};
export default postLogin;
