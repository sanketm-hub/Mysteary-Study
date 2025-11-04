"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Geist, Figtree } from "next/font/google";
import { useAuth } from "@/app/context/AuthContext";
import { User } from "lucide-react";
import LoginDialog from "./LoginModal";
import "@/app/style/external.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700"],
});

export default function Header({ menuItems }: { menuItems: any[] }) {
  const { user, logout } = useAuth();

  const [showMenu, setShowMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // ✅ Detect top bar height
  useEffect(() => {
    const topbar =
      document.querySelector(".topbar") || document.querySelector("#topbar");
    const topbarHeight = topbar ? topbar.getBoundingClientRect().height : 40;
    document.documentElement.style.setProperty(
      "--topbar-height",
      `${topbarHeight}px`
    );
  }, []);

  // ✅ Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Icons
  const MenuIcon = ({ size = 24 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1A2E05"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );

  const CloseIcon = ({ size = 24 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1A2E05"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  if (!mounted) return null;

  return (
    <>
      {/* ✅ HEADER */}
      <header
        className={`${geistSans.className} bg-white headermenu relative z-20`}
      >
        <div className="max-w-[1376px] mx-auto py-3 px-4 md:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/assets/mysteary_logo.svg"
                alt="logo"
                width={65}
                height={58}
                className="w-[44px] h-[40px] md:w-[65px] md:h-[58px]"
              />
            </Link>

            {/* ✅ Desktop Nav (with custom arrow) */}
            <nav className="hidden lg:flex gap-8 items-center">
              {menuItems.map((item) => (
                <div key={item.title} className="relative group">
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.slug}
                      className="text-[#1A2E05] font-normal text-[16px] leading-6 hover:text-[#3F6212] transition-all"
                    >
                      {item.title}
                    </Link>

                    {/* ✅ Add arrow icon only if submenu exists */}
                    {item.submenu && item.submenu.length > 0 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="transition-transform duration-200 group-hover:rotate-180 text-[#1A2E05]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 9l6 6 6-6"
                        />
                      </svg>
                    )}
                  </div>

                  {/* ✅ Shop submenu restored */}
                  {item.submenu && item.submenu.length > 0 && (
                    <div className="absolute left-0 top-full hidden group-hover:block bg-white border border-[#E5E7EB] shadow-md p-5 rounded-none w-[220px] mt-3">
                      <ul className="flex flex-col gap-3">
                        {item.submenu.map((sub: any) => (
                          <li key={sub.label}>
                            <Link
                              href={sub.slug}
                              className="block text-[#111] hover:text-[#1A2E05] text-[15px] leading-[21px]"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-5 md:gap-6 lg:gap-6">
              {/* Search */}
              <Link href="#">
                <Image
                  src="/assets/search-icon.svg"
                  alt="Search"
                  width={28}
                  height={28}
                  className="object-cover w-[18px] h-[18px] md:w-[28px] md:h-[28px] cursor-pointer"
                />
              </Link>

              {/* Cart */}
              <Link href="#">
                <Image
                  src="/assets/shopping-cart.svg"
                  alt="Cart"
                  width={28}
                  height={28}
                  className="object-cover w-[18px] h-[18px] md:w-[28px] md:h-[28px] cursor-pointer"
                />
              </Link>

              {/* User / Login */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowMenu((prev) => !prev)}
                    className="flex items-center justify-center cursor-pointer transition"
                  >
                    <User
                      strokeWidth={1.5}
                      className="text-[#1A2E05]/80 w-[18px] h-[18px] md:w-[28px] md:h-[28px]"
                    />
                  </button>
                  {showMenu && (
                    <div className="absolute right-0 mt-3 bg-white border border-gray-100 shadow-lg rounded-sm w-40 text-sm text-[#1A2E05] z-50">
                      <p className="px-4 py-2 border-b">{user.name || "User"}</p>
                      <button
                        onClick={() => {
                          logout();
                          setShowMenu(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-[#F9FAFB]"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <LoginDialog />
              )}

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex items-center justify-center cursor-pointer"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ Overlay (blur + dim, starts below top bar only) */}
      {mobileOpen && (
        <div
          className="fixed right-0 inset-0 bottom-0 z-50 bg-[rgba(0,0,0,0.50)] backdrop-blur-[2px] transition-opacity duration-300"
          style={{
            top: "var(--topbar-height, 40px)",
          }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ✅ MOBILE MENU */}
      {mobileOpen && (
        <div
          className="fixed w-[240px] md:w-[338px] right-0 bg-white z-60 overflow-y-auto shadow-lg transition-all duration-300"
          style={{
            top: "var(--topbar-height, 40px)",
            height: "calc(100vh - var(--topbar-height, 40px))",
          }}
          role="dialog"
          aria-modal="true"
        >
          {/* Logo + Close */}
          <div className="flex justify-between items-center py-4 px-4 md:px-8 border-b border-gray-100">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/assets/mysteary_logo.svg"
                alt="logo"
                width={65}
                height={58}
                className="w-[44px] h-[40px] md:w-[65px] md:h-[58px]"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="cursor-pointer p-2"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Menu Items */}
          <div className="px-6 md:px-10 py-6">
            <ul className="flex flex-col gap-6 md:gap-12">
              {menuItems.map((item) => (
                <li key={item.title}>
                  {item.submenu && item.submenu.length > 0 ? (
                    <>
                      <button
                        onClick={() =>
                          setShopOpen((prev) =>
                            item.title === "Shop" ? !prev : false
                          )
                        }
                        className="flex justify-between items-center w-full text-left text-[#111] hover:text-[#1A2E05] text-[16px] leading-6"
                      >
                        {item.title}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#1A2E05"
                          strokeWidth="1.5"
                          className={`transition-transform ${
                            shopOpen ? "rotate-180" : ""
                          }`}
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>

                      {item.title === "Shop" && shopOpen && (
                        <ul className="mt-2 ml-4 flex flex-col gap-5">
                          {item.submenu.map((sub: any) => (
                            <li key={sub.label}>
                              <Link
                                href={sub.slug}
                                onClick={() => setMobileOpen(false)}
                                className="block text-[#111] hover:text-[#1A2E05] text-[15px] leading-[21px]"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.slug}
                      onClick={() => setMobileOpen(false)}
                      className="block text-[#111] hover:text-[#1A2E05] text-[16px] leading-6"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
