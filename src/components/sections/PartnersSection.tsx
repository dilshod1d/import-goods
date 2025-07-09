"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const partnerLogos = [
  "dove.png",
  "colgate.png",
  "head-and-shoulders.png",
  "rexona.png",
  "oral-b.png",
  "Maui_Moisture.webp",
  "palmolive.png",
  "pai.webp",
  "garnier.png",
  "raw-sugar.jpg",
];

const duplicatedLogos = [...partnerLogos, ...partnerLogos];

const scrollVariants = (direction: "left" | "right", duration = 25) => ({
  animate: {
    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration,
        ease: "linear",
      },
    },
  },
});

export default function PartnersSection() {
  const t = useTranslations("partnersSection");
  return (
    <section id="brands" className="w-full bg-gradient-to-b from-white to-blue-50 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 uppercase tracking-wide">
          {t("title")}
        </h2>
        <p className="mt-4 text-blue-700 text-md md:text-lg max-w-xl mx-auto">
          {t("subtitle")}
        </p>
        <button className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold uppercase shadow hover:bg-orange-700 transition">
          {t("button")}
        </button>
      </div>

      <div className="space-y-12">
        {/* Top Row */}
        <motion.div
          className="flex space-x-8 w-max"
          variants={scrollVariants("left", 35)}
          animate="animate"
        >
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={`top-${index}`}
              className="p-4 bg-white rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center h-24 min-w-[160px] overflow-hidden"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={`/logos/${logo}`}
                alt={`Partner ${index + 1}`}
                width={100}
                height={60}
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Row - slower, reverse scroll */}
        <motion.div
          className="flex space-x-8 w-max"
          variants={scrollVariants("right", 40)}
          animate="animate"
        >
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={`bottom-${index}`}
              className="p-4 bg-white rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center h-24 min-w-[160px]"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={`/logos/${logo}`}
                alt={`Partner ${index + 1}`}
                width={100}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
