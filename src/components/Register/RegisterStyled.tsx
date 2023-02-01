import styled from "styled-components";

export const RegisterStyled = styled.form`
  max-width: 420px;
  padding: 3.2rem 1rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.primary.light};
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.primary.base};
  box-shadow: 0px 0px 4px 0px #757575;

  margin: 0 auto;
  input,
  button {
    margin-top: 0.5rem;
  }

  p {
    margin-bottom: 1.8rem;
    font-weight: 700;
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const TextSpanStyled = styled.div`
  color: ${(props) => props.theme.colors.primary.light};
  font-weight: 500;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;

  span,
  a {
    margin: 0;
  }

  a {
    color: ${(props) => props.theme.colors.button.active};
    &:hover {
      color: ${(props) => props.theme.colors.button.hover};
    }
  }
`;
