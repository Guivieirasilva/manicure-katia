import { BubblyLink } from "react-bubbly-transitions";
import "./styles.css";
import Menu from "../../assets/menu.svg";

export interface PropsNavMenu {
  MenuIsVisible?: any;
}

export default function Nav({ MenuIsVisible }: PropsNavMenu) {
  return (
    <header className="headerNav">
      <BubblyLink to="/">
        <h1 style={{ letterSpacing: '7px', color: "white" }}>Katia Manicure</h1>
      </BubblyLink>
      <nav
        className="animate-in navbar"
        style={{
          animationDelay: "700ms",
          fontWeight: 600,
          paddingRight: "20px",
        }}
      >
        <BubblyLink to="About">Sobre</BubblyLink>
        <BubblyLink to="Works">Trabalhos</BubblyLink>
        <BubblyLink to="Contact">Contato</BubblyLink>
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
