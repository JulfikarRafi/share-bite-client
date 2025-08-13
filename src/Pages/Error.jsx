import React from "react";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-orange-100 min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-9xl font-extrabold text-orange-500 tracking-widest">
        404
      </h1>
      <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
        Oops! Page Not Found
      </p>
      <p className="text-gray-600 mt-2 max-w-md">
        The page you are looking for might have been removed,  
        had its name changed, or is temporarily unavailable.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition-colors duration-300"
      >
        Go Back Home
      </button>
    </section>
  );
};

export default Error;
