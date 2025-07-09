"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { BiCheckCircle } from "react-icons/bi";

export default function RegisterSuccessPage() {
  const t = useTranslations("registerSuccess");
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 px-6 py-20"
    >
      <div className="relative bg-white p-10 rounded-2xl shadow-xl text-center max-w-lg z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <BiCheckCircle className="text-green-500 w-16 h-16" />
        </motion.div>

        <h1 className="text-3xl font-bold text-blue-900 mb-4">{t("title")}</h1>

        <p className="text-gray-700 mb-3">{t("thanks")}</p>
        <p className="text-gray-700 mb-6">{t("review")}</p>

        <Link href="/">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition"
          >
            {t("home")}
          </motion.button>
        </Link>
      </div>

      {/* Decorative Blur Element */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-orange-100 rounded-full blur-3xl opacity-30 z-0"></div>
    </motion.section>
  );
}
