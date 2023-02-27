import { BubblyLink } from "react-bubbly-transitions";
import "./styles.css";
import Menu from "../../assets/menu.svg";

export default function Nav() {
  return (
    <header className="headerNav">
      <BubblyLink to="/">
        <h1 style={{ letterSpacing: 6, color: "white" }}>Katia Manicure</h1>
      </BubblyLink>
      <nav
        className="animate-in navbar"
        style={{ animationDelay: "700ms", fontWeight: 600 }}
      >
        <BubblyLink to="About">Sobre</BubblyLink>
        <BubblyLink to="Works">Trabalhos</BubblyLink>
        <BubblyLink to="Contact">Contato</BubblyLink>
      </nav>
      <button
        className="menu"
        style={{ backgroundColor: "#9d3dc8", border: "none" }}
      >
        <img width={32}  src={Menu} />
      </button>
    </header>
  );
}
