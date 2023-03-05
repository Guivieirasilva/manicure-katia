import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primaryDark);
  width: "100%";
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 0 50px;
  > img {
    width: 60%;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
    > img {
      width: 100%;
    }
  }
`;

export const Text = styled.div`
  color: var(--textColor);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 25px;
  /* gap: 10px; */
  > h2 {
    font-family: "Libre Baskerville", serif;
    font-weight: 700;
    letter-spacing: 0.5px;
    /* text-transform: uppercase; */
    font-size: 18px;
  }
  > p {
    font-family: "inter", sans-serif;
  }
  > a {
    text-decoration: none;
    > button {
      width: 140px;
      height: 30px;
      border: 2px solid;
      border-color: var(--primary);
      border-radius: 30px;
      background-color: var(--textColor);
      color: var(--primary);
      font-family: "inter", sans-serif;
      transition-duration: 0.4s;
      text-transform: uppercase;
      :hover {
        background-color: var(--primary);
        color: var(--textColor);
        border-color: var(--textColor);
      }
    }
  }
`;
