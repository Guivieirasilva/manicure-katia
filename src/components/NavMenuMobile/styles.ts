import styled from "styled-components";
import "../../App.css";

interface Props {
  isVisible: any;
}

export const MenuMobile = styled.section<Props>`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  color: white;
  background-color: var(--primary);
  z-index: 100;
  transition: 0.8s;
  opacity: ${({ isVisible }: any) => (isVisible === true ? 1 : 0)};
  pointer-events: ${({ isVisible }: any) =>
    isVisible === true ? "auto" : "none"};
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;

  > div.mobile {
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 1rem;
    > button > h1 {
      font-size: 1.7em;
  text-shadow: gray 0.1em 0.1em 0.2em;

    }

    > .button {
      background-color: transparent;
      border: none;
      width: 40px;
      height: 40px;
      transition-duration: 0.5s;
      &:hover,
      &:focus {
        transform: scale(1.1, 1.1);
      }
      > img {
        width: 100%;
      }
    }
  }
  > nav.navMobile {
    display: flex;
    width: 100%;
    align-items: flex-start;
    > ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      font-family: "Josefin Sans", sans-serif;
      > li > button {
        font-size: 1.4rem;
        text-shadow: gray 0.1em 0.1em 0.2em;
        transition-duration: 0.5s;
        &:hover,
        &:focus {
          transform: scale(1.1, 1.1);
        }
      }
    }
  }
`;
