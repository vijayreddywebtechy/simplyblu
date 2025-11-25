"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, ChevronRight, ChevronLeft, X } from "lucide-react";
import { MEGA_TYPE_1 } from "./navConfig";

export default function MobileMenu({ isOpen, onClose }) {
  const [businessOpen, setBusinessOpen] = useState(false);
  const [showProductsView, setShowProductsView] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);

  if (!isOpen) return null;

  const categories = [
    { title: "Bank with us", index: 0 },
    { title: "Borrow for your needs", index: 1 },
    { title: "Grow your money", index: 2 },
    { title: "Insure what matters", index: 3 },
    { title: "Business solutions", index: 4 },
    { title: "Ways to bank", index: 5 },
    { title: "Security centre", index: 6 },
  ];

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto">
        {!showProductsView ? (
          <>
            {/* Main Menu */}
            {/* Close Button */}
            <div className="flex justify-end p-4 border-b">
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              {/* Personal */}
              <Link 
                href="/personal" 
                className="flex items-center justify-between px-6 py-4 text-[#003A70] hover:bg-gray-50 border-b"
                onClick={onClose}
              >
                <span>Personal</span>
                <ChevronDown className="w-5 h-5" />
              </Link>

              {/* Business */}
              <div className="border-b">
                <button
                  onClick={() => setBusinessOpen(!businessOpen)}
                  className={`w-full flex items-center justify-between px-6 py-4 text-[#003A70] hover:bg-gray-50 ${
                    businessOpen ? "bg-gray-50" : ""
                  }`}
                >
                  <span>Business</span>
                  {businessOpen ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>

                {/* Business Submenu */}
                {businessOpen && (
                  <div className="bg-gray-50">
                    {/* Overview */}
                    <Link
                      href="/business"
                      className="flex items-center justify-between px-8 py-3 text-[#003A70] hover:bg-gray-100 border-b border-gray-200"
                      onClick={onClose}
                    >
                      <span className="text-sm">Overview</span>
                    </Link>

                    {/* Products and Services */}
                    <button
                      onClick={() => setShowProductsView(true)}
                      className="w-full flex items-center justify-between px-8 py-3 text-[#003A70] hover:bg-gray-100 border-b border-gray-200"
                    >
                      <span className="text-sm">Products and Services</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* BizConnect */}
                    <Link
                      href="/business/bizconnect"
                      className="flex items-center justify-between px-8 py-3 text-[#003A70] hover:bg-gray-100 border-b border-gray-200"
                      onClick={onClose}
                    >
                      <span className="text-sm">BizConnect</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>

                    {/* Trade Suite */}
                    <Link
                      href="/business/trade-point"
                      className="flex items-center justify-between px-8 py-3 text-[#003A70] hover:bg-gray-100 border-b border-gray-200"
                      onClick={onClose}
                    >
                      <span className="text-sm">Trade Suite</span>
                    </Link>

                    {/* UCount Rewards */}
                    <Link
                      href="/business/ucount"
                      className="flex items-center justify-between px-8 py-3 text-[#003A70] hover:bg-gray-100 border-b border-gray-200"
                      onClick={onClose}
                    >
                      <span className="text-sm">UCount Rewards</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Corporate and Institutions */}
              <Link
                href="/corporate"
                className="flex items-center justify-between px-6 py-4 text-[#003A70] hover:bg-gray-50 border-b"
                onClick={onClose}
              >
                <span>Corporate and Institutions</span>
                <ChevronDown className="w-5 h-5" />
              </Link>

              {/* Wealth */}
              <Link
                href="/wealth"
                className="flex items-center justify-between px-6 py-4 text-[#003A70] hover:bg-gray-50 border-b"
                onClick={onClose}
              >
                <span>Wealth</span>
                <ChevronDown className="w-5 h-5" />
              </Link>

              {/* News and Media */}
              <Link
                href="/news"
                className="flex items-center justify-between px-6 py-4 text-[#003A70] hover:bg-gray-50 border-b"
                onClick={onClose}
              >
                <span>News and Media</span>
              </Link>
            </div>
          </>
        ) : (
          <>
            {/* Products and Services View */}
            <div className="border-b bg-white sticky top-0 z-10">
              <button
                onClick={() => {
                  setShowProductsView(false);
                  setExpandedCategory(null);
                }}
                className="flex items-center gap-3 px-6 py-4 text-[#003A70] hover:bg-gray-50 w-full"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="font-medium">Products and Services</span>
              </button>
            </div>

            <div className="py-2">
              {categories.map((category) => {
                const sectionData = MEGA_TYPE_1.sections[category.index];
                const hasSubLinks = sectionData && sectionData.some(col => col.links && col.links.length > 0);

                return (
                  <div key={category.index} className="border-b">
                    <button
                      onClick={() => hasSubLinks && toggleCategory(category.index)}
                      className="w-full flex items-center justify-between px-6 py-4 text-[#003A70] hover:bg-gray-50"
                    >
                      <span>{category.title}</span>
                      {hasSubLinks && (
                        expandedCategory === category.index ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronRight className="w-5 h-5" />
                        )
                      )}
                    </button>

                    {/* Expanded Category Details */}
                    {expandedCategory === category.index && sectionData && (
                      <div className="bg-gray-50 pb-2">
                        {sectionData.map((col, idx) => (
                          <div key={idx}>
                            {/* Category Title */}
                            {col.titleHref ? (
                              <Link
                                href={col.titleHref}
                                className="block px-8 py-3 text-sm font-medium text-[#003A70] hover:bg-gray-100 border-b border-gray-200"
                                onClick={onClose}
                              >
                                {col.title}
                              </Link>
                            ) : (
                              <div className="px-8 py-3 text-sm font-medium text-[#003A70] border-b border-gray-200">
                                {col.title}
                              </div>
                            )}
                            
                            {/* Sub Links */}
                            {col.links && col.links.length > 0 && (
                              <div className="bg-white">
                                {col.links.map((link, linkIdx) => (
                                  <Link
                                    key={linkIdx}
                                    href="#"
                                    className="block px-12 py-2.5 text-sm text-[#003A70] hover:bg-gray-100"
                                    onClick={onClose}
                                  >
                                    {link}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
