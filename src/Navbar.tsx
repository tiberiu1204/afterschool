import "./Navbar.css";
import Navlink from "./Navlink";

type NavlinkData = {
  text: string;
  link: string;
};
const Navbar = () => {
  const navlinks: NavlinkData[] = [
    { text: "Acasa", link: "#" },
    { text: "Afterschool", link: "#" },
    { text: "Scoala de Vara", link: "#" },
    { text: "Galerie", link: "#" },
    { text: "Contact", link: "#" },
  ];

  return (
    <div className="header-wrapper">
      <div className="navbar-wrapper">
        {navlinks.map((navlink, index) => {
          return (
            <Navlink text={navlink.text} link={navlink.link} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
