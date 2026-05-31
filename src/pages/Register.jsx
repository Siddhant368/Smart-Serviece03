import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirm) {
      alert("All fields required");
      return;
    }

    if (form.password !== form.confirm) {
      alert("Passwords do not match ❌");
      return;
    }

    alert("Account Created Successfully 🚀");
  };

  return (
    <div className="register-page">

      <form className="register-card" onSubmit={handleSubmit}>
        <h2 className="register-title">Create Account 🚀</h2>
        <p className="register-subtitle">Join Smart Service Point</p>

        {/* NAME */}
        <div className="input-group">
          <input name="name" required onChange={handleChange} />
          <label>Full Name</label>
        </div>

        {/* EMAIL */}
        <div className="input-group">
          <input type="email" name="email" required onChange={handleChange} />
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
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="input-group">
          <input
            type={show ? "text" : "password"}
            name="confirm"
            required
            onChange={handleChange}
          />
          <label>Confirm Password</label>

          <span className="toggle" onClick={() => setShow(!show)}>
            {show ? "🙈" : "👁️"}
          </span>
        </div>

        {/* BUTTON */}
        <button className="register-btn">Create Account</button>

        <p className="register-text">
          Already have account? <Link to="/login">Login</Link>
        </p>
      </form>

    </div>
  );
}