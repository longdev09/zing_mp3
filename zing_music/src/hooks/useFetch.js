import { useEffect, useState } from "react";
import http from "../utils/http";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    try {
      setLoading(true);
      const res = await http.get(url);
      setData(res.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi();
  }, [url]);
  return { data, loading, error };
};
export default useFetch;
