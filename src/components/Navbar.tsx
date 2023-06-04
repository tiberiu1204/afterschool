import { useState } from "react";
import "./Navbar.css";
import Navlink from "./Navlink";

type NavlinkData = {
  text: string;
  link: string;
};

type SocialsData = {
  source: string;
  link: string;
};

const Navbar = () => {
  const navlinks: NavlinkData[] = [
    { text: "Acasă", link: "/" },
    { text: "Afterschool", link: "/afterschool/" },
    { text: "Scoala de Vară", link: "/scoala-de-vara/" },
    { text: "Galerie", link: "/galerie/" },
    { text: "Contact", link: "/contact/" },
  ];

  const socials: SocialsData[] = [
    { source: "/assets/facebook.svg", link: "#" },
    { source: "/assets/instagram.svg", link: "#" },
    { source: "/assets/whatsapp.svg", link: "#" },
  ];

  const [headerIsActive, setHeaderIsActive] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) setHeaderIsActive(true);
    else setHeaderIsActive(false);
  });

  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const handleOnMenuIconClick = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
    if (isMobileMenuActive) {
      document.documentElement.classList.remove("mobile-menu-active");
    } else {
      document.documentElement.classList.add("mobile-menu-active");
    }
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      setIsMobileMenuActive(false);
    }
  });

  return (
    <>
      <div
        className={headerIsActive ? "header-wrapper active" : "header-wrapper"}
      >
        <div
          className={`mobile-menu-wrapper ${
            isMobileMenuActive ? "active" : ""
          }`}
        >
          <div className="mobile-menu-links-wrapper">
            {navlinks.map((navlink, index) => {
              return (
                <Navlink text={navlink.text} link={navlink.link} key={index} />
              );
            })}
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div
          className="mobile-menu-icon-wrapper"
          onClick={handleOnMenuIconClick}
        >
          <svg
            width="31"
            height="24"
            viewBox="0 0 31 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="menu-icon"
          >
            <g id="menu-graphic" fill="#D9D9D9">
              <rect
                id="upper"
                className={`${isMobileMenuActive ? "active" : ""}`}
                width="30.1936"
                height="3.87097"
                rx="1.93548"
              />
              <rect
                id="bottom"
                className={`${isMobileMenuActive ? "active" : ""}`}
                y="20.129"
                width="30.1936"
                height="3.87097"
                rx="1.93548"
              />
              <rect
                id="middle"
                className={`${isMobileMenuActive ? "active" : ""}`}
                y="10.1419"
                width="30.1936"
                height="3.87097"
                rx="1.93548"
              />
            </g>
          </svg>
        </div>
        <div className="navbar-wrapper">
          <a href="/" className="logo-wrapper">
            <img src="/assets/logo.svg" alt="logo" className="logo"></img>
          </a>
          {navlinks.map((navlink, index) => {
            return (
              <Navlink text={navlink.text} link={navlink.link} key={index} />
            );
          })}
        </div>
        <div className="socials-wrapper">
          {socials.map((social, index) => {
            return (
              <a href={social.link} className="social-link" key={index}>
                <img
                  src={social.source}
                  alt="social"
                  className="social-icon"
                ></img>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
