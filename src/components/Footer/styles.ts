import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--primaryDark);
  width: "100%";
  height: 200px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px 50px;
  color: (--textColor);

  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding: 40px 50px;
    height: 240px;
    gap: 10px;
    justify-content: space-around;
  }
`;
export const Nav = styled.div`
  width: "50%";
  color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  > h2 {
    text-shadow: gray 0.1em 0.1em 0.2em;
    color: (--textColor);
    font-family: "Great Vibes", cursive;
    letter-spacing: 5px;
  }
  > div {
    > button {
      text-shadow: gray 0.1em 0.1em 0.2em;
    }
  }
  @media screen and (max-width: 800px) {
    align-items: center;
    > h2 {
      text-align: center;
    }
  }
`;

export const SocialMedia = styled.div`
  width: "50%";
  height: "100%";
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;

  .redes {
    display: flex;
    flex-direction: row;
    > a {
      margin: 0 15px;
      transition-duration: 0.5s;

      :hover {
        transform: scale(1.1, 1.1);
      }
    }
  }

  > div {
    color: #fff;
  }

  @media screen and (max-width: 800px) {
    align-items: center;
    > div > p {
      text-align: center;
      font-size: 1rem;
    }
  }
`;
