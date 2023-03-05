import Person from "../../assets/person.png";
import { Container, Text } from "./styles";

const linkWhatsApp =
  "https://api.whatsapp.com/send?phone=5511958249395&text=Ol%C3%A1%20gostaria%20de%20marcar%20um%20hor%C3%A1rio!";

export default function Home() {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
}
