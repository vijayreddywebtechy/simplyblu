import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const dummyData = {
    "productDetails": {
        "productNumber": "ZPOS",
        "productDescription": "SIMPLY_BLU",
        "productCategory": "optional",
        "pricingOption": "ZSIB"
    },
    "directorDetails": [
        {
            "status": null,
            "preferredCommunicationMethod": null,
            "pipDetails": {
                "publicOfficialRelatedDetails": {
                    "typeOfRelationship": null,
                    "surname": "SMIT",
                    "relatedToPublicOfficial": null,
                    "name": "PSK"
                },
                "publicOfficial": false
            },
            "mainApplicant": true,
            "loggedInUser": true,
            "lastName": "SMIT",
            "identificationType": "SAID",
            "identificationNumber": "6805175148085",
            "identificationCountryCode": "ZA",
            "firstName": "PSK",
            "emailAddress": "test@gmail.com",
            "digitalId": null,
            "cellphoneNumber": "0716114523",
            "bpId": null,
            "authorizedToApply": false
        }
    ],
    "consents": {
        "partnerConsents": {
            "creditFraudConsent": true,
            "confirmIdentityConsent": true,
            "collectShare": true
        },
        "marketingConsents": {
            "shareCustomerData": false,
            "receiveMarketing": false,
            "marketResearch": false,
            "externalMarketing": false
        }
    },
    "businessDetails": {
        "soleShareholdingInd": true,
        "createLead": null,
        "businessType": "SOLE PROPRIETOR",
        "businessTurnover": "10000",
        "businessRegistrationNumber": "6805175148085",
        "businessProvince": "ZAF.KZN",
        "businessName": "Test B",
        "businessCity": null
    },
    "applicationDetails": {
        "inflightCustomerDataId": "SIMPLY_BLU",
        "bpGuid": null,
        "applicationId": "null"
    }
};
