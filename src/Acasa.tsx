import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Mask from "./components/Mask";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Button from "./components/Button";
import { ReactNode } from "react";
import Location from "./components/Location";

function Acasa() {
  const heroTitle: ReactNode = (
    <>
      Educație <br /> de calitate <br /> copilului tău
    </>
  );
  const heroDescription = (
    <>
      Alege să investești în educația copilului tău, prin a îl încrie – la fel
      ca mulți alți părinți mulțumiți – la noi la afterschool, unde se va
      dezvolta armonios pe plan intelectual, social, și emotional.
    </>
  );
  return (
    <>
      <Mask />
      <Navbar />
      <Hero
        title={heroTitle}
        description={heroDescription}
        primaryButton={
          <Button text="Sună acum" link="tel:+40766553533" style="primary" />
        }
        secondaryButton={
          <Button
            text="Program afterschool"
            link="/afterschool/"
            style="secondary"
          />
        }
        imgSource="/hero-img.jpg"
      />
      <Features />
      <Reviews />
      <Location />
    </>
  );
}

export default Acasa;
