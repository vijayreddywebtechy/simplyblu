import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const useGet = (key, url, enabled = true, headers = {}, params = {}) => {
  const fetchData = async () => {
    const token = localStorage.getItem("accessToken");
    const uuid = uuidv4();
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "X-IBM-Client-Id": process.env.NEXT_PUBLIC_IBM_CLIENT_ID,
          "X-IBM-Client-Secret": process.env.NEXT_PUBLIC_IBM_CLIENT_SECRET,
          "x-fapi-interaction-id": uuid,
          "x-sbg-channel": process.env.NEXT_PUBLIC_SBG_CHANNEL_NAME,
          ...headers,
        },
        params,
      }
    );
    return response.data;
  };

  return useQuery({
    queryKey: [key, params],
    queryFn: fetchData,
    enabled,
  });
};
