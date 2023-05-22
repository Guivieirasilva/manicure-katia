import styled from "styled-components";

export const Banner = styled.div`
  background-color: var(--primaryDark);
  width: "100%";
  text-shadow: black 0.1em 0.1em 0.2em;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 5rem;
  padding: 50px;
  margin: 0 auto;
  > img {
    max-width: 700px;
    min-width: 480px;
    width: 60%;
  }
  @media screen and (max-width: 980px) {
    gap: 0.5rem;
    > img {
      min-width: 300px;
    }
  }

  @media screen and (max-width: 680px) {
    flex-direction: column;
    justify-content: center;
    > img {
      width: 90%;
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
  > h2 {
    font-family: "Libre Baskerville", serif;
    font-weight: 700;
    letter-spacing: 0.5px;
    font-size: 1.3rem;
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
  margin: 20px auto;
  padding: 100px;
  /* border-bottom: 0.5px solid var(--textColor); */

  @media screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 20px;
    margin: 20px auto;
  }
  @media screen and (max-width: 600px) {
    padding: 50px;
    margin: 10px;
  }
`;

export const Picture = styled.div`
  max-width: 100%;
  > img {
    max-width: 700px;

    width: 100%;
    border-radius: 0.2rem;
  }
  @media screen and (max-width: 1050px) {
    width: 70%;
    margin: auto;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  gap: 0.1rem;
  height: 70%;
  align-self: end;
  padding: 2rem 0 1rem 4rem;
  width: 140%;
  max-width: 600px;
  margin-left: -10rem;
  background-color: var(--backgroundText);
  text-align: left;
  justify-content: center;
  /* height: 350px; */
  > h3 {
    font-size: 1.6rem;
    margin: 10px 0;
  }
  > p {
    text-align: justify;
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
    > h3 {
      font-size: 1.5rem;
    }
    > p {
      text-align: justify;
      margin: 20px auto;
    }
  }
  @media screen and (max-width: 750px) {
    > h3 {
      font-size: 1.2rem;
    }
    > p {
      font-size: 0.8rem;
    }
  }
`;

export const BoxCarousel = styled.div`
padding-top: 50px;
padding-left: 50px;
padding-right: 50px;
  background-color: var(--primaryDark);
  width: '100%';
  height: 500px;
`
export const CarouselContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primaryDark);
  width: 100%;
  max-width: 1200px;
  height: 320px;
  margin: 20px auto 50px auto;
  /* padding: 0 10px; */
  padding-bottom: 40px;

  @media screen and (max-width: 1350px) and (min-width: 1151px) {
    max-width: 1000px;
  }

  @media screen and (max-width: 1150px) and (min-width: 1001px) {
    max-width: 850px;
  }

  @media screen and (max-width: 1000px) and (min-width: 801px) {
    max-width: 650px;
  }

  @media screen and (max-width: 800px) and (min-width: 651px) {
    max-width: 550px;
  }

  @media screen and (max-width: 650px) and (min-width: 451px) {
    max-width: 350px;
  }
`;

export const SubTitle = styled.div`
  font-family: "Libre Baskerville", serif;
  color: var(--textColor);
  font-weight: 700;
  font-size: 1.6rem;
  display: flex;
  text-shadow: black 0.1em 0.1em 0.2em;
  align-items: "center";
  justify-content: "center";
  > h3 {
    display: flex;
    margin: 10px auto;
  }
`;
