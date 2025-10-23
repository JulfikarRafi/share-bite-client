import { useState } from "react";
import {
  ChevronDown,
  Leaf,
  Archive,
  Trash2,
  Coffee,
  Box,
  Gift,
  Thermometer,
  Carrot,
  Apple,
} from "lucide-react";
import { motion } from "framer-motion";

const ZeroWasteKitchen = () => {
  const guides = [
    {
      title: "How to Reuse Leftovers",
      icon: <Archive className="text-orange-500" />,
      content:
        "Transform your leftovers into delicious new meals! Examples: leftover veggies can become soups or stir-fries, extra rice can be fried with eggs, and stale bread can become croutons. Always store leftovers properly in airtight containers to maintain freshness.",
    },
    {
      title: "How to Store Foods Properly",
      icon: <Leaf className="text-green-500" />,
      content:
        "Proper storage extends the life of your food. Keep leafy greens in breathable bags, fruits separated to prevent premature ripening, and herbs in jars with water. Use clear containers to easily see what's inside. Label and date everything for easier tracking.",
    },
    {
      title: "DIY Compost Ideas",
      icon: <Trash2 className="text-red-500" />,
      content:
        "Turn your kitchen scraps into nutrient-rich compost. Fruit peels, vegetable scraps, coffee grounds, and eggshells can all be composted. Avoid meat or dairy. You can use a compost bin in your garden or a simple indoor compost container. Your plants will love it!",
    },
    {
      title: "Repurpose Coffee Grounds",
      icon: <Coffee className="text-brown-500" />,
      content:
        "Use leftover coffee grounds in your garden as a natural fertilizer or to keep pests away. They can also be used in DIY scrubs or as a deodorizer for your fridge.",
    },
    {
      title: "Use Airtight Containers",
      icon: <Box className="text-blue-500" />,
      content:
        "Invest in reusable airtight containers to keep food fresh longer. They help prevent spoilage and reduce the use of disposable plastic bags or wraps.",
    },
    {
      title: "Regift or Share Excess",
      icon: <Gift className="text-purple-500" />,
      content:
        "If you have extra pantry items or packaged food, share them with friends, neighbors, or local food banks instead of letting them go to waste.",
    },
    {
      title: "Monitor Fridge Temperature",
      icon: <Thermometer className="text-red-400" />,
      content:
        "Keep your fridge at the optimal temperature (around 4°C / 39°F) to preserve perishable items. This prevents spoilage and extends shelf life.",
    },
    {
      title: "Prioritize Perishables",
      icon: <Carrot className="text-orange-400" />,
      content:
        "Consume fruits, vegetables, and dairy products first, especially those nearing their expiration. Plan meals around these items to reduce waste.",
    },
    {
      title: "Freeze Extra Fruits",
      icon: <Apple className="text-red-500" />,
      content:
        "Overripe fruits can be frozen for smoothies, baking, or homemade jams. This prevents them from spoiling and gives you a ready-to-use ingredient.",
    },
    {
      title: "Buy Smart & Plan Ahead",
      icon: <Box className="text-teal-500" />,
      content:
        "Make a shopping list and plan your meals. Avoid impulse buys that may go unused. Buying smart reduces waste and saves money.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-orange-50 min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-orange-700 mb-2"
        >
          Zero Waste Kitchen
        </motion.h2>
        <p className="text-gray-700">
          Learn practical tips to reduce food waste, save money, and live sustainably.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {guides.map((guide, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md border border-orange-100 overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-5 focus:outline-none"
            >
              <div className="flex items-center gap-3">
                {guide.icon}
                <span className="text-lg font-semibold text-gray-800">{guide.title}</span>
              </div>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-gray-500" />
              </motion.div>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeIndex === index ? "auto" : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="px-5 pb-5 text-gray-700"
            >
              {guide.content}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ZeroWasteKitchen;
