import styled from "styled-components";

export const Container = styled.div`
  max-width: 840px;
  display: flex;
  align-items: center;
  height: 100%;
  max-height: 320px;

  @media screen and (max-width: 1024px) and (min-width: 799px) {
    max-width: 640px;
    max-height: 280px;
  }

  @media screen and (max-width: 800px) and (min-width: 639px) {
    max-width: 560px;
    max-height: 240px;
  }

  @media screen and (max-width: 640px) and (min-width: 539px) {
    max-width: 420px;
    max-height: 200px;
  }
  @media screen and (max-width: 540px) and (min-width: 319px) {
    max-width: 340px;
    max-height: 170px;
  }

  [class^="number-slide"],
  [class*=" number-slide"] {
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 100%;
    max-height: 300px;
  }
`;
