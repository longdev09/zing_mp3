import http from "../utils/http";

const getList = async ({ queryKey }) => {
  const [, id] = queryKey; // Giải cấu trúc lấy `id` từ queryKey
  const { data } = await http.get(`playlist/${id}`); // Gọi API với `id`
  return data.data;
};
export default getList;
