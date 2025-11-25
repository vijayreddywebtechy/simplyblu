import { useMutation } from "@tanstack/react-query";

export const useAccessToken = () => {
  const body = new URLSearchParams();
  body.append("grant_type", process.env.NEXT_PUBLIC_GRANT_TYPE);
  body.append("client_id", process.env.NEXT_PUBLIC_CLIENT_ID);
  body.append("client_secret", process.env.NEXT_PUBLIC_CLIENT_SECRET);
  body.append("code_verifier", process.env.NEXT_PUBLIC_CODE_VERIFIER);
  body.append("scopes", process.env.NEXT_PUBLIC_SCOPES);

  return useMutation({
    mutationFn: async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_ACCESS_TOKEN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
      });

      if (!res.ok) {
        throw new Error("Failed to login");
      }

      const data = await res.json();
      console.log(data);
      if (data?.access_token) {
        localStorage.setItem("accessToken", data.access_token);
      }
    },
  });
};
