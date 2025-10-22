import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/Components/ui/accordion";
import { Geist, Wittgenstein } from "next/font/google";
import StayTune from "../components/StayTune";

import '@/app/style/external.css';

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

const faqSections = [
    {
        title: "Orders & Shipping",
        items: [
            {
                question: "How long does shipping take?",
                answer: "Shipping usually takes 3-7 business days depending on your location.",
            },
            {
                question: "Do you ship internationally?",
                answer: "Currently, we ship across Canada and selected regions. International shipping options will be announced soon.",
            },
            {
                question: "How can I track my order?",
                answer: "You can track your order using the tracking link sent to your email after purchase.",
            },
        ],
    },
    {
        title: "Products",
        items: [
            {
                question: "Are your products really 100% natural?",
                answer: "Yes! All our teas, candles, and soaps are crafted with natural ingredients and no artificial additives.",
            },
            {
                question: "Are your candles safe for pets?",
                answer: "Yes! Our candles are made with non-toxic ingredients safe for pets.",
            },
            {
                question: "Are your soaps suitable for sensitive skin?",
                answer: "Absolutely. Our soaps are gentle and suitable for all skin types, including sensitive skin.",
            },
        ],
    },
    {
        title: "Returns & Refunds",
        items: [
            {
                question: "What is your return policy?",
                answer: "You can return any product within 30 days of purchase for a full refund.",
            },
            {
                question: "How do I request a refund?",
                answer: "Contact our support team with your order details and we will guide you through the process.",
            },
            {
                question: "Do you cover return shipping costs?",
                answer: "Answer coming soon."
            },
        ],
    },
    {
        title: "Subscriptions & Offers",
        items: [
            {
                question: "Do you offer subscription boxes?",
                answer: "Answer coming soon."
            },
            {
                question: "Can I use multiple discount codes at once?",
                answer: "Answer coming soon."
            },
            {
                question: "How do I join the newsletter?",
                answer: "Answer coming soon."
            },
        ],
    },
];


export default function FAQ() {
    return (
        <div className="bg-[#FDFEFC] space-y-8">
            <section className={`mb-0 ${geistSans.className}`}>
                <div className="max-w-[1376px] mx-auto lg:py-[64px] lg:px-[32px] md:py-[64px] md:px-[24px] py-[48px] px-[16px] text-center">
                    <div className="text-center">
                        <h1 className={`text-[#111] text-[48px] leading-[57.6px] lg:text-[64px] lg:leading-[76.8px] md:text-[64px] md:leading-[76.8px]
                    mb-[20px] lg:mb-[24px] md:mb-[24px]    
                    ${wittgenstein.className}`}>FAQs</h1>
                        <p className="text-[#444] text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]
                    max-w-[343px] lg:max-w-[720px] md:max-w-[768px] text-center mx-auto">
                            Find quick answers to the most common questions about our teas, candles, and soaps. {" "}
                            <br />From shipping details to product care, we’ve got you covered.
                        </p>
                    </div>

                </div>
            </section>
            <section className={`mb-0 ${geistSans.className}`}>
                <div className="max-w-[800px] mx-auto pb-[64px] md:pb-[80] lg:pb-[80px] px-[16px] md:px-[24px] lg:px-[32px]">
                    {faqSections.map((section, sIndex) => (
                        <div key={sIndex} className={`${sIndex !== 0 ? "mt-[40px]" : ""}`}>
                            <h2 className={`text-2xl mb-[20px] lg:mb-[24px] md:mb-[24px] font-medium ${wittgenstein.className}`}>{section.title}</h2>
                            <Accordion type="single" collapsible className="w-full space-y-2 border-[#DBDBDB] bg-white shadow-[0_1px_6px_0_rgba(21,94,117,0.02)]">
                                {section.items.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`section-${sIndex}-item-${index}`}
                                        className={`border border-[#DBDBDB] bg-white shadow-[0_1px_6px_0_rgba(21,94,117,0.02)] 
    ${section.title === "Subscriptions & Offers" && index === section.items.length - 1
                                                ? "mb-0"
                                                : "mb-[16px] lg:mb-[20px] md:mb-[20px]"
                                            }`}
                                    >
                                        <AccordionTrigger className="flex justify-between pt-[16px] pb-[20px] px-[16px] lg:p-[24px] md:p-[24px] text-[#111]
                                        lg:text-[18px] lg:leading-[27px] md:text-[18px] md:leading-[27px] text-[16px] leading-[24px]">
                                            {item.question}

                                        </AccordionTrigger>

                                        <AccordionContent className="pt-[0px] pb-[16px] px-[16px] lg:pt-0 lg:pb-[24px] lg:px-[24px] md:pt-0 md:pb-[24px] md:px-[24px]
                                        text-[#666] text-[14px] leading-[21px] lg:text-[16px] lg:leading-[24px] md:text-[16px] md:leading-[24px]">
                                            <hr className="border-b-1 border-[rgba(219, 219, 219, 0.80)] mb-[20px] md:mb-[24px] lg:mb-[24px]" />
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>
            </section>
            
            <StayTune />

        </div>
    );
}
