"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CARD_WIDTH = 280; // width + gap
const AUTO_SLIDE_INTERVAL = 3500;

const categories = [
  {
    title: "Bulk Electronics",
    subtitle: "Chargers, Cables",
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Home & Kitchen",
    subtitle: "Cookware, Tools",
    color: "from-teal-400 to-cyan-600",
  },
  {
    title: "Personal Care",
    subtitle: "Skincare, Haircare",
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Groceries",
    subtitle: "Spices, Snacks",
    color: "from-orange-400 to-yellow-500",
  },
  {
    title: "Stationery",
    subtitle: "Notebooks, Pens",
    color: "from-gray-400 to-gray-600",
  },
];

export default function CategorySlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = prev + direction;
        if (next >= categories.length - 1 || next <= 0) {
          setDirection((d) => -d); // Reverse direction
        }
        return Math.max(0, Math.min(categories.length - 1, next));
      });
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [direction, paused]);

  return (
    <div
      className="overflow-hidden w-full max-w-5xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: `-${index * CARD_WIDTH}px` }}
        transition={{ ease: "easeInOut", duration: 0.7 }}
      >
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 w-64 h-96 rounded-[32px] p-6 bg-gradient-to-br ${cat.color} text-white shadow-xl transition-transform hover:scale-105`}
          >
            <h3 className="text-xl font-semibold">{cat.title}</h3>
            <p className="text-md mt-2">{cat.subtitle}</p>
            <div className="mt-auto pt-20 text-sm opacity-70">
              View category →
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
