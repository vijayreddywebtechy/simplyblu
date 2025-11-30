import { useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

export function useRetry({
  setIsPopupOpen,
  maxPopupRetries = 3,
  redirectOnFailure,
  onError,
} = {}) {
  const retryCountRef = useRef(0);
  const router = useRouter();

  const executeWithRetry = useCallback(
    async (fn) => {
      const result = await fn();

      // If the function returned failure, treat it like an error (QUIETLY)
      const failed = result?.success === false;

      if (!failed) {
        return result; // success case, nothing to do
      }

      // Increase retry counter
      retryCountRef.current += 1;
      const attempt = retryCountRef.current;

      onError?.("retry_failed", attempt);

      // First 3 times → show popup
      if (attempt < maxPopupRetries) {
        setIsPopupOpen(true);
        return { success: false };
      }

      // 4th failure → redirect
      router.push(redirectOnFailure);
      return { success: false };
    },
    [setIsPopupOpen, maxPopupRetries, redirectOnFailure, onError, router]
  );

  return { executeWithRetry };
}
