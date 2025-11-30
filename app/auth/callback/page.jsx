"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useGet } from "@/hooks/useCustomGet";
import { useCustomMutation } from "@/hooks/useCustomMutation";
import CustomDialog from "@/components/dynamic/CustomDialog";
import { useRetry } from "@/hooks/useRetry";

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [offerId, setOfferId] = useState("");
  const [processId, setProcessId] = useState("");
  const [isTechnicalDifficultyPopUpOpen, setIsTechnicalDifficultyPopUpOpen] =
    useState(false);

  const { executeWithRetry } = useRetry({
    setIsPopupOpen: setIsTechnicalDifficultyPopUpOpen,
    redirectOnFailure: "/simplyblu/submission-status?type=callBack",
    maxPopupRetries: 3,
    onError: (err, count) => console.log("Fail:", count),
  });

  const tokenMutation = useCustomMutation({
    url: process.env.NEXT_PUBLIC_ACCESS_TOKEN_URL,
    config: {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    },
    onSuccess: (data) => {
      if (!data?.access_token) {
        sessionStorage.removeItem("ping_access_token");
        document.cookie = `isAuthenticated=false; path=/; max-age=0;`;
        router.push("/simplyblu");
        return;
      }

      sessionStorage.setItem("ping_access_token", data.access_token);
      document.cookie = `isAuthenticated=true; path=/; max-age=${data.expires_in}; secure; samesite=lax;`;

      const pre = JSON.parse(localStorage.getItem("preApplicationResponse"));
      setOfferId(pre?.digitalOfferId || "");
      setProcessId(pre?.processId || "");
    },

    onError: () => {
      router.push("/simplyblu");
    },
  });

  const {
    data: digitalOffer,
    isError: isDigitalOfferError,
    refetch: retryDigitalOffer,
  } = useGet(
    "digital-offer",
    `/digital-offer-mymobiz/offer/${offerId}`,
    Boolean(offerId)
  );
  const {
    data: applicationData,
    isError: isApplicationDataError,
    refetch: retryApplicationData,
  } = useGet(
    "application-process-data",
    `/business-lending-mymobiz/application-process-data/${processId}`,
    Boolean(processId)
  );

  useEffect(() => {
    if (isDigitalOfferError || isApplicationDataError) {
      setIsTechnicalDifficultyPopUpOpen(true);
    }
  }, [isDigitalOfferError, isApplicationDataError]);

  useEffect(() => {
    if (digitalOffer && applicationData) {
      localStorage.setItem("digitalOffer", JSON.stringify(digitalOffer));
      localStorage.setItem("applicationData", JSON.stringify(applicationData));
      router.push("/simplyblu/application");
    }
  }, [digitalOffer, router, applicationData]);

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

      tokenMutation.mutate({
        body: body.toString(),
      });
    }

    fetchToken();
  }, [router, searchParams]);

  const handleRetry = async () => {
    setIsTechnicalDifficultyPopUpOpen(false);

    await executeWithRetry(async () => {
      const tasks = [];

      if (isDigitalOfferError) tasks.push(retryDigitalOffer());
      if (isApplicationDataError) tasks.push(retryApplicationData());

      const results = await Promise.all(tasks);
      const failed = results.some((r) => r.isError);
      if (failed) {
        return { success: false };
      }

      return { success: true };
    });
  };

  return (
    <CustomDialog
      open={isTechnicalDifficultyPopUpOpen}
      setOpen={setIsTechnicalDifficultyPopUpOpen}
      title="Technical Difficulties"
      confirmText="RETRY"
      cancelText="BACK TO BROWSING"
      onCancel={() => setIsTechnicalDifficultyPopUpOpen(false)}
      onConfirm={handleRetry}
    >
      <p>Something went wrong on our side.</p>
    </CustomDialog>
  );
}
