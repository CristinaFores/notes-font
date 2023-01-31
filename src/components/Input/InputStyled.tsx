import styled from "styled-components";

export const InputStyled = styled.input`
  border: none;

  width: 100%;
  margin-bottom: 1.8rem;
  margin-top: 1.25px;
  display: block;
  border-radius: 6px;
  padding: 0.5rem 5px 0.3rem 5px;
  height: 50px;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary.dark};
  }
`;

export const InputLabelStyled = styled.label`
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary.light}; ;
`;
