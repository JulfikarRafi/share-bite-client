import React from "react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const ContactUs = () => {
  return (
    <section className="bg-orange-100 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Get In Touch
        </h2>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
          Have questions, feedback, or ideas? We’d love to hear from you!  
          Whether you’re a food donor, recipient, or just curious about ShareBite,  
          our team is here to help.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Address */}
          <div className="flex flex-col items-center">
            <div className="bg-orange-400 text-white p-4 rounded-full mb-4">
              <MdLocationOn size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Address</h3>
            <p className="text-gray-600 mt-2">
              36/1 Sagordighirpar   
              Subidbazar, Sylhet, Bangladesh
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="bg-orange-400 text-white p-4 rounded-full mb-4">
              <MdEmail size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
            <p className="text-gray-600 mt-2">support@sharebite.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <div className="bg-orange-400 text-white p-4 rounded-full mb-4">
              <MdPhone size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
            <p className="text-gray-600 mt-2">+880 1746471169</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
