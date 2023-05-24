import React, { useState } from "react";
import { BubblyLink } from "react-bubbly-transitions";
import { FooterContainer, Nav, SocialMedia } from "./styles";
import facebook from "../../assets/facebook.png";
import whatsapp from "../../assets/whatsapp.png";
import instagram from "../../assets/instagram.png";
import Modal from "../Modal";

const linkFacebook = "https://www.facebook.com/katia.limagoncalves";
const linkInstagram = "https://www.instagram.com/kkatia_lima/";
const linkWhatsapp = "https://www.whatsapp.com/";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <FooterContainer>
      <Nav>
        <h2>Katia Manicure</h2>
        <div>
          <BubblyLink to="About">Sobre</BubblyLink>
          <BubblyLink to="Works">Trabalhos</BubblyLink>
          <BubblyLink to="Contact">Contato</BubblyLink>
        </div>
      </Nav>
      <SocialMedia>
        <div className="redes">
          <a
            onClick={handleOpenModal}
          // href={linkFacebook} target="_blank"
          >
            <img width={"40px"} src={facebook} alt="Rede Social" />{" "}
          </a>
          <a href={linkInstagram} target="_blank">
            <img width={"40px"} src={instagram} alt="Rede Social" />{" "}
          </a>
          <a
            onClick={handleOpenModal}
          // href={linkWhatsapp} target="_blank"
          >
            <img width={"40px"} src={whatsapp} alt="Rede Social" />{" "}
          </a>
        </div>
        <div>
          <p>&copy; 2023 Katia Manicure. Todos os direitos reservados.</p>
        </div>
        <Modal isOpen={isOpen} onClose={handleCloseModal} isError={error} />

      </SocialMedia>
    </FooterContainer>
  );
}
