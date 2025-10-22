import React from "react";
import Image from "next/image";
import { Geist, Wittgenstein } from "next/font/google";
import StayTune from "@/app/components/StayTune";
import Link from "next/link";

// Google Fonts setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const wittgenstein = Wittgenstein({
  variable: "--font-wittgenstein",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <>
      <section className={`min-h-[408px] md:min-h-[654px] lg:min-h-[654px] ${geistSans.className}`}>
        <div className="w-full">
          <div className="flex flex-row gap-[10px]">
            <div className="w-full md:w-[454px] lg:w-[454px] hidden md:hidden lg:block">
              <Image
                src="/assets/home/ban-first.webp"
                alt="Candles&teas"
                width={452}
                height={654}
              />
            </div>
            <div className="w-full md:w-full lg:w-[978px] flex-1
          lg:bg-[url('/assets/home/home_desktop_ban.webp')] 
          md:bg-[url('/assets/home/home_tab_ban.webp')] 
          bg-[url('/assets/home/home_mob_ban.webp')] 
          bg-center bg-cover bg-no-repeat
          py-[64px] px-[16px] md:py-[80px] md:px-[24px] lg:py-[80px] lg:px-[56px]">
              <div className="flex flex-col gap-[20px] md:gap-[24px] lg:gap-[24px]">
                <h1 className={`text-[#1A2E05] text-[48px] leading-[57.6px]
                md:text-[64px] md:leading-[76.8px] lg:text-[64px] lg:leading-[76.8px]
                max-w-[343px] md:max-w-[539px] lg:max-w-[539px] ${wittgenstein.className}`}>
                  Awaken Your Natural Senses
                </h1>
                <p className="text-[#1A2E05] text-[16px] leading-[24px]
              md:text-[18px] md:leading-[27px]  lg:text-[18px] lg:leading-[27px]
              max-w-[343px] md:max-w-[525px] lg:max-w-[525px]">
                  Discover the art of wellness with 100% natural teas,
                  handcrafted candles, and soothing soaps.
                </p>
                <Link href="/contact-us" className="w-fit bg-[#1A2E05] text-[#CEE3BC] py-[14px] px-[24px]
                md:py-[16px] md:px-[32px] lg:py-[16px] lg:px-[32px] text-[16px] leading-[24px]
                md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px] hover:text-[#1A2E05] hover:bg-[#fff]">
                  Shop Now
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className={`bg-[#fff] ${geistSans.className}`}>
        <div className="max-w-[1376px] mx-auto pt-[48px] px-[16px] md:pt-[64px] md:px-[24px] lg:pt-[64px] lg:px-[32px]">
          <h2 className={`text-[#111] font-medium text-[24px] leading-[28.8px]
            md:text-[32px] md:leading-[38.4px] lg:text-[32px] lg:leading-[38.4px]
            mb-[32px] md:mb-[40px] lg:mb-[40px] ${wittgenstein.className}`}>
            Our Signature Creations
          </h2>
          <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 md:gap-x-[24px] md:gap-y-[40px] lg:grid-cols-3 lg:gap-[24px]">
            <div>
              <a href="#">
                <Image src="/assets/home/natural_teas.webp" alt="natural teas" width={442} height={450}
                  className="object-cover w-full h-[384px] md:w-[348px] md:h-[450px] lg:w-[442px] lg:[450px]
                  pb-[14px] md:pb-[24px] lg:pb-[24px]" />

                <h4 className="flex flex-row justify-between items-center text-[#111] text-[18px] leading-[27px]
                  md:text-[20px] md:leading-[30px] lg:text-[20px] lg:leading-[30px] mb-[4px] md:mb-[8px] lg:mb-[8px]">
                  Natural Teas
                  <span>
                    <Image src="/assets/home/arrow-up-right.svg" alt="arrow" width={24} height={24}
                      className="object-contain w-[20px] h-[20px] md:w-[24px] md:h-[24px] lg:w-[24px] lg:h-[24px]" />
                  </span>

                </h4>
                <p className="text-[#666] text-[14px] leading-[21px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px]">
                  Refreshing blends for body and mind.
                </p>
              </a>
            </div>

            <div>
              <a href="#">
                <Image src="/assets/home/handcrafted_candles.webp" alt="handcrafted Candles" width={442} height={450}
                  className="object-cover w-full h-[384px] md:w-[348px] md:h-[450px] lg:w-[442px] lg:[450px]
                  pb-[14px] md:pb-[24px] lg:pb-[24px]" />

                <h4 className="flex flex-row justify-between items-center text-[#111] text-[18px] leading-[27px]
                  md:text-[20px] md:leading-[30px] lg:text-[20px] lg:leading-[30px] mb-[4px] md:mb-[8px] lg:mb-[8px]">
                  Handcrafted Candles
                  <span>
                    <Image src="/assets/home/arrow-up-right.svg" alt="arrow" width={24} height={24}
                      className="object-contain w-[20px] h-[20px] md:w-[24px] md:h-[24px] lg:w-[24px] lg:h-[24px]" />
                  </span>

                </h4>
                <p className="text-[#666] text-[14px] leading-[21px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px]">
                  Aromatic light for calming spaces.
                </p>
              </a>
            </div>
            <div>
              <a href="#">
                <Image src="/assets/home/artisanal_soaps.webp" alt="artisanal soaps" width={442} height={450}
                  className="object-cover w-full h-[384px] md:w-[348px] md:h-[450px] lg:w-[442px] lg:[450px]
                  pb-[14px] md:pb-[24px] lg:pb-[24px]" />

                <h4 className="flex flex-row justify-between items-center text-[#111] text-[18px] leading-[27px]
                  md:text-[20px] md:leading-[30px] lg:text-[20px] lg:leading-[30px] mb-[4px] md:mb-[8px] lg:mb-[8px]">
                  Artisanal Soaps
                  <span>
                    <Image src="/assets/home/arrow-up-right.svg" alt="arrow" width={24} height={24}
                      className="object-contain w-[20px] h-[20px] md:w-[24px] md:h-[24px] lg:w-[24px] lg:h-[24px]" />
                  </span>

                </h4>
                <p className="text-[#666] text-[14px] leading-[21px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px]">
                  Gentle cleansing with natural botanicals.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={`bg-[#fff] ${geistSans.className}`}>
        <div className="max-w-[1376px] mx-auto pt-[48px] pb-[64px] px-[16px] md:pt-[64px] md:pb-[80px] md:px-[24px]
            lg:pt-[64px] lg:pb-[80px] lg:px-[24px]">
          <div className="flex flex-row justify-between items-center  mb-[32px] md:mb-[40px] lg:mb-[40px]">
            <div>
              <h2 className={`text-[#111] font-medium text-[24px] leading-[28.8px]
            md:text-[32px] md:leading-[38.4px] lg:text-[32px] lg:leading-[38.4px]
            ${wittgenstein.className}`}>
                Shop Bestsellers
              </h2>
            </div>
            <div>
                <Link href="#" className="flex flex-row items-center gap-[6px] md:gap-[8px] lg:gap-[8px] text-[#1A2E05]
                text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">
                See All Products
                <span>
                  <Image src="/assets/home/arrow-right.svg" alt="arrow-right" width={24} height={24} 
                  className="object-cover w-[20px] h-[20px] md:w-[24px] md:h-[24px] lg:w-[24px] lg:h-[24px]"/>

                </span>
                </Link>
            </div>
          </div>
        </div>
      </section>
      <StayTune />
    </>
  );
}
