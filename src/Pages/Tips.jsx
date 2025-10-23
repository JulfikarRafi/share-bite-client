import React, { useState } from "react";
import { motion } from "framer-motion";
import { RefreshCcw, Lightbulb } from "lucide-react";
import ZeroWasteKitchen from "../components/ZeroWasteKitchen";
import SeasonalFoodsCalendar from "../components/SeasonalFoodsCalendar";
import FoodWasteQuiz from "../components/FoodWasteQuiz";

const Tips = () => {
  const tips = [
    "Store herbs like flowers — in water, upright in a jar.",
    "Freeze leftover sauces or soups in ice cube trays for easy portions.",
    "Keep your fridge organized — older food in front, new behind.",
    "Use vegetable scraps to make homemade broth.",
    "Don’t wash berries until you’re ready to eat them — they last longer.",
    "Revive wilted greens by soaking them in ice-cold water.",
    "Freeze ripe bananas for smoothies or baking.",
    "Use stale bread to make breadcrumbs or croutons.",
    "Label and date your leftovers to avoid forgetting them.",
    "Buy seasonal produce — it’s cheaper and tastier.",
    "Plan your meals for the week to reduce waste.",
    "Store potatoes and onions separately to prevent spoilage.",
    "Turn fruit that’s about to go bad into smoothies or jams.",
    "Compost food scraps instead of throwing them away.",
    "Use lemon juice to keep cut fruits fresh.",
    "Cook in batches to save time and energy.",
    "Use reusable containers instead of plastic wrap.",
    "Keep track of what’s in your fridge using a whiteboard list.",
    "Share extra food with neighbors or through food-sharing apps.",
    "Always freeze leftovers if you can’t eat them within 2 days.",
  ];

  const [visibleTips, setVisibleTips] = useState(
    tips.sort(() => 0.5 - Math.random()).slice(0, 5)
  );

  const refreshTips = () => {
    const newTips = tips.sort(() => 0.5 - Math.random()).slice(0, 5);
    setVisibleTips(newTips);
  };

  return (
    <section className="bg-orange-50 min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-orange-700 mb-2"
        >
          🍎 Smart Food Tips
        </motion.h2>
        <p className="text-gray-700">
          Discover small but powerful ways to reduce food waste, eat smarter, and save money.
        </p>
      </div>

      {/* Tips grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {visibleTips.map((tip, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 flex flex-col items-start justify-between border border-orange-100 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="text-yellow-400" size={24} />
              <h3 className="text-lg font-semibold text-orange-800">
                Tip #{index + 1}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{tip}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Refresh button */}
      <div className="flex justify-center mt-10">
        <motion.button
          whileHover={{ rotate: 180, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={refreshTips}
          className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
        >
          <RefreshCcw size={20} />
          Refresh Tips
        </motion.button>
      </div>
      <SeasonalFoodsCalendar></SeasonalFoodsCalendar>
      <ZeroWasteKitchen></ZeroWasteKitchen>
      <FoodWasteQuiz></FoodWasteQuiz>
    </section>
  );
};

export default Tips;
