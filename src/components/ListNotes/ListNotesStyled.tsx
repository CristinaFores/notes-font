import styled from "styled-components";

export const ListNotesStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
  }
`;
