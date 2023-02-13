import styled from "styled-components";

export const NavbarStyled = styled.ul`
  color: ${(props) => props.theme.colors.button.active};
  display: flex;
  font-size: 1.2rem;
  gap: 1.2rem;
  padding: 0 1rem;

  .icon-navbar {
    &:hover {
      color: ${(props) => props.theme.colors.button.hover};
      text-decoration: underline;
    }
  }
  svg {
    font-size: 1.5rem;
  }
  .profile {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: ${(props) => props.theme.colors.button.hover};
      text-decoration: underline;
    }
  }
`;
