import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetch("https://api.jobslynk.in/user/me", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => setUser(data))
      .catch(() => setUser(null));
  }, []);

  const scrollToAbout = () => {
    navigate("/?scroll=about");
    setTimeout(() => {
      const section = document.getElementById("about");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <div id='home' className="w-full">
      
      {/* 🔥 TOP NAVBAR */}
      <div className="flex justify-between items-center px-4 md:px-10 py-2 bg-white shadow-md">

        {/* LOGO */}
        <div className="flex items-center">
          <h1 className='text-xl md:text-3xl text-slate-800 font-serif font-bold'>
            LyNK <span className='text-orange-600'>Job's</span>
          </h1>
        </div>

        {/* 🔥 DESKTOP MENU */}
        <div className="hidden md:flex gap-6 items-center">

          <p className="cursor-pointer text-gray-600 text-lg hover:text-orange-500 font-medium"
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 100);
            }}>
            Home
          </p>

          <p className="cursor-pointer text-gray-600 text-lg hover:text-orange-500 font-medium"
            onClick={scrollToAbout}>
            About
          </p>

          <p className="cursor-pointer text-gray-600 text-lg hover:text-orange-500 font-medium"
            onClick={() => {
              navigate('/user/practice');
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}>
            Practice
          </p>

          <p className="cursor-pointer text-gray-600 text-lg hover:text-orange-500 font-medium"
            onClick={() => {
              navigate('/user/contact');
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 100);
            }}>
            Contact
          </p>

          {/* USER */}
          {user ? (
            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <div className="cursor-pointer font-semibold text-orange-600 flex items-center gap-2">
                <span className="text-lg">{user.userName}</span>

                <img
                  className="w-8 h-8 rounded-full border"
                  src={
                    user?.image
                      ? user.image
                      : "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2191.jpg"
                  }
                  alt=""
                />
              </div>

              {open && (
                <div className="absolute right-0 w-44 bg-white border rounded-lg shadow-lg overflow-hidden">
                  <p
                    className="p-2 hover:bg-orange-100 cursor-pointer"
                    onClick={() => navigate("/user/profile")}
                  >
                    View Profile
                  </p>

                  <p
                    className="p-2 hover:bg-orange-100 cursor-pointer"
                    onClick={() => navigate("/user/alljobs")}
                  >
                    Jobs
                  </p>

                  <p
                    className="p-2 hover:bg-red-100 text-red-500 cursor-pointer"
                    onClick={() => {
                      localStorage.removeItem("token");
                      setUser(null);
                      navigate("/");
                    }}
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>
          ) : (
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
              onClick={() => navigate("/user/login")}
            >
              Login
            </button>
          )}

        </div>

        {/* 🔥 MOBILE BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-2xl font-bold"
          >
            ☰
          </button>
        </div>

      </div>

      {/* 🔥 MOBILE MENU */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-lg px-6 py-5 flex flex-col gap-4 text-lg font-medium">

          <p className="cursor-pointer text-gray-700 hover:text-orange-500"
            onClick={() => {
              navigate("/");
              setMobileMenu(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}>
            Home
          </p>

          <p className="cursor-pointer text-gray-700 hover:text-orange-500"
            onClick={() => {
              scrollToAbout();
              setMobileMenu(false);
            }}>
            About
          </p>

          {/* ✅ FIXED PRACTICE */}
          <p className="cursor-pointer text-gray-700 hover:text-orange-500"
            onClick={() => {
              navigate('/user/practice');
              setMobileMenu(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}>
            Practice
          </p>

          <p className="cursor-pointer text-gray-700 hover:text-orange-500"
            onClick={() => {
              navigate('/user/contact');
              setMobileMenu(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}>
            Contact
          </p>

          {/* USER SECTION */}
          {user ? (
            <>
              <p onClick={() => navigate("/user/profile")} className="cursor-pointer hover:text-orange-500">
                Profile
              </p>

              <p onClick={() => navigate("/user/alljobs")} className="cursor-pointer hover:text-orange-500">
                Jobs
              </p>

              <p className="text-red-500 cursor-pointer"
                onClick={() => {
                  localStorage.removeItem("token");
                  setUser(null);
                  navigate("/");
                }}>
                Logout
              </p>
            </>
          ) : (
            <button
              className="bg-orange-500 text-white py-2 rounded-lg"
              onClick={() => navigate("/user/login")}
            >
              Login
            </button>
          )}

        </div>
      )}

    </div>
  );
};

export default Navbar;