"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useRegister } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function RegisterPage() {
  const t = useTranslations("register");
  const router = useRouter();
  const { mutateAsync, isPending } = useRegister();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await mutateAsync({
        email: form.email,
        password: form.password,
        companyName: form.companyName,
        phone: form.phone,
      });
      router.push("/register-success");
    } catch (err: any) {
      alert(err?.response?.data?.message || "Registration failed");
    }
  };

  useEffect(() => {
    console.log("Register mounted");
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center px-6"
    >
      <div className="relative w-full max-w-md bg-white p-8 rounded-2xl shadow-xl z-10">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-6 text-center">
          {t("title")}
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <div>
            <label className="block text-sm font-medium text-blue-800 mb-1">
              {t("companyName")}
            </label>
            <input
              type="text"
              name="companyName"
              placeholder={t("companyNamePlaceholder")}
              required
              value={form.companyName}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-800 mb-1">
              {t("phone")}
            </label>
            <input
              type="text"
              name="phone"
              placeholder={t("phonePlaceholder")}
              required
              value={form.phone}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-800 mb-1">
              {t("email")}
            </label>
            <input
              type="email"
              name="email"
              placeholder={t("emailPlaceholder")}
              required
              value={form.email}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-800 mb-1">
              {t("password")}
            </label>
            <input
              type="password"
              name="password"
              placeholder={t("passwordPlaceholder")}
              required
              value={form.password}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-800 mb-1">
              {t("confirmPassword")}
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder={t("confirmPasswordPlaceholder")}
              required
              value={form.confirmPassword}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            disabled={isPending}
            className="bg-orange-600 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow hover:bg-orange-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isPending ? t("submitting") : t("submit")}
          </motion.button>
          <p className="text-sm text-center mt-4 text-blue-800">
            <span className="mr-2"> {t("alreadyRegistered")}</span>
            <Link
              href="/login"
              className="text-orange-600 font-medium hover:underline"
            >
              {t("loginHere")}
            </Link>
          </p>
        </form>
      </div>

      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-100 rounded-full blur-3xl opacity-30 z-0"></div>
    </motion.section>
  );
}
