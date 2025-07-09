"use client";
import { useTranslations } from "next-intl";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import SmartLink from "./SmartLink";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FooterSection() {
  const t = useTranslations("footer");

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-blue-950 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Pages */}
        <div>
          <h4 className="text-lg font-bold uppercase mb-4 text-orange-500">
            {t("pages")}
          </h4>
          <ul className="space-y-2 text-sm text-white/90">
            <li>
              <SmartLink href="/">{t("links.home")}</SmartLink>
            </li>
            <li>
              <SmartLink href="/brands">{t("links.brands")}</SmartLink>
            </li>
            <li>
              <Link href="/wholesale">{t("links.wholesale")}</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold uppercase mb-4 text-orange-500">
            {t("contact")}
          </h4>
          <p className="text-sm text-white/90 mb-2">{t("address")}</p>
          <p className="text-sm text-white/90 mb-1">{t("email")}</p>
          <p className="text-sm text-white/90">{t("phone")}</p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-bold uppercase mb-4 text-orange-500">
            {t("newsletter")}
          </h4>
          <p className="text-sm text-white/80 mb-4">{t("newsletterNote")}</p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md bg-white/10 text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-sm font-semibold py-2 rounded-md transition"
            >
              {t("subscribe")}
            </button>
          </form>
        </div>

        {/* Channels */}
        <div>
          <h4 className="text-lg font-bold uppercase mb-4 text-orange-500">
            {t("channels")}
          </h4>
          <div className="flex items-center space-x-4">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-blue-900 hover:bg-orange-500 hover:text-white transition"
                >
                  <Icon size={16} />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Import Goods LTD. {t("copyright")}
      </div>
    </motion.footer>
  );
}

// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useTranslations } from "next-intl";
// import SmartLink from "./SmartLink";

// export default function FooterSection() {
//   const t = useTranslations("contact");
//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="bg-blue-950 text-white py-16 px-4 sm:px-6 lg:px-8"
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
//         {/* Pages */}
//         <div>
//           <h4 className="text-lg font-bold uppercase mb-4 text-orange-500">
//             Pages
//           </h4>
//           <ul className="space-y-2 text-sm text-white/90">
//             <li>
//               <SmartLink href="/">Home</SmartLink>
//             </li>
//             <li>
//               <SmartLink href="/brands">Brands</SmartLink>
//             </li>
//             <li>
//               <Link href="/wholesale">Wholesale</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h4 className="text-lg font-bold uppercase mb-4 text-orange-500">
//             Contact
//           </h4>
//           <p className="text-sm text-white/90 mb-2">
//             Toshkent Shahri Olmazor tumani
//             <br />
//             Universitet MFY, 12-UY 7-Xonadon
//           </p>
//           <p className="text-sm text-white/90 mb-1">contract@importgoods.uz</p>
//           <p className="text-sm text-white/90">+998 (90) 910 08 83</p>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h4 className="text-lg font-bold uppercase mb-4 text-orange-500">
//             Newsletter
//           </h4>
//           <p className="text-sm text-white/80 mb-4">Join our mailing list:</p>
//           <form className="flex flex-col space-y-3">
//             <input
//               type="email"
//               placeholder="Your email"
//               className="px-4 py-2 rounded-md bg-white/10 text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//             <button
//               type="submit"
//               className="bg-orange-600 hover:bg-orange-700 text-sm font-semibold py-2 rounded-md transition"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>

//         {/* Channels */}
//         <div>
//           <h4 className="text-lg font-bold uppercase mb-4 text-orange-500">
//             Channels
//           </h4>
//           <div className="flex items-center space-x-4">
//             <a
//               href="#"
//               className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-blue-900 hover:bg-orange-500 hover:text-white transition"
//             >
//               <FaFacebookF size={16} />
//             </a>
//             <a
//               href="#"
//               className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-blue-900 hover:bg-orange-500 hover:text-white transition"
//             >
//               <FaInstagram size={16} />
//             </a>
//             <a
//               href="#"
//               className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-blue-900 hover:bg-orange-500 hover:text-white transition"
//             >
//               <FaLinkedinIn size={16} />
//             </a>
//             <a
//               href="#"
//               className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-blue-900 hover:bg-orange-500 hover:text-white transition"
//             >
//               <FaYoutube size={16} />
//             </a>
//           </div>
//         </div>

//         {/* Payment Methods */}
//         {/* <div>
//           <h4 className="text-lg font-bold uppercase mb-4 text-orange-500">
//             Payments
//           </h4>
//           <div className="flex items-center gap-3">
//             <Image src="/payments/visa.png" alt="Visa" width={40} height={25} />
//             <Image
//               src="/payments/mastercard.png"
//               alt="MasterCard"
//               width={40}
//               height={25}
//             />
//             <Image
//               src="/payments/paypal.png"
//               alt="PayPal"
//               width={40}
//               height={25}
//             />
//           </div>
//         </div> */}
//       </div>

//       {/* Bottom */}
//       <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-white/50">
//         © {new Date().getFullYear()} Import Goods LTD. All rights reserved.
//       </div>
//     </motion.footer>
//   );
// }
