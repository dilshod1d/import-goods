"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import PageLayout from "@/components/PageLayout";

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

export default function PartnersGridPage() {
  const t = useTranslations("partnersSection");

  return (
    <PageLayout>
      <main className="w-full bg-gradient-to-b from-white to-blue-50 py-20 px-4 min-h-full">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 uppercase tracking-wide">
            {t("title")}
          </h1>
          <p className="mt-4 text-blue-700 text-md md:text-lg max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl flex items-center justify-center p-6 h-32 hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={`/logos/${logo}`}
                alt={`Partner ${index + 1}`}
                width={100}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </main>
    </PageLayout>
  );
}
