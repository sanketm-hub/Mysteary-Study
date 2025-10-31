"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Geist, Figtree } from "next/font/google";
import { Search } from "lucide-react";
import { CiShoppingCart } from "react-icons/ci";
import { useIsMobile } from "@/app/hooks/use-mobile"

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
} from "@/Components/ui/navigation-menu"; 
// Google Fonts setup
const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700"],
});

export default function Header() {
  const isMobile = useIsMobile();
  return (
    <header className={`${geistSans.className} bg-white`}>
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
          <NavigationMenu viewport={isMobile} className="relative z-50">
            <NavigationMenuList className="flex items-center gap-6">
              {/* SHOP MENU */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[#1A2E05] font-normal text-base bg-transparent hover:bg-transparent p-0!">
                  Shop
                </NavigationMenuTrigger>

                <NavigationMenuContent className="p-4 bg-white border border-[#11111133] rounded-md shadow-md w-[220px]">
                  <ul className="flex flex-col gap-3">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/tea"
                          className={`${figtree.className} text-[#111] hover:text-[#1A2E05] transition`}
                        >
                          Tea
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/candle"
                          className={`${figtree.className} text-[#111] hover:text-[#1A2E05] transition`}
                        >
                          Candle
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/soap"
                          className={`${figtree.className} text-[#111] hover:text-[#1A2E05] transition`}
                        >
                          Soap
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* OTHER MENU ITEMS */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className="text-[#1A2E05] text-base font-normal p-0!"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/blog"
                    className="text-[#1A2E05] text-base font-normal p-0!"
                  >
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/faqs"
                    className="text-[#1A2E05] text-base font-normal p-0!"
                  >
                    FAQ
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact-us"
                    className="text-[#1A2E05] text-base font-normal p-0!"
                  >
                    Contact Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>

            {/* ✅ THIS IS REQUIRED */}
            <NavigationMenuViewport className="absolute left-0 top-full mt-2" />
          </NavigationMenu>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Search className="text-[#1A2E05] w-5 h-5 cursor-pointer" />
            <CiShoppingCart className="text-[#1A2E05] w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}
