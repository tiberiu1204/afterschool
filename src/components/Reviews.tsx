import "./Reviews.css";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

type Review = {
  name: string;
  text: string;
};

const Reviews = () => {
  const reviews: Review[] = [
    {
      name: "Magda Berbec",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ipsam temporibus fugiat facilis in fugit molestiae dolores autem aliquam. Dolores aspernatur impedit obcaecati dicta laborum velit, fugit accusantium a aperiam?",
    },
    {
      name: "Lucian Popa",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ipsam temporibus fugiat facilis in fugit molestiae dolores autem aliquam. Dolores aspernatur impedit obcaecati dicta laborum velit, fugit accusantium a aperiam?",
    },
    {
      name: "Dana Brezeanu",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ipsam temporibus fugiat facilis in fugit molestiae dolores autem aliquam. Dolores aspernatur impedit obcaecati dicta laborum velit, fugit accusantium a aperiam?",
    },
  ];

  const { ref: titleRef, inView: titleInView } = useInView();
  const [titleActive, setTitleActive] = useState(false);
  window.addEventListener("scroll", () => {
    if (titleInView) setTitleActive(true);
  });
  return (
    <section className="section">
      <div className="section-triangles-transition grey"></div>
      <div className="section-container">
        <div className="section-layout-container collumn-layout">
          <h1
            className={`section-title animate ${titleActive ? "active" : ""}`}
            ref={titleRef}
          >
            Ce spun părinții
          </h1>
          <div className="reviews-wrapper">
            {reviews.map((review, index) => {
              const { ref, inView } = useInView();
              const [isActive, setIsActive] = useState(false);
              window.addEventListener("scroll", () => {
                if (inView) setIsActive(true);
              });
              return (
                <div
                  className={`review ${isActive ? "active" : ""}`}
                  key={index}
                >
                  <h1 className="reviewer-name" ref={ref}>
                    {review.name}
                  </h1>
                  <svg
                    width="83"
                    height="20"
                    viewBox="0 0 83 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="five-stars"
                  >
                    <g fill="#635bff">
                      <path d="M6.5 4L7.95934 8.49139H12.6819L8.86126 11.2672L10.3206 15.7586L6.5 12.9828L2.6794 15.7586L4.13874 11.2672L0.318133 8.49139H5.04066L6.5 4Z" />
                      <path d="M76.5 4L77.9593 8.49139H82.6819L78.8613 11.2672L80.3206 15.7586L76.5 12.9828L72.6794 15.7586L74.1387 11.2672L70.3181 8.49139H75.0407L76.5 4Z" />
                      <path d="M22 1L24.0206 7.21885H30.5595L25.2694 11.0623L27.2901 17.2812L22 13.4377L16.7099 17.2812L18.7306 11.0623L13.4405 7.21885H19.9794L22 1Z" />
                      <path d="M61 1L63.0206 7.21885H69.5595L64.2694 11.0623L66.2901 17.2812L61 13.4377L55.7099 17.2812L57.7306 11.0623L52.4405 7.21885H58.9794L61 1Z" />
                      <path d="M42 0L44.2451 6.90983H51.5106L45.6327 11.1803L47.8779 18.0902L42 13.8197L36.1221 18.0902L38.3673 11.1803L32.4894 6.90983H39.7549L42 0Z" />
                    </g>
                  </svg>
                  <div className="underline dark"></div>
                  <p className="review-text description">{review.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
