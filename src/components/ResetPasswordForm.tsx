"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useResetPassword } from "@/hooks/useAuth";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ResetPasswordForm() {
  const t = useTranslations("resetPassword");
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { mutateAsync, isPending, isError } = useResetPassword();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || !token) return;

    try {
      await mutateAsync({ token, password });
      setSuccess(true);
      setTimeout(() => router.push("/login"), 3000);
    } catch (_) {}
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-zinc-900 shadow-md rounded-xl p-6 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4">{t("resetPasswordTitle")}</h1>

        <input
          type="password"
          placeholder={t("newPassword")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded border dark:bg-zinc-800"
        />

        <button
          type="submit"
          disabled={isPending || !password}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          {isPending ? t("loading") : t("resetPasswordButton")}
        </button>

        {isError && (
          <p className="text-red-500 mt-4">{t("resetPasswordError")}</p>
        )}

        {success && (
          <p className="text-green-600 mt-4">
            {t("resetPasswordSuccess")} {t("redirecting")}
          </p>
        )}
      </motion.form>
    </div>
  );
}
