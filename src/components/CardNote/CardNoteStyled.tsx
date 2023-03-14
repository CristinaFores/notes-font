import styled from "styled-components";

export const CardNoteStyled = styled.li`
  text-decoration: none;
  color: #000;
  display: block;
  min-height: 5rem;
  min-width: 5rem;
  word-break: break-all;
  border-radius: 9px 9px 0 0;

  h4,
  p {
    font-size: 1.1rem;
    padding: 0.5rem;
  }

  p {
    font-size: 0.8rem;
  }

  span {
    padding: 0.5rem;
    font-size: 0.8rem;
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
    margin: 0.5rem 1rem 0.5rem 0;

    svg {
      font-size: 1.9rem;
      color: ${(props) => props.theme.colors.primary.light};
      &:hover {
        color: ${(props) => props.theme.colors.button.hover};
      }
    }
  }
`;

export const CategoryCircleStyled = styled.section`
  display: flex;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  margin-left: 1rem;
  align-items: center;
  flex-grow: 1;
  div {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
  }
`;

export const ContaintNoteStyled = styled.div`
  :hover {
    background-color: ${(props) => props.theme.colors.draggable.base};
    min-height: 5rem;
    border-radius: 0px 0px 8px 8px;
  }
`;
