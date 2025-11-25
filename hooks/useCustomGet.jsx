import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGet = (key, url, params = {}) => {
  const fetchData = async () => {
    const response = await axios.get(url, { params });
    return response.data;
  };

  return useQuery({
    queryKey: [key, params],
    queryFn: fetchData,
  });
};
