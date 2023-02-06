import styled from "styled-components";

export const LayoutStyled = styled.main`
  padding: 20px;
  .container {
    width: 400px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors.primary.light};
  }

  .table {
    display: flex;
    gap: 1rem;
  }
`;
