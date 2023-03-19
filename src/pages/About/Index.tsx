import { Container, ContainerMetodologia, Text, Title } from "./styles";

const Images = [unhas, unhas, unhas, unhas, unhas, unhas];
import unhas from "../../assets/unhas.jpg";
import { Carousel } from "../../components/Carousel/Index";
import { CarouselContainer } from "./styles";

export default function About() {
  return (
    <>
      <Container>
        <Title>
          <p>Sobre</p>
        </Title>

        <Text>
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

      <div
        style={{
          width: "100%",
          backgroundColor: "#8e38b5",
          height: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: '20px',
          marginBottom: '50px'
        }}
      >
        <CarouselContainer>
          <Carousel images={Images} />
        </CarouselContainer>
      </div>

      <ContainerMetodologia>
        <h3>Metodologia de Trabalho</h3>
        <p>
          A metodologia de trabalho de uma manicure é essencial para garantir um
          resultado final de qualidade e satisfação dos clientes. Katia Lima,
          uma experiente manicure, possui uma abordagem de trabalho que é
          baseada em técnicas precisas e aperfeiçoadas ao longo de mais de uma
          década de prática. Em primeiro lugar, Katia sempre inicia o trabalho
          com uma avaliação das unhas de seus clientes. Essa etapa é fundamental
          para entender as necessidades e preferências de cada pessoa, assim
          como identificar possíveis problemas que possam afetar o resultado
          final.
          <span className="span">
            {" "}
            A partir daí, ela define qual será o tipo de tratamento ou decoração
            a ser realizado. Em seguida, Katia inicia a preparação das unhas,
            que inclui a remoção de cutículas, limpeza, lixamento e polimento.
            Essa etapa é importante para garantir que as unhas fiquem uniformes
            e prontas para receber o tratamento ou decoração escolhidos. Para a
            decoração das unhas, Katia utiliza diversas técnicas, como pintura à
            mão livre, aplicação de adesivos, carimbos e pedrarias. Ela sempre
            busca entender o estilo e gosto de cada cliente para criar um visual
            personalizado e exclusivo. Além disso, ela utiliza materiais de alta
            qualidade para garantir que a decoração tenha durabilidade e
            resistência. Por fim, Katia finaliza o trabalho com uma camada de
            finalizador para proteger e dar brilho às unhas. Ela também oferece
            dicas e cuidados para que os clientes possam manter as unhas bonitas
            e saudáveis por mais tempo. Em resumo, a metodologia de trabalho de
            Katia Lima é baseada em uma abordagem personalizada e técnica, que
            visa garantir um resultado final de qualidade e satisfação dos
            clientes. Sua experiência e aperfeiçoamento constante em diversas
            áreas da decoração de unhas garantem um trabalho impecável e de
            excelência.
          </span>
        </p>
      </ContainerMetodologia>
    </>
  );
}
