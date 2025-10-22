import React from "react";
import CustomBreadscrum from "@/app/components/CustomBreadscrumb";
import { Geist, Wittgenstein } from "next/font/google";
import StayTune from "@/app/components/StayTune";

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

export default function ShippingReturn() {
    return (
        <div className="bg-[#FDFEFC]">
            <section className="bg-[#fff]">
                <div className="max-w-[1376px] mx-auto pt-[20px] lg:px-[32px] xl:px-[32px] 2xl:px-[32px]
        md:px-[24px] px-[16px]">
                    <CustomBreadscrum />
                </div>
            </section>

            <section className={`${geistSans.className}`}>
                <div className="max-w-[800px] mx-auto pt-[32px] pb-[48px] lg:px-[32px] xl:px-[32px] 2xl:px-[32px]
        md:px-[24px] px-[16px] lg:pt-[48px] lg:pb-[64px]">
                    <div>
                        <h1 className={`mb-[20px] lg:mb-[24px]
                        xl:mb-[24px] 2xl:mb-[24px] md:mb-[24px]
                        lg:text-[64px] lg:leading-[76.8px]
                        md:text-[64px] md:leading-[76.8px]
                        text-[48px] leading-[57.6px]
                            ${wittgenstein.className}`}>
                            Shipping & Returns Policy
                        </h1>
                        <p className="text-[#444] text-[14px] leading-[21px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[20px] lg:mb-[24px] md:mb-[24px]">
                            <span className="text-[#111111] font-medium">Last Updated:</span> October 2025
                        </p>
                        <p className="text-[#444] text-[16px] leading-[24px]
                        lg:text-[18px] lg:leading-[27px] md:text-[18px] md:leading-[27px]">
                            At <span className="text-[#111] font-medium">MysTEAry</span>, every product is crafted and packaged with care. We aim to ensure a smooth and satisfying experience from order to delivery.
                        </p>
                    </div>
                </div>
                <div className="max-w-[800px] mx-auto pb-[64px] lg:px-[32px] xl:px-[32px] 2xl:px-[32px]
        md:px-[24px] px-[16px] lg:pb-[80px] xl:pb-[80px] 2xl:pb-[80px]">
                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px] ${wittgenstein.className}`}>
                        1. Shipping
                    </h2>
                    <ul className="list-disc pl-[20px] md:pl-[24px] lg:pl-[24px]">
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[4px] lg:mb-[6px] md:mb-[6px]">
                            Orders are processed within <span className="text-[#111] font-medium">2–3 business days</span> after confirmation.
                        </li>
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[4px] lg:mb-[6px] md:mb-[6px]">
                            Delivery timelines may vary depending on your location (usually 4–7 business days within India).
                        </li>
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                       mb-[4px] lg:mb-[6px] md:mb-[6px]">
                            Once your order is shipped, you’ll receive an <span className="text-[#111] font-medium">email/SMS notification</span> with tracking details.
                        </li>
                     </ul>


                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px]
                    mt-[32px] lg:mt-[40px] md:mt-[40px] ${wittgenstein.className}`}>
                        2. Returns & Refunds
                    </h2>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                         mb-[6px] lg:mb-[8px] md:mb-[8px]">
                            We currently <span className="text-[#111] font-medium">do not accept returns, refunds, or order cancellations</span> once an order is placed.
                    </p>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                         mb-[6px] lg:mb-[8px] md:mb-[8px]">
                            All sales are considered <span className="text-[#111] font-medium">final.</span>
                    </p>

                    
                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px]
                    mt-[32px] lg:mt-[40px] md:mt-[40px] ${wittgenstein.className}`}>
                        3. Exchanges (for Damaged Products Only)
                    </h2>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                         mb-[6px] lg:mb-[8px] md:mb-[8px]">
                           We offer <span className="text-[#111] font-medium">product exchanges</span> in the event of:
                    </p>

                  <ul className="list-disc pl-[20px] md:pl-[24px] lg:pl-[24px]">
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[2px] lg:mb-[4px] md:mb-[4px]">
                            Damaged or broken items received.
                        </li>
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[2px] lg:mb-[4px] md:mb-[4px]">
                           Incorrect product shipped.
                        </li>
                    </ul>

                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                         mb-[6px] lg:mb-[8px] md:mb-[8px] mt-[20px] lg:mt-[24px] md:mt-[24px]">
                          To initiate an exchange:
                    </p>

                  <ul className="list-disc pl-[20px] md:pl-[24px] lg:pl-[24px]">
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[2px] lg:mb-[4px] md:mb-[4px]">
                           Contact <a href="mailto:support@mystearry.com" className="text-[#111] font-medium">support@mystearry.com</a> within <span className="text-[#111 font-medium]">48 hours of delivery.</span>
                        </li>
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[2px] lg:mb-[4px] md:mb-[4px]">
                           Provide your order number and a clear photo/video of the damaged product.
                        </li>
                        <li className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[2px] lg:mb-[4px] md:mb-[4px]">
                          Once verified, a replacement product will be shipped at no additional cost.
                        </li>
                    </ul>

                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px]
                    mt-[32px] lg:mt-[40px] md:mt-[40px] ${wittgenstein.className}`}>
                        4. Order Cancellations
                    </h2>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                         mb-[4px] lg:mb-[6px] md:mb-[6px]">
                            Orders cannot be canceled once confirmed and processed.
                    </p>
        

                    <h2 className={`text-[#111] font-normal
                    lg:text-[24px] lg:leading-[28.8px] md:text-[24px] md:leading-[28.8px] text-[20px] leading-[24px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px]
                    mt-[32px] lg:mt-[40px] md:mt-[40px] ${wittgenstein.className}`}>
                        5. Contact Us
                    </h2>
                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]
                        mb-[4px] lg:mb-[6px] md:mb-[6px]">
                            For any shipping or product-related queries, reach out to us at
                    </p>

                    <p className="text-[#444] text-[12px] leading-[18px]
                        lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]">
                            <a href="mailto:support@mystearry.com" className="text-[#111] font-medium hover:underline">support@mystearry.com</a>
                    </p>
                </div>
            </section>

            <StayTune />

        </div>
    );
}