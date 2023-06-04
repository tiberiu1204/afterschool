import Navbar from "./components/Navbar";
import Mask from "./components/Mask";
import Button from "./components/Button";
import Hero from "./components/Hero";

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
    </>
  );
};

export default Afterschool;
