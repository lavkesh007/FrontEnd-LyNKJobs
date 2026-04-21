import React, { useEffect, useState } from 'react';

const AdminUserRequest = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = () => {
    fetch("https://api.jobslynk.in/admin/allMessages", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("adminToken")
      }
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setMessages(data);
        else setMessages([]);
      })
      .catch(() => setMessages([]));
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDelete = (id) => {
    fetch(`https://api.jobslynk.in/admin/deleteMessage/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("adminToken")
      }
    })
      .then(res => res.json())
      .then(() => {
        setMessages(prev => prev.filter(msg => msg.id !== id));
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="p-3 sm:p-5">

      <h2 className="text-lg sm:text-2xl font-bold mb-4 text-gray-700">
        User Messages
      </h2>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block overflow-x-auto max-h-[450px] rounded-lg shadow">

        <table className="w-full border border-gray-300 bg-white">

          <thead className="bg-gray-200 sticky top-0">
            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Message</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {messages.length > 0 ? (
              messages.map((msg) => (
                <tr key={msg.id} className="text-center hover:bg-gray-100">
                  <td className="p-2 border">{msg.id}</td>
                  <td className="p-2 border">{msg.userName}</td>
                  <td className="p-2 border break-words">{msg.userEmail}</td>
                  <td className="p-2 border break-words">{msg.userMessage}</td>
                  <td className="p-2 border">
                    <button
                      className='bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600'
                      onClick={() => handleDelete(msg.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center">
                  No Messages
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

      {/* MOBILE CARD VIEW */}
      <div className="md:hidden flex flex-col gap-3">

        {messages.length > 0 ? (
          messages.map((msg) => (
            <div key={msg.id} className="bg-white p-4 rounded-xl shadow">

              <div className="text-sm text-gray-600 mb-1">
                <strong>ID:</strong> {msg.id}
              </div>

              <div className="text-sm text-gray-600 mb-1">
                <strong>Name:</strong> {msg.userName}
              </div>

              <div className="text-sm text-gray-600 mb-1 break-words">
                <strong>Email:</strong> {msg.userEmail}
              </div>

              <div className="text-sm text-gray-600 mb-2 break-words">
                <strong>Message:</strong> {msg.userMessage}
              </div>

              <button
                className="bg-red-500 text-white w-full py-2 rounded-lg hover:bg-red-600"
                onClick={() => handleDelete(msg.id)}
              >
                Delete
              </button>

            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No Messages</div>
        )}

      </div>

    </div>
  );
};

export default AdminUserRequest;