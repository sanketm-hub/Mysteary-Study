"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Geist, Figtree } from "next/font/google";
import { useIsMobile } from "@/app/hooks/use-mobile";
import "@/app/style/external.css";

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
                <NavigationMenuItem key={item.title} className="hidden md:block">
                  {item.submenu && item.submenu.length > 0 ? (
                    <>
                      <NavigationMenuTrigger className="text-[#1A2E05] font-normal text-base bg-transparent hover:bg-transparent p-0!">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white border border-white p-5 rounded-none!">
                        <ul className={`${figtree.className} grid w-[220px] gap-4`}>
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
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
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

            <Link
              href="#"
              className="bg-[#CEE3BC] border border-[#CEE3BC] text-[#1A2E05] text-[16px] leading-6 py-3.5 px-6 cursor-pointer hover:bg-white"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
