"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import sbLogo from "@/assets/sb-logo-white.png";
import { Search, User, Menu, ChevronDown } from "lucide-react";
import southAfricaFlag from "@/assets/images/flags/south_africa_flag.png";

import { TOP_TABS, BUSINESS_SUBNAV } from "./navConfig";
import { MegaMenuType1 } from "./MegaMenus";
import MobileMenu from "./MobileMenu";
import CountryPickerDropdown from "../blocks/CountryPickerDropdown";

export default function Header() {
  const pathname = usePathname();

  const isBusinessPage = pathname.startsWith("/business");
  const [megaOpen, setMegaOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countryPickerOpen, setCountryPickerOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'South Africa',
    flag: southAfricaFlag,
    code: 'ZA'
  });

  return (
    <header className="w-full shadow sticky top-0 z-50">
      {/* =================== TOP TABS =================== */}
      <div className="bg-white">
        <div className="page-container hidden sm:flex h-11 items-center justify-between">
          <div className="flex h-full items-center">
            {TOP_TABS.map((tab) => (
              <Link
                key={tab.key}
                href={tab.href}
                className={`
                  hidden lg:flex px-2.5 h-full text-sm items-center transition
                  ${
                    isBusinessPage && tab.key === "business"
                      ? "bg-primary-dark text-white border-primary-dark"
                      : "text-secondary hover:bg-gray-100 border-transparent"
                  }
                `}
              >
                {tab.label}
              </Link>
            ))}
          </div>

          {/* Right side links */}
          <div className="hidden sm:flex items-center gap-6 text-sm text-secondary">
            <Link href="/about" className="hover:text-[#0047BB]">
              About us
            </Link>
            <Link href="/locate" className="hover:text-[#0047BB]">
              Locate Us
            </Link>
            <Link href="/contact" className="hover:text-[#0047BB]">
              Contact us
            </Link>
            <button 
              type="button" 
              onClick={() => setCountryPickerOpen(true)}
              className="flex items-center gap-2 cursor-pointer text-sm text-secondary hover:text-[#0047BB]"
            >
              <div className="w-[30px] h-[30px] rounded-full overflow-hidden relative">
                {typeof selectedCountry.flag === 'string' && selectedCountry.flag.startsWith('http') ? (
                  <img
                    src={selectedCountry.flag}
                    alt={`${selectedCountry.name} Flag`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={selectedCountry.flag}
                    alt={`${selectedCountry.name} Flag`}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <span>{selectedCountry.name}</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* =================== SUBNAV (BUSINESS ONLY) =================== */}
      <div
        className="bg-primary-dark text-white relative"
        onMouseLeave={() => setMegaOpen(null)}
      >
        <div className="page-container flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-6 h-full">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Image
                  src={sbLogo}
                  alt="Standard Bank Logo"
                  width={158}
                  height={42}
                />
              </Link>
            </div>

            {/* Business Only Sub Nav */}
            {isBusinessPage && (
              <nav className="hidden lg:flex items-center h-full gap-8 ml-6 text-white text-sm md:text-base font-normal">
                {BUSINESS_SUBNAV.map((item) => (
                  <div
                    key={item.id}
                    onMouseEnter={() => setMegaOpen(item.megaType || null)}
                    className="h-full flex items-center relative group"
                  >
                    {item.href ? (
                      <Link href={item.href} className="group-hover:text-white transition-colors duration-200">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="group-hover:text-white transition-colors duration-200">
                        {item.label}
                      </span>
                    )}
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  </div>
                ))}
              </nav>
            )}
          </div>

          <div className="flex items-center gap-4 h-full">
            <Search className="w-6 h-6 cursor-pointer" />
            <button className="h-full hidden sm:flex items-center gap-2 bg-[#0091FF] px-4 py-1.5 text-sm md:text-base uppercase">
              <User className="w-6 h-6" />
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
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        selectedCountry={selectedCountry}
        onCountryPickerOpen={() => setCountryPickerOpen(true)}
      />

      {/* =================== COUNTRY PICKER =================== */}
      <CountryPickerDropdown 
        isOpen={countryPickerOpen}
        onOpenChange={setCountryPickerOpen}
        triggerButton={false}
        selectedCountry={selectedCountry}
        onCountryChange={setSelectedCountry}
      />
    </header>
  );
}
