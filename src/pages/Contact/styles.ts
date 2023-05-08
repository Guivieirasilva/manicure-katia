import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primaryDark);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const Localization = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  gap: 5px;
  align-items: center;
  justify-content: center;
  color: var(--textColor);
  text-shadow: black 0.1em 0.1em 0.2em;
  font-size: 1.5rem;
  padding: 0 20px 50px 20px;

  > div {
    max-width: 700px;
    max-height: 400px;
    width: 80%;
    height: 90%;
    border: 1px solid purple;
    background-color: purple;
    border-radius: 20px;

    > iframe {
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }
  }
`;

export const SocialMedias = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: 500px;
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > h2 {
    font-size: 1.8rem;
    font-family: "Libre Baskerville", serif;
  }
  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: row;

    > a {
      transition-duration: 0.8s;
      :hover {
        transform: scale(1.1, 1.1);
      }
      img {
        width: 200px;
      }
    }
  }

  @media screen and (max-width: 680px) {
    > div {
      gap: 5px;
      flex-direction: column;
      > a {
        img {
          width: 120px;
        }
      }
    }
  }
`;

export const Form = styled.div`
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  width: 100%;
  flex-direction: column;
  color: var(--textColor);
  text-shadow: black 0.1em 0.1em 0.2em;
  font-family: "Libre Baskerville", serif;
  padding-bottom: 60px;
  padding-top: 10px;

  border-bottom: 1px solid purple;
  > form {
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 15px;
    align-items: center;
    justify-content: center;
    font-family: "inter", sans-serif;
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
    .error-message {
      color: red;
      margin-left: 10px;
      font-size: 14px;
    }
  }
`;
export const Label = styled.label`
  max-width: 800px;
  width: 80%;
  > textarea {
    font-size: 1rem;
    letter-spacing: 2px;
    width: 100%;
    height: 100px;
    margin-left: 10px;
    border-radius: 5px;
  }
  > input {
    font-size: 1rem;
    letter-spacing: 2px;
    width: 100%;
    margin-left: 10px;
    height: 20px;
    border-radius: 5px;
    border: none;
    padding: 5px;
  }
`;
