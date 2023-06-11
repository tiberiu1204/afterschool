import "./ContactMethods.css";

function ContactMethods() {
  return (
    <section className="section">
      <div className="section-triangles-transition primary"></div>
      <div className="section-container">
        <div className="section-layout-container collumn-layout">
          <h1 className="section-title">Toate metodele de contact</h1>
          <div className="contact-medthods-wraper">
            <div className="contact-method-wrapper">
              <h1 className="method-name">Telefon</h1>
              <a href="tel:+40766553533" className="method-link">
                <span className="dark">Popescu Nina: </span>0766 553 533
              </a>
              <a href="tel:+40763621845" className="method-link">
                <span className="dark">Gheldi Filis: </span>0763 621 845
              </a>
            </div>
            <div className="contact-method-wrapper">
              <h1 className="method-name">Facebook</h1>
              <a
                href="https://www.facebook.com/profile.php?id=100083276052390"
                className="method-link"
                target="_blank"
              >
                Stelute Curcubeu Afterschool
              </a>
            </div>
            <div className="contact-method-wrapper">
              <h1 className="method-name">Instagram</h1>
              <a
                href="https://www.facebook.com/profile.php?id=100083276052390"
                className="method-link"
                target="_blank"
              >
                Stelute Curcubeu Afterschool
              </a>
            </div>
            <div className="contact-method-wrapper">
              <h1 className="method-name">Whatsapp</h1>
              <a
                href="https://wa.me/+40766553533"
                className="method-link"
                target="_blank"
              >
                <span className="dark">Popescu Nina: </span>
                https://wa.me/+40766553533
              </a>
              <a
                href="https://wa.me/+40763621845"
                className="method-link"
                target="_blank"
              >
                <span className="dark">Gheldi Filis: </span>
                https://wa.me/+40766553533
              </a>
            </div>
            <div className="contact-method-wrapper">
              <h1 className="method-name">Email</h1>
              <a
                href="mailto:stars.afterschool88@gmail.com"
                className="method-link"
                target="_blank"
              >
                stars.afterschool88@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMethods;
