import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4;
  width: 100%;

  align-items: center;
  background-color: var(--primaryDark);
  border-bottom: 2px solid purple;
`;

export const Box = styled.div`
  display: flex;
  padding-top: 30px;
  flex-direction: column;
  /* padding: 20px 30px; */
  width: 100%;
  background-color: var(--background);
`;

export const CarouselContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 1200px;
  height: 320px;
  margin: 0 auto 50px auto;
  padding: 0 10px;

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

  @media screen and (max-width: 450px) {
    max-width: 250px;
  }
`;

export const SubTitle = styled.div`
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  font-size: 1.5rem;
  padding: 10px 15px;
  display: flex;
  align-items: "center";
  justify-content: "center";
  > h3 {
    display: flex;
    margin: 20px auto 0 auto;
}
  @media screen and (max-width: 550px) {
  font-size: 1.3rem;
  > h3 {
   text-align: center;
  }
    
  }
`;

export const Techniques = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 1080px;
  height: 650px;
  justify-content: space-around;
  text-shadow: black 0.1em 0.1em 0.2em;
  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

export const Text = styled.div`
  background-color: rgba(157, 61, 200, 0.3);
  width: 500px;
  padding: 20px 40px;
  color: var(--textColor);
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div {
    color: var(--textColor);
    display: flex;
    flex-direction: column;
    gap: 0;
    > h2 {
      font-size: 1.5rem;
      font-family: "Libre Baskerville", serif;
      > span {
        font-size: 1.2rem;
      }
    }
  }
  > p {
    text-align: left;
    font-size: 1.1rem;
  }
  @media screen and (max-width: 950px) {
    width: 80%;
    > p {
    text-align: justify;

    }
  }
`;

export const Image = styled.div`
  background-color: purple;
  width: 350px;
  height: 350px;
  border: 1px solid transparent;
  border-radius: 50%;

  @media screen and (max-width: 950px) {
   display: none;
    width: 250px;
    height: 250px;
    /* position: absolute; */
    right: 10%;
    top: 5%;
  }
  > img {
    width: 100%;
    border-radius: 50%;
  }
`;
