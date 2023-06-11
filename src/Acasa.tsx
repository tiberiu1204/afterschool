import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Mask from "./components/Mask";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Button from "./components/Button";
import { ReactNode } from "react";
import Location from "./components/Location";
import { isMobile } from "react-device-detect";

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
          <Button
            text={`${isMobile ? "Sună acum" : "Contact"}`}
            link={`${isMobile ? "tel:+40766553533" : "/contact/"}`}
            style="primary"
          />
        }
        secondaryButton={
          <Button
            text="Scoala de Vară"
            link="/scoala-de-vara/"
            style="secondary"
          />
        }
        imgSource="/images/hero-img.jpg"
      />
      <Features />
      <Reviews />
      <Location />
    </>
  );
}

export default Acasa;
