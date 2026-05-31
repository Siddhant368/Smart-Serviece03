import "./ServiceCard.css";
import { useNavigate } from "react-router-dom";

export default function ServiceCard({ service }) {
  const navigate = useNavigate();

  return (
    <div className="service-card">

      <div className="service-img-box">
        <img 
          src={service.image} 
          alt={service.title} 
        />

        <div className="overlay">
          <span>View</span>
        </div>
      </div>

      <div className="service-content">
        <h2>{service.title}</h2>
        <p>{service.desc}</p>

        <div className="bottom">
          <span className="price">₹ {service.price}</span>

          <button onClick={() => navigate("/booking")}>
            Book Now
          </button>
        </div>
      </div>

    </div>
  );
}