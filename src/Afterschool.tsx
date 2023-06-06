import Navbar from "./components/Navbar";
import Mask from "./components/Mask";
import Button from "./components/Button";
import Hero from "./components/Hero";
import Program from "./components/Program";
import { isMobile } from "react-device-detect";
import {
  CardInfo,
  CardFact,
  CardSubtitle,
  CardTitle,
} from "./components/Program";

const Afterschool = () => {
  const heroTitle = (
    <>
      Programul <br /> nostru tip <br /> afterschool
    </>
  );
  const heroDescription = (
    <>
      În zilele de astăzi, este esential să îi oferi copilului tău o educație
      calitativă. La Steluțe Curcubeu Afterschool, cel mic va fi îndrumat si
      supravegheat de personal specializat in domeniul educației. Nu mai astepta
      și alege acum Steluțe Curcubeu Afterschool!
    </>
  );
  const imgUrl = "/images/hero-img.jpg";

  const cards: CardInfo[] = [
    {
      imgSrc: "/images/hero-img.jpg",
      children: (
        <>
          <CardTitle>Pachet Afterschool</CardTitle>
          <CardSubtitle>Personal calificat</CardSubtitle>
          <CardFact>Două cadre didactice specializate</CardFact>
          <CardSubtitle>Activități incluse</CardSubtitle>
          <CardFact>Asistență și sprijin la teme</CardFact>
          <CardFact>Arts & Crafts</CardFact>
          <CardFact>Experimente</CardFact>
          <CardFact>Activități recreative în parc</CardFact>
          <CardFact>Dezvoltare personală</CardFact>
          <CardSubtitle>Tarif</CardSubtitle>
          <CardFact>800 RON / lună</CardFact>
          <CardFact>Oferim reduceri personalizate</CardFact>
          <CardSubtitle>Program de lucru</CardSubtitle>
          <CardFact>Luni - Vineri, 12:00 - 17:00</CardFact>
        </>
      ),
    },
    {
      imgSrc: "/images/hero-img.jpg",
      children: (
        <>
          <CardTitle>Servicii Opționale</CardTitle>
          <CardSubtitle>Transport</CardSubtitle>
          <CardFact>Pune ceva aici</CardFact>
          <CardFact>Tarifarif</CardFact>
          <CardSubtitle>Servirea mesei</CardSubtitle>
          <CardFact>În sistem catering</CardFact>
          <CardFact>Tarif</CardFact>
          <CardSubtitle>Activități opționale</CardSubtitle>
          <CardFact>Limba Engleză pune tarfi</CardFact>
          <CardFact>Gimnastică pune tarif</CardFact>
        </>
      ),
    },
    {
      imgSrc: "/images/hero-img.jpg",
      children: (
        <>
          <CardTitle>Ateliere</CardTitle>
          <CardSubtitle>Activități precum</CardSubtitle>
          <CardFact>Pictură</CardFact>
          <CardFact>Colaje și jucării</CardFact>
          <CardFact>Experimente</CardFact>
          <CardFact>Dezvoltare personală</CardFact>
          <CardSubtitle>Tarife</CardSubtitle>
          <CardFact>50 RON / ședință</CardFact>
          <CardFact>160 RON / 4 ședințe</CardFact>
          <CardSubtitle>Program</CardSubtitle>
          <CardFact>În fiecare vineri</CardFact>
        </>
      ),
    },
  ];

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
            style="tertiary"
          />
        }
        secondaryButton={
          <Button text="Galerie" link="/galerie/" style="secondary" />
        }
        imgSource={imgUrl}
      />
      <Program cards={cards} />
    </>
  );
};

export default Afterschool;
