import "../style/Hero.css";
import carImage from "../assets/images/Bil-Folie.webp";

function Hero() {
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
            Från helfoliering till osynligt lackskydd. 
            Vi levererar hantverksskicklighet som syns i resultatet och håller i längden.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Hero;