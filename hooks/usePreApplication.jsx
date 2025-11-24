import { useMutation } from "@tanstack/react-query";

export const usePreApplication = () => {
  return useMutation({
    mutationFn: async ({ body }) => {

      const res = await fetch("/api/get-preapplication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        throw new Error("Failed to submit pre-application");
      }     

      const data = await res.json();
      return data;
    },
  });
};
