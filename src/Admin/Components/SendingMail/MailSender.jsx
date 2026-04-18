import React, { useState } from "react";
import Swal from "sweetalert2";

const MailSender = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
 

  // ✅ Handle Send Mail
  const handleMailSender = async (e) => {
    e.preventDefault();

    if (!subject || !message) {
      
      return;
    }

    try {
      const res = await fetch("https://api.jobslynk.in/admin/mailSender", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("adminToken"),
        },
        body: JSON.stringify({
          subject: subject,
          message: message,
        }),
      });

      if (res.ok) {
        Swal.fire({
          title : "Mail Sent Successfully",
          icon : "success"
        })
        setSubject("");
        setMessage("");
      } else {
        Swal.fire({
          title : "Error",
          icon : "error"
        })
      }
    } catch (error) {
      Swal.fire({
          title : "Error",
          icon : "error"
        })
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8 grid md:grid-cols-2 gap-10">
        
        {/* Left - Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Contact With User
          </h2>

          <p className="text-gray-600 mt-3">
            Send emails directly to users to provide updates, job notifications,
            or important information. Ensure your message is clear and relevant
            before sending.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3059/3059518.png"
            alt="contact"
            className="mt-8 w-64"
          />
        </div>

        {/* Right - Form */}
        <form onSubmit={handleMailSender} className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Send Message
          </h3>

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Message */}
          <textarea
            rows="10"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {/* Status Message
          {status && (
            <p className="text-center text-sm mt-2 text-gray-700">
              {status}
            </p>
          )} */}
        </form>
      </div>
    </div>
  );
};

export default MailSender;