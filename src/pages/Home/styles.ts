import styled from "styled-components";

export const Banner = styled.div`
  background-color: var(--primaryDark);
  width: "100%";
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 50px;
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
    font-size: 1.6rem;
  }
  > p {
    font-family: "inter", sans-serif;
    font-size: 1rem;
    margin-bottom: 30px;
  }
  > a {
    text-decoration: none;
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
  }
`;

export const Box = styled.section`
  display: grid;
  grid-template-columns: 3fr 2fr;
  max-width: 1400px;
  margin: 50px auto;
  padding: 100px;

  @media screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Picture = styled.div`
  width: 100%;
  > img {
    width: 100%;
    border-radius: 0.2rem;
  }
  @media screen and (max-width: 1050px) {
    width: 90%;
    margin: auto;
  }
`;

export const Content = styled.div`
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 40%;
  align-self: end;
  padding: 4rem 0 0 4rem;
  width: 140%;
  margin-left: -10rem;
  background-color: var(--background);
  text-align: left;
  /* height: 350px; */
  > h3 {
    font-size: 1.6rem;
  }
  > p {
    font-size: 1rem;
    max-width: 90%;
    font-family: "inter", sans-serif;
  }
  @media screen and (max-width: 1050px) {
    justify-content: center;
    gap: 0.5rem;
    width: 90%;
    margin: auto;
    padding: 1rem;
    text-align: center;
    > p {
      margin: 20px auto;
    }
  }
  @media screen and (max-width: 750px) {
    > h3 {
      font-size: 1.5rem;
    }
    > p {
      font-size: 0.8rem;
    }
  }
`;
