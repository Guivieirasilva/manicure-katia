import Person from "../../assets/person.png"
import unhas1 from "../../assets/unha1.jpg"
import unhas2 from "../../assets/unha2.jpg"
import unhas3 from "../../assets/unha3.jpg"
import unhas4 from "../../assets/unha4.jpg"
import esmaltes from "../../assets/exemplo.jpg"
import { Carousel } from "../../components/Carousel/Index"

import {
  Banner,
  Box,
  BoxCarousel,
  CarouselContainer,
  Content,
  Picture,
  SubTitle,
  Text,
} from "./styles";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal"

const Images = [unhas1, unhas2, unhas3, unhas4];

const linkWhatsApp =
  "https://api.whatsapp.com/";

  /* send?phone=5511958249395&text=Ol%C3%A1%20gostaria%20de%20marcar%20um%20hor%C3%A1rio! */
export default function Home() {
  useEffect(() => {
    console.log(Carousel);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Banner>
        <Text>
          <h2>Agende agora e garanta seu atendimento personalizado!</h2>
          <p>
            De Segunda a Sábado: das 9h até as 20h <br /> Domingo: das 10h as
            17h
          </p>
          <a 
          // href={linkWhatsApp} target="_blank"
          >
            <button onClick={handleOpenModal} >Agendar</button>
          </a>
        </Text>
        <Modal isOpen={isOpen} onClose={handleCloseModal} isError={error} />


        <img src={Person} alt="Pessoa sentada no sofá" />
      </Banner>

      <Box>
        <Picture>
          <img src={esmaltes} alt="Esmaltes" />
        </Picture>
        <Content>
          <h3>Especialista em Embelezar Suas Unhas.</h3>
          <p>
            Com as habilidades aperfeiçoadas ao longo de mais de uma década de
            experiência, Katia Lima é uma manicure experiente que transforma as
            unhas em verdadeiras obras de arte. Se você deseja um trabalho de
            excelência e um visual personalizado, confie nas técnicas precisas e
            na abordagem personalizada de Katia. Agende agora mesmo o seu
            atendimento e tenha unhas decorativas impecáveis e exclusivas.{" "}
          </p>
        </Content>
      </Box>
      <BoxCarousel>

        <SubTitle>
          <h3>Trabalhos</h3>
        </SubTitle>
        <CarouselContainer>
          <Carousel images={Images} />
        </CarouselContainer>
      </BoxCarousel>
    </>
  );
}
