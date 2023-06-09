import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--primary);
  width: "100%";
  height: 200px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px 10%;
  color: (--textColor);

  @media screen and (max-width: 860px) {
    flex-direction: column;
    padding: 20px 5%;
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
  > a > h2 {
    text-shadow: black 0.1em 0.1em 0.2em;
    color: (--textColor);
    font-family: "Great Vibes", cursive;
    letter-spacing: 5px;
  }
  > div {
    display: flex;
    gap: 1rem;
    > a {
      font-size: .9rem;
        text-shadow: black 0.1em 0.1em 0.2em;
    }
  }
  @media screen and (max-width: 860px) {
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

  @media screen and (max-width: 860px) {
    align-items: center;
    > div > p {
      text-align: center;
      font-size: 1rem;
    }
  }
`;
