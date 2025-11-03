"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Geist, Figtree } from "next/font/google";
import { useIsMobile } from "@/app/hooks/use-mobile";
import "@/app/style/external.css";
import { useAuth } from "@/app/hooks/useAuth"; // ✅ import auth hook
import { User } from "lucide-react";
import LoginDialog from "./LoginModal"; // ✅ your login popup

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/Components/ui/navigation-menu";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700"],
});

export default function Header({ menuItems }: { menuItems: any[] }) {
  const isMobile = useIsMobile();

  // ✅ Fix: destructure user (and logout if needed)
  const { user, logout } = useAuth();

  return (
    <header className={`${geistSans.className} bg-white headermenu`}>
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

          {/* Navigation Menu */}
          <NavigationMenu viewport={isMobile}>
            <NavigationMenuList className="flex items-center gap-8">
              {menuItems.map((item) => (
                <NavigationMenuItem
                  key={item.title}
                  className="hidden md:block"
                >
                  {item.submenu && item.submenu.length > 0 ? (
                    <>
                      <NavigationMenuTrigger className="text-[#1A2E05] font-normal text-base bg-transparent hover:bg-transparent p-0!">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white border border-white p-5 rounded-none!">
                        <ul
                          className={`${figtree.className} grid w-[220px] gap-4`}
                        >
                          {item.submenu.map((sub: any) => (
                            <li key={sub.label}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={sub.slug}
                                  className={`${figtree.className} text-[#111] hover:text-[#1A2E05] text-[16px] leading-6 transition p-0!`}
                                >
                                  {sub.label}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link
                        href={item.slug}
                        className="text-[#1A2E05] font-normal text-base bg-transparent hover:bg-transparent p-0!"
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Icons */}
          <div className="flex items-center gap-5 md:gap-6 lg:gap-6">
            <Link href="#">
              <Image
                src="/assets/search-icon.svg"
                alt="Search"
                width={28}
                height={28}
                className="object-cover w-[18px] h-[18px] md:w-[28px] md:h-[28px] lg:w-[28px] lg:h-[28px] cursor-pointer"
              />
            </Link>

            <Link href="#">
              <Image
                src="/assets/shopping-cart.svg"
                alt="Cart"
                width={28}
                height={28}
                className="object-cover w-[18px] h-[18px] md:w-[28px] md:h-[28px] lg:w-[28px] lg:h-[28px] cursor-pointer"
              />
            </Link>

            {/* ✅ Fixed user condition */}
            {user ? (
              <div className="relative group">
                <button
                  aria-label="User Menu"
                  className="flex items-center justify-center cursor-pointer hover:opacity-70 transition"
                >
                  <User className="text-[#1A2E05] w-[22px] h-[22px] md:w-[28px] md:h-[28px]" />
                </button>

                <div className="absolute right-0 mt-3 hidden group-hover:block bg-white border border-gray-100 shadow-lg rounded-sm w-40 text-sm text-[#1A2E05]">
                  <p className="px-4 py-2 border-b">
                    {user.name || "User"}
                  </p>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 hover:bg-[#F9FAFB] transition"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <LoginDialog />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
