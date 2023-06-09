import "./styles.css";
import Menu from "../../assets/icons/menu.svg";

export interface PropsNavMenu {
  MenuIsVisible?: any;
}

export default function Nav({ MenuIsVisible }: PropsNavMenu) {
  return (
    <header className="headerNav">
      <a href="/">
        <h1
          style={{
            letterSpacing: "6px",
            color: "white",
            animationDelay: "800ms",
          }}
        >
          Katia Manicure
        </h1>
      </a>
      <nav
        className="animate-in navbar"
      >
        <a href="About">Sobre</a>
        <a href="Works">Trabalhos</a>
        <a href="Contact">Contato</a>
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
