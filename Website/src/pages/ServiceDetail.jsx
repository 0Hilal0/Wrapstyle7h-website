import { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
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
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (!service) return null;

  return (
    <section className="service-detail-page">
      <div className="service-detail-container">

        {/* Tillbaka-knapp */}
        <Link to="/tjanster" className="service-back-btn">
          ← Tillbaka till tjänster
        </Link>

        {/* Titel */}
        <h1 className="service-detail-title">{service.title}</h1>

        {/* Bild */}
        <div className="service-detail-image-wrapper">
          <img
            className="service-detail-image"
            src={service.image}
            alt={service.title}
          />
        </div>

        {/* Beskrivning */}
        <div className="service-detail-info">
          <p>{service.description}</p>
        </div>

        {/* Vad ingår */}
        <div className="service-detail-includes">
          <h2>Vad ingår?</h2>
          <ul>
            <li>✅ Kostnadsfri konsultation</li>
            <li>✅ Professionellt utförande</li>
            <li>✅ Högkvalitativa material</li>
            <li>✅ Garanti på utfört arbete</li>
            <li>✅ Noggrann slutkontroll</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="service-detail-faq">
          <h2>Vanliga frågor</h2>

          <div className="faq-item">
            <h3>Hur lång tid tar det?</h3>
            <p>Beroende på tjänst och fordon tar det vanligtvis mellan 1–3 dagar. Vi ger dig en mer exakt tidsuppskattning vid konsultation.</p>
          </div>

          <div className="faq-item">
            <h3>Hur länge håller det?</h3>
            <p>Med rätt skötsel håller våra produkter i flera år. Vi använder enbart material från ledande tillverkare med beprövad hållbarhet.</p>
          </div>

          <div className="faq-item">
            <h3>Vad kostar det?</h3>
            <p>Priset varierar beroende på fordonets storlek och önskad tjänst. Kontakta oss för ett kostnadsfritt prisförslag.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="service-detail-cta">
          <h2>Intresserad?</h2>
          <p>Kontakta oss idag för en kostnadsfri konsultation och offert.</p>
          <button onClick={goToContact} className="service-cta-btn">
            Få en offert
          </button>
        </div>

      </div>
    </section>
  );
}

export default ServiceDetail;