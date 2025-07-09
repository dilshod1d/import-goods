"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const serviceImages = [
  { image: "/source.png", className: "sm:col-span-2" }, // Adjusted for sm breakpoint
  { image: "/shipping.png", className: "sm:col-span-1" },
  { image: "/customs.jpg", className: "sm:col-span-1" },
  { image: "/local-delivery.png", className: "sm:col-span-2" },
];

// Animation Variants
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesSection() {
  const t = useTranslations("servicesSection");
  const items = t.raw("items");

  return (
    <section
      id="services"
      className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-6">
          {t("heading")}
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 text-sm sm:text-lg">
          <strong>{t("platformName")}</strong> - {t("description")}
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {items.map((item: any, index: number) => (
          <motion.div
            key={index}
            variants={cardVariant}
            className={`relative h-[300px] sm:h-[350px] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 w-full ${serviceImages[index]?.className}`}
          >
            <Image
              src={serviceImages[index]?.image}
              alt={item.title}
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6 flex flex-col justify-end text-white">
              <h3 className="text-base sm:text-lg font-bold">{item.title}</h3>
              <p className="text-xs sm:text-sm mt-1">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useTranslations } from "next-intl";

// // const serviceImages = [
// //   { image: "/source.png", className: "col-span-2" },
// //   { image: "/shipping.png", className: "col-span-1" },
// //   { image: "/customs.jpg", className: "col-span-1" },
// //   { image: "/local-delivery.png", className: "col-span-2" },
// // ];

// const serviceImages = [
//   { image: "/source.png", className: "sm:col-span-2" },
//   { image: "/shipping.png", className: "sm:col-span-1" },
//   { image: "/customs.jpg", className: "sm:col-span-1" },
//   { image: "/local-delivery.png", className: "sm:col-span-2" },
// ];

// // Animation Variants
// const containerVariant = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3,
//     },
//   },
// };

// const cardVariant = {
//   hidden: { opacity: 0, y: 50 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// export default function ServicesSection() {
//   const t = useTranslations("servicesSection");
//   const items = t.raw("items");
//   return (
//     <section id="services" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
//       <motion.div
//         className="max-w-7xl mx-auto text-center"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
//           {t("heading")}
//         </h2>
//         <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-base sm:text-lg">
//           <strong> {t("platformName")}</strong> - {t("description")}
//         </p>
//       </motion.div>

//       <motion.div
//         // className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-7xl mx-auto"
//         className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-7xl mx-auto"
//         variants={containerVariant}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         {items.map((item: any, index: number) => (
//           <motion.div
//             key={index}
//             variants={cardVariant}
//             className={`relative h-[350px] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${serviceImages[
//               index
//             ]?.className?.replace("col-span", "sm:col-span")}`}

//             // className={`relative h-[350px] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${serviceImages[index]?.className}`}
//           >
//             <Image
//               src={serviceImages[index]?.image}
//               alt={item.title}
//               fill
//               className="object-cover w-full h-full"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end text-white">
//               <h3 className="text-lg font-bold">{item.title}</h3>
//               <p className="text-sm mt-1">{item.subtitle}</p>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }
