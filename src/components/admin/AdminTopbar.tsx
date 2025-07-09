"use client";

import { FiBell, FiUser } from "react-icons/fi";
import Image from "next/image";

export default function AdminTopbar() {
  return (
    <header className="hidden md:flex justify-between items-center bg-white border-b border-gray-200 shadow-sm px-6 py-4 sticky top-0 z-20">
      <h2 className="text-xl font-bold text-blue-900 tracking-tight">
        Admin Panel
      </h2>

      <div className="flex items-center gap-4">
        <button className="relative text-gray-600 hover:text-orange-600 transition">
          <FiBell className="text-2xl" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full" />
        </button>

        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <FiUser className="text-xl text-orange-500" />
          admin@importgoods.uz
        </div>
      </div>
    </header>
  );
}
