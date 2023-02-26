import { BubblyLink } from "react-bubbly-transitions";

export default function Nav() {
  return (
    <nav className="animate-in" style={{ animationDelay: "700ms" }}>
      <BubblyLink to="/">Manicure</BubblyLink>
      <BubblyLink to="About">Sobre</BubblyLink>
      <BubblyLink to="Works" >Trabalhos</BubblyLink>
      <BubblyLink to="Contact">Contato</BubblyLink>
    </nav>
  );
}
