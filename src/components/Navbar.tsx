"use client";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import SmartLink from "./SmartLink";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const locale = useLocale();

  const t = useTranslations("nav");
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-900">Import Goods</h1>
        <nav className="space-x-6 text-sm text-gray-700">
          {/* <Link href="/wholesale-catalog">{t("links.catalog")}</Link> */}
          <SmartLink href="#brands">{t("links.brands")}</SmartLink>
          <SmartLink href="#about">{t("links.about")}</SmartLink>
          <SmartLink href="#services">{t("links.services")}</SmartLink>
          <SmartLink href="#contact">{t("links.contact")}</SmartLink>
          {/* 
          <Link href="/">{t("links.careers")}</Link>

          <Link href="/">{t("links.blog")}</Link>
          <Link href="/">{t("links.faq")}</Link> */}
        </nav>
        <button
          onClick={() => router.push(`/${locale}/register`)}
          className="bg-blue-700 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-800"
        >
          {t("button")}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
