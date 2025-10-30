"use client";
import React from "react";
import Image from "next/image";
import { Geist, Wittgenstein } from "next/font/google";
import FeaturedCards from "./components/FeaturedCards";
import StayTune from "@/app/components/StayTune";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import ProductCategoryCard from "./components/ProductCategoryCard";

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

const features = [
  {
    title: "100% Natural & Pure",
    description: "Our teas, candles, and soaps are crafted with only natural ingredients — no artificial additives, ever.",
    imageSrc: "/assets/about/naturalpure.svg",
    alt: "natural",
  },
  {
    title: "Handcrafted With Care",
    description: "Every product is made in small batches, ensuring artisanal quality and attention to detail.",
    imageSrc: "/assets/about/handcraft.svg",
    alt: "Handcrafted",
  },
  {
    title: "Affordable Prices",
    description: "We make premium products accessible without compromising on quality.",
    imageSrc: "/assets/about/affortable.svg",
    alt: "Affordable",
    colSpanMd: 2, // optional for custom grid behavior
  },
];

export default function Home() {
  return (
    <>
      <section className={` ${geistSans.className}`}>
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
            <div className="w-full md:w-full lg:w-[978px] flex-1 md:min-h-[654px] min-h-[460px] lg:min-h-[654px]
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
                md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px] hover:text-[#1A2E05] hover:bg-white">
                  Shop Now
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className={`bg-white ${geistSans.className}`}>
        <div className="max-w-[1376px] mx-auto pt-[48px] px-[16px] md:pt-[64px] md:px-[24px] lg:pt-[64px] lg:px-[32px]">
          <h2 className={`text-[#111] font-medium text-[24px] leading-[28.8px]
            md:text-[32px] md:leading-[38.4px] lg:text-[32px] lg:leading-[38.4px]
            mb-[32px] md:mb-[40px] lg:mb-[40px] ${wittgenstein.className}`}>
            Our Signature Creations
          </h2>
          <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 md:gap-x-[24px] md:gap-y-[40px] lg:grid-cols-3 lg:gap-[24px]">
            <div>
              <Link href="#">
                <Image src="/assets/home/natural_teas.webp" alt="natural teas" width={442} height={450}
                  className="object-cover w-full h-[384px] md:w-[348px] md:h-[450px] lg:w-[442px] lg:[450px]
                  pb-[14px] md:pb-[24px] lg:pb-[24px]" />

                <h4 className="flex flex-row justify-between items-center font-medium text-[#111] text-[18px] leading-[27px]
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
              </Link>
            </div>

            <div>
              <Link href="#">
                <Image src="/assets/home/handcrafted_candles.webp" alt="handcrafted Candles" width={442} height={450}
                  className="object-cover w-full h-[384px] md:w-[348px] md:h-[450px] lg:w-[442px] lg:[450px]
                  pb-[14px] md:pb-[24px] lg:pb-[24px]" />

                <h4 className="flex flex-row justify-between items-center font-medium text-[#111] text-[18px] leading-[27px]
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
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image src="/assets/home/artisanal_soaps.webp" alt="artisanal soaps" width={442} height={450}
                  className="object-cover w-full h-[384px] md:w-[348px] md:h-[450px] lg:w-[442px] lg:[450px]
                  pb-[14px] md:pb-[24px] lg:pb-[24px]" />

                <h4 className="flex flex-row justify-between items-center font-medium text-[#111] text-[18px] leading-[27px]
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section className={`bg-[#fff] ${geistSans.className}`}>

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
                    className="object-cover w-[20px] h-[20px] md:w-[24px] md:h-[24px] lg:w-[24px] lg:h-[24px]" />

                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 md:gap-x-[31px] md:gap-y-[40px] lg:grid-cols-3 lg:gap-[31px]">
            <Link href="#">
              <div>

                <Image src="/assets/home/macroon_melts.webp" alt="artisanal soaps" width={438} height={468}
                  className="object-cover w-full h-[384px] md:w-[344.5px] md:h-[468px] lg:w-[438px] lg:[468px]
                  mb-[18px] md:mb-[20px] lg:mb-[20px] shadow-[0_4px_10px_0_rgba(208,231,190,0.25)]" />
                <h4 className="text-[#222] lg:text-[20px] lg:leading-[30px] md:text-[20px] md:leading-[30px]
                  text-[18px] leading-[27px] mb-[8px] lg:mb-[12px] md:mb-[12px]">
                  Macaroon Melts
                </h4>
                <div className="flex flex-row justify-between items-center mb-[18px] md:mb-[20px] lg:mb-[20px]">
                  <p className="text-[#111] font-semibold 
                    text-[18px] leading-[27px] md:text-[20px] md:leading-[30px] lg:text-[20px] lg:leading-[30px]">
                    $15.00
                  </p>
                  <div className="flex flex-row gap-[6px] md:gap-[9px] lg:gap-[9px]">
                    <Image
                      src="/assets/home/ratings.svg"
                      alt="Ratings"
                      width={128}
                      height={24}
                      className="object-cover w-[108px] h-[20px] md:w-[128px] md:h-[24px] lg:w-[128px] lg:h-[24px]"
                    />
                    <p className="text-[#222] text-[16px] leading-[24px]
                      md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">(12)</p>
                  </div>
                </div>
                <a href="#"
                  className="py-[14px] px-[24px] md:py-[14px] md:px-[32px] lg:py-[14px] lg:px-[32px] inline-block w-full bg-[#CEE3BC] text-[#1A2E05]
                  text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px] border border-[#CEE3BC] text-center
                  hover:bg-[#fff]">
                  Add to Cart
                </a>

              </div>
            </Link>

            <Link href="#">
              <div>

                <Image src="/assets/home/Organic_Berry.webp" alt="Organic Berry Berry" width={438} height={468}
                  className="object-cover w-full h-[384px] md:w-[344.5px] md:h-[468px] lg:w-[438px] lg:[468px]
                  mb-[18px] md:mb-[20px] lg:mb-[20px] shadow-[0_4px_10px_0_rgba(208,231,190,0.25)]" />
                <h4 className="text-[#222] lg:text-[20px] lg:leading-[30px] md:text-[20px] md:leading-[30px]
                  text-[18px] leading-[27px] mb-[8px] lg:mb-[12px] md:mb-[12px]">
                  Organic Berry Berry
                </h4>
                <div className="flex flex-row justify-between items-center mb-[18px] md:mb-[20px] lg:mb-[20px]">
                  <p className="text-[#111] font-semibold 
                    text-[18px] leading-[27px] md:text-[20px] md:leading-[30px] lg:text-[20px] lg:leading-[30px]">
                    $10.00
                  </p>
                  <div className="flex flex-row gap-[6px] md:gap-[9px] lg:gap-[9px]">
                    <Image
                      src="/assets/home/ratings.svg"
                      alt="Ratings"
                      width={128}
                      height={24}
                      className="object-cover w-[108px] h-[20px] md:w-[128px] md:h-[24px] lg:w-[128px] lg:h-[24px]"
                    />
                    <p className="text-[#222] text-[16px] leading-[24px]
                      md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">(12)</p>
                  </div>
                </div>
                <a href="#"
                  className="py-[14px] px-[24px] md:py-[14px] md:px-[32px] lg:py-[14px] lg:px-[32px] inline-block w-full bg-[#CEE3BC] text-[#1A2E05]
                  text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px] border border-[#CEE3BC] text-center
                  hover:bg-[#fff]">
                  Add to Cart
                </a>

              </div>
            </Link>
            <Link href="#">
              <div>

                <Image src="/assets/home/Tea&Saucer.webp" alt="Teacup and Saucer Candle" width={438} height={468}
                  className="object-cover w-full h-[384px] md:w-[344.5px] md:h-[468px] lg:w-[438px] lg:[468px]
                  mb-[18px] md:mb-[20px] lg:mb-[20px] shadow-[0_4px_10px_0_rgba(208,231,190,0.25)]" />
                <h4 className="text-[#222] lg:text-[20px] lg:leading-[30px] md:text-[20px] md:leading-[30px]
                  text-[18px] leading-[27px] mb-[8px] lg:mb-[12px] md:mb-[12px]">
                  Teacup and Saucer Candle
                </h4>
                <div className="flex flex-row justify-between items-center mb-[18px] md:mb-[20px] lg:mb-[20px]">
                  <p className="text-[#111] font-semibold 
                    text-[18px] leading-[27px] md:text-[20px] md:leading-[30px] lg:text-[20px] lg:leading-[30px]">
                    $15.00
                  </p>
                  <div className="flex flex-row gap-[6px] md:gap-[9px] lg:gap-[9px]">
                    <Image
                      src="/assets/home/ratings.svg"
                      alt="Ratings"
                      width={128}
                      height={24}
                      className="object-cover w-[108px] h-[20px] md:w-[128px] md:h-[24px] lg:w-[128px] lg:h-[24px]"
                    />
                    <p className="text-[#222] text-[16px] leading-[24px]
                      md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">(12)</p>
                  </div>
                </div>
                <a href="#"
                  className="py-[14px] px-[24px] md:py-[14px] md:px-[32px] lg:py-[14px] lg:px-[32px] inline-block w-full bg-[#CEE3BC] text-[#1A2E05]
                  text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px] border border-[#CEE3BC] text-center
                  hover:bg-[#fff]">
                  Add to Cart
                </a>

              </div>
            </Link>
          </div>


        </div>
      </section> */}
      <ProductCard />

      <section className={`lg:bg-[url('/assets/home/wellness_desk_ban.webp')] bg-cover bg-center bg-no-repeat
        md:bg-[url('/assets/home/wellness_tab_ban.webp')] bg-[url('/assets/home/wellness_mob_ban.webp')]
        min-h-[384px] md:min-h-[464px] lg:min-h-[464px] ${geistSans.className}`}>
        <div className="max-w-[1440px] mx-auto py-[64px] px-[16px] md:py-[80px] md:px-[48px] lg:py-[80px] lg:px-[48px]">
          <div className="flex flex-col gap-[20px] md:gap-[24px] lg:gap-[24px] items-end 
                  md:max-w-[510px] lg:max-w-[510px] max-w-[343px] md:ml-auto lg:ml-auto">
            <h2 className={`text-[#1A2E05] font-medium text-[32px] leading-[38.4px]
                      md:text-[42px] md:leading-[50.4px] lg:text-[42px] lg:leading-[50.4px] ${wittgenstein.className}`}>
              Wellness Beyond Products
            </h2>
            <p className="text-[#1A2E05CC] text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">
              MysTEArious is more than shopping — it’s a way of living. Our teas, candles, and soaps create rituals of calm, beauty, and self-care.
            </p>
          </div>
        </div>
      </section>

      <FeaturedCards />

      {/* <section className={`bg-[#fff] ${geistSans.className}`}>

        <div className="max-w-[1376px] mx-auto pt-[48px] pb-0 px-[16px] md:pt-[64px] md:pb-0 md:px-[24px]
            lg:pt-[64px] lg:pb-0 lg:px-[24px]">
          <div className="flex flex-row justify-between items-center  mb-[32px] md:mb-[40px] lg:mb-[40px]">
            <div>
              <h2 className={`text-[#111] font-medium text-[24px] leading-[28.8px]
            md:text-[32px] md:leading-[38.4px] lg:text-[32px] lg:leading-[38.4px]
            ${wittgenstein.className}`}>
                Seasonal Teas
              </h2>
            </div>
            <div>
              <Link href="#" className="flex flex-row items-center gap-[6px] md:gap-[8px] lg:gap-[8px] text-[#1A2E05]
                text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">
                Explore Teas
                <span>
                  <Image src="/assets/home/arrow-right.svg" alt="arrow-right" width={24} height={24}
                    className="object-cover w-[20px] h-[20px] md:w-[24px] md:h-[24px] lg:w-[24px] lg:h-[24px]" />

                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 md:gap-x-[31px] md:gap-y-[40px] lg:grid-cols-3 lg:gap-[31px]">
            <Link href="#">
              <div>

                <Image src="/assets/home/cranberry_Enchinacea.webp" alt="cranberry Enchinacea" width={438} height={468}
                  className="object-cover w-full h-[384px] md:w-[344.5px] md:h-[468px] lg:w-[438px] lg:[468px]
                  mb-[18px] md:mb-[20px] lg:mb-[20px] shadow-[0_4px_10px_0_rgba(208,231,190,0.25)]" />
                <h4 className="text-[#222] lg:text-[20px] lg:leading-[30px] md:text-[20px] md:leading-[30px]
                  text-[18px] leading-[27px] mb-[8px] lg:mb-[12px] md:mb-[12px]">
                  Cranberry Echinacea
                </h4>
                <div className="flex flex-row justify-between items-center mb-[18px] md:mb-[20px] lg:mb-[20px]">
                  <p className="text-[#111] font-semibold 
                    text-[18px] leading-[27px] md:text-[20px] md:leading-[30px] lg:text-[20px] lg:leading-[30px]">
                    $10.00
                  </p>
                  <div className="flex flex-row gap-[6px] md:gap-[9px] lg:gap-[9px]">
                    <Image
                      src="/assets/home/ratings.svg"
                      alt="Ratings"
                      width={128}
                      height={24}
                      className="object-cover w-[108px] h-[20px] md:w-[128px] md:h-[24px] lg:w-[128px] lg:h-[24px]"
                    />
                    <p className="text-[#222] text-[16px] leading-[24px]
                      md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">(12)</p>
                  </div>
                </div>
                <a href="#"
                  className="py-[14px] px-[24px] md:py-[14px] md:px-[32px] lg:py-[14px] lg:px-[32px] inline-block w-full bg-[#fff] text-[#1A2E05]
                  text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px] border border-[#CEE3BC] text-center
                  hover:bg-[#CEE3BC]">
                  Add to Cart
                </a>

              </div>
            </Link>

            <Link href="#">
              <div>

                <Image src="/assets/home/Organic_Berry.webp" alt="Organic Berry Berry" width={438} height={468}
                  className="object-cover w-full h-[384px] md:w-[344.5px] md:h-[468px] lg:w-[438px] lg:[468px]
                  mb-[18px] md:mb-[20px] lg:mb-[20px] shadow-[0_4px_10px_0_rgba(208,231,190,0.25)]" />
                <h4 className="text-[#222] lg:text-[20px] lg:leading-[30px] md:text-[20px] md:leading-[30px]
                  text-[18px] leading-[27px] mb-[8px] lg:mb-[12px] md:mb-[12px]">
                  Organic Berry Berry
                </h4>
                <div className="flex flex-row justify-between items-center mb-[18px] md:mb-[20px] lg:mb-[20px]">
                  <p className="text-[#111] font-semibold 
                    text-[18px] leading-[27px] md:text-[20px] md:leading-[30px] lg:text-[20px] lg:leading-[30px]">
                    $10.00
                  </p>
                  <div className="flex flex-row gap-[6px] md:gap-[9px] lg:gap-[9px]">
                    <Image
                      src="/assets/home/ratings.svg"
                      alt="Ratings"
                      width={128}
                      height={24}
                      className="object-cover w-[108px] h-[20px] md:w-[128px] md:h-[24px] lg:w-[128px] lg:h-[24px]"
                    />
                    <p className="text-[#222] text-[16px] leading-[24px]
                      md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">(12)</p>
                  </div>
                </div>
                <a href="#"
                  className="py-[14px] px-[24px] md:py-[14px] md:px-[32px] lg:py-[14px] lg:px-[32px] inline-block w-full bg-[#fff] text-[#1A2E05]
                  text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px] border border-[#CEE3BC] text-center
                  hover:bg-[#CEE3BC]">
                  Add to Cart
                </a>

              </div>
            </Link>
            <Link href="#">
              <div>

                <Image src="/assets/home/Organic_Can_Apple.webp" alt="Organic Can Apple" width={438} height={468}
                  className="object-cover w-full h-[384px] md:w-[344.5px] md:h-[468px] lg:w-[438px] lg:[468px]
                  mb-[18px] md:mb-[20px] lg:mb-[20px] shadow-[0_4px_10px_0_rgba(208,231,190,0.25)]" />
                <h4 className="text-[#222] lg:text-[20px] lg:leading-[30px] md:text-[20px] md:leading-[30px]
                  text-[18px] leading-[27px] mb-[8px] lg:mb-[12px] md:mb-[12px]">
                  Organic Cran Apple
                </h4>
                <div className="flex flex-row justify-between items-center mb-[18px] md:mb-[20px] lg:mb-[20px]">
                  <p className="text-[#111] font-semibold 
                    text-[18px] leading-[27px] md:text-[20px] md:leading-[30px] lg:text-[20px] lg:leading-[30px]">
                    $10.00
                  </p>
                  <div className="flex flex-row gap-[6px] md:gap-[9px] lg:gap-[9px]">
                    <Image
                      src="/assets/home/ratings.svg"
                      alt="Ratings"
                      width={128}
                      height={24}
                      className="object-cover w-[108px] h-[20px] md:w-[128px] md:h-[24px] lg:w-[128px] lg:h-[24px]"
                    />
                    <p className="text-[#222] text-[16px] leading-[24px]
                      md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">(12)</p>
                  </div>
                </div>
                <a href="#"
                  className="py-[14px] px-[24px] md:py-[14px] md:px-[32px] lg:py-[14px] lg:px-[32px] inline-block w-full bg-[#fff] text-[#1A2E05]
                  text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px] border border-[#CEE3BC] text-center
                  hover:bg-[#CEE3BC]">
                  Add to Cart
                </a>

              </div>
            </Link>
          </div>


        </div>
      </section> */}

      <ProductCategoryCard category="Seasonal Teas" />

      <ProductCategoryCard category="Vegan Candles" />

      <ProductCategoryCard category="Goat Milk Soaps" />

      {/* <ProductCategoryCard category="All" /> */}

      


      {/* <section className={`bg-white ${geistSans.className}`}>

        <div className="max-w-[1376px] mx-auto pt-[48px] pb-0 px-[16px] md:pt-[64px] md:pb-0 md:px-[24px]
            lg:pt-[64px] lg:pb-0 lg:px-[24px]">
          <div className="flex flex-row justify-between items-center  mb-[32px] md:mb-[40px] lg:mb-[40px]">
            <div>
              <h2 className={`text-[#111] font-medium text-[24px] leading-[28.8px]
            md:text-[32px] md:leading-[38.4px] lg:text-[32px] lg:leading-[38.4px]
            ${wittgenstein.className}`}>
                Vegan Candles
              </h2>
            </div>
            <div>
              <Link href="#" className="flex flex-row items-center gap-[6px] md:gap-[8px] lg:gap-[8px] text-[#1A2E05]
                text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">
                Explore Candles
                <span>
                  <Image src="/assets/home/arrow-right.svg" alt="arrow-right" width={24} height={24}
                    className="object-cover w-[20px] h-[20px] md:w-[24px] md:h-[24px] lg:w-[24px] lg:h-[24px]" />

                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 md:gap-x-[31px] md:gap-y-[40px] lg:grid-cols-3 lg:gap-[31px]">
            <Link href="#">
              <div>

                <Image src="/assets/home/teacup_and_saucer_candle.webp" alt=" Teacup and Saucer Candle" width={438} height={468}
                  className="object-cover w-full h-[384px] md:w-[344.5px] md:h-[468px] lg:w-[438px] lg:[468px]
                  mb-[18px] md:mb-[20px] lg:mb-[20px] shadow-[0_4px_10px_0_rgba(208,231,190,0.25)]" />
                <h4 className="text-[#222] lg:text-[20px] lg:leading-[30px] md:text-[20px] md:leading-[30px]
                  text-[18px] leading-[27px] mb-[8px] lg:mb-[12px] md:mb-[12px]">
                  Teacup and Saucer Candle
                </h4>
                <div className="flex flex-row justify-between items-center mb-[18px] md:mb-[20px] lg:mb-[20px]">
                  <p className="text-[#111] font-semibold 
                    text-[18px] leading-[27px] md:text-[20px] md:leading-[30px] lg:text-[20px] lg:leading-[30px]">
                    $15.00
                  </p>
                  <div className="flex flex-row gap-[6px] md:gap-[9px] lg:gap-[9px]">
                    <Image
                      src="/assets/home/ratings.svg"
                      alt="Ratings"
                      width={128}
                      height={24}
                      className="object-cover w-[108px] h-[20px] md:w-[128px] md:h-[24px] lg:w-[128px] lg:h-[24px]"
                    />
                    <p className="text-[#222] text-[16px] leading-[24px]
                      md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">(12)</p>
                  </div>
                </div>
                <a href="#"
                  className="py-[14px] px-[24px] md:py-[14px] md:px-[32px] lg:py-[14px] lg:px-[32px] inline-block w-full bg-white text-[#1A2E05]
                  text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px] border border-[#CEE3BC] text-center
                  hover:bg-[#CEE3BC]">
                  Add to Cart
                </a>

              </div>
            </Link>

            <Link href="#">
              <div>

                <Image src="/assets/home/macroon_melts.webp" alt="macroon_melts" width={438} height={468}
                  className="object-cover w-full h-[384px] md:w-[344.5px] md:h-[468px] lg:w-[438px] lg:[468px]
                  mb-[18px] md:mb-[20px] lg:mb-[20px] shadow-[0_4px_10px_0_rgba(208,231,190,0.25)]" />
                <h4 className="text-[#222] lg:text-[20px] lg:leading-[30px] md:text-[20px] md:leading-[30px]
                  text-[18px] leading-[27px] mb-[8px] lg:mb-[12px] md:mb-[12px]">
                  Macaroon Melts
                </h4>
                <div className="flex flex-row justify-between items-center mb-[18px] md:mb-[20px] lg:mb-[20px]">
                  <p className="text-[#111] font-semibold 
                    text-[18px] leading-[27px] md:text-[20px] md:leading-[30px] lg:text-[20px] lg:leading-[30px]">
                    $15.00
                  </p>
                  <div className="flex flex-row gap-[6px] md:gap-[9px] lg:gap-[9px]">
                    <Image
                      src="/assets/home/ratings.svg"
                      alt="Ratings"
                      width={128}
                      height={24}
                      className="object-cover w-[108px] h-[20px] md:w-[128px] md:h-[24px] lg:w-[128px] lg:h-[24px]"
                    />
                    <p className="text-[#222] text-[16px] leading-[24px]
                      md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">(12)</p>
                  </div>
                </div>
                <a href="#"
                  className="py-[14px] px-[24px] md:py-[14px] md:px-[32px] lg:py-[14px] lg:px-[32px] inline-block w-full bg-white text-[#1A2E05]
                  text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px] border border-[#CEE3BC] text-center
                  hover:bg-[#CEE3BC]">
                  Add to Cart
                </a>

              </div>
            </Link>

          </div>


        </div>
      </section>


      <section className={`bg-white ${geistSans.className}`}>

        <div className="max-w-[1376px] mx-auto pt-[48px] pb-0 px-[16px] md:pt-[64px] md:pb-0 md:px-[24px]
            lg:pt-[64px] lg:pb-0 lg:px-[24px]">
          <div className="flex flex-row justify-between items-center  mb-[32px] md:mb-[40px] lg:mb-[40px]">
            <div>
              <h2 className={`text-[#111] font-medium text-[24px] leading-[28.8px]
            md:text-[32px] md:leading-[38.4px] lg:text-[32px] lg:leading-[38.4px]
            ${wittgenstein.className}`}>
                Goat Milk Soaps
              </h2>
            </div>
            <div>
              <Link href="#" className="flex flex-row items-center gap-[6px] md:gap-[8px] lg:gap-[8px] text-[#1A2E05]
                text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">
                Explore Soaps
                <span>
                  <Image src="/assets/home/arrow-right.svg" alt="arrow-right" width={24} height={24}
                    className="object-cover w-[20px] h-[20px] md:w-[24px] md:h-[24px] lg:w-[24px] lg:h-[24px]" />

                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 md:gap-x-[31px] md:gap-y-[40px] lg:grid-cols-3 lg:gap-[31px]">
            <Link href="#">
              <div>

                <Image src="/assets/home/Tea&Saucer.webp" alt=" Teacup and Saucer Candle" width={438} height={468}
                  className="object-cover w-full h-[384px] md:w-[344.5px] md:h-[468px] lg:w-[438px] lg:[468px]
                  mb-[18px] md:mb-[20px] lg:mb-[20px] shadow-[0_4px_10px_0_rgba(208,231,190,0.25)]" />
                <h4 className="text-[#222] lg:text-[20px] lg:leading-[30px] md:text-[20px] md:leading-[30px]
                  text-[18px] leading-[27px] mb-[8px] lg:mb-[12px] md:mb-[12px]">
                  Teacup and Saucer Soap
                </h4>
                <div className="flex flex-row justify-between items-center mb-[18px] md:mb-[20px] lg:mb-[20px]">
                  <p className="text-[#111] font-semibold 
                    text-[18px] leading-[27px] md:text-[20px] md:leading-[30px] lg:text-[20px] lg:leading-[30px]">
                    $15.00
                  </p>
                  <div className="flex flex-row gap-[6px] md:gap-[9px] lg:gap-[9px]">
                    <Image
                      src="/assets/home/ratings.svg"
                      alt="Ratings"
                      width={128}
                      height={24}
                      className="object-cover w-[108px] h-[20px] md:w-[128px] md:h-[24px] lg:w-[128px] lg:h-[24px]"
                    />
                    <p className="text-[#222] text-[16px] leading-[24px]
                      md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">(12)</p>
                  </div>
                </div>
                <a href="#"
                  className="py-[14px] px-[24px] md:py-[14px] md:px-[32px] lg:py-[14px] lg:px-[32px] inline-block w-full bg-white text-[#1A2E05]
                  text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px] border border-[#CEE3BC] text-center
                  hover:bg-[#CEE3BC]">
                  Add to Cart
                </a>

              </div>
            </Link>

            <Link href="#">
              <div>

                <Image src="/assets/home/Macaroon_Soaps.webp" alt="Macaroon Soaps" width={438} height={468}
                  className="object-cover w-full h-[384px] md:w-[344.5px] md:h-[468px] lg:w-[438px] lg:[468px]
                  mb-[18px] md:mb-[20px] lg:mb-[20px] shadow-[0_4px_10px_0_rgba(208,231,190,0.25)]" />
                <h4 className="text-[#222] lg:text-[20px] lg:leading-[30px] md:text-[20px] md:leading-[30px]
                  text-[18px] leading-[27px] mb-[8px] lg:mb-[12px] md:mb-[12px]">
                  Macaroon Soaps
                </h4>
                <div className="flex flex-row justify-between items-center mb-[18px] md:mb-[20px] lg:mb-[20px]">
                  <p className="text-[#111] font-semibold 
                    text-[18px] leading-[27px] md:text-[20px] md:leading-[30px] lg:text-[20px] lg:leading-[30px]">
                    $15.00
                  </p>
                  <div className="flex flex-row gap-[6px] md:gap-[9px] lg:gap-[9px]">
                    <Image
                      src="/assets/home/ratings.svg"
                      alt="Ratings"
                      width={128}
                      height={24}
                      className="object-cover w-[108px] h-[20px] md:w-[128px] md:h-[24px] lg:w-[128px] lg:h-[24px]"
                    />
                    <p className="text-[#222] text-[16px] leading-[24px]
                      md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">(12)</p>
                  </div>
                </div>
                <a href="#"
                  className="py-[14px] px-[24px] md:py-[14px] md:px-[32px] lg:py-[14px] lg:px-[32px] inline-block w-full bg-white text-[#1A2E05]
                  text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px] border border-[#CEE3BC] text-center
                  hover:bg-[#CEE3BC]">
                  Add to Cart
                </a>

              </div>
            </Link>


            <Link href="#">
              <div>

                <Image src="/assets/home/Donut_Soap.webp" alt="Donut Soap" width={438} height={468}
                  className="object-cover w-full h-[384px] md:w-[344.5px] md:h-[468px] lg:w-[438px] lg:[468px]
                  mb-[18px] md:mb-[20px] lg:mb-[20px] shadow-[0_4px_10px_0_rgba(208,231,190,0.25)]" />
                <h4 className="text-[#222] lg:text-[20px] lg:leading-[30px] md:text-[20px] md:leading-[30px]
                  text-[18px] leading-[27px] mb-[8px] lg:mb-[12px] md:mb-[12px]">
                  Donut Soap
                </h4>
                <div className="flex flex-row justify-between items-center mb-[18px] md:mb-[20px] lg:mb-[20px]">
                  <p className="text-[#111] font-semibold 
                    text-[18px] leading-[27px] md:text-[20px] md:leading-[30px] lg:text-[20px] lg:leading-[30px]">
                    $15.00
                  </p>
                  <div className="flex flex-row gap-[6px] md:gap-[9px] lg:gap-[9px]">
                    <Image
                      src="/assets/home/ratings.svg"
                      alt="Ratings"
                      width={128}
                      height={24}
                      className="object-cover w-[108px] h-[20px] md:w-[128px] md:h-[24px] lg:w-[128px] lg:h-[24px]"
                    />
                    <p className="text-[#222] text-[16px] leading-[24px]
                      md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">(12)</p>
                  </div>
                </div>
                <a href="#"
                  className="py-[14px] px-[24px] md:py-[14px] md:px-[32px] lg:py-[14px] lg:px-[32px] inline-block w-full bg-white text-[#1A2E05]
                  text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px] border border-[#CEE3BC] text-center
                  hover:bg-[#CEE3BC]">
                  Add to Cart
                </a>

              </div>
            </Link>

          </div>


        </div>
      </section> */}

      <section className={`bg-white mt-[64px] md:mt-[80px] lg:mt-[80px]
        min-h-[384px] md:min-h-[464px] lg:min-h-[464px] ${geistSans.className}
        lg:bg-[url('/assets/home/bring_wellness_desk_ban.webp')] bg-cover bg-center bg-no-repeat
        md:bg-[url('/assets/home/bring_wellness_tab_ban.webp')] bg-[url('/assets/home/bring_wellness_mob_ban.webp')]`}>
        <div className="max-w-[1440px] mx-auto py-[64px] px-[16px] md:py-[80px] md:px-[48px] lg:py-[80px] lg:px-[48px]">
          <div className="md:max-w-[520px] lg:max-w-[520px]">
            <h2 className={`text-white font-medium text-[32px] leading-[38.4px]
                      md:text-[42px] md:leading-[50.4px] lg:text-[42px] lg:leading-[50.4px]
                      mb-[20px] md:mb-[24px] lg:mb-[24px] ${wittgenstein.className}`}>
             Bring Wellness Home
            </h2>
            <p className="text-[rgba(255,255,255,0.8)] text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]
            mb-[24px] md:mb-[32px] lg:mb-[32px] max-w-[343px] md:max-w-[517px] lg:max-w-[517px]">
              Discover natural teas, soothing candles, and artisanal soaps crafted to nurture your senses. Your wellness ritual starts here.
            </p>          
            <div className="flex flex-col gap-[16px] md:flex-row md:gap-[20px] lg:flex-row lg:gap-[20px]">
              <Link href="#"
              className="bg-white py-[14px] px-[24px] md:py-[16px] md:px-[32px] lg:py-[16px] lg:px-[32px]
              w-full md:w-fit lg:w-fit text-center text-[#1A2E05] text-[16px] leading-[24px] md:text-[18px] md:leading-[27px]
              lg:text-[18px] lg:leading-[27px] hover:bg-[#CEE3BC] cursor-pointer"
              >Shop Now</Link>

              <Link href="#"
              className="bg-[#CEE3BC] py-[14px] px-[24px] md:py-[16px] md:px-[32px] lg:py-[16px] lg:px-[32px]
              w-full md:w-fit lg:w-fit text-center text-[#1A2E05] text-[16px] leading-[24px] md:text-[18px] md:leading-[27px]
              lg:text-[18px] lg:leading-[27px] hover:bg-white cursor-pointer"
              >Explore Teas</Link>
            </div>
          </div>

        </div>
      
      </section>

      <section className={`bg-white ${geistSans.className}`}>
                      <div className="max-w-[1376px] mx-auto lg:py-[80px] lg:px-[32px]
                  md:py-[80px] md:px-[24px] py-[64px] px-[16px]">
                          <div className="flex flex-col lg:flex-row lg:gap-[64px] md:gap-[40px] gap-[32px] items-center
                      xl:flex-row xl:gap-[64px] 2xl:flex-row 2xl:gap-[64px]">
                              <div className="image-col w-full md:w-full lg:w-1/2">
                                  <Image
                                      src="/assets/about/mystearious.webp"
                                      alt="image"
                                      width={656}
                                      height={560}
                                      className="object-cover md:w-full md:h-[560px]
                              lg:w-[656px] lg:h-[560px] w-full h-[320px]"
                                  />
                              </div>
                              <div className="content-col w-full md:w-full lg:w-1/2">
                                  <h2 className={`
                                  text-[#111] mb-[24px] lg:mb-[40px] md:mb-[40px] font-500
                                  lg:text-[42px] lg:leading-[50.4px]
                                  md:text-[42px] md:leading-[50.4px]
                                  text-[32px] leading-[38.4px]
                                  ${wittgenstein.className}`}>
                                      The MysTEArious Touch
                                  </h2>
                                  <p className="text-[#444] lg:text-[16px] lg:leading-[24px]
                               md:text-[16px] md:leading-[24px] text-[14px] leading-[21px] mb-[24px] md:mb-[40px] lg:mb-[40px]">
                                  From handpicked tea leaves to candles poured with love, and soaps crafted with care — every creation reflects our promise of purity and wellness. We believe in sourcing the finest ingredients, ensuring that each product not only delights the senses but also nurtures the body and soul. Our commitment to sustainability means that every item is made with respect for nature, allowing you to indulge guilt-free.
                                  </p>

                                  <Link href="#"
                                  className="bg-[#CEE3BC] border border-[#CEE3BC] w-fit py-[14px] px-[24px] inline-block hover:bg-white cursor-pointer
                                  md:py-[16px] md:px-[32px] lg:py-[16px] lg:px-[32px] text-[#1A2E05] text-[16px] leading-[24px]
                                  md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]">
                                    Discover Our Story
                                  </Link>

                              </div>
      
                          </div>
      
                      </div>
      </section>
            
      <StayTune />
    </>
  );
}
