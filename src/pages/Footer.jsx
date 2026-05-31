import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo + About */}
        <div className="footer-section">
          <h2>Smart Service Point</h2>
          <p>
            Your trusted partner for Electrician, Plumber, AC Repair,
            Car & Bike services at your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/login">Login</a>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <p>Electrician</p>
          <p>Plumber</p>
          <p>AC Repair</p>
          <p>Car Service</p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@gmail.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: India</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Smart Service Point. All rights reserved.</p>
      </div>

    </footer>
  );
}