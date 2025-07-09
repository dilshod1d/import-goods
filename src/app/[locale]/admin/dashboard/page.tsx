"use client";

import AdminLayout from "@/components/admin/Layout";
import { motion } from "framer-motion";
import { FiUsers, FiBox, FiShoppingCart } from "react-icons/fi";

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-t from-white to-blue-50 py-20 px-6 sm:px-10 lg:px-20 min-h-screen"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Title */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4">
              Admin Overview
            </h2>
            <p className="text-gray-700 text-lg">
              Welcome back! Here’s a quick glance at today’s activity.
            </p>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardStatCard
              icon={<FiUsers className="text-2xl text-orange-500" />}
              label="Pending Users"
              value="5"
            />
            <DashboardStatCard
              icon={<FiBox className="text-2xl text-orange-500" />}
              label="Total Products"
              value="128"
            />
            <DashboardStatCard
              icon={<FiShoppingCart className="text-2xl text-orange-500" />}
              label="Orders Today"
              value="14"
            />
          </div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white border border-gray-200 shadow-xl rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Recent Activity
            </h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>
                🟢 User <strong>john@brand.com</strong> registered
              </li>
              <li>
                📦 Product <strong>“Apple Watch Ultra”</strong> added
              </li>
              <li>
                🛒 Order #3298 placed by <strong>importgoods.uz</strong>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
    </AdminLayout>
  );
}

function DashboardStatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white border border-gray-200 shadow-xl rounded-2xl p-6 flex items-center gap-4"
    >
      <div className="p-3 bg-orange-100 rounded-xl">{icon}</div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="text-2xl font-bold text-blue-900">{value}</div>
      </div>
    </motion.div>
  );
}

// "use client";

// import AdminLayout from "@/components/admin/layout";
// import { motion } from "framer-motion";

// export default function AdminDashboardPage() {
//   return (
//     <AdminLayout>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="space-y-6"
//       >
//         <h2 className="text-3xl font-bold text-blue-900">Dashboard Overview</h2>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <StatCard title="Pending Users" value="5" />
//           <StatCard title="Total Products" value="128" />
//           <StatCard title="Orders Today" value="14" />
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <h3 className="text-xl font-semibold text-blue-800 mb-4">
//             Recent Activity
//           </h3>
//           <ul className="space-y-2 text-sm text-gray-700">
//             <li>User A registered</li>
//             <li>Product “Apple Watch” added</li>
//             <li>Order #3298 placed</li>
//           </ul>
//         </div>
//       </motion.div>
//     </AdminLayout>
//   );
// }

// function StatCard({ title, value }: { title: string; value: string }) {
//   return (
//     <div className="bg-white p-5 rounded-xl shadow text-center">
//       <div className="text-gray-600 text-sm">{title}</div>
//       <div className="text-3xl font-bold text-blue-900">{value}</div>
//     </div>
//   );
// }

// 'use client';
// import { useAnalyticsOverview } from '@/hooks/useAnalytics';
// import KPI from '@/components/admin/KPI';
// import SalesLineChart from '@/components/admin/LineChart';
// import TopProducts from '@/components/admin/TopProducts';

// export default function AdminDashboardPage() {
//   const { data, isLoading } = useAnalyticsOverview();

//   if (isLoading) return <p className="p-6">Loading analytics...</p>;

//   return (
//     <div className="p-6 grid gap-6">
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <KPI label="Total Sales" value={data.totalSales} />
//         <KPI label="Total Orders" value={data.totalOrders} />
//       </div>
//       <SalesLineChart data={data.recentSales} />
//       <TopProducts products={data.topProducts} />
//     </div>
//   );
// }
