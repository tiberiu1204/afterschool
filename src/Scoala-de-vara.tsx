import Navbar from "./components/Navbar";
import Mask from "./components/Mask";
import Hero from "./components/Hero";
import { isMobile } from "react-device-detect";
import Button from "./components/Button";
import Program from "./components/Program";
import {
  CardInfo,
  CardFact,
  CardSubtitle,
  CardTitle,
} from "./components/Program";

const ScoalaDeVara = () => {
  const heroTitle = (
    <>
      O vară <br /> minunată <br /> langă noi
    </>
  );
  const heroDescription = (
    <>
      Vacanța de vară este o perioadă specială în viața unui copil. Alături de
      noi, cel mic se va juca, va socializa, dar va si asimila informații ce îl
      vor ajuta în urmatorul an școlar. Investește în educația lui, și înscrie-l
      la școala noastră de vară!
    </>
  );
  const cards: CardInfo[] = [
    {
      imgSrc: "/images/hero-img.jpg",
      children: (
        <>
          <CardTitle>Pachet scoală de vară</CardTitle>
          <CardSubtitle>Activități incluse</CardSubtitle>
          <CardFact handprintFill="#179eff">Chestie</CardFact>
          <CardFact handprintFill="#179eff">Chestie</CardFact>
          <CardFact handprintFill="#179eff">Chestie</CardFact>
          <CardFact handprintFill="#179eff">Chestie</CardFact>
          <CardSubtitle>Tarif</CardSubtitle>
          <CardFact handprintFill="#179eff">Chestie</CardFact>
          <CardFact handprintFill="#179eff">Chestie</CardFact>
        </>
      ),
    },
    {
      imgSrc: "/images/hero-img.jpg",
      children: (
        <>
          <CardTitle>Servicii Opționale</CardTitle>
          <CardSubtitle>Transport</CardSubtitle>
          <CardFact handprintFill="#179eff">Pune ceva aici</CardFact>
          <CardFact handprintFill="#179eff">Tarifarif</CardFact>
          <CardSubtitle>Servirea mesei</CardSubtitle>
          <CardFact handprintFill="#179eff">În sistem catering</CardFact>
          <CardFact handprintFill="#179eff">Tarif</CardFact>
          <CardSubtitle>Activități opționale</CardSubtitle>
          <CardFact handprintFill="#179eff">Limba Engleză pune tarfi</CardFact>
          <CardFact handprintFill="#179eff">Gimnastică pune tarif</CardFact>
        </>
      ),
    },
    {
      imgSrc: "/images/hero-img.jpg",
      children: (
        <>
          <CardTitle>Ateliere</CardTitle>
          <CardSubtitle>Activități precum</CardSubtitle>
          <CardFact handprintFill="#179eff">Pictură</CardFact>
          <CardFact handprintFill="#179eff">Colaje și jucării</CardFact>
          <CardFact handprintFill="#179eff">Experimente</CardFact>
          <CardFact handprintFill="#179eff">Dezvoltare personală</CardFact>
          <CardSubtitle>Tarife</CardSubtitle>
          <CardFact handprintFill="#179eff">50 RON / ședință</CardFact>
          <CardFact handprintFill="#179eff">160 RON / 4 ședințe</CardFact>
          <CardSubtitle>Program</CardSubtitle>
          <CardFact handprintFill="#179eff">În fiecare vineri</CardFact>
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
            style="quaternary"
          />
        }
        secondaryButton={
          <Button text="Galerie" link="/galerie/" style="secondary" />
        }
        imgSource="/images/hero-img.jpg"
      />
      <Program cards={cards} style="grey-blue" />
    </>
  );
};

export default ScoalaDeVara;
