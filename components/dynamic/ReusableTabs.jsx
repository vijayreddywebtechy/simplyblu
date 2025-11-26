"use client";
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ReusableTabs({ 
  tabs = [],
  defaultTab = 0,
  containerClassName = "",
  tabsHeaderClassName = "",
  tabButtonClassName = "",
  activeTabClassName = "",
  inactiveTabClassName = "",
  contentClassName = ""
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className={cn("bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden", containerClassName)}>
      {/* Tabs Header */}
      <div className={cn("border-b border-slate-200", tabsHeaderClassName)}>
        <div className="flex flex-wrap">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={cn(
                "px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium transition-all relative",
                activeTab === index
                  ? cn("text-blue-600 bg-white", activeTabClassName)
                  : cn("text-slate-600 hover:text-slate-900 hover:bg-slate-50", inactiveTabClassName),
                tabButtonClassName
              )}
            >
              {tab.label}
              {activeTab === index && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className={cn("p-4 sm:p-6 md:p-8 lg:p-10", contentClassName)}>
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
}