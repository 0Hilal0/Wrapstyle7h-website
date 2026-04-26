import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.png'
import "../style/Header.css";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const goToContact = () => {
    setMenuOpen(false);
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const goToAbout = () => {
    setMenuOpen(false);
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("about");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="Wrapstyle 7H logotyp" className="logo-img" />
            <span>Wrapstyle 7H</span>
        </Link>

        <button
          className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Öppna meny"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${menuOpen ? "nav-menu--open" : ""}`}>
          <ul className="nav-links">
            <li>
              <button onClick={goToAbout}>Om Oss</button>
            </li>
            <li>
              <Link to="/tjanster" onClick={() => setMenuOpen(false)}>Tjänster</Link>
            </li>
            <li>
              <button onClick={goToContact} className="nav-cta">
                Kontakt
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;