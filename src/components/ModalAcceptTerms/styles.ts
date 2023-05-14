import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  bottom: 5%;
  left: 10%;
  right: 10%;
  width: 80%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  z-index: 9999;

  @media (max-width: 768px) {
    left: 5%;
    right: 5%;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 650px;
  margin: 0 auto;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Message = styled.p`
  color: #fff;
  margin: 0;

  a {
    color: aliceblue;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const Button = styled.button`
  margin: 0 0 0 20px;
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
  }

  @media (min-width: 769px) {
    margin-left: 20px;
    width: auto;
  }
`;