import styled from "styled-components";

export const NavbarStyled = styled.ul`
  display: flex;
  margin-top: 0;
  margin-bottom: 2rem;
  border-bottom: solid ${(props) => props.theme.colors.primary.base} 1px;

  justify-content: end;
  gap: 2rem;
  padding: 0.5rem 5rem;
  height: 60px;
  align-items: center;

  .icon-navbar {
    width: 36px;
    height: 36px;
    color: ${(props) => props.theme.colors.button.active};
    &:hover {
      color: ${(props) => props.theme.colors.button.hover};
    }
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.2rem;
    border-radius: 50%;
    padding: 0.5rem 0rem 0.5rem 0;
    flex-grow: 1;
    color: ${(props) => props.theme.colors.primary.light};

    .icon-profile {
      width: 36px;
      height: 36px;
      color: ${(props) => props.theme.colors.primary.light};

      &:hover {
        color: ${(props) => props.theme.colors.button.hover};
      }
    }
  }
`;
