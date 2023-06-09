import "./styles.css";
import Menu from "../../assets/icons/menu.svg";
import { Link } from "react-router-dom";

export interface PropsNavMenu {
  MenuIsVisible?: any;
}

export default function Nav({ MenuIsVisible }: PropsNavMenu) {
  return (
    <header className="headerNav">
      <Link to={"/"}>
        <h1
          style={{
            letterSpacing: "6px",
            color: "white",
            animationDelay: "800ms",
          }}
        >
          Katia Manicure
        </h1>
      </Link>
      <nav className="animate-in navbar">
        <Link to={"/About"}>Sobre</Link>
        <Link to={"/Works"}>Trabalhos</Link>
        <Link to={"/Contact"}>Contato</Link>
      </nav>
      <button
        className="menu animate-in"
        onClick={MenuIsVisible}
        style={{
          backgroundColor: "transparent",
          border: "none",
          animationDelay: "700ms",
        }}
      >
        <img width={32} src={Menu} />
      </button>
    </header>
  );
}
