import { useEffect, useState } from "react";
import { Container, Form, Label, Localization, SocialMedias } from "./styles";

import facebook from "../../assets/icons/iconFacebook.svg";
import whatsapp from "../../assets/icons/iconsWhatsapp.svg";
import instagram from "../../assets/icons/iconInstagram.svg";
import ValidationEmail from "../../helpers/ValidationEmail";
import PhoneMask from "../../helpers/phoneMask";
import Modal from "../../components/Modal";

const linkFacebook = "https://www.facebook.com/katia.limagoncalves";
const linkInstagram = "https://www.instagram.com/kkatia_lima/";
const linkWhatsapp = "https://www.whatsapp.com/";

interface IForm {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  duvida: string;
}

export default function Contact() {
  const [inputsForm, setInputsForm] = useState<IForm>({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    duvida: "",
  });

  const url = "https://katiamanicure-api.onrender.com/register";

  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  async function registerUser(user: IForm) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar sua duvida!");
        setError(true)
      }

      const data = await response.json();
      console.log("Sua Duvida foi enviada com sucesso", data);
      setError(false)

      setInputsForm({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        duvida: '',
      });
      // alert(message);
    } catch (error) {
      console.error(error);
      setError(true)
    } finally {
      handleOpenModal()
    }
  }

  function validateForm(inputsForm: IForm) {
    const { nome, email, telefone, assunto, duvida } = inputsForm;
    const errors: Partial<IForm> = {};

    if (nome.trim() === "") {
      errors.nome = "O campo nome é obrigatório.";
    }

    if (email.trim() === "") {
      errors.email = "O campo email é obrigatório.";
    } else if (!isValidEmail(email)) {
      errors.email = "Digite um email válido.";
    }

    if (telefone.trim() === "") {
      errors.telefone = "O campo telefone é obrigatório.";
    }

    if (assunto.trim() === "") {
      errors.assunto = "O campo assunto é obrigatório.";
    }

    if (duvida.trim() === "") {
      errors.duvida = "O campo dúvida é obrigatório.";
    }

    return errors;
  }

  function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

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
          <a
            // href={linkFacebook} target="_blank"
            onClick={handleOpenModal}
          >
            <img src={facebook} alt="Rede Social" />{" "}
          </a>
          <a href={linkInstagram} target="_blank">
            <img src={instagram} alt="Rede Social" />{" "}
          </a>
          <a
            // href={linkWhatsapp} target="_blank"
            onClick={handleOpenModal}
          >

            <img src={whatsapp} alt="Rede Social" />{" "}
          </a>
        </div>
      </SocialMedias>
      <Form>
        <h2>Entre em Contato</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            registerUser(inputsForm)
          }}
        >
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
              value={PhoneMask(inputsForm.telefone)}
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

          <button type="submit">Enviar</button>
        </form>
      </Form>
      <Modal isOpen={isOpen} onClose={handleCloseModal} isError={error} />
    </Container>
  );
}
