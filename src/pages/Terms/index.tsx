import { TermsPageWrapper, Text, Title } from "./styles";

const TermsPage = () => {

  return (
    <TermsPageWrapper>
      <Title>Termos de Uso</Title>
      <Text>
        Ao utilizar nosso site, você concorda com os seguintes termos:
      </Text>
      <Text>
        1. Utilizaremos cookies para melhorar sua experiência de navegação.
      </Text>
      <Text>
        2. Coletaremos e armazenaremos o nome e telefone do usuário para fins de
        contato.
      </Text>
      <Text>
        3. Seus dados pessoais serão tratados com sigilo e não serão
        compartilhados com terceiros.
      </Text>
      <Text>
        4. Reservamo-nos o direito de atualizar estes termos a qualquer momento.
      </Text>
      <Text>
        Por favor, leia atentamente nossos termos de uso antes de prosseguir.
      </Text>
    </TermsPageWrapper>
  );
};

export default TermsPage;
