import styled from "styled-components";

export const RegisterStyled = styled.form`
  max-width: 360px;
  padding: 2rem 1rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.primary.light};
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.primary.base};
  box-shadow: 0px 0px 8px 0px #757575;

  input,
  button {
    margin-top: 0.5rem;
  }

  p {
    margin-bottom: 1.8rem;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
  }
`;
