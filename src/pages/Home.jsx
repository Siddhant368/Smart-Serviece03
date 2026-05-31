import "./Home.css";
import Footer from "../pages/Footer";
export default function Home() {
  return (
    <>
    <div className="home-container">
      <div className="overlay"></div>

      <div className="home-content">
        <h1 className="home-title">
          Smart Service Point
        </h1>

        <p className="home-subtitle">
          Book Electrician, Plumber, AC Repair & more in seconds ⚡
        </p>

        <div className="btn-group">
          <a href="/services" className="home-btn">
            Book Now
          </a>

          <a href="/login" className="home-btn-outline">
            Login
          </a>
        </div>
        
      </div>
   
    </div>
        
        <Footer/>
    </>
  
  );
}