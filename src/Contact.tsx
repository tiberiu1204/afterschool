import Navbar from "./components/Navbar";
import Mask from "./components/Mask";
import Hero from "./components/Hero";
import Button from "./components/Button";
import ContactMethods from "./components/ContactMethods";
import Location from "./components/Location";

const Contact = () => {
  const heroTitle = (
    <>
      Date de <br /> contact
    </>
  );
  const heroDescription = (
    <>
      Dacă mai ai intrebări in legătură cu ofertele sau tarifele noastre, dacă
      ești convins și vrei să ne vizitezi, sau dacă pur și simplu vrei să
      vorbești cu noi, ești in locul potrivit. Ne poți suna la urmatoarele
      numbere de telefon, sau poți opta pentru formele de contact de mai jos.
    </>
  );
  return (
    <>
      <Mask />
      <Navbar />
      <Hero
        title={heroTitle}
        description={heroDescription}
        imgSource="/images/hero-img.jpg"
        primaryButton={
          <Button
            text={`0766 553 533`}
            link={`tel:+40766553533`}
            style="primary"
          />
        }
        secondaryButton={
          <Button
            text={`0763 621 845`}
            link={`tel:+40763621845`}
            style="secondary"
          />
        }
      />
      <ContactMethods />
      <Location />
    </>
  );
};

export default Contact;
