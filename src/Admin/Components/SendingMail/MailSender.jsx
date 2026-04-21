import React, { useState } from "react";
import Swal from "sweetalert2";

const MailSender = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleMailSender = async (e) => {
    e.preventDefault();
    if (!subject || !message) return;

    try {
      const res = await fetch("https://api.jobslynk.in/admin/mailSender", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("adminToken"),
        },
        body: JSON.stringify({ subject, message }),
      });

      if (res.ok) {
        Swal.fire({ title: "Mail Sent Successfully", icon: "success" });
        setSubject("");
        setMessage("");
      } else {
        Swal.fire({ title: "Error", icon: "error" });
      }
    } catch (error) {
      Swal.fire({ title: "Error", icon: "error" });
    }
  };

  return (
    <div className="min-h-[80vh] p-4 sm:p-6 
                    bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">

      <div className="max-w-6xl mx-auto 
                      bg-white/80 backdrop-blur-md 
                      shadow-2xl rounded-2xl 
                      p-4 sm:p-8 
                      grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center gap-2">
            📧 Contact With User
          </h2>

          <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
            Send emails directly to users to provide updates, job notifications,
            or important information. Ensure your message is clear and relevant
            before sending.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3059/3059518.png"
            alt="contact"
            className="mt-6 w-40 sm:w-56 md:w-64 drop-shadow-lg hover:scale-105 transition"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <form onSubmit={handleMailSender} className="space-y-4">

          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center md:text-left">
            ✉️ Send Message
          </h3>

          {/* SUBJECT */}
          <input
            type="text"
            placeholder="Enter Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 
                       focus:outline-none focus:ring-2 focus:ring-blue-400 
                       transition"
            required
          />

          {/* MESSAGE */}
          <textarea
            rows="8"
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 
                       focus:outline-none focus:ring-2 focus:ring-blue-400 
                       transition"
            required
          ></textarea>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold 
                       bg-gradient-to-r from-blue-500 to-blue-700 
                       hover:from-blue-600 hover:to-blue-800 
                       shadow-md hover:shadow-xl transition duration-300"
          >
            🚀 Send Message
          </button>

        </form>

      </div>
    </div>
  );
};

export default MailSender;