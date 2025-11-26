// components/header/MegaMenus.jsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { MEGA_TYPE_1 } from "./navConfig";

export function MegaMenuType1() {
  const [activeIndex, setActiveIndex] = useState(MEGA_TYPE_1.activeIndex);

  // Get columns for the active section
  const columns = MEGA_TYPE_1.sections[activeIndex] || [];

  return (
    <div className="w-full bg-white shadow-xl border-t border-gray-200 absolute left-0 top-full z-50">
      <div className="page-container flex">

        {/* Sidebar */}
        <div className="w-64 bg-gray-50 border-r border-gray-200">
          {MEGA_TYPE_1.sidebar.map((item, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`px-6 py-3.5 text-sm md:text-base cursor-pointer transition-colors duration-150 ${
                i === activeIndex
                  ? "bg-white text-[#0047BB]"
                  : "text-gray-700 hover:bg-white hover:text-[#0047BB]"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Columns */}
        <div className="flex-1 grid grid-cols-3 px-10 py-8 gap-x-10 gap-y-8 text-sm">
          {columns.map((col, i) => (
            <div key={i}>
              {col.titleHref ? (
                <Link 
                  href={col.titleHref} 
                  className="text-sm md:text-base text-secondary mb-2 block hover:text-primary-dark hover:underline underline-offset-4 transition-colors duration-150"
                >
                  {col.title}
                </Link>
              ) : (
                <h4 className="text-sm md:text-base text-secondary mb-2">{col.title}</h4>
              )}
              {col.links.length > 0 && (
                <div className="space-y-2">
                  {col.links.map((link, idx) => (
                    <a 
                      key={idx} 
                      href="#" 
                      className="block text-sm text-[#0055B8] hover:text-[#0047BB] hover:underline underline-offset-4 transition-colors duration-150 leading-relaxed"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
