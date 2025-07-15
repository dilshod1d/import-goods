"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import SmartLink from "./SmartLink";
import LanguageSwitcher from "./LanguageSwitcher";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("nav");

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            width={40}
            height={40}
            alt="Import Goods Logo"
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
          <SmartLink href="#brands">{t("links.brands")}</SmartLink>
          <SmartLink href="#about">{t("links.about")}</SmartLink>
          <SmartLink href="#services">{t("links.services")}</SmartLink>
          <SmartLink href="#contact">{t("links.contact")}</SmartLink>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => router.push(`/${locale}/register`)}
            className="bg-blue-700 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-800"
          >
            {t("button")}
          </button>
          <LanguageSwitcher />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-4 text-gray-700 text-sm">
            <SmartLink href="#brands" onClick={closeMenu}>
              {t("links.brands")}
            </SmartLink>
            <SmartLink href="#about" onClick={closeMenu}>
              {t("links.about")}
            </SmartLink>
            <SmartLink href="#services" onClick={closeMenu}>
              {t("links.services")}
            </SmartLink>
            <SmartLink href="#contact" onClick={closeMenu}>
              {t("links.contact")}
            </SmartLink>
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <button
              onClick={() => {
                router.push(`/${locale}/register`);
                closeMenu();
              }}
              className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-800 w-full"
            >
              {t("button")}
            </button>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

// "use client";
// import { useLocale, useTranslations } from "next-intl";

// import { Link } from "@/i18n/navigation";
// import SmartLink from "./SmartLink";
// import { useRouter } from "next/navigation";
// import LanguageSwitcher from "./LanguageSwitcher";
// import Image from "next/image";

// const Navbar = () => {
//   const router = useRouter();
//   const locale = useLocale();

//   const t = useTranslations("nav");
//   return (
//     <header className="bg-white shadow sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         <Image
//           src={"/logo.png"}
//           width={40}
//           height={40}
//           alt="Import Goods Logo"
//         />
//         {/* <h1 className="text-xl font-bold text-blue-900">Import Goods</h1> */}
//         <nav className="space-x-6 text-sm text-gray-700">
//           {/* <Link href="/wholesale-catalog">{t("links.catalog")}</Link> */}
//           <SmartLink href="#brands">{t("links.brands")}</SmartLink>
//           <SmartLink href="#about">{t("links.about")}</SmartLink>
//           <SmartLink href="#services">{t("links.services")}</SmartLink>
//           <SmartLink href="#contact">{t("links.contact")}</SmartLink>
//         </nav>
//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => router.push(`/${locale}/register`)}
//             className="bg-blue-700 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-800"
//           >
//             {t("button")}
//           </button>
//           <LanguageSwitcher />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
