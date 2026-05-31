import "./About.css";
import profile from "../assets/profile.png"; // apni image yaha lagana

export default function About() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <div className="about-hero">
        <div className="overlay"></div>

        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Smart Service Point – Your Trusted Home Service Partner</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src={profile} alt="profile" />
        </div>

        {/* RIGHT TEXT */}
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We provide trusted home services like Electrician, Plumber, AC Repair,
            Car & Bike services. Our mission is to make your life easy with fast
            and reliable service at your doorstep.
          </p>

          <h2>Our Mission</h2>
          <p>
            Deliver high-quality service with trusted professionals and ensure
            customer satisfaction with every booking.
          </p>

          <button className="about-btn">Contact Us</button>
        </div>

      </div>

    </div>
  );
}