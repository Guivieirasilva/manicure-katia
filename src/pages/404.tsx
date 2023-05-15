import React from "react";
import styled from "styled-components";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: var(--textColor);
  background-color: var(--primaryDark);
`;

const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 20px;
  font-family: "Libre Baskerville", serif;
  text-shadow: black 0.1em 0.1em 0.2em;
`;

const Message = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
  text-shadow: black 0.1em 0.1em 0.2em;
  font-family: "inter", sans-serif;
`;

const Paragraph = styled.p`
  text-shadow: black 0.1em 0.1em 0.2em;
  font-size: 18px;
`;

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundWrapper>
      <Title>404</Title>
      <Message>Oops! Página não encontrada.</Message>
      <Paragraph>
        Desculpe, a página que você está procurando não existe.
      </Paragraph>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
