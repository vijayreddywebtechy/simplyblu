import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useCustomMutation = ({
  url,
  method = "POST",
  config = {},
  onSuccess,
  onError,
  onSettled,
}) => {
  return useMutation({
    mutationFn: async ({ body }) => {
      const response = await axios({
        url,
        method,
        data: body,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        ...config,
      });
      console.log(response);

      return response.data;
    },

    onSuccess: (data) => {
      onSuccess && onSuccess(data);
    },

    onError: (error) => {
      onError && onError(error);
    },

    onSettled: () => {
      onSettled && onSettled();
    },
  });
};
