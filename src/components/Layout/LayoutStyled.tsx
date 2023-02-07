import styled from "styled-components";

export const LayoutStyled = styled.main`
  padding: 20px;
  display: flex;

  .container {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 400px;
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors.primary.light};
  }

  .table {
    display: flex;
    gap: 1rem;
  }
`;
