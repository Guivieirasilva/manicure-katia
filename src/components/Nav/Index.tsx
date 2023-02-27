import { BubblyLink } from "react-bubbly-transitions";

export default function Nav() {
  return (
    <header>
    <h1>Katia Manicure</h1>
    <nav className="animate-in" style={{ animationDelay: "700ms" }}>
      <BubblyLink to="About">Sobre</BubblyLink>
      <BubblyLink to="Works" >Trabalhos</BubblyLink>
      <BubblyLink to="Contact">Contato</BubblyLink>
    </nav>
    </header>
  );
}
