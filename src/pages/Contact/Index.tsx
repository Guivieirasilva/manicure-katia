import { useState } from "react";
import { Container, Form, Label, Localization, SocialMedias } from "./styles";

import facebook from "../../assets/icons/iconFacebook.svg";
import whatsapp from "../../assets/icons/iconsWhatsapp.svg";
import instagram from "../../assets/icons/iconInstagram.svg";
import PhoneMask from "../../helpers/phoneMask";
import Modal from "../../components/Modal";
import { Skeleton } from "../../components/Skelleton";

const linkFacebook = "https://www.facebook.com/katia.limagoncalves";
const linkInstagram = "https://www.instagram.com/kkatia_lima/";
const linkWhatsapp =
  "https://api.whatsapp.com/send?phone=5511940059743&text=Ol%C3%A1!%20Como%20vai%20voc%C3%AA?%20Vi%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.";

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

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  async function registerUser(user: IForm) {
    try {
      setIsloading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar sua duvida!");
        setError(true);
      }

      const data = await response.json();
      console.log("Sua Duvida foi enviada com sucesso", data);
      setError(false);

      setInputsForm({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        duvida: "",
      });
      // alert(message);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      handleOpenModal();
      setIsloading(false);
    }
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
          <a href={linkFacebook} target="_blank" onClick={handleOpenModal}>
            <img src={facebook} alt="Rede Social" />{" "}
          </a>
          <a href={linkInstagram} target="_blank">
            <img src={instagram} alt="Rede Social" />{" "}
          </a>
          <a href={linkWhatsapp} target="_blank" onClick={handleOpenModal}>
            <img src={whatsapp} alt="Rede Social" />{" "}
          </a>
        </div>
      </SocialMedias>

      <Form>
        <h2>Entre em Contato</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            registerUser(inputsForm);
          }}
        >
          <Label htmlFor="nome">
            {isLoading ? (
              <Skeleton height={"40px"} width={"95%"} />
            ) : (
              <>
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
              </>
            )}
          </Label>

          <Label htmlFor="email">
            {isLoading ? (
              <Skeleton height={"40px"} width={"95%"} />
            ) : (
              <>
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
              </>
            )}
          </Label>

          <Label htmlFor="telefone">
            {isLoading ? (
              <Skeleton height={"40px"} width={"95%"} />
            ) : (
              <>
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
              </>
            )}
          </Label>

          <Label htmlFor="assunto">
            {isLoading ? (
              <Skeleton height={"40px"} width={"95%"} />
            ) : (
              <>
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
              </>
            )}
          </Label>

          <Label htmlFor="duvida">
            {isLoading ? (
              <Skeleton height={"120px"} width={"95%"} />
            ) : (
              <>
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
              </>
            )}
          </Label>

          {isLoading ? (
            <Skeleton height={"40px"} width={"150px"} />
          ) : (
            <button disabled={isLoading} type="submit">
              Enviar
            </button>
          )}
        </form>
      </Form>

      <Modal isOpen={isOpen} onClose={handleCloseModal} isError={error} />
    </Container>
  );
}
