import styled from "styled-components";

export const Asise = styled.aside`
  position: fixed;
  z-index: 20;
  background-color: transparent;
  transition-duration: 1s;
  right: 3%;
  bottom: 5%;
  :hover {
    transform: scale(1.1, 1.1);
  }
  > div {
    width: 60px;
    height: 50px;
    > a {
      > img {
        width: 100%;
      }
    }
  }
`;
