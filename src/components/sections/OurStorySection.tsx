"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const splitText = (text: string) =>
  text.split(" ").map((word, i) => (
    <motion.span
      key={i}
      className="inline-block mr-2"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: i * 0.06,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      {word}
    </motion.span>
  ));

export default function OurStorySection() {
  const t = useTranslations("ourStory");
  const paragraphs: string[] = t.raw("paragraphs");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-gradient-to-br from-white to-blue-50 w-full py-32 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        {/* Left image with parallax + glow */}
        <motion.div className="w-full md:w-1/2 relative" style={{ y: imageY }}>
          <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl z-10">
            <Image
              src="/shipping.png"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>

          {/* Glow Behind Image */}
          <motion.div
            style={{ opacity: glowOpacity }}
            className="absolute -top-12 -left-12 w-[300px] h-[300px] rounded-full bg-blue-400 blur-3xl z-0"
          ></motion.div>
        </motion.div>

        {/* Right text with animated words */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-950 uppercase mb-8 leading-tight">
            {splitText(t("title"))}
          </h2>

          {paragraphs.map((para, i) => (
            <motion.p
              key={i}
              className="text-gray-700 text-lg leading-relaxed mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4 + i * 0.3,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              {para}
            </motion.p>
          ))}

          <motion.p
            className="text-orange-600 font-bold text-md uppercase tracking-wide mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("highlight")}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
