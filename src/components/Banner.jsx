import React from 'react';
import { Link } from 'react-router';

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
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-lg">
          Welcome to <span className="text-orange-400">ShareBite</span>
        </h1>
        <p className="text-lg font-bold md:text-xl bg-white rounded-2xl p-4 text-orange-500 mb-6 drop-shadow">
          A platform that connects food donors and recipients to reduce food waste and hunger.
        </p>
        <p className="mb-6 text-orange-500 rounded-2xl font-bold p-4 bg-white hidden sm:block">
          Join our mission to create a community where no meal goes to waste and no one goes hungry.
        </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300">
            Donate Food Now
          </button>
        
      </div>
    </div>
  );
};

export default Banner;
