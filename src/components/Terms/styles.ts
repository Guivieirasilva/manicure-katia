import styled from "styled-components";


export const ModalWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 10%;
  right: 10%;
  width: 80%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  margin: 0 auto;
`;

export const Message = styled.p`
  color: #fff;
  margin: 0;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;