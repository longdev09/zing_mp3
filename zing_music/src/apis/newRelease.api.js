import http from "../utils/http";
const getNewRelease = () => http.get("newRelease");
export default getNewRelease;
