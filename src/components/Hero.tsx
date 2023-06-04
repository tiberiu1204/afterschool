import "./Hero.css";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="section">
      <div className="section-container">
        <div className="section-layout-container">
          <div className="hero-wrapper">
            <div className="hero-landing">
              <h1 className="hero-title">
                Educație <br /> de calitate <br /> copilului tău
              </h1>
              <h2 className="hero-description description">
                Alege să investești în educația copilului tău, prin a îl încrie
                – la fel ca mulți alți părinți mulțumiți – la noi la
                afterschool, unde se va dezvolta armonios pe plan intelectual,
                social, și emotional.
              </h2>
              <Button
                text="Sună acum"
                link="tel:+40766553533"
                style="primary"
              />
              <Button
                text="Program și oferte"
                link="tel:+40766553533"
                style="secondary"
              />
            </div>
            <div className="hero-visual">
              <img
                src="/assets/hero-img.jpg"
                alt="hero"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
