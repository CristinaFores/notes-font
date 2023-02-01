import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 3rem 1rem 4rem 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  section {
    display: flex;
    gap: 0.3rem;
    margin-top: 1.2rem;
    justify-content: center;
  }

  div {
    height: 13px;
    width: 13px;

    border-radius: 50px;
  }

  section > :first-child {
    background-color: #b388ff;
  }

  section > :nth-child(2) {
    background-color: #ccff90;
  }

  section > :nth-child(3) {
    background-color: #ff8a80;
  }

  section > :nth-child(4) {
    background-color: #ffff8d;
  }

  section > :nth-child(5) {
    background-color: #a0afff;
  }

  h1 {
    color: #ffff;
    font-weight: bold;
    text-align: center;
  }
`;
