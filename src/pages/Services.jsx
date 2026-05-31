import "./Services.css";
import services from "../data/services";
import ServiceCard from "../components/ServiceCard";
import Footer from "../pages/Footer";

export default function Services() {
  return (
    <div className="services-page">

      {/* HERO */}
      <div className="services-hero"></div>

      {/* SERVICES GRID */}
      <div className="services-container">
        <div className="services-grid">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
      <Footer/>

    </div>
  );
}