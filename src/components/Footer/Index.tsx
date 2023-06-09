import { FooterContainer, Nav, SocialMedia } from "./styles";
import facebook from "../../assets/facebook.svg";
import whatsapp from "../../assets/whatsapp.svg";
import instagram from "../../assets/instagram.svg";

const linkFacebook = "https://www.facebook.com/katia.limagoncalves";
const linkInstagram = "https://www.instagram.com/kkatia_lima/";
const linkWhatsapp = "https://www.whatsapp.com/";

export default function Footer() {
  return (
    <FooterContainer>
      <Nav>
        <a href="/">
          <h2>Katia Manicure</h2>
        </a>
        <div>
          <a href="/About">Sobre</a>
          <a href="/Works">Trabalhos</a>
          <a href="/Contact">Contato</a>
        </div>
      </Nav>
      <SocialMedia>
        <div className="redes">
          <a href={linkWhatsapp} target="_blank">
            <img width={"40px"} src={whatsapp} alt="Rede Social" />{" "}
          </a>
          <a href={linkFacebook} target="_blank">
            <img width={"40px"} src={facebook} alt="Rede Social" />{" "}
          </a>
          <a href={linkInstagram} target="_blank">
            <img width={"40px"} src={instagram} alt="Rede Social" />{" "}
          </a>
        </div>
        <div>
          <p>&copy; 2023 Katia Manicure. Todos os direitos reservados.</p>
        </div>
      </SocialMedia>
    </FooterContainer>
  );
}
