// import { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import Swal from "sweetalert2";

// const SendEmail = () => {
//   const formRef = useRef();
//   const [loading, setLoading] = useState(false);

//   const handleSendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,   // your EmailJS service ID
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // your template ID
//         formRef.current,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // your public key
//       )
//       .then(
//         (result) => {
//           Swal.fire({
//             icon: "success",
//             title: "Email Sent!",
//             text: "Your message has been delivered successfully!",
//             timer: 2000,
//             showConfirmButton: false,
//           });
//           formRef.current.reset();
//           setLoading(false);
//         },
//         (error) => {
//           Swal.fire({
//             icon: "error",
//             title: "Oops!",
//             text: "Something went wrong. Please try again later.",
//           });
//           setLoading(false);
//         }
//       );
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6">
//       <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
//         Send Us a Message ✉️
//       </h2>
//       <form ref={formRef} onSubmit={handleSendEmail} className="space-y-4">
//         <div>
//           <label className="block mb-1 text-gray-600">Your Name</label>
//           <input
//             type="text"
//             name="user_name"
//             required
//             className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 text-gray-600">Your Email</label>
//           <input
//             type="email"
//             name="user_email"
//             required
//             className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 text-gray-600">Message</label>
//           <textarea
//             name="message"
//             rows="4"
//             required
//             className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-2 rounded-lg text-white font-medium transition ${
//             loading
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-blue-600 hover:bg-blue-700"
//           }`}
//         >
//           {loading ? "Sending..." : "Send Message"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SendEmail;






import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { FaUserAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const SendEmail = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Email Sent! 🎉",
            text: "Your message has been delivered successfully!",
            timer: 2000,
            showConfirmButton: false,
          });
          formRef.current.reset();
          setLoading(false);
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Something went wrong. Please try again later.",
          });
          setLoading(false);
        }
      );
  };

  return (
    <section className="bg-orange-100 py-10 px-4 mt-24">
      <div className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-8 border border-orange-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Have feedback or a question? We’d love to hear from you!
        </p>

        <form ref={formRef} onSubmit={handleSendEmail} className="space-y-5">
          {/* Name Input */}
          <div className="relative">
            <FaUserAlt className="absolute left-3 top-3.5 text-orange-500" />
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-orange-500" />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
            />
          </div>

          {/* Message Input */}
          <div>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Write your message..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
            ></textarea>
          </div>

          {/* Send Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-white font-semibold transition shadow-md ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            }`}
          >
            {loading ? (
              <span className="animate-pulse">Sending...</span>
            ) : (
              <>
                <FaPaperPlane className="animate-bounce" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SendEmail;

