import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import icnPcW from "@/assets/images/icons/icn_pc_w.png";
import icnBgShield from "@/assets/images/icons/icn_bg_shield.png";
import BenefitCards from "@/components/dynamic/BenefitCards";
import DeviceFeatures from "@/components/blocks/DeviceFeatures";
import ReusableTabs from "@/components/dynamic/ReusableTabs";
import ContentWithImage from "@/components/dynamic/ContentWithImage";
import MoreInfo from "@/components/blocks/MoreInfo";

const Page = () => {
  const benefitCardsData = [
    {
      id: 1,
      title: "Streamlined operations",
      description: "Manage your payments, inventory and more in one place, saving you time and hassle",
      icon: icnPcW,
      bgIcon: icnBgShield,
      highlighted: false
    },
    {
      id: 2,
      title: "Data-driven decisions",
      description: "Gain real-time insights to make smarter business choices",
      icon: icnPcW,
      bgIcon: icnBgShield,
      highlighted: true
    },
    {
      id: 3,
      title: "Free to use",
      description: "Access SimplyBLU at no extra cost because we're committed to your success",
      icon: icnPcW,
      bgIcon: icnBgShield,
      highlighted: false
    },
    {
      id: 4,
      title: "On-the-go access",
      description: "Download the merchant app and access SimplyBLU wherever you are",
      icon: icnPcW,
      bgIcon: icnBgShield,
      highlighted: true
    }
  ];

  const tabsData = [
    {
      label: "What you get",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 text-base leading-relaxed">
            With this comprehensive solution, you get access to a variety of functions that make running your business a breeze. You can:
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
              <span className="text-slate-700">Access SimplyBLU on your POS device</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
              <span className="text-slate-700">Access the SimplyBLU app on your Android mobile device</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
              <span className="text-slate-700">Accept multiple payment methods</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
              <span className="text-slate-700">Track transactions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
              <span className="text-slate-700">Manage your products and inventory</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
              <span className="text-slate-700">Access detailed reports and insights via our Merchant Online Portal</span>
            </li>
          </ul>

          <Link href="#" className="inline-block text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline">
            See T&Cs
          </Link>
        </div>
      )
    },
    {
      label: "What it costs",
      content: (
        <div className="space-y-4">
          <p className="text-slate-700 text-base leading-relaxed">
            Our pricing is transparent and designed to grow with your business.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
              <span className="text-slate-700">No setup fees</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
              <span className="text-slate-700">Competitive transaction rates</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
              <span className="text-slate-700">Free access to SimplyBLU app</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      label: "How to get it",
      content: (
        <div className="space-y-4">
          <p className="text-slate-700 text-base leading-relaxed">
            Getting started with SimplyBLU is easy:
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            <li className="text-slate-700">Contact your Standard Bank business banker</li>
            <li className="text-slate-700">Complete the application process</li>
            <li className="text-slate-700">Receive your POS device</li>
            <li className="text-slate-700">Download the SimplyBLU app</li>
            <li className="text-slate-700">Start accepting payments and managing your business</li>
          </ol>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-8 lg:py-12 lg:px-12">
      <div className="page-container">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center justify-center mb-10 gap-1">
            <Link
              href="/"
              className="flex justify-center items-center gap-1 text-primary text-sm"
            >
              <span>Home</span>
              <ChevronRight
                className="w-5 h-5 text-gray-600 hover:text-gray-800"
                strokeWidth={1.5}
              />
            </Link>
            <Link
              href="/"
              className="flex justify-center items-center gap-1 text-primary text-sm"
            >
              <span>Products and Services</span>
              <ChevronRight
                className="w-5 h-5 text-gray-600 hover:text-gray-800"
                strokeWidth={1.5}
              />
            </Link>
            <Link
              href="/"
              className="flex justify-center items-center gap-1 text-primary text-sm"
            >
              <span>Business solutions</span>
              <ChevronRight
                className="w-5 h-5 text-gray-600 hover:text-gray-800"
                strokeWidth={1.5}
              />
            </Link>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] mb-4 text-secondary">
            SimplyBLU<sup className="text-base -top-5">TM</sup>
          </h2>
          <p className="mb-4 text-base sm:text-lg md:text-xl font-normal text-gray-700">
            The all-in-one payment solution that powers your business, online
            and in-store.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <h3 className="text-2xl text-secondary font-medium mb-16">
            Some of the benefits
          </h3>
          <BenefitCards cards={benefitCardsData} columns={4} />
        </div>
        {/* Device Features Section */}
        <DeviceFeatures />
        
        {/* Tabs Section */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <ReusableTabs 
            tabs={tabsData}
            defaultTab={0}
            showWrapper={false}
            containerClassName="max-w-full bg-white"
          />
        </div>
        <div className="mt-16 sm:mt-20 md:mt-24">
            <ContentWithImage />
        </div>
        <div className="mt-16 sm:mt-20 md:mt-24">
            <MoreInfo />
        </div>
            
      </div>
    </div>
  );
};

export default Page;
