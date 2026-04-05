import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { Link } from "react-router-dom";
import "../style/BeforeAfter.css";
import beforeAfterData from "../data/beforeAfterData.js";

export default function BeforeAfter() {
  return (
    <section className="ba-section">
      <div className="ba-section-header">
        <span className="ba-eyebrow">Resultatet talar för sig självt</span>
        <h2>Före & Efter</h2>
        <p>Dra i reglaget för att se skillnaden vårt arbete gör</p>
      </div>
 
      <div className="ba-grid">
        {beforeAfterData.map((item) => (
          <Link to={`/tjanster/${item.slug}`} key={item.id} className="ba-card-link">
            <div className="ba-card">
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={item.before} alt="Före" />}
                itemTwo={<ReactCompareSliderImage src={item.after} alt="Efter" />}
                className="ba-slider"
              />
              <div className="ba-card-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}