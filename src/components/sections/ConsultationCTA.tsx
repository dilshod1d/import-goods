"use client";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function FreeConsultationCTA() {
   const t = useTranslations("contact");
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative py-24 px-6 sm:px-10 lg:px-20 bg-gradient-to-t from-white to-blue-50  overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10 ">
        {/* Left Column */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
            Get a Free Consultation
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-xl">
            Need help importing your products? Our experts are ready to guide
            you through sourcing, shipping, and logistics — completely free.
          </p>

          {/* Contact Info */}
          <div className="space-y-3 text-blue-900 font-medium mb-10">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500" />
              <span>+1 949-965-1372</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />
              <span>info@qhdistribution.com</span>
            </div>
          </div>

          {/* Optional team image */}
          <div className="relative h-56 w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/consulting-team.jpg" // replace with actual image
              alt="Consulting Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-end p-4 text-white text-sm">
              Talk to our logistics specialists today.
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 shadow-xl rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="text"
              placeholder="+098991234567"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell us what you need help with..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-orange-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-semibold py-3 rounded-md hover:bg-orange-700 transition"
          >
            Request Free Consultation
          </button>
        </motion.form>
      </div>

      {/* Soft background shape */}
      {/* <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-gradient-to-b from-white to-blue-50  rounded-full opacity-20 z-0 blur-3xl"></div> */}
    </motion.section>
  );
}
