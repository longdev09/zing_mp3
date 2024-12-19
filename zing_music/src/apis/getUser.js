import http from "../utils/http";

export const getUser = async ({ queryKey }) => {
  const [, uid] = queryKey;
  const { data } = await http.get(`user/get-user/${uid}`);
  return data.user;
};
export default getUser;
