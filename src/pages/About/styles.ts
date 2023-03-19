import styled from "styled-components";

export const Container = styled.div`
  width: "100%";
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 50px;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    padding: 10px 20px;
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
