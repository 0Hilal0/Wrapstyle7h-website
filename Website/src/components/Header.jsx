import { Link, useNavigate } from "react-router-dom";
import "../style/Header.css";

function Header() {
    const navigate = useNavigate();

    const goToContact = () => {
        navigate("/");

        setTimeout(() => {
            const section = document.getElementById("contact");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    const goToAbout = () => {
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
                <Link to="/" className="logo">
                    Wrapstyle 7H
                </Link>

                <nav>
                    <ul className="nav-links">
                        <li>
                            <button onClick={goToAbout}>Om Oss</button>
                        </li>
                        <li>
                            <Link to="/tjanster">Tjänster</Link>
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