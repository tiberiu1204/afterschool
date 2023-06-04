import "./Hero.css";
import { ButtonProps } from "./Button";
import { ReactNode, ReactElement } from "react";

interface Props {
  title: ReactNode;
  description: ReactNode;
  primaryButton?: ReactElement<ButtonProps>;
  secondaryButton?: ReactElement<ButtonProps>;
  imgSource: string;
}

const Hero = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  imgSource,
}: Props) => {
  return (
    <section className="section">
      <div className="section-container">
        <div className="section-layout-container">
          <div className="hero-wrapper">
            <div className="hero-landing">
              <h1 className="hero-title">{title}</h1>
              <h2 className="hero-description description">{description}</h2>
              {primaryButton}
              {secondaryButton}
            </div>
            <div className="hero-visual">
              <img src={imgSource} alt="hero" className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
