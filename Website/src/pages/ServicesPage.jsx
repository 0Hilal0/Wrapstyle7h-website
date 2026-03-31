import { Link } from "react-router-dom";
import services from "../data/servicesData.js";
import '../style/Services.css'

function ServicesPage() {
  return (
    <section className="services-page">
      <div className="services-page-container">
        <h1>Våra tjänster</h1>

        <div className="services-grid">
          {services.map((service) => (
            <Link
              to={`/tjanster/${service.slug}`}
              key={service.slug}
              className="service-card-link"
            >
              <article className="service-card">
                <h3>{service.title}</h3>
                <img src={service.image} alt={service.title} />
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;