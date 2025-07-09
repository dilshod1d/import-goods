"use client";
import { useLocale, useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function WowHeroParallax() {
  const t = useTranslations("hero");
  const router = useRouter();
  const locale = useLocale();

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // from top to exit
  });

  // Parallax image zoom-out
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  // Text fades and shifts up
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[120vh] w-full overflow-hidden bg-black"
    >
      {/* Background Image with Zoom-Out Parallax */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="/shipping.png"
          alt="Import Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
      </motion.div>

      {/* Foreground Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex flex-col items-center justify-center text-center h-screen px-6 text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
        >
          {t("titleTop")}{" "}
          <span className="text-orange-500">{t("titleMakers")}</span> to
          {t("titleMarket")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 text-lg md:text-xl max-w-2xl text-white/80"
        >
          {t("subtitle")}
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 px-8 py-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-xl"
          onClick={() => router.push(`/${locale}/register`)}
        >
          {t("cta")}
        </motion.button>
      </motion.div>

      {/* Scroll Cue */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1.8,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/60"
      >
        <BiChevronDown className="w-6 h-6 animate-bounce" />
      </motion.div> */}
    </section>
  );
}
