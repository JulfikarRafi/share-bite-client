import React from 'react';
import { Heart, Utensils, Smile, Users } from 'lucide-react';

const reasons = [
  {
    title: 'Feed the Hungry',
    description: 'Your donation can bring a smile to someone who hasn’t had a meal all day.',
    icon: <Utensils className="w-8 h-8 text-red-500" />,
  },
  {
    title: 'Avoid Wastage',
    description: 'Leftover food can help those in need instead of ending up in the bin.',
    icon: <Heart className="w-8 h-8 text-green-600" />,
  },
  {
    title: 'Spread Happiness',
    description: 'Giving brings joy — to both the giver and the receiver.',
    icon: <Smile className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: 'Build Community',
    description: 'Connect with others through acts of kindness and generosity.',
    icon: <Users className="w-8 h-8 text-blue-500" />,
  },
];

const WhyDonate = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        🌍 Why Donate Food?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-md p-6 text-center transition hover:shadow-xl"
          >
            <div className="flex items-center justify-center mb-4">
              {reason.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {reason.title}
            </h3>
            <p className="text-gray-600 text-sm">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyDonate;
