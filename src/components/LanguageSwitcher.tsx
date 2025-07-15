"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const languages = [
  { code: "en", label: "English", flag: "/flags/united-states.png" },
  { code: "uz", label: "O‘zbekcha", flag: "/flags/uzbekistan.png" },
  { code: "ru", label: "Русский", flag: "/flags/russia.png" },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1];
  const current =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  const switchTo = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-xl shadow-md hover:bg-gray-100 transition"
      >
        <Image
          src={current.flag}
          alt={current.label}
          width={20}
          height={20}
          className="mr-2 rounded-full"
        />
        <span className="text-sm font-semibold text-gray-800">
          {current.label}
        </span>
        <svg
          className="ml-2 h-4 w-4 text-gray-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-lg"
          >
            <ul className="py-1">
              {languages
                .filter((lang) => lang.code !== current.code)
                .map((lang) => (
                  <li key={lang.code}>
                    <Link
                      href={switchTo(lang.code)}
                      className="flex items-center px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 font-medium transition"
                      onClick={() => setOpen(false)}
                    >
                      <Image
                        src={lang.flag}
                        alt={lang.label}
                        width={20}
                        height={20}
                        className="mr-2 rounded-full"
                      />
                      {lang.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
