"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Add actual send logic here
  };
  const t = useTranslations("contact");

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10">
        {/* Left: Contact Details */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6">
            {t("title")}
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-md">{t("subtitle")}</p>

          <ul className="space-y-6 text-blue-900 font-medium text-base">
            <li className="flex items-start gap-4">
              <FaPhone className="text-orange-500 mt-1" />
              <div>
                <div className="font-semibold">{t("phoneLabel")}</div>
                <a
                  href="tel:+998901234567"
                  className="text-gray-700 hover:underline"
                >
                  +998 (90) 910 08 83
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FaEnvelope className="text-orange-500 mt-1" />
              <div>
                <div className="font-semibold">{t("emailLabel")}</div>
                <a
                  href="mailto:contract@importgoods.uz"
                  className="text-gray-700 hover:underline"
                >
                  contract@importgoods.uz
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              <div>
                <div className="font-semibold">{t("addressLabel")}</div>
                <p className="text-gray-700">
                  Toshkent Shahri, Olmazor tumani, Universitet MFY, 12-UY
                  7-Xonadon
                </p>
              </div>
            </li>
          </ul>

          {/* Optional Map */}
          <div className="mt-10 rounded-xl overflow-hidden shadow-lg w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.940726383065!2d69.2797374154174!3d41.31115197927164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4cd45dbcd7f%3A0x2d0cb64d8f1b139d!2sMustaqillik%20maydoni!5e0!3m2!1sen!2s!4v1687350504484!5m2!1sen!2s"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-6 text-left bg-white p-8 rounded-2xl shadow-xl"
        >
          <div>
            <label className="block text-sm font-medium text-blue-800 mb-1">
              {t("name")}
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder={t("placeholderName")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-800 mb-1">
              {t("phone")}
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder={t("placeholderPhone")}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-800 mb-1">
              {t("message")}
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder={t("placeholderMessage")}
            ></textarea>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            className="bg-orange-600 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow hover:bg-orange-700 transition"
          >
            {t("send")}
          </motion.button>
        </form>
      </div>

      {/* Decorative Shape */}
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-orange-100 rounded-full blur-3xl opacity-30 z-0"></div>
    </motion.section>
  );
}
