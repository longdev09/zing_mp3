import http from "../utils/http";

const getHome = async () => {
  const { data } = await http.get("home"); // Gọi API với `id`
  return data.data;
};
export default getHome;
