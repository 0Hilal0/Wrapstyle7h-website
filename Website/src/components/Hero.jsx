import "../style/Hero.css";
import carImage from '../assets/images/Bil-Folie.webp';

function Hero() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-image">
          <img src={carImage} alt="Bil foliering" />
        </div>

        <div className="hero-text">
          <h1>Vi bryr oss om dig</h1>
          <p>
            Perfektion i varje detalj.
            <br />
            Från helfoliering till osynligt lackskydd.
            <br />
            Vi levererar hantverksskicklighet som syns i resultatet och håller i längden.
          </p>
          <button className="hero-cta" onClick={scrollToContact}>
            Få en offert
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;