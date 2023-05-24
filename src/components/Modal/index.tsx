import React from 'react';
import styled, { keyframes } from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  isError: boolean
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ModalWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.3s ease;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  background-color: var(--primaryDark);
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: 18px;
  > h2 {
    color: var(--textColor);
      text-shadow: black 0.1em 0.1em 0.2em;
  }
  > p {
      padding: 10px;
      color: var(--textColor);
      text-align: center;
      text-shadow: black 0.1em 0.1em 0.2em;
    }
  > button {
      width: 150px;
      height: 40px;
      border: 2px solid;
      border-color: var(--primary);
      border-radius: 30px;
      background-color: var(--textColor);
      color: var(--primary);
      font-family: "inter", sans-serif;
      font-weight: 600;
      transition-duration: 0.4s;
      text-transform: uppercase;
      :hover {
        background-color: var(--primaryDark);
        color: var(--textColor);
        border-color: var(--textColor);
      }
  }
`

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, isError = false }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        {/* <p>{!isError ? 'Sua dúvida foi enviada com sucesso!' : 'Ocorreu um Erro ao Enviar sua dúvida!'}</p> */}
        <h2>Site em Teste!</h2>
        <p>
          Site em fase de testes, <br />funcionalidade ainda indisponível!
        </p>
        <button onClick={onClose}>Fechar</button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
