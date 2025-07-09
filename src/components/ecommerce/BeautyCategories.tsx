"use client";

import { useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const categories = [
  "SKINCARE",
  "MAKEUP",
  "HAIRCARE",
  "FRAGRANCE",
  "TOOLS & ACCESSORIES",
];

const products = [
  { label: "CLEANSERS", image: "/p2-1-1.webp" },
  { label: "BEAUTY TOOLS", image: "/p2-1-1.webp" },
  { label: "SUNSCREENS", image: "/p2-1-1.webp" },
  { label: "MOISTURIZERS", image: "/p2-1-1.webp" },
  { label: "SERUMS", image: "/p2-1-1.webp" },
  { label: "LIPSTICKS", image: "/p2-1-1.webp" },
];

export default function BeautyCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white w-full">
      <div className=" text-black max-w-7xl mx-auto px-4 py-12 relative">
        {/* Headline */}
        <div className="text-4xl font-light leading-snug">
          Find your own{" "}
          <em className="italic font-serif font-normal">unique style</em>,<br />
          and thousands of brands.
        </div>

        {/* Categories & Arrows */}
        <div className="flex justify-between items-center mt-8 flex-wrap gap-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`px-4 py-2 border rounded-full text-sm font-medium transition-all duration-200 ${
                  i === 4
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="bg-white border text-black rounded-full p-2 hover:bg-gray-100 transition shadow-sm"
            >
              <BiChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-white border text-black rounded-full p-2 hover:bg-gray-100 transition shadow-sm"
            >
              <BiChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Products Slider */}
        <div className="relative mt-10">
          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth no-scrollbar"
          >
            <div className="flex gap-6 w-max">
              {products.map((product, i) => (
                <div
                  key={i}
                  className="group min-w-[250px] max-w-[250px] flex-shrink-0 relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  {/* Image with slight zoom on hover */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.label}
                      className="w-full h-[420px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  </div>

                  {/* Label + Icon */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-20">
                    <div className="flex-1 bg-white group-hover:bg-black text-black group-hover:text-white rounded-full px-6 py-3 text-sm font-medium shadow-md transition-all duration-300">
                      {product.label}
                    </div>
                    <div className="ml-2 w-10 h-10 bg-white group-hover:bg-black text-black group-hover:text-white rounded-full flex items-center justify-center shadow-md transition-all duration-300">
                      <BsArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-right text-sm text-gray-500">
          GET 15% DISCOUNT ON YOUR FIRST ORDER!
          <button className="ml-3 border px-4 py-2 rounded-full text-sm font-medium text-black hover:bg-gray-100 transition">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}
