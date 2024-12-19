import http from "../utils/http";

const postSignUp = async ({ email, password }) => {
  const response = await http.post("user/sign-up", { email, password });
  return response;
};
export default postSignUp;
