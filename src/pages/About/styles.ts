import styled from "styled-components";

export const Container = styled.div`
  width: "100%";
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
  height: 500px;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    padding: 10px 20px 40px 10px;
  }
`;

export const Title = styled.div`
  width: 400px;
  font-family: "Great Vibes", cursive;
  letter-spacing: 4px;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  @media screen and (max-width: 640px) {
    margin-top: 20px;
    height: 100px;
  }
`;

export const Text = styled.div`
  width: 750px;
  font-family: "inter", sans-serif;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  > p {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    width: 400px;
  }
  @media screen and (max-width: 500px) {
    width: 300px;
    padding: 5px;
  }
`;

export const CarouselContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: "70%";
  height: 320px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 10px;
  background-color: var(--primaryDark);

  @media screen and (max-width: 1350px) {
    max-width: 1000px;
  }
  @media screen and (max-width: 1150px) {
    max-width: 850px;
  }
  @media screen and (max-width: 1000px) {
    max-width: 650px;
  }
  @media screen and (max-width: 800px) {
    max-width: 550px;
  }
  @media screen and (max-width: 650px) {
    max-width: 300px;
  }
  @media screen and (max-width: 450px) {
    max-width: 250px;
  }
`;

export const ContainerMetodologia = styled.section`
  display: flex;
  width: "90%";
  height: 500px;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 100px;
  gap: 5px;
  > h3 {
    font-family: "Great Vibes", cursive;
    letter-spacing: 4px;
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
  }
  > p {
    text-align: center;
    width: "80%";
    font-size: 1.5rem;
    padding: 10px 20px;
  }

  @media screen and (max-width: 840px) {
    .span {
      display: none;
    }
  }
`;
