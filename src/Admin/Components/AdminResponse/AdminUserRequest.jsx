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
        if (Array.isArray(data)) {
          setMessages(data);
        } else {
          setMessages([]);
        }
      })
      .catch(() => setMessages([]));
  };

  useEffect(() => {
    fetchMessages(); // initial load

    const interval = setInterval(() => {
      fetchMessages(); // every 5 sec
    }, 5000);

    return () => clearInterval(interval); // cleanup
  }, []);
  const handleDelete = (id) => {
  fetch(`https://api.jobslynk.in/admin/deleteMessage/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("adminToken")
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setMessages(prev => prev.filter(msg => msg.id !== id));
    })
    .catch(err => console.error(err));
};
  return (
    <div className="p-5">

      <h2 className="text-2xl font-bold mb-4">User Messages</h2>

      <div className="overflow-x-auto max-h-[400px] overflow-y-auto">

        <table className="w-full border border-gray-300 rounded-lg">

          {/* 🔥 Fixed Header */}
          <thead className="bg-gray-200 sticky top-0">
            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Message</th>
               <th className="p-3 border">Delete</th>
            </tr>
          </thead>

          {/* 🔥 Dynamic Data */}
          <tbody>
            {messages.length > 0 ? (
              messages.map((msg) => (
                <tr key={msg.id} className="text-center hover:bg-gray-100">
                  <td className="p-2 border">{msg.id}</td>
                  <td className="p-2 border">{msg.userName}</td>
                  <td className="p-2 border">{msg.userEmail}</td>
                  <td className="p-2 border">{msg.userMessage}</td>
                  <td className="p-2 border"><button className='bg-red-500 text-white p-2 rounded-lg' onClick={()=>handleDelete(msg.id)}>Delete</button></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center">
                  No Messages
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default AdminUserRequest;