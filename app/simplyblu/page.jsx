"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useAccessToken } from "@/hooks/useAccessToken";
import SimplyBluFields from "@/components/simplyblu";
import RHFProvider from "@/providers/ReactHookFormProvider";
import CustomDialog from "@/components/dynamic/CustomDialog";
import { useState } from "react";
import { useCustomMutation } from "@/hooks/useCustomMutation";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const accessTokenMutation = useAccessToken();
  const preApplicationSubmit = useCustomMutation({
    url: "/api/get-preapplication",
  });
  const [isTechnicalDifficultyPopUpOpen, setIsTechnicalDifficultyPopUpOpen] =
    useState(false);
  const [cantCompletePopUpOpen, setCantCompletePopUpOpen] = useState(false);

  const handleContinue = async (data) => {
    console.log(data);
    const productNumber = searchParams.get("productNumber") || "ZPOS";
    const pricingOption = searchParams.get("pricingOption") || "ZSIB";
    const payload = {
      productDetails: {
        productNumber: productNumber || "",
        productDescription: productNumber === "ZPOS" ? "SIMPLY_BLU" : "",
        productCategory: "optional",
        pricingOption: pricingOption || "",
      },
      directorDetails: [
        {
          status: null,
          preferredCommunicationMethod: null,
          pipDetails: {
            publicOfficialRelatedDetails: {
              typeOfRelationship: null,
              surname: data.surname,
              relatedToPublicOfficial: null,
              name: data.firstName,
            },
            publicOfficial: false,
          },
          mainApplicant: true,
          loggedInUser: true,
          lastName: data.surname,
          identificationType: "SAID",
          identificationNumber: data.idNumber,
          identificationCountryCode: "ZA",
          firstName: data.firstName,
          emailAddress: data.email,
          digitalId: null,
          cellphoneNumber: data.cellNumber,
          bpId: null,
          authorizedToApply: false,
        },
      ],
      consents: {
        partnerConsents: {
          creditFraudConsent: true,
          confirmIdentityConsent: true,
          collectShare: true,
        },
        marketingConsents: {
          shareCustomerData: false,
          receiveMarketing: false,
          marketResearch: false,
          externalMarketing: false,
        },
      },
      businessDetails: {
        soleShareholdingInd: data.isSoleShareholder === "yes",
        createLead: null,
        businessType: "SOLE PROPRIETOR",
        businessTurnover: data.grossAnnualTurnover,
        businessRegistrationNumber: data.registrationNumber,
        businessProvince: "ZAF.KZN",
        businessName: data.registeredBusinessName,
        businessCity: data.city,
      },
      applicationDetails: {
        inflightCustomerDataId: "SIMPLY_BLU",
        bpGuid: null,
        applicationId: "null",
      },
    };
    console.log(payload);

    accessTokenMutation.mutate(undefined, {
      onSuccess: () => {
        preApplicationSubmit.mutate(
          { body: payload },
          {
            onSuccess: (data) => {
              if (
                data?.businessStatus === 52003 ||
                data?.businessStatus === 52004 ||
                data?.businessStatus === 52002 ||
                data?.businessStatus === 52111 ||
                data?.businessStatus === 52113 ||
                data?.businessStatus === 52103 ||
                data?.businessStatus === 52104
              ) {
                router.push("/simplyblu/submission-status/type=moreInfo");
              } else if (data?.businessStatus === 52105) {
                router.push("/simplyblu/submission-status/type=callBack");
              } else if (data?.businessStatus === 52109) {
                router.push("/simplyblu/submission-status/type=unsuccessful");
              } else if (data?.businessStatus === 52110) {
                router.push("/simplyblu/submission-status/type=inactiveCIPC");
              } else if (data?.businessStatus === 52112) {
                router.push("/simplyblu/activeCIPC");
              } else if (
                data?.businessStatus === 52100 ||
                data?.businessStatus === 52101 ||
                data?.businessStatus === 52107 ||
                data?.businessStatus === 52108
              ) {
                setIsTechnicalDifficultyPopUpOpen(true);
              } else if (data?.businessStatus === 52104) {
                setCantCompletePopUpOpen(true);
              } else if (data?.businessStatus === 52000) {
                router.push("/simplyblu/select-suits?verified=success");
                localStorage.setItem(
                  "preApplicationResponse",
                  JSON.stringify(data)
                );
                alert("Pre-application submitted successfully");
              }
            },
          }
        );
      },
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 px-3">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-xl font-normal text-gray-medium mb-7">
              SIMPLYBLU APPLICATION
            </h1>
            <p className="text-sm text-gray-medium mb-3">
              We'll use this information to verify your business
            </p>
            <p className="text-xs text-gray-light uppercase">
              THIS PRODUCT IS ONLY FOR SOUTH AFRICAN ID HOLDERS.
            </p>
          </div>
          <RHFProvider submitFn={handleContinue}>
            <SimplyBluFields />
          </RHFProvider>
        </div>
      </div>
      <CustomDialog
        open={isTechnicalDifficultyPopUpOpen}
        setOpen={setIsTechnicalDifficultyPopUpOpen}
        title="Technical Difficulties"
        confirmText="RETRY"
        cancelText="BACK TO BROWSING"
        onConfirm={() => {
          setIsTechnicalDifficultyPopUpOpen(false);
        }}
      >
        <p>Something went wrong on our side.</p>
      </CustomDialog>
      <CustomDialog
        open={cantCompletePopUpOpen}
        setOpen={setCantCompletePopUpOpen}
        title="Application Cannot Be Completed"
        confirmText="RETRY"
        cancelText="BACK TO BROWSING"
        onConfirm={() => {
          setCantCompletePopUpOpen(false);
        }}
      >
        <p>Something went wrong on our side.</p>
      </CustomDialog>
    </div>
  );
};

export default Page;
