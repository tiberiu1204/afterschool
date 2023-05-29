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
  const triangles: number[] = [];
  for (let i = 1; i < 100; ++i) {
    triangles.push(i);
  }
  const navlinks: NavlinkData[] = [
    { text: "Acasă", link: "#" },
    { text: "Afterschool", link: "#" },
    { text: "Scoala de Vară", link: "#" },
    { text: "Galerie", link: "#" },
    { text: "Contact", link: "#" },
  ];

  const socials: SocialsData[] = [
    { source: "./src/assets/facebook.svg", link: "#" },
    { source: "./src/assets/instagram.svg", link: "#" },
    { source: "./src/assets/whatsapp.svg", link: "#" },
  ];

  return (
    <>
      <div className="header-wrapper">
        <div className="navbar-wrapper">
          <a href="#" className="logo-wrapper">
            <img src="./src/assets/logo.svg" alt="logo" className="logo"></img>
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
      <div className="triangles-wrapper">
        {triangles.map((id) => {
          return <div className="triangle" key={id}></div>;
        })}
      </div>
    </>
  );
};

export default Navbar;
