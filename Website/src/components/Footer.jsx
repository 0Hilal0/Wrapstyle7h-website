import { Link, useNavigate } from "react-router-dom";
import "../style/Footer.css";

function Footer() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("contact");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const goToAbout = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("about");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">Wrapstyle 7H</Link>
          <p>Professionell solfilm, PPF, foliering och företagsdekor. Vi levererar kvalitet som syns och håller.</p>
        </div>

        <div className="footer-links">
          <h4>Navigering</h4>
          <ul>
            <li><button onClick={goToAbout}>Om Oss</button></li>
            <li><Link to="/tjanster">Tjänster</Link></li>
            <li><button onClick={goToContact}>Kontakt</button></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Tjänster</h4>
          <ul>
            <li><Link to="/tjanster/solfilm">Solfilm</Link></li>
            <li><Link to="/tjanster/foliering">Foliering</Link></li>
            <li><Link to="/tjanster/ppf">PPF – Lackskydd</Link></li>
            <li><Link to="/tjanster/foretagsdekor">Företagsdekor</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Kontakt</h4>
          <p>📍 Segloravägen 20M</p>
          <p>📞 073 873 10 33</p>
          <p>✉️ Wrapstyle7h@outlook.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Wrapstyle 7H. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
}

export default Footer;