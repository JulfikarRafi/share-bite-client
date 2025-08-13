import React from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"
import { NavLink } from 'react-router';

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center justify-center px-4 md:px-10 py-20 text-white relative"
      style={{
        backgroundImage: "url('https://i.ibb.co/jP8yxY7k/banner.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-4xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-lg">
          Welcome to <span className="text-orange-400">ShareBite</span>
        </motion.h1>
        <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-lg font-bold md:text-xl bg-white rounded-2xl p-4 text-orange-500 mb-6 drop-shadow">
          A platform that connects food donors and recipients to reduce food waste and hunger.
        </motion.p>
        <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }} className="mb-6 text-orange-500 rounded-2xl font-bold p-4 bg-white hidden sm:block">
          Join our mission to create a community where no meal goes to waste and no one goes hungry.
        </motion.p>

        <NavLink to='/addfoods'>
          <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300">
            Donate Food Now
          </motion.button>
        </NavLink>

      </div>
    </div>
  );
};

export default Banner;



// import React from 'react';
// import { Link } from 'react-router';
// import { motion } from 'framer-motion';

// const Banner = () => {
//   return (
//     <div
//       className="bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center justify-center px-4 md:px-10 py-20 text-white relative"
//       style={{
//         backgroundImage: "url('https://i.ibb.co/jP8yxY7k/banner.jpg')",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-opacity-50 z-0"></div>

//       {/* Content */}
//       <motion.div
//         className="relative z-10 text-center max-w-2xl"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: 'easeOut' }}
//       >
//         <motion.h1
//           className="text-4xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-lg"
//           initial={{ scale: 0.8 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           Welcome to <span className="text-orange-400">ShareBite</span>
//         </motion.h1>

//         <motion.p
//           className="text-lg font-bold md:text-xl bg-white rounded-2xl p-4 text-orange-500 mb-6 drop-shadow"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           A platform that connects food donors and recipients to reduce food waste and hunger.
//         </motion.p>

//         <motion.p
//           className="mb-6 text-orange-500 rounded-2xl font-bold p-4 bg-white hidden sm:block"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.7 }}
//         >
//           Join our mission to create a community where no meal goes to waste and no one goes hungry.
//         </motion.p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
//         >
//           Donate Food Now
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

// export default Banner;




