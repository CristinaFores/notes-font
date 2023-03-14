import styled from "styled-components";

export const DetailNoteStyled = styled.div`
  display: flex;
  flex-direction: column;
  top: 217px;
  border-radius: 1rem;
  width: 100%;
  margin: 2rem;

  h1 {
    padding: 1rem;
    border-radius: 1rem;
  }

  p {
    padding: 1rem;
    border-radius: 1rem;
    font-size: 1.2rem;
  }

  img {
    border-radius: 1rem;
    width: 300px;
  }
  .image {
    display: flex;
    justify-content: center;
  }
  .button-volver {
    display: flex;
    justify-content: end;
    padding: 1rem;
  }
`;
