import "./Program.css";

export interface CardProps {
  imgSrc?: string;
  title: string;
  bulletPoints: string[];
  center?: boolean;
}

interface ProgramProps {
  cards: CardProps[];
}

const Program = ({ cards }: ProgramProps) => {
  return (
    <section className="section grey-green">
      <div className="section-triangles-transition primary"></div>
      <div className="section-container">
        <div className="section-layout-container collumn-layout">
          <h1 className="section-title">Program, servicii și tarife</h1>
          <div className="cards-wrapper">
            {cards.map((card, index) => {
              return (
                <Card
                  imgSrc={card.imgSrc}
                  title={card.title}
                  bulletPoints={card.bulletPoints}
                  center={card.center}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Card = ({ imgSrc, title, bulletPoints, center }: CardProps) => {
  return (
    <div className="card-wrapper">
      <div className={`card grey-green ${center ? "center" : ""}`}>
        {imgSrc ? (
          <div className="card-image-wrapper">
            <img src={imgSrc} alt="card image" className="card-image"></img>
          </div>
        ) : (
          ""
        )}
        <div className={"card-text-wrapper"}>
          <h1 className="card-title">{title}</h1>
          <div className="underline dark"></div>
          <ul className="point-list">
            {bulletPoints.map((point, index) => {
              return (
                <li className="point" key={index}>
                  {point}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Program;
