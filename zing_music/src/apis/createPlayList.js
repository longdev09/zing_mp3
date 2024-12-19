import { Http } from "../utils/http";
export const createPlayList = async ({ image, title, public_ }) => {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("title", title);
  formData.append("public_", public_);
  const response = await Http.postFormData("user/create/playlist", formData);
  return response.data;
};
export default createPlayList;
