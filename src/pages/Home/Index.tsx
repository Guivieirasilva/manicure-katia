import Person from "../../assets/person.png";
import unhas from "../../assets/unhas.jpg";

import Logo from "../../assets/logo.svg";

import { Carousel } from "../../components/Carousel/Index";

import {
  Banner,
  Box,
  CarouselContainer,
  Content,
  Picture,
  SubTitle,
  Text,
} from "./styles";
import { useEffect } from "react";

const Images = [unhas, unhas, unhas, unhas, unhas, unhas];

const linkWhatsApp =
  "https://api.whatsapp.com/send?phone=5511958249395&text=Ol%C3%A1%20gostaria%20de%20marcar%20um%20hor%C3%A1rio!";

export default function Home() {
  useEffect(() => {
    console.log(Carousel);
  }, []);
  return (
    <>
      <Banner>
        <Text>
          <h2>Agende um Horário</h2>
          <p>
            De Segunda a Sábado: das 9h até as 20h <br /> Domingo: das 10h as
            17h
          </p>
          <a href={linkWhatsApp} target="_blank">
            <button>Agendar</button>
          </a>
        </Text>

        <img src={Person} alt="Pessoa sentada no sofá" />
      </Banner>

      <Box>
        <Picture>
          <img src={unhas} alt="Unhas Decorativas Francesinha" />
        </Picture>
        <Content>
          <h3>Especialista em Embelezar Suas Unhas.</h3>
          <p>
            Katia Lima é uma manicure que não mede esforços para tornar suas
            unhas verdadeiras obras de arte. Com mais de uma década de
            experiência em sua bagagem, ela vem aprimorando suas habilidades e
            aperfeiçoando técnicas em diversas áreas da decoração de unhas.
            Desde 2008, Katia vem mostrando que a excelência é sua marca
            registrada, e que seus clientes podem contar com um trabalho
            impecável e de qualidade. Se você está procurando uma profissional
            que realmente entende de unhas decorativas, Katia Lima é a escolha
            certa para você{" "}
          </p>
        </Content>
      </Box>
      <SubTitle>
        <h3>Trabalhos</h3>
      </SubTitle>
      <CarouselContainer>
        <Carousel images={Images} />
      </CarouselContainer>
    </>
  );
}
