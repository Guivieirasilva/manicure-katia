import styled from "styled-components";

export const Container = styled.div`

  [class^="number-slide"],
  [class*=" number-slide"] {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: #fff;
    font-weight: 500;
    height: 320px;
    max-height: 100vh;
    @media screen and (max-width: 1050px) {
      height: 280px;
  }
  }

`;
