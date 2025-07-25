"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useForgotPassword } from "@/hooks/useAuth";
import { useTranslations } from "next-intl";

export default function ForgotPasswordPage() {
  const t = useTranslations("forgotPassword");
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);
  const router = useRouter();

  const { mutateAsync, isPending, isSuccess, error } = useForgotPassword();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await mutateAsync(email);
      setIsSent(true);
    } catch (err) {
      console.error("Forgot password error:", err);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 px-6 py-20"
    >
      <div className="relative w-full max-w-md bg-white p-8 rounded-2xl shadow-xl z-10 text-center">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
          {t("title")}
        </h2>
        <p className="text-gray-600 mb-6">{t("description")}</p>

        {!isSent ? (
          <form onSubmit={handleSubmit} className="grid gap-5 text-left">
            <div>
              <label className="block text-sm font-medium text-blue-800 mb-1">
                {t("emailLabel")}
              </label>
              <input
                type="email"
                className="form-input"
                placeholder={t("emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm mt-1">{error.message}</p>
            )}

            <motion.button
              type="submit"
              disabled={isPending}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition ${
                isPending
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-orange-700"
              }`}
            >
              {isPending ? t("sending") : t("sendButton")}
            </motion.button>
          </form>
        ) : (
          <p className="text-green-600 font-medium">{t("success")}</p>
        )}
      </div>

      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-orange-100 rounded-full blur-3xl opacity-30 z-0" />
    </motion.section>
  );
}
