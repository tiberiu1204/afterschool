import Navbar from "./components/Navbar";
import Mask from "./components/Mask";
import Button from "./components/Button";
import Hero from "./components/Hero";
import Program from "./components/Program";
import { CardProps } from "./components/Program";

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
      supravegheat de personal specializat in domeniul educației. Nu mai
      asteptați, și alegeți acum Steluțe Curcubeu Afterschool!
    </>
  );
  const imgUrl = "/assets/hero-img.jpg";

  const cards: CardProps[] = [
    {
      imgSrc: "/assets/hero-img.jpg",
      title: "Kaka",
      bulletPoints: [
        "kakaas dfasdfasdfasd asdfasdfasd fasdfasdf asdfasd f",
        "maka",
        "doi",
        "lei",
        "vaca",
      ],
    },
    {
      title: "Kaka",
      bulletPoints: ["kaka", "maka", "doi", "lei", "vaca"],
    },
    {
      title: "Kaka",
      bulletPoints: ["kaka", "maka", "doi", "lei", "vaca"],
      center: true,
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
          <Button text="Sună acum" link="tel:+40766553533" style="tertiary" />
        }
        secondaryButton={
          <Button text="Galerie" link="/contact/" style="secondary" />
        }
        imgSource={imgUrl}
      />
      <Program cards={cards} />
    </>
  );
};

export default Afterschool;
