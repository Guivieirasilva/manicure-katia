import styled from "styled-components";

export const TermsPageWrapper = styled.div`
  max-width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: var(--primary);
`;

export const Title = styled.h2`
  font-size: 26px;
  text-shadow: black 0.1em 0.1em 0.2em;
  font-family: "inter", sans-serif;
  letter-spacing: 1px;
  margin-bottom: 20px;
  color: var(--textColor);
`;

export const Text = styled.p`
  margin-bottom: 10px;
  color: var(--textColor);
  text-shadow: gray 0.1em 0.1em 0.2em;
  font-family: "inter", sans-serif;
`;

