import styled from "styled-components";

export const Container = styled.div`
  background-color: "#e7e7e6";
  padding: 2rem;
  border-radius: 2rem;

  [class^="number-slide"],
  [class*=" number-slide"] {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: #fff;
    border-radius: 1rem;
    font-weight: 500;
    height: 320px;
    max-height: 100vh;
    @media screen and (max-width: 1050px) {
      height: 280px;
    }
  }
`;
