"use client";
import { ReactJsxRuntime } from "next/dist/server/route-modules/app-page/vendored/rsc/entrypoints";
import Image from "next/image";
import React from "react";
import { Geist } from "next/font/google";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
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

export default function FeaturedCards(){
    return(
              <section className={`bg-[#fff] ${geistSans.className}`}>
                <div className="max-w-[1376px] mx-auto pt-[64px] px-[16px]
                      md:pt-[80px] md:px-[24px] lg:pt-[80px] lg:px-[32px]">
        
                  <div className="grid lg:grid-cols-3 lg:gap-[32px]
              xl:grid-cols-3 xl:gap-[32px] 2xl:grid-cols-3 2xl:gap-[32px]
              gap-[24px] grid-cols-1 md:grid-cols-2 md:gap-[32px]">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`text-center ${feature.colSpanMd ? `md:col-span-${feature.colSpanMd} md:justify-self-center lg:col-span-1 lg:justify-self-auto` : ""}`}
                      >
                        <Image
                          src={feature.imageSrc}
                          alt={feature.alt}
                          width={32}
                          height={32}
                          className="mx-auto object-fit w-[28px] h-[28px] md:w-[32px] md:h-[32px] lg:w-[32px] lg:h-[32px] mb-[16px] md:mb-[20px] lg:mb-[20px]"
                        />
                        <h3 className="mb-[20px] lg:mb-[24px] md:[24px] font-medium text-[#111] lg:text-[24px] lg:leading-[36px] md:text-[24px] md:leading-[36px] text-[20px] leading-[30px]">
                          {feature.title}
                        </h3>
                        <p className={`text-[#666] text-center font-normal text-[16px] leading-[24px]
            md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]
            ${index === features.length - 1 ? "max-w-[350px] md:max-w-[336px] mx-auto" : ""}
          `}>
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
        
        
                  <hr className="border-b-1 border-[#D0E7BE]
                          mt-[64px] lg:mt-[80px] md:mt-[80px]" />
                </div>
              </section>
    );
}