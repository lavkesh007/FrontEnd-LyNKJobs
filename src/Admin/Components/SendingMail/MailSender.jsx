import React, { useState } from "react";
import Swal from "sweetalert2";

const MailSender = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleMailSender = async (e) => {
    e.preventDefault();
    if (!subject || !message) return;

    // ✅ Convert plain text to HTML
    const formattedMessage = message
      .replace(/\n/g, "<br>") // line break support
      .replace(/•/g, "&bull;")
      .replace(/📌|📍|📅|⏰|💻|✨|👉/g, "<br><br>$&");

    try {
      const res = await fetch("https://api.jobslynk.in/admin/mailSender", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("adminToken"),
        },
        body: JSON.stringify({
          subject,
          message: formattedMessage, // ✅ send HTML
        }),
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
    <div className="min-h-[80vh] p-4 sm:p-6 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-4 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            📧 Contact With User
          </h2>

          <p className="text-gray-600 mt-3">
            Send professional emails to users with proper formatting.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3059/3059518.png"
            alt="contact"
            className="mt-6 w-52"
          />
        </div>

        {/* FORM */}
        <form onSubmit={handleMailSender} className="space-y-4">

          <h3 className="text-xl font-semibold text-gray-800">
            ✉️ Send Message
          </h3>

          <input
            type="text"
            placeholder="Enter Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border rounded-lg p-3"
            required
          />

          <textarea
            rows="8"
            placeholder="Write your message (you can use bullets, emojis, line breaks)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded-lg p-3"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default MailSender;