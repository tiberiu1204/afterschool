import "./Navlink.css";

interface Props {
  text: string;
  link: string;
}

const Navlink = ({ text, link }: Props) => {
  return (
    <div className="navlink-wrapper">
      <a href={link} className="navlink">
        <span className="navlink-text">{text}</span>
      </a>
    </div>
  );
};

export default Navlink;
