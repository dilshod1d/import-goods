"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function SourceProductsCTA() {
  const t = useTranslations("sourceCTA");
  const points: string[] = t.raw("points");

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left - Content */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
            {t("title")}
          </h2>
          <p className="text-gray-700 text-lg mb-6 max-w-lg">
            {t("description")}
          </p>

          <ul className="space-y-3 text-blue-800 font-medium mb-8">
            {points.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-orange-500 mt-1" />
                {item}
              </li>
            ))}
          </ul>

          <Link href="/register">
            <motion.div
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block bg-orange-600 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow hover:bg-orange-700 transition cursor-pointer"
            >
              {t("button")}
            </motion.div>
          </Link>

          {/* <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-orange-600 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow hover:bg-orange-700 transition cursor-pointer"
          >
            {t("button")}
          </motion.button> */}
        </div>

        {/* Right - Image */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/source.png"
            alt="Warehouse shelves with boxes"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-sm">
            {t("imageText")}
          </div>
        </motion.div>
      </div>

      {/* Decorative BG Shape */}
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-30 z-0"></div>
    </motion.section>
  );
}
