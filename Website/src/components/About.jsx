import carImage from "../assets/images/OmOss.png";
import "../style/About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-text">
          <h2>Om Oss</h2>

          <p>
            Wrapstyle 7H erbjuder professionella lösningar inom solfilm, PPF,
            foliering och dekor. Vi hjälper både privatpersoner och företag att
            förbättra, skydda och profilera sina fordon och ytor.
          </p>

          <p>
            Oavsett om det handlar om att tona rutor för bättre komfort,
            skydda lacken med PPF eller skapa en helt ny look med foliering,
            arbetar vi alltid med högkvalitativa material och noggrant utförande.
          </p>

          <p>
            Vi tar även fram dekor och företagsprofilering, från enkla logotyper
            till helfolieringar. Vårt fokus är precision, hållbarhet och ett
            resultat som ser professionellt ut i varje detalj.
          </p>
        </div>

        <div className="about-image">
          <img src={carImage} alt="Foliering, solfilm och dekor Wrapstyle 7H" />
        </div>

      </div>
    </section>
  );
}

export default About;