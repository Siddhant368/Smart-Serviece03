import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdown, setDropdown] = useState(false);

  const navigate = useNavigate();
  const dropdownRef = useRef();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) setUser(data);
  }, []);

  // click outside close
  useEffect(() => {
    const handleClick = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <h1 className="logo">
          Service<span>Book</span>
        </h1>

        {/* NAV */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About</NavLink>

          {user ? (
            <div className="profile-box" ref={dropdownRef}>
              
              <img
                src={user.image || "https://i.pravatar.cc/40"}
                alt="profile"
                className="profile-img"
                onClick={() => setDropdown(!dropdown)}
              />

              {dropdown && (
                <div className="dropdown">
                  
                  <div className="dropdown-top">
                    <img
                      src={user.image || "https://i.pravatar.cc/60"}
                      alt="profile"
                    />
                    <div>
                      <h4>{user.name}</h4>
                      <p>{user.email}</p>
                    </div>
                  </div>

                  <div className="dropdown-divider"></div>

                  <button onClick={() => navigate("/profile")}>
                    Profile
                  </button>

                  <button className="logout" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/login" className="btn">
              Login
            </NavLink>
          )}
        </nav>

        {/* MOBILE */}
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </div>

      </div>
    </header>
  );
}