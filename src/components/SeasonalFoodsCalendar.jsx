// import React from "react";
// import { Apple, Carrot, Lemon, Tomato, Leaf, Pepper, Strawberry, Banana, Grape } from "lucide-react";
// import { motion } from "framer-motion";

// const SeasonalFoodsCalendar = () => {
//   // Sample seasonal data
//   const months = [
//     {
//       name: "January",
//       items: [
//         { name: "Apple", icon: <Apple className="text-red-500" /> },
//         { name: "Carrot", icon: <Carrot className="text-orange-500" /> },
//         { name: "Lemon", icon: <Lemon className="text-yellow-400" /> },
//       ],
//     },
//     {
//       name: "February",
//       items: [
//         { name: "Banana", icon: <Banana className="text-yellow-400" /> },
//         { name: "Leafy Greens", icon: <Leaf className="text-green-500" /> },
//         { name: "Tomato", icon: <Tomato className="text-red-400" /> },
//       ],
//     },
//     {
//       name: "March",
//       items: [
//         { name: "Strawberry", icon: <Strawberry className="text-red-500" /> },
//         { name: "Grape", icon: <Grape className="text-green-700" /> },
//         { name: "Carrot", icon: <Carrot className="text-orange-500" /> },
//       ],
//     },
//     {
//       name: "April",
//       items: [
//         { name: "Lemon", icon: <Lemon className="text-yellow-400" /> },
//         { name: "Pepper", icon: <Pepper className="text-red-600" /> },
//         { name: "Leafy Greens", icon: <Leaf className="text-green-500" /> },
//       ],
//     },
//     {
//       name: "May",
//       items: [
//         { name: "Strawberry", icon: <Strawberry className="text-red-500" /> },
//         { name: "Tomato", icon: <Tomato className="text-red-400" /> },
//         { name: "Avocado", icon: <Avocado className="text-green-700" /> },
//       ],
//     },
//     {
//       name: "June",
//       items: [
//         { name: "Banana", icon: <Banana className="text-yellow-400" /> },
//         { name: "Carrot", icon: <Carrot className="text-orange-500" /> },
//         { name: "Pepper", icon: <Pepper className="text-red-600" /> },
//       ],
//     },
//     {
//       name: "July",
//       items: [
//         { name: "Apple", icon: <Apple className="text-red-500" /> },
//         { name: "Strawberry", icon: <Strawberry className="text-red-500" /> },
//         { name: "Leafy Greens", icon: <Leaf className="text-green-500" /> },
//       ],
//     },
//     {
//       name: "August",
//       items: [
//         { name: "Tomato", icon: <Tomato className="text-red-400" /> },
//         { name: "Grapes", icon: <Grape className="text-green-700" /> },
//         { name: "Lemon", icon: <Lemon className="text-yellow-400" /> },
//       ],
//     },
//     {
//       name: "September",
//       items: [
//         { name: "Carrot", icon: <Carrot className="text-orange-500" /> },
//         { name: "Strawberry", icon: <Strawberry className="text-red-500" /> },
//         { name: "Apple", icon: <Apple className="text-red-500" /> },
//       ],
//     },
//     {
//       name: "October",
//       items: [
//         { name: "Leafy Greens", icon: <Leaf className="text-green-500" /> },
//         { name: "Pepper", icon: <Pepper className="text-red-600" /> },
//         { name: "Banana", icon: <Banana className="text-yellow-400" /> },
//       ],
//     },
//     {
//       name: "November",
//       items: [
//         { name: "Apple", icon: <Apple className="text-red-500" /> },
//         { name: "Tomato", icon: <Tomato className="text-red-400" /> },
//         { name: "Carrot", icon: <Carrot className="text-orange-500" /> },
//       ],
//     },
//     {
//       name: "December",
//       items: [
//         { name: "Lemon", icon: <Lemon className="text-yellow-400" /> },
//         { name: "Avocado", icon: <Avocado className="text-green-700" /> },
//         { name: "Leafy Greens", icon: <Leaf className="text-green-500" /> },
//       ],
//     },
//   ];

//   return (
//     <section className="bg-orange-50 min-h-screen pt-24 pb-16 px-4">
//       <div className="max-w-5xl mx-auto text-center mb-12">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold text-orange-700 mb-2"
//         >
//           Seasonal Foods Calendar
//         </motion.h2>
//         <p className="text-gray-700">
//           Plan your meals sustainably! See which fruits and vegetables are in season each month.
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {months.map((month, idx) => (
//           <motion.div
//             key={idx}
//             whileHover={{ scale: 1.05 }}
//             className="bg-white rounded-2xl shadow-md border border-orange-100 p-6 flex flex-col"
//           >
//             <h3 className="text-xl font-bold text-orange-700 mb-4">{month.name}</h3>
//             <ul className="space-y-3">
//               {month.items.map((item, i) => (
//                 <li
//                   key={i}
//                   className="flex items-center gap-3 bg-orange-50 rounded-lg p-2 hover:bg-orange-100 transition-all"
//                 >
//                   {item.icon}
//                   <span className="text-gray-800 font-medium">{item.name}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SeasonalFoodsCalendar;


import React from "react";
import { motion } from "framer-motion";
import {
  FaAppleAlt,
  FaLemon,
  FaCarrot,
  FaLeaf,
  FaPepperHot,
} from "react-icons/fa";
import { GiGrapes } from "react-icons/gi";
import { GiStrawberry } from "react-icons/gi";
import { GiAvocado } from "react-icons/gi";
import { Banana } from "lucide-react";

const SeasonalFoodsCalendar = () => {
  const months = [
    {
      name: "January",
      items: [
        { name: "Apple", icon: <FaAppleAlt className="text-red-500" /> },
        { name: "Carrot", icon: <FaCarrot className="text-orange-500" /> },
        { name: "Lemon", icon: <FaLemon className="text-yellow-400" /> },
      ],
    },
    {
      name: "February",
      items: [
        { name: "Banana", icon: <Banana className="text-yellow-400" /> },
        { name: "Leafy Greens", icon: <FaLeaf className="text-green-500" /> },
        { name: "Tomato", icon: <FaAppleAlt className="text-red-400" /> },
      ],
    },
    {
      name: "March",
      items: [
        { name: "Strawberry", icon: <GiStrawberry className="text-red-500" /> },
        { name: "Grapes", icon: <GiGrapes className="text-purple-600" /> },
        { name: "Carrot", icon: <FaCarrot className="text-orange-500" /> },
      ],
    },
    {
      name: "April",
      items: [
        { name: "Lemon", icon: <FaLemon className="text-yellow-400" /> },
        { name: "Pepper", icon: <FaPepperHot className="text-red-600" /> },
        { name: "Leafy Greens", icon: <FaLeaf className="text-green-500" /> },
      ],
    },
    {
      name: "May",
      items: [
        { name: "Strawberry", icon: <GiStrawberry className="text-red-500" /> },
        { name: "Tomato", icon: <FaAppleAlt className="text-red-400" /> },
        { name: "Avocado", icon: <GiAvocado className="text-green-700" /> },
      ],
    },
    {
      name: "June",
      items: [
        { name: "Banana", icon: <Banana className="text-yellow-400" /> },
        { name: "Carrot", icon: <FaCarrot className="text-orange-500" /> },
        { name: "Pepper", icon: <FaPepperHot className="text-red-600" /> },
      ],
    },
    {
      name: "July",
      items: [
        { name: "Apple", icon: <FaAppleAlt className="text-red-500" /> },
        { name: "Strawberry", icon: <GiStrawberry className="text-red-500" /> },
        { name: "Leafy Greens", icon: <FaLeaf className="text-green-500" /> },
      ],
    },
    {
      name: "August",
      items: [
        { name: "Tomato", icon: <FaAppleAlt className="text-red-400" /> },
        { name: "Grapes", icon: <GiGrapes className="text-purple-600" /> },
        { name: "Lemon", icon: <FaLemon className="text-yellow-400" /> },
      ],
    },
    {
      name: "September",
      items: [
        { name: "Carrot", icon: <FaCarrot className="text-orange-500" /> },
        { name: "Strawberry", icon: <GiStrawberry className="text-red-500" /> },
        { name: "Apple", icon: <FaAppleAlt className="text-red-500" /> },
      ],
    },
    {
      name: "October",
      items: [
        { name: "Leafy Greens", icon: <FaLeaf className="text-green-500" /> },
        { name: "Pepper", icon: <FaPepperHot className="text-red-600" /> },
        { name: "Banana", icon: <Banana className="text-yellow-400" /> },
      ],
    },
    {
      name: "November",
      items: [
        { name: "Apple", icon: <FaAppleAlt className="text-red-500" /> },
        { name: "Tomato", icon: <FaAppleAlt className="text-red-400" /> },
        { name: "Carrot", icon: <FaCarrot className="text-orange-500" /> },
      ],
    },
    {
      name: "December",
      items: [
        { name: "Lemon", icon: <FaLemon className="text-yellow-400" /> },
        { name: "Avocado", icon: <GiAvocado className="text-green-700" /> },
        { name: "Leafy Greens", icon: <FaLeaf className="text-green-500" /> },
      ],
    },
  ];

  return (
    <section className="bg-orange-50 min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-orange-700 mb-2"
        >
          Seasonal Foods Calendar
        </motion.h2>
        <p className="text-gray-700">
          Plan your meals sustainably! See which fruits and vegetables are in season each month.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {months.map((month, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-md border border-orange-100 p-6 flex flex-col"
          >
            <h3 className="text-xl font-bold text-orange-700 mb-4">{month.name}</h3>
            <ul className="space-y-3">
              {month.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 bg-orange-50 rounded-lg p-2 hover:bg-orange-100 transition-all"
                >
                  {item.icon}
                  <span className="text-gray-800 font-medium">{item.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SeasonalFoodsCalendar;

