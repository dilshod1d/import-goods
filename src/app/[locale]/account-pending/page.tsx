"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AccountPendingPage() {
  const t = useTranslations("accountPending");
  const router = useRouter();
  const { data: user, isLoading, error } = useAuth();

  useEffect(() => {
    if (!isLoading && user) {
      if (user.status === "approved") {
        router.replace("/");
      }
      if (user.status === "rejected") {
        alert("Your account has been rejected.");
        router.replace("/login");
      }
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-blue-900">
        {t("loading")}
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {t("error")}
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center px-6"
    >
      <div className="relative w-full max-w-md bg-white p-8 rounded-2xl shadow-xl z-10">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-4 text-center">
          {t("title")}
        </h2>
        <p className="text-center text-blue-800 mb-6">{t("description")}</p>

        <div className="space-y-4">
          <InfoRow label={t("email")} value={user.email} />
          <InfoRow label={t("companyName")} value={user.companyName} />
          <InfoRow label={t("phone")} value={user.phone} />
          <InfoRow
            label={t("status")}
            value={
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                {t(user.status)}
              </span>
            }
          />
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-100 rounded-full blur-3xl opacity-30 z-0"></div>
    </motion.section>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center border-b pb-2">
      <span className="text-sm font-medium text-blue-800">{label}</span>
      <span className="text-sm text-blue-900 font-semibold">{value}</span>
    </div>
  );
}
