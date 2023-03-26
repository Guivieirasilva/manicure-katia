import { useState } from "react";
import { Container, Form, Label, Localization, SocialMedias } from "./styles";

import facebook from "../../assets/iconFacebook.svg";
import whatsapp from "../../assets/iconsWhatsapp.svg";
import instagram from "../../assets/iconInstagram.svg";

const linkFacebook = "https://www.facebook.com/katia.limagoncalves";
const linkInstagram = "https://www.instagram.com/kkatia_lima/";
const linkWhatsapp = "https://www.whatsapp.com/";

export default function Contact() {
  const [inputsForm, setInputsForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    duvida: "",
  });

  return (
    <Container>
      <Localization>
        <h3>Localização do Ambiente</h3>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1830.3241150263561!2d-46.517536702650006!3d-23.437071099999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef52cb9db51dd%3A0x3c9f2cf09068def3!2sR.%20Araraquara%2C%20115%20-%20Jardim%20Bela%20Vista%2C%20Guarulhos%20-%20SP%2C%2007132-300!5e0!3m2!1spt-BR!2sbr!4v1679852967995!5m2!1spt-BR!2sbr"
            loading="lazy"
          ></iframe>
        </div>
      </Localization>
      <SocialMedias>
        <h2>Redes Sociais</h2>
        <div>
          <a href={linkFacebook} target="_blank">
            <img src={facebook} alt="Rede Social" />{" "}
          </a>
          <a href={linkInstagram} target="_blank">
            <img src={instagram} alt="Rede Social" />{" "}
          </a>
          <a href={linkWhatsapp} target="_blank">
            <img src={whatsapp} alt="Rede Social" />{" "}
          </a>
        </div>
      </SocialMedias>

      <Form>
        <h2>Entre em Contato</h2>
        <form>
          <Label htmlFor="nome">
            Nome Completo:
            <input
              value={inputsForm.nome}
              onChange={(e) =>
                setInputsForm({
                  ...inputsForm,
                  nome: e.target.value,
                })
              }
              placeholder=" Nome Completo"
              type="text"
              id="nome"
              name="nome"
              required
            />
          </Label>

          <Label htmlFor="email">
            E-mail:
            <input
              value={inputsForm.email}
              onChange={(e) =>
                setInputsForm({
                  ...inputsForm,
                  email: e.target.value,
                })
              }
              type="email"
              placeholder=" Digite o Email"
              id="email"
              name="email"
              required
            />
          </Label>

          <Label htmlFor="telefone">
            Telefone:
            <input
              value={inputsForm.telefone}
              onChange={(e) =>
                setInputsForm({
                  ...inputsForm,
                  telefone: e.target.value,
                })
              }
              placeholder=" (11) 99999-9999"
              type="tel"
              id="telefone"
              name="telefone"
              required
            />
          </Label>

          <Label htmlFor="assunto">
            Assunto:
            <input
              value={inputsForm.assunto}
              onChange={(e) =>
                setInputsForm({
                  ...inputsForm,
                  assunto: e.target.value,
                })
              }
              type="text"
              placeholder=" Digite o assunto"
              id="assunto"
              name="assunto"
              required
            />
          </Label>

          <Label htmlFor="duvida">
            Dúvida:
            <textarea
              value={inputsForm.duvida}
              onChange={(e) =>
                setInputsForm({
                  ...inputsForm,
                  duvida: e.target.value,
                })
              }
              id="duvida"
              placeholder=" Digite sua duvida"
              name="duvida"
              required
            ></textarea>
          </Label>

          <button type="submit" onChange={(e) => e.preventDefault()}>
            Enviar
          </button>
        </form>
      </Form>
    </Container>
  );
}
