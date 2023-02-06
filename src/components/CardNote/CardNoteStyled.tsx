import styled from "styled-components";

export const CardNoteStyled = styled.li`
  text-decoration: none;
  color: #000;

  background: #ffc;
  display: block;
  min-height: 10rem;
  min-width: 20rem;
  word-break: break-all;
  border-radius: 9px 9px 0 0;
  h4,
  p {
    font-size: 1.5rem;
    padding: 0.5rem;
  }

  p {
    font-size: 1rem;
  }

  span {
    padding: 0.5rem;
  }

  @media (max-width: 600px) {
    min-height: 12rem;
  }
`;

export const ContainIconEditStyled = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  border-radius: 6px 6px 0 0px;
  border-bottom: solid 1px ${(props) => props.theme.colors.primary.base};
  background-color: ${(props) => props.theme.colors.primary.base};

  button {
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    svg {
      font-size: 1.9rem;
      color: ${(props) => props.theme.colors.primary.light};
      &:hover {
        color: ${(props) => props.theme.colors.button.hover};
      }
    }
  }
`;
