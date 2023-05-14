import React, { useState } from "react";
import Cookies from "js-cookie";
import { ModalWrapper, ModalContent, Message, Button } from "./styles";

// Componente do modal de cookies
export const ModalAcceptTerms: React.FC = () => {
  const [isVisible, setIsVisible] = useState(!Cookies.get("cookieAccepted"));

  const handleAccept = () => {
    Cookies.set("cookieAccepted", "true", { expires: 365 });
    setIsVisible(false);
    // Lógica adicional para o aceite dos termos de uso dos dados
  };

  if (!isVisible) {
    return null;
  }

  return (
    <ModalWrapper>
      <ModalContent>
        <Message>
          Utilizamos cookies para aprimorar sua experiência em nosso site. Ao
          aceitar, você concorda com o uso de cookies para personalização de
          conteúdo, análise de tráfego e integração com mídias sociais. Você
          pode ajustar as configurações do seu navegador para bloquear os
          cookies. Para mais informações, consulte nossa <a href="/Terms">Política de Privacidade</a>{" "}
        </Message>
        <Button onClick={handleAccept}>Aceitar</Button>
      </ModalContent>
    </ModalWrapper>
  );
};
