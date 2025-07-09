"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const switchTo = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex gap-4 text-sm text-blue-700 mt-4">
      <Link href={switchTo("en")}>EN</Link>
      <Link href={switchTo("uz")}>UZ</Link>
      <Link href={switchTo("ru")}>RU</Link>
    </div>
  );
}
