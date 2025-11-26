import React from "react";
import Link from "next/link";
import Image from "next/image";
import faqIcon from "@/assets/images/icons/icn_faq.png";
import termsIcon from "@/assets/images/icons/icn_form_fill.png";

const MoreInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Text Section */}
      <div>
        <h1 className="text-2xl md:text-3xl font-medium text-secondary mb-3">
          Need more information?
        </h1>
        <p className="text-base text-secondary">
          Explore our FAQs and T&Cs for all the details you need to get started.
        </p>
      </div>

      {/* Right Cards Section */}
      <div className="flex gap-5 justify-start md:justify-end">
        {/* FAQs Card */}
        <Link
          href="https://www.standardbank.co.za/southafrica/business/products-and-services/business-solutions/merchant-solutions/frequently-asked-questions"
          className="border border-neutral-200 rounded-xl bg-white w-32 h-32 
                 flex flex-col items-center justify-center gap-3 shadow-sm
                 hover:shadow-md hover:border-primary transition-all"
        target="_blank"
        >
          <Image src={faqIcon} alt="FAQs Icon" width={40} height={40} />
          <span className="text-sm font-medium text-secondary">FAQs</span>
        </Link>

        {/* T&Cs Card */}
        <Link
          href="https://www.standardbank.co.za/southafrica/business/products-and-services/business-solutions/merchant-solutions/articles-and-videos"
          className="border border-neutral-200 rounded-xl bg-white w-32 h-32 
                 flex flex-col items-center justify-center gap-3 shadow-sm
                 hover:shadow-md hover:border-primary transition-all"
        target="_blank"
        >
          <Image
            src={termsIcon}
            alt="Terms and Conditions Icon"
            width={40}
            height={40}
          />
          <span className="text-sm font-medium text-secondary">T&Cs</span>
        </Link>
      </div>
    </div>
  );
};

export default MoreInfo;
