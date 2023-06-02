import "./Features.css";
import Handprint from "./Handprint";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

type Feature = {
  name: string;
  iconUrl: string;
};

type Benefit = {
  name: string;
  imgUrl: string;
  description: string;
};

const Features = () => {
  const features: Feature[] = [
    {
      name: "Personal Didactic Calificat",
      iconUrl: "./src/assets/facebook.svg",
    },
    {
      name: "Bla bla bla",
      iconUrl: "./src/assets/facebook.svg",
    },
    {
      name: "Bla bla bla",
      iconUrl: "./src/assets/facebook.svg",
    },
    {
      name: "Bla bla bla",
      iconUrl: "./src/assets/facebook.svg",
    },
  ];

  const benefits: Benefit[] = [
    {
      name: "Kaka maka",
      imgUrl: "./src/assets/hero-img.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatem, animi praesentium aspernatur doloribus quam culpa? Possimus, officia incidunt. Sunt, sapiente a! Explicabo soluta sed, dicta id porro nisi eligendi.",
    },
    {
      name: "Kaka maka",
      imgUrl: "./src/assets/hero-img.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatem, animi praesentium aspernatur doloribus quam culpa? Possimus, officia incidunt. Sunt, sapiente a! Explicabo soluta sed, dicta id porro nisi eligendi.",
    },
    {
      name: "Kaka maka",
      imgUrl: "./src/assets/hero-img.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatem, animi praesentium aspernatur doloribus quam culpa? Possimus, officia incidunt. Sunt, sapiente a! Explicabo soluta sed, dicta id porro nisi eligendi.",
    },
    {
      name: "Kaka maka",
      imgUrl: "./src/assets/hero-img.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatem, animi praesentium aspernatur doloribus quam culpa? Possimus, officia incidunt. Sunt, sapiente a! Explicabo soluta sed, dicta id porro nisi eligendi.",
    },
  ];

  return (
    <section className="section grey">
      <div className="section-triangles-transition primary"></div>
      <div className="section-container">
        <div className="section-layout-container collumn-layout">
          <div className="features-wrapper">
            {features.map((feature, index) => {
              return (
                <div className="feature-wrapper" key={index}>
                  <img
                    src={feature.iconUrl}
                    alt="feature icon"
                    className="feature-icon"
                  />
                  <h1 className="feature-name">{feature.name}</h1>
                </div>
              );
            })}
          </div>
          <div className="benefits-wrapper">
            {benefits.map((benefit, index) => {
              const { ref, inView } = useInView();
              const [isActive, setIsActive] = useState(false);
              window.addEventListener("scroll", () => {
                if (inView) {
                  setIsActive(true);
                }
              });
              return (
                <div
                  className={`benefit-wrapper ${
                    index % 2 == 0
                      ? isActive
                        ? "benefit-active left"
                        : "left"
                      : isActive
                      ? "benefit-active right"
                      : "right"
                  }`}
                  key={index}
                  ref={ref}
                >
                  <div className="benefit-text-wrapper">
                    <h1 className="benefit-title">
                      <Handprint />
                      {benefit.name}
                    </h1>
                    <div className="underline dark"></div>
                    <p className="benefit-description description">
                      {benefit.description}
                    </p>
                  </div>
                  <div className="benefit-img-wrapper">
                    <img
                      src={benefit.imgUrl}
                      alt="beneift"
                      className="benefit-img"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
