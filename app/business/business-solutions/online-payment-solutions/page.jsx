import React from "react";
import PageBanner from "@/components/dynamic/PageBanner";
import icnPcW from "@/assets/images/icons/icn_pc_w.png";
import icnBgShield from "@/assets/images/icons/icn_bg_shield.png";
import BenefitCards from "@/components/dynamic/BenefitCards";
import OfferingCard from "@/components/dynamic/OfferingCard";

const Page = () => {
  const benefitCardsData = [
    {
      id: 1,
      title: "Streamlined operations",
      description:
        "Manage your payments, inventory and more in one place, saving you time and hassle",
      icon: icnPcW,
      bgIcon: icnBgShield,
      highlighted: false,
    },
    {
      id: 2,
      title: "Data-driven decisions",
      description: "Gain real-time insights to make smarter business choices",
      icon: icnPcW,
      bgIcon: icnBgShield,
      highlighted: true,
    },
    {
      id: 3,
      title: "Free to use",
      description:
        "Access SimplyBLU at no extra cost because we're committed to your success",
      icon: icnPcW,
      bgIcon: icnBgShield,
      highlighted: false,
    },
    {
      id: 4,
      title: "On-the-go access",
      description:
        "Download the merchant app and access SimplyBLU wherever you are",
      icon: icnPcW,
      bgIcon: icnBgShield,
      highlighted: true,
    },
  ];

  const offeringCardsData = [
    {
      title: "SimplyBLU",
      titleSuperscript: "TM",
      description: "Access an integrated solution that acts as a point-of-sale device, store manager and an e-commerce storefront",
      primaryButtonText: "Apply now",
      secondaryButtonText: "Tell me more",
      primaryButtonHref: "/apply",
      secondaryButtonHref: "/simplyblu-details"
    },
    {
      title: "eCommerce",
      titleSuperscript: "",
      description: "Be part of the digital economy by accepting customer payments on your website, mobi-site, or app",
      primaryButtonText: "Apply now",
      secondaryButtonText: "Tell me more",
      primaryButtonHref: "/",
      secondaryButtonHref: "/"
    }
  ];

  return (
    <>
      <PageBanner />
      <div className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="page-container">
        {/* Benefits Section */}
          <div className="mb-16 sm:mb-20 md:mb-24">
            <h3 className="text-2xl text-secondary font-medium mb-16">
              Some of the benefits
            </h3>
            <BenefitCards cards={benefitCardsData} columns={4} />
          </div>
         {/* Offering Section */}
          <div className="mb-16 sm:mb-20 md:mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                {offeringCardsData.map((card, index) => (
                  <OfferingCard
                    key={index}
                    title={card.title}
                    titleSuperscript={card.titleSuperscript}
                    description={card.description}
                    primaryButtonText={card.primaryButtonText}
                    secondaryButtonText={card.secondaryButtonText}
                    primaryButtonHref={card.primaryButtonHref}
                    secondaryButtonHref={card.secondaryButtonHref}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
