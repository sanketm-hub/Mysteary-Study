"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Geist } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

interface Product {
  _id: string;
  name: string;
  price: number;
  slug: {
    current: string;
  };
  image: {
    asset: {
      url: string;
    };
  }[];
}



export default function ProductCategoryCard({ category }: { category: string }){
const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {

//     const fetchProducts = async () => {
//       const query = `*[_type == "product" && category->title == $category]{
//         _id,
//         name,
//         price,
//         slug,
//         "image": image[]{
//           asset->{
//             url
//           }
//         }
//       }`;

//       const data = await client.fetch(query);
//       setProducts(data);
//     };

//     fetchProducts();
//   }, [category]);


  useEffect(() => {
    const fetchProducts = async () => {
      // ✅ Dynamic category query
      const query = `*[_type == "product" && category->name == $category]{
        _id,
        name,
        price,
        slug,
        "image": image[]{ asset->{ url } }
      }`;

      try {
        const data = await client.fetch(query, { category });
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (category) fetchProducts();
  }, [category]);
 return (
    <section className={`bg-[#fff] ${geistSans.className}`}>
      <div className="max-w-[1376px] mx-auto pt-[48px] pb-0 px-[16px] md:pt-[64px] md:px-[24px] lg:pt-[64px] lg:px-[24px]">
        {/* Header */}
        <div className="flex flex-row justify-between items-center mb-[32px] md:mb-[40px] lg:mb-[40px]">
          <div>
            <h2
              className={`text-[#111] font-medium text-[24px] leading-[28.8px]
              md:text-[32px] md:leading-[38.4px] lg:text-[32px] lg:leading-[38.4px]`}
            >
              {category}
            </h2>
          </div>
          <div>
            <Link
              href="#"
              className="flex flex-row items-center gap-[6px] md:gap-[8px] lg:gap-[8px] text-[#1A2E05]
              text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]"
            >
              Explore {category}
              <span>
                <Image
                  src="/assets/home/arrow-right.svg"
                  alt="arrow-right"
                  width={24}
                  height={24}
                  className="object-cover w-[20px] h-[20px] md:w-[24px] md:h-[24px] lg:w-[24px] lg:h-[24px]"
                />
              </span>
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2 md:gap-x-[31px] md:gap-y-[40px] lg:grid-cols-3 lg:gap-[31px]">
          {products.length > 0 ? (
            products.map((product) => (
              <Link key={product._id} href={`/product/${product.slug.current}`}>
                <div>
                  <Image
                    src={product.image?.[0]?.asset?.url || "/assets/home/macroon_melts.webp"}
                    alt={product.name}
                    width={438}
                    height={468}
                    className="object-cover w-full h-[384px] md:w-[344.5px] md:h-[468px] lg:w-[438px] lg:h-[468px]
                    mb-[18px] md:mb-[20px] lg:mb-[20px] shadow-[0_4px_10px_0_rgba(208,231,190,0.25)]"
                  />
                  <h4 className="text-[#222] lg:text-[20px] lg:leading-[30px] md:text-[20px] md:leading-[30px]
                    text-[18px] leading-[27px] mb-[8px] lg:mb-[12px] md:mb-[12px]">
                    {product.name}
                  </h4>
                  <div className="flex flex-row justify-between items-center mb-[18px] md:mb-[20px] lg:mb-[20px]">
                    <p className="text-[#111] font-semibold text-[18px] leading-[27px]
                      md:text-[20px] md:leading-[30px] lg:text-[20px] lg:leading-[30px]">
                      ${product.price}
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
                  <button
                    className="py-[14px] px-[24px] md:py-[14px] md:px-[32px] lg:py-[14px] lg:px-[32px]
                    inline-block w-full bg-[#fff] text-[#1A2E05]
                    text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] lg:text-[18px] lg:leading-[27px]
                    border border-[#CEE3BC] text-center hover:bg-[#CEE3BC] transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-[#555] text-[18px]">
              No products found in {category}.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}