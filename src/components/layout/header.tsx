"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import navigationData from "../../data/navigation.json";

interface NavigationItem {
  to: string;
  label: string;
}

/**
 * Main site header with navigation and mobile menu
 */
const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileNav = useCallback(() => {
    setMobileNavOpen((prev) => !prev);
  }, []);

  const closeMobileNav = useCallback(() => {
    setMobileNavOpen(false);
  }, []);

  const navigationItems: NavigationItem[] = navigationData.navigationItems;

  return (
    <header className="overflow-hidden bg-blue-900">
      <div className="container px-4 pb-3 mx-auto">
        <div className="flex items-center justify-between pt-6 -m-2">
          <div className="w-auto p-0">
            <div className="flex flex-wrap items-center">
              <div className="w-auto">
                <Link
                  className="relative z-10 inline-block h-16 w-auto"
                  href="/"
                >
                  <Image
                    src="/images/logo.svg"
                    alt="Logo"
                    width={180}
                    height={64}
                    className="h-full w-auto object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-auto p-2">
            <div className="flex flex-wrap items-center">
              <nav className="w-auto hidden lg:block">
                <ul className="flex items-center mr-12">
                  {navigationItems.map((item, index) => (
                    <li
                      key={item.to}
                      className={`${
                        index < navigationItems.length - 1 ? "mr-12" : ""
                      } text-white font-medium hover:text-opacity-90 tracking-tighter`}
                    >
                      <Link
                        href={item.to}
                        className={`${
                          pathname === item.to ? "text-green-400" : "text-white"
                        } hover:text-green-400 transition-colors duration-200`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="w-auto lg:hidden">
                <button
                  className="relative z-10 inline-block"
                  onClick={toggleMobileNav}
                >
                  <svg
                    className="text-gray-50"
                    width="51"
                    height="51"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="56"
                      height="56"
                      rx="28"
                      fill="currentColor"
                    ></rect>
                    <path
                      d="M37 32H19M37 24H19"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          mobileNavOpen ? "block" : "hidden"
        } fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50`}
      >
        <div
          className="fixed inset-0 bg-black opacity-60"
          onClick={toggleMobileNav}
        ></div>
        <nav className="relative z-10 px-9 pt-8 h-full bg-black overflow-y-auto">
          <div className="flex flex-wrap justify-between h-full">
            <div className="w-full">
              <div className="flex items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <Link className="inline-block h-12 w-auto" href="/">
                    <Image
                      src="/images/logo.svg"
                      alt="Logo"
                      width={150}
                      height={48}
                      className="h-full w-auto object-contain"
                    />
                  </Link>
                </div>
                <div className="w-auto p-2">
                  <button
                    className="inline-block text-white"
                    onClick={toggleMobileNav}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 18L18 6M6 6L18 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center py-16 w-full">
              <ul>
                {navigationItems.map((item, index) => (
                  <li
                    key={item.to}
                    className={`${
                      index < navigationItems.length - 1 ? "mb-8" : ""
                    } text-white font-medium hover:text-opacity-90 tracking-tighter`}
                  >
                    <Link
                      href={item.to}
                      onClick={closeMobileNav}
                      className={`${
                        pathname === item.to ? "text-blue-200" : "text-white"
                      } hover:text-blue-200 transition-colors duration-200`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-end w-full pb-8"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
