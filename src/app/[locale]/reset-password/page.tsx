"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useResetPassword } from "@/hooks/useAuth";
import { useTranslations } from "next-intl";

export default function ResetPasswordPage() {
  const t = useTranslations("resetPassword");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");

  const { mutateAsync, isPending, isSuccess, error } = useResetPassword();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // setError("Passwords do not match");
      return;
    }
    try {
      await mutateAsync({ token, password });
      setSuccess(true);
      setTimeout(() => router.push("/login"), 3000);
    } catch (_) {}
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

        {!success ? (
          <form onSubmit={handleReset} className="grid gap-5 text-left">
            <div>
              <label className="block text-sm font-medium text-blue-800 mb-1">
                {t("newPasswordLabel")}
              </label>
              <input
                type="password"
                className="form-input"
                placeholder={t("newPasswordPlaceholder")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-800 mb-1">
                {t("confirmPasswordLabel")}
              </label>
              <input
                type="password"
                className="form-input"
                placeholder={t("confirmPasswordPlaceholder")}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition"
            >
              {t("submit")}
            </motion.button>
          </form>
        ) : (
          <p className="text-green-600 font-medium">{t("success")}</p>
        )}
      </div>

      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-100 rounded-full blur-3xl opacity-30 z-0"></div>
    </motion.section>
  );
}
