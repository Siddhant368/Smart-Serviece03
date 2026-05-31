import "./Booking.css";
import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.service || !form.date || !form.time || !form.address) {
      alert("Please fill all details");
      return;
    }

    alert("Booking Confirmed 🚀");
  };

  return (
    <div className="booking-page">

      {/* LEFT */}
      <div className="left-panel">
        <h1>Book Your Service ⚡</h1>
        <p>Fast, reliable & doorstep services</p>

        <div className="features">
          <span>✔ Trusted Professionals</span>
          <span>✔ Instant Booking</span>
          <span>✔ Affordable Pricing</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="right-panel">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Book Service</h2>

          <div className="field">
            <input type="text" name="name" required onChange={handleChange} placeholder=" " />
            <label>Full Name</label>
          </div>

          <div className="field">
            <select name="service" required onChange={handleChange}>
              <option value="" hidden></option>
              <option>Electrician</option>
              <option>Plumber</option>
              <option>AC Repair</option>
              <option>Car Service</option>
              <option>Bike Repair</option>
            </select>
            <label>Select Service</label>
          </div>

          <div className="row">
            <div className="field">
              <input type="date" name="date" required onChange={handleChange} placeholder=" " />
              <label>Date</label>
            </div>

            <div className="field">
              <input type="time" name="time" required onChange={handleChange} placeholder=" " />
              <label>Time</label>
            </div>
          </div>

          <div className="field">
            <textarea name="address" required onChange={handleChange} placeholder=" "></textarea>
            <label>Address</label>
          </div>

          <button className="btn">Confirm Booking</button>
        </form>
      </div>

    </div>
  );
}