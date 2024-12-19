import http from "../utils/http";
const verifyLogin = async () => {
  const response = await http.get("user/verify");
  return response.data;
};
export default verifyLogin;
