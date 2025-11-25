"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fetchDigitalOffer = async () => {
    const offerId =
      JSON.parse(localStorage.getItem("preApplicationResponse"))
        ?.digitalOfferId || "";
    const accessToken = localStorage.getItem("accessToken") || "";
    const response = await axios.get(
      `/api/get-digital-offer?offerId=${offerId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  };

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) {
      router.replace("/simplyblu");
      return;
    }

    async function fetchToken() {
      const body = new URLSearchParams();
      body.append("grant_type", process.env.NEXT_PUBLIC_PING_GRANT_TYPE);
      body.append("client_id", process.env.NEXT_PUBLIC_PING_CLIENT_ID);
      body.append("redirect_uri", process.env.NEXT_PUBLIC_PING_REDIRECT_URI);
      body.append("code_verifier", process.env.NEXT_PUBLIC_PING_CODE_VERIFIER);
      body.append("code", code);

      const res = await fetch(process.env.NEXT_PUBLIC_ACCESS_TOKEN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!res.ok) {
        router.push("/simplyblu");
        return;
      }

      const data = await res.json();
      if (data?.access_token) {
        sessionStorage.setItem("ping_access_token", data.access_token);
        document.cookie = `isAuthenticated=true; path=/; max-age=${data.expires_in}; secure; samesite=lax;`;
        await fetchDigitalOffer();
        router.push("/simplyblu/application");
      } else {
        sessionStorage.removeItem("ping_access_token");
        document.cookie = `isAuthenticated=false; path=/; max-age=0;`;
        router.push("/simplyblu");
        return;
      }
    }

    fetchToken();
  }, [router, searchParams]);

  return null;
}
