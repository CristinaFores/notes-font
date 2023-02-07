import styled from "styled-components";

export const TrelloStyled = styled.div`
  .continer {
    display: flex;
    gap: 1rem;
  }
  H2 {
    padding: 0.5rem;
  }
  .column {
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: 90px;
    border-radius: 6px 6px 0 0;
    background-color: ${(props) => props.theme.colors.primary.light};
  }

  .column-items {
    display: flex;
    flex-direction: column;
    width: 400px;
    border-radius: 6px 6px 0 0;
    background-color: ${(props) => props.theme.colors.primary.light};
  }
  h5 {
    font-size: 1.2rem;
  }
  a {
    display: flex;
    gap: 1rem;
    padding: 0.5rem;
    font-size: 1.8rem;
    background-color: ${(props) => props.theme.colors.primary.light};
    border-radius: 0px 0px 6px 6px;
    position: relative;
    align-items: center;

    &:hover {
      background-color: ${(props) => props.theme.colors.button.hover};
      border-radius: 6px;
      cursor: pointer;
    }
  }
`;
