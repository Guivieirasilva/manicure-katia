import Person from "../../assets/person.png";
import unhas from "../../assets/unhas.jpg";

import { Banner, Box, Content, Picture, Text } from "./styles";

const linkWhatsApp =
  "https://api.whatsapp.com/send?phone=5511958249395&text=Ol%C3%A1%20gostaria%20de%20marcar%20um%20hor%C3%A1rio!";

export default function Home() {
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
          <img src={unhas} alt="" />
        </Picture>
        <Content>
          <h3>Autoridade em Encatar Suas Unhas</h3>
          <p>
            Suas atividade iniciaram 2018 e desde então Katia Lima vem
            demonstrando seu trabalho com excelência, com experiência em
            diversos tipos de unhas decorativas!{" "}
          </p>
        </Content>
      </Box>
    </>
  );
}
