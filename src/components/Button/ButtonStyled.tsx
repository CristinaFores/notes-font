import styled, { css } from "styled-components";

interface ButtonStyledProps {
  styleType: "small" | "medium" | "big" | "smallest";
}

const smallButton = css`
  width: 6rem;
`;
const bigButton = css`
  width: 100%;
`;
const mediumButton = css`
  width: 200px;
`;

const smallestButton = css`
  width: 4rem;
  font-size: 1rem;
  height: 40px;
  border: none;
  color: ${(props) => props.theme.colors.primary.light};
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.button.active};
  width: 5rem;
`;
const ButtonStyled = styled.button<ButtonStyledProps>`
  font-family: inherit;
  height: 50px;
  border: none;
  font-size: 20px;
  color: ${(props) => props.theme.colors.primary.light};
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.button.active};

  &:focus,
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.button.hover};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.button.disable};
  }
  ${({ styleType }) => styleType === "small" && smallButton}
  ${({ styleType }) => styleType === "big" && bigButton}
  ${({ styleType }) => styleType === "smallest" && smallestButton}
  ${({ styleType }) => styleType === "medium" && mediumButton}
`;

export default ButtonStyled;
