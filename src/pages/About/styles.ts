import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--primaryDark);
  gap: 10px;
`;

/* Header */

export const Container = styled.div`
  width: "100%";
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
  height: 500px;
  border-bottom: 0.1rem solid purple;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    padding: 10px 20px 40px 10px;
  }
`;

export const PersonAbout = styled.div`
  display: flex;
  align-self: flex-end;
  max-width: 400px;
  width: 40%;
  > img {
    width: 100%;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const Text = styled.div`
  background-color: rgba(157, 61, 200, 0.3);
  color: var(--textColor);
  text-shadow: black 0.1em 0.1em 0.2em;
  max-width: 600px;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;
  > h3 {
    font-family: "Libre Baskerville", serif;
    font-weight: 700;
    font-size: 1.6rem;
    text-align: left;
  }
  > p {
    text-align: justify;
    padding: 0 20px;
    font-size: 1rem;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    > h3 {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 400px) {
    > h3 {
      font-size: 1.3rem;
    }
  }
`;

/* Carousel */

export const ContainerCarousel = styled.div`
  width: 100%;
  background-color: transparent;
  height: 400px;
  display: flex;
  padding-bottom: 3rem;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-top: 10px; */
`;

export const SubTitle = styled.div`
  display: flex;
  align-items: "center";
  justify-content: "center";
  > h3 {
    color: var(--textColor);
    font-family: "Libre Baskerville", serif;
    text-shadow: black 0.1em 0.1em 0.2em;
    display: flex;
    font-weight: 700;
    padding: 0 20px;
    margin: 10px auto;
    letter-spacing: 5px;
    text-align: center;
    font-size: 1.6rem;
  }
  
    @media screen and (max-width: 900px) {
    width: 100%;
    > h3 {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 400px) {
    > h3 {
      font-size: 1.3rem;
    }
  }
  
`;


export const Methodology = styled.article`
  background-color: var(--background);
  display: flex;
  /* width: 100%; */
  height: 800px;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 30px 100px; */
  gap: 5px;
  > h3 {
    font-family: "Libre Baskerville", serif;
    font-weight: 700;
    font-size: 1.8rem;
    text-align: center;
  }
  > p {
    text-align: justify;
    max-width: 1000px;
    width: 90%;
    font-size: 1.2rem;
    padding: 0px 20px;
  }

  .mobile {
    display: none;
  }
  @media screen and (max-width: 1100px) {
    width: "70%";
    padding: 30px;
    > p {
      width: "80%";
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 800px) {
    height: 750px;
    >h3 {
      font-size: 1.4rem;
    }
    > .desktop {
      display: none;
    }
    > .mobile {
      display: block;
    }
  }
`;
