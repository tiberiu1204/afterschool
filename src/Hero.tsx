import "./Hero.css";

const Hero = () => {
  return (
    <section className="section">
      <div className="hero-wrapper">
        <div className="hero-landing">
          <h1 className="hero-title">
            Educație <br /> de calitate <br /> copilului tău
          </h1>
          <h2 className="hero-description">
            Alege să investești în educația copilului tău, prin a îl incrie – la
            fel ca mulți alți părinți mulțumiți – la noi la afterschool, unde se
            va dezvolta armonios pe plan intelectual, social, și emotional.
          </h2>
          <a className="button button__primaryTheme" href="tel:+40766553533">
            Sună acum
          </a>
          <a className="button button__secondaryTheme" href="#">
            Program și oferte
          </a>
        </div>
        <div className="hero-image"></div>
      </div>
    </section>
  );
};

export default Hero;
