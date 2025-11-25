"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import sbLogo from "@/assets/sb-logo-white.png";
import { Search, User, Menu } from "lucide-react";

import { TOP_TABS, BUSINESS_SUBNAV } from "./navConfig";
import { MegaMenuType1 } from "./MegaMenus";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();

  const isBusinessPage = pathname.startsWith("/business");
  const [megaOpen, setMegaOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full shadow">

      {/* =================== TOP TABS =================== */}
      <div className="bg-white">
        <div className="page-container flex h-11 items-center justify-between">
          <div className="flex h-full items-center">
            {TOP_TABS.map((tab) => (
              <Link
                key={tab.key}
                href={tab.href}
                className={`
                  hidden lg:flex px-4 h-full text-sm items-center transition
                  ${
                    isBusinessPage && tab.key === "business"
                      ? "bg-[#0047BB] text-white border-[#0047BB]"
                      : "text-secondary hover:bg-gray-100 border-transparent"
                  }
                `}
              >
                {tab.label}
              </Link>
            ))}
          </div>
          
          {/* Right side links */}
          <div className="hidden lg:flex items-center gap-6 text-sm text-secondary">
            <Link href="/about" className="hover:text-[#0047BB]">About us</Link>
            <Link href="/locate" className="hover:text-[#0047BB]">Locate Us</Link>
            <Link href="/contact" className="hover:text-[#0047BB]">Contact us</Link>
            <select className="border border-gray-300 rounded px-2 py-1 text-sm bg-white hover:border-[#0047BB] focus:outline-none focus:border-[#0047BB]">
              <option value="za">South Africa</option>
              <option value="bw">Botswana</option>
              <option value="gh">Ghana</option>
              <option value="ke">Kenya</option>
              <option value="mw">Malawi</option>
              <option value="mz">Mozambique</option>
              <option value="na">Namibia</option>
              <option value="ng">Nigeria</option>
              <option value="tz">Tanzania</option>
              <option value="ug">Uganda</option>
              <option value="zm">Zambia</option>
              <option value="zw">Zimbabwe</option>
            </select>
          </div>
        </div>
      </div>

      {/* =================== SUBNAV (BUSINESS ONLY) =================== */}
      <div
        className="bg-[#0033A1] text-white relative"
        onMouseLeave={() => setMegaOpen(null)}
      >
        <div className="page-container flex items-center justify-between py-3">

          {/* Logo */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
                <Link href="/">
                    <Image src={sbLogo} alt="Standard Bank Logo" width={158} height={42} /> 
                </Link>
            </div>

            {/* Business Only Sub Nav */}
            {isBusinessPage && (
              <nav className="hidden lg:flex gap-8 ml-6 text-white text-sm md:text-base">
                {BUSINESS_SUBNAV.map((item) => (
                  <div
                    key={item.id}
                    onMouseEnter={() => setMegaOpen(item.megaType || null)}
                    className="cursor-pointer hover:text-blue-200"
                  >
                    {item.href ? (
                      <Link href={item.href}>{item.label}</Link>
                    ) : (
                      item.label
                    )}
                  </div>
                ))}
              </nav>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Search className="hidden sm:block w-5 h-5" />
            <button className="hidden md:flex items-center gap-2 bg-[#0091FF] px-4 py-1.5 rounded">
              <User className="w-4 h-4" />
              <span>Sign in</span>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden flex items-center gap-2 hover:text-blue-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>

        {/* =================== MEGAMENU WHEN BUSINESS =================== */}
        {isBusinessPage && megaOpen === "type1" && <MegaMenuType1 />}
      </div>

      {/* =================== MOBILE MENU =================== */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

    </header>
  );
}
