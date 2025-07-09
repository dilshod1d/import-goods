"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FiGrid,
  FiUsers,
  FiPackage,
  FiShoppingCart,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AdminTopbar from "./AdminTopbar";

const menuItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: FiGrid },
  { href: "/admin/user-approvals", label: "User Approvals", icon: FiUsers },
  { href: "/admin/products", label: "Products", icon: FiPackage },
  { href: "/admin/orders", label: "Orders", icon: FiShoppingCart },
  { href: "/admin/settings", label: "Settings", icon: FiSettings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-white via-blue-50 to-orange-50">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col justify-between w-64 bg-white border-r border-gray-200 shadow-xl p-6">
        <SidebarNav pathname={pathname} />
      </aside>

      {/* Mobile Topbar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-30 bg-white border-b border-gray-200 shadow-sm flex items-center justify-between px-4 py-3">
        <h1 className="text-lg font-bold text-blue-900">Admin</h1>
        <button onClick={() => setMobileOpen(true)}>
          <FiMenu className="text-2xl text-orange-500" />
        </button>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="fixed z-40 top-0 left-0 bottom-0 w-64 bg-white shadow-xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-extrabold text-blue-900">
                  Admin Panel
                </h1>
                <button onClick={() => setMobileOpen(false)}>
                  <FiX className="text-xl text-gray-600" />
                </button>
              </div>
              <SidebarNav
                pathname={pathname}
                onNavigate={() => setMobileOpen(false)}
              />
            </div>

            <button className="flex items-center gap-2 text-red-600 hover:text-red-700 mt-10">
              <FiLogOut className="text-xl" />
              Logout
            </button>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1">
        <AdminTopbar />
        <div className="px-6 py-6 md:px-10 bg-gradient-to-br from-white/50 to-blue-50 min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto"
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
}

function SidebarNav({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <>
      <nav className="space-y-2">
        {menuItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={onNavigate}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                isActive
                  ? "bg-orange-100 text-orange-700 font-semibold"
                  : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              <Icon className="text-lg" />
              {label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}

// "use client";

// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   FiGrid,
//   FiUsers,
//   FiPackage,
//   FiSettings,
//   FiShoppingCart,
//   FiLogOut,
// } from "react-icons/fi";

// const menuItems = [
//   { href: "/admin/dashboard", label: "Dashboard", icon: FiGrid },
//   { href: "/admin/user-approvals", label: "User Approvals", icon: FiUsers },
//   { href: "/admin/products", label: "Products", icon: FiPackage },
//   { href: "/admin/orders", label: "Orders", icon: FiShoppingCart },
//   { href: "/admin/settings", label: "Settings", icon: FiSettings },
// ];

// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();

//   return (
//     <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-white to-orange-50">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-lg p-6 hidden md:flex flex-col justify-between">
//         <div>
//           <h1 className="text-2xl font-extrabold text-blue-800 mb-8">
//             Admin Panel
//           </h1>
//           <nav className="space-y-2">
//             {menuItems.map((item) => {
//               const isActive = pathname.startsWith(item.href);
//               const Icon = item.icon;
//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
//                     isActive
//                       ? "bg-orange-100 text-orange-700 font-semibold"
//                       : "text-gray-700 hover:bg-gray-100"
//                   }`}
//                 >
//                   <Icon className="text-lg" />
//                   {item.label}
//                 </Link>
//               );
//             })}
//           </nav>
//         </div>
//         <button className="flex items-center gap-2 text-red-600 hover:text-red-700">
//           <FiLogOut className="text-xl" />
//           Logout
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">{children}</main>
//     </div>
//   );
// }
