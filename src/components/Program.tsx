import "./Program.css";
import { ReactNode } from "react";
import Handprint from "./Handprint";

interface CardProps {
  children?: ReactNode;
  imgSrc?: string;
  center?: boolean;
  index: number;
}

export type CardInfo = {
  children?: ReactNode;
  imgSrc?: string;
  center?: boolean;
};

interface ProgramProps {
  cards: CardInfo[];
}

const Program = ({ cards }: ProgramProps) => {
  return (
    <section className="section grey-green">
      <div className="section-triangles-transition primary"></div>
      <div className="section-container">
        <div className="section-layout-container collumn-layout">
          <h1 className="section-title">
            <Handprint fill="#15be53" big={true} />
            Program, servicii și tarife
            <Handprint fill="#15be53" big={true} flipped={true} />
          </h1>
          <div className="cards-wrapper">
            {cards.map((card, index) => {
              return (
                <Card
                  imgSrc={card.imgSrc}
                  children={card.children}
                  center={card.center}
                  key={index}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const Card = ({ children, imgSrc, center, index }: CardProps) => {
  const { ref, inView } = useInView();
  const [isActive, setIsActive] = useState(false);
  window.addEventListener("scroll", () => {
    if (inView) setIsActive(true);
  });
  return (
    <div className="card-wrapper">
      <div
        ref={ref}
        className={`card grey-green ${index % 2 == 0 ? "left" : "right"} ${
          isActive ? "active" : ""
        }`}
      >
        {imgSrc ? (
          <div className="card-image-wrapper">
            <img src={imgSrc} alt="card image" className="card-image"></img>
          </div>
        ) : (
          ""
        )}
        <div className={`card-text-wrapper ${center ? "center" : ""}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Program;
