import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    // ✅ 👇 USER SAVE KAR RAHE HAIN
    const userData = {
      email: form.email,
      name: form.email.split("@")[0], // username auto
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("Login Successful 🚀");

    // 👇 redirect
    setTimeout(() => {
      navigate("/");
      window.location.reload(); // 🔥 navbar update ke liye
    }, 1000);
  };

  return (
    <div className="login-page">

      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Login to continue</p>

        {/* EMAIL */}
        <div className="input-group">
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
          />
          <label>Email</label>
        </div>

        {/* PASSWORD */}
        <div className="input-group">
          <input
            type={show ? "text" : "password"}
            name="password"
            required
            onChange={handleChange}
          />
          <label>Password</label>

          <span className="toggle" onClick={() => setShow(!show)}>
            {show ? "🙈" : "👁️"}
          </span>
        </div>

        {/* BUTTON */}
        <button className="login-btn">Login</button>

        {/* EXTRA */}
        <p className="login-extra">
          New user? <Link to="/register">Create account</Link>
        </p>
      </form>

    </div>
  );
}