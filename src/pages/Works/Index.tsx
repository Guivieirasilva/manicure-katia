import unhas1 from "../../assets/unha1.jpg"
import unhas2 from "../../assets/unha2.jpg"
import unhas3 from "../../assets/unha3.jpg"
import unhas4 from "../../assets/unha4.jpg"

import {
  Box,
  CarouselContainer,
  Container,
  Image,
  SubTitle,
  Techniques,
  Text,
} from "./styles";
import { Carousel } from "../../components/Carousel/Index";
const Images = [unhas1, unhas2, unhas3, unhas4];

export default function Works() {
  return (
    <Container>
      <Box>
        <SubTitle>
          <h3>Unhas que Vão te Surpreender</h3>
        </SubTitle>
        <CarouselContainer>
          <Carousel images={Images} />
        </CarouselContainer>
      </Box>

      <Techniques>
        <Text>
          <div>
            <h2>Beleza em suas Mãos {"\n"}<br/>
            <span>
              Técnicas Inovadoras para Unhas Incríveis!
            </span>
            </h2>
          </div>
          <p>
            Katia é uma manicure especializada em unhas decoradas, oferecendo
            uma variedade de técnicas para deixar suas unhas incríveis. Entre as
            opções disponíveis estão a francesinha tradicional, a francesinha
            invertida, a inglesinha, a filha única, o degradê e a decoração com
            adesivos. Seja para uma ocasião especial ou para o dia a dia, Katia
            oferece um serviço personalizado para cada cliente, utilizando
            apenas os melhores produtos do mercado para garantir um acabamento
            perfeito e duradouro. Agende um horário com ela para ter unhas
            deslumbrantes e cheias de estilo!
          </p>
        </Text>
        <Image><img src={unhas3} alt=" imagem de Unha" /></Image>
      </Techniques>
    </Container>
  );
}
