import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import services from "../data/servicesData";
import "../style/ServiceDetail.css";

function ServiceDetail() {
  const { serviceName } = useParams();
  const navigate = useNavigate();

  const service = services.find((item) => item.slug === serviceName);

  useEffect(() => {
    if (!service) {
      navigate("/tjanster");
    }
  }, [service, navigate]);

  const goToContact = () => {
        navigate("/");

        setTimeout(() => {
            const section = document.getElementById("contact");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

  if (!service) {
    return null;
  }

  return (
    <section className="service-detail-page">
      <div className="service-detail-container">
        <h1 className="service-detail-title">{service.title}</h1>

        <div className="service-detail-image-wrapper">
          <img
            className="service-detail-image"
            src={service.image}
            alt={service.title}
          />
        </div>

        <div className="service-detail-info">
          <p>{service.description}</p>
        </div>

        <div className="service-detail-actions">
            <a href="/tjanster" className="service-detail-button">
            Tjänster
          </a>
          <a href="/#contact" onClick={goToContact} className="service-detail-button">
            Kontakta oss
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetail;