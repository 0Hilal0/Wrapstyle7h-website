import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../style/Contact.css';

const SERVICE_ID  = 'service_hzigr5h';
const TEMPLATE_ID = 'template_e326jvm';
const PUBLIC_KEY  = 'wffkNGU1Y0yRhS9tC';

const MAP_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1792.9903961680618!2d12.8274413124568!3d57.69544429220699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46500847ca6e7989%3A0x11fefa0ce93d576b!2sSeglorav%C3%A4gen%2020M%2C%20504%2064%20Bor%C3%A5s!5e0!3m2!1ssv!2sse!4v1774550019842!5m2!1ssv!2sse';

const MapIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ namn: '', tel: '', mail: '', amne: '', meddelande: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      namn:       form.namn,
      tel:        form.tel,
      mail:       form.mail,
      amne:       form.amne,
      meddelande: form.meddelande,
    }, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setLoading(false);
      })
      .catch(() => {
        setError('Något gick fel. Försök igen senare.');
        setLoading(false);
      });
  };

  const resetForm = () => {
    setForm({ namn: '', tel: '', mail: '', amne: '', meddelande: '' });
    setSubmitted(false);
    setError('');
  };

  return (
    <section className="contact-page" id="contact">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h1>Kontakta <em>oss</em></h1>
          <p>Vi återkommer så snart vi kan.</p>
        </div>

        <div className="contact-grid">
          {/* Vänster: formulär */}
          <div>
            {submitted ? (
              <div className="form-success">
                <h3>Tack!</h3>
                <p>Ditt meddelande har skickats. Vi hör av oss inom kort.</p>
                <button className="submit-btn" onClick={resetForm}>Skicka igen</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                  <label htmlFor="namn">Namn</label>
                  <input id="namn" name="namn" type="text" placeholder="Ditt namn" value={form.namn} onChange={handleChange} required />
                </div>
                <div className="form-field">
                  <label htmlFor="tel">Tel</label>
                  <input id="tel" name="tel" type="tel" placeholder="+46 70 000 00 00" value={form.tel} onChange={handleChange} />
                </div>
                <div className="form-field">
                  <label htmlFor="mail">Mail</label>
                  <input id="mail" name="mail" type="email" placeholder="din@mail.se" value={form.mail} onChange={handleChange} required />
                </div>
                <div className="form-field">
                  <label htmlFor="amne">Ämne</label>
                  <select id="amne" name="amne" value={form.amne} onChange={handleChange} required>
                    <option value="" disabled>Välj ett ämne...</option>
                    <option value="Foliering">Foliering</option>
                    <option value="Solfilm">Solfilm</option>
                    <option value="PPF">PPF-Lackskydd</option>
                    <option value="Offert">Offertförfrågan</option>
                    <option value="Dekor" >Företags dekor</option>
                    <option value="Övrigt">Övrigt</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="meddelande">Meddelande</label>
                  <textarea id="meddelande" name="meddelande" placeholder="Skriv ditt meddelande här..." value={form.meddelande} onChange={handleChange} required />
                </div>
                {error && <p className="form-error">{error}</p>}
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Skickar...' : 'Skicka →'}
                </button>
              </form>
            )}
          </div>

          {/* Höger: karta */}
          <div className="contact-map">
            {MAP_URL ? (
              <iframe src={MAP_URL} title="Karta" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            ) : (
              <div className="map-placeholder">
                <MapIcon />
                <span>Karta</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}