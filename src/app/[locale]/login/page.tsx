"use client";

import { useEffect, useState } from "react";
import { useAuth, useLogin } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function LoginPage() {
  const t = useTranslations("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { mutateAsync, isPending } = useLogin();
  const router = useRouter();
  const { data: user, isLoading: authLoading } = useAuth();

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     await mutateAsync({ email, password, rememberMe });
  //     router.push("/"); // Or `/admin/dashboard` if needed
  //   } catch (err) {
  //     alert("Invalid login credentials.");
  //   }
  // };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync({ email, password, rememberMe });
    } catch (err) {
      alert("Invalid login credentials.");
    }
  };

  // Redirect after user is loaded
  useEffect(() => {
    if (!authLoading && user) {
      console.log("user", user);
      if (user.status === "pending") {
        router.replace("/account-pending");
      } else {
        router.replace("/");
      }
    }
  }, [authLoading, user, router]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center py-16 px-6"
    >
      <div className="relative w-full max-w-md bg-white p-8 rounded-2xl shadow-xl z-10">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-6 text-center">
          {t("title")}
        </h2>

        <form onSubmit={handleLogin} className="grid gap-5">
          <div>
            <label className="block text-sm font-medium text-blue-800 mb-1">
              {t("email")}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
              placeholder={t("emailPlaceholder")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-800 mb-1">
              {t("password")}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
              placeholder={t("passwordPlaceholder")}
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-blue-800">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="accent-orange-500"
              />
              {t("remember")}
            </label>
            <a
              href="#"
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              {t("forgot")}
            </a>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            disabled={isPending}
            className="bg-orange-600 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow hover:bg-orange-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isPending ? t("loggingIn") : t("button")}
          </motion.button>
          <p className="text-sm text-center mt-4 text-blue-800">
            <span className="mr-2">{t("noAccount")}</span>
            <Link
              href="/register"
              className="text-orange-600 font-medium hover:underline"
            >
              {t("registerHere")}
            </Link>
          </p>
        </form>
      </div>

      {/* Decorative Background Blur */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-orange-100 rounded-full blur-3xl opacity-30 z-0"></div>
    </motion.section>
  );
}
