import {
  Box,
  Container,
  ContainerCarousel,
  Methodology,
  PersonAbout,
  SubTitle,
  Text,
} from "./styles"
import ambiente1 from "../../assets/ambiente_1.jpg"
import ambiente from "../../assets/ambiente.jpg"

import Person from "../../assets/image-about.png"
import { CarouselLarge } from "../../components/CarouselLarge/Index"

const images = [ambiente1, ambiente]

export default function About() {
  return (
    <Box>
      <Container>
        <PersonAbout>
          <img src={Person} alt="Ilustração de pessoa" />
        </PersonAbout>

        <Text>
          <h3>Conheça a História da Katia!</h3>
          <p>
            Katia é uma manicure experiente e altamente qualificada, que oferece
            serviços personalizados de cuidados das unhas das mãos e dos pés,
            utilizando apenas produtos de alta qualidade e esterilizados. Com
            atenção aos detalhes e cuidado, ela busca proporcionar uma
            experiência relaxante e agradável para seus clientes, garantindo que
            suas unhas fiquem saudáveis, bonitas e bem cuidadas. Se você está em
            busca de um serviço de qualidade, personalizado e com um preço
            acessível, agende agora mesmo seu horário com a Katia.
          </p>
        </Text>
      </Container>
      <ContainerCarousel>
        <SubTitle>
          <h3>Veja o Ambiente de Trabalho!</h3>
        </SubTitle>
        <CarouselLarge images={images} />
      </ContainerCarousel>
      <Methodology>
        <h3>Nosso Método de Cuidado com suas Unhas!</h3>
        <p className="desktop" >
          A metodologia de trabalho de uma manicure é essencial para garantir um
          resultado final de qualidade e satisfação dos clientes. Katia Lima,
          uma experiente manicure, possui uma abordagem de trabalho que é
          baseada em técnicas precisas e aperfeiçoadas ao longo de mais de uma
          década de prática. Em primeiro lugar, Katia sempre inicia o trabalho
          com uma avaliação das unhas de seus clientes. Essa etapa é fundamental
          para entender as necessidades e preferências de cada pessoa, assim
          como identificar possíveis problemas que possam afetar o resultado
          final. A partir daí, ela define qual será o tipo de tratamento ou
          decoração a ser realizado. Em seguida, Katia inicia a preparação das
          unhas, que inclui a remoção de cutículas, limpeza, lixamento e
          polimento. Essa etapa é importante para garantir que as unhas fiquem
          uniformes e prontas para receber o tratamento ou decoração escolhidos.
          Para a decoração das unhas, Katia utiliza diversas técnicas, como
          pintura à mão livre, aplicação de adesivos, carimbos e pedrarias. Ela
          sempre busca entender o estilo e gosto de cada cliente para criar um
          visual personalizado e exclusivo. Além disso, ela utiliza materiais de
          alta qualidade para garantir que a decoração tenha durabilidade e
          resistência. Por fim, Katia finaliza o trabalho com uma camada de
          finalizador para proteger e dar brilho às unhas. Ela também oferece
          dicas e cuidados para que os clientes possam manter as unhas bonitas e
          saudáveis por mais tempo. Em resumo, a metodologia de trabalho de
          Katia Lima é baseada em uma abordagem personalizada e técnica, que
          visa garantir um resultado final de qualidade e satisfação dos
          clientes. Sua experiência e aperfeiçoamento constante em diversas
          áreas da decoração de unhas garantem um trabalho impecável e de
          excelência.
        </p>
        <p className="mobile">
          A metodologia de trabalho de Katia Lima, uma experiente manicure, é
          baseada em uma abordagem personalizada e técnica. Ela começa
          avaliando as unhas do cliente para entender suas necessidades e
          preferências, além de identificar possíveis problemas. Em seguida,
          prepara as unhas para receber o tratamento ou decoração escolhidos,
          utilizando materiais de alta qualidade e diversas técnicas, como
          pintura à mão livre, aplicação de adesivos, carimbos e pedrarias.
          Finaliza o trabalho com uma camada de finalizador para proteger e
          dar brilho às unhas, além de oferecer dicas e cuidados para
          mantê-las bonitas e saudáveis. A metodologia de Katia garante um
          resultado final de qualidade e satisfação dos clientes.
        </p>
      </Methodology>
    </Box>
  );
}
