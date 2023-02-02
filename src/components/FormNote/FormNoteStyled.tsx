import styled from "styled-components";

export const FormNoteStyled = styled.form`
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 5px;
  padding-top: 2.625rem;
  padding-bottom: 2.625rem;
  list-style: none;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: 0px 1px 4px 0px rgb(0 0 0 / 20%);
  border-radius: 15px;

  p {
    color: ${(props) => props.theme.colors.primary.base};
    text-align: center;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  textarea {
    height: 200px;
    border-radius: 10px;
    padding: 10px;
  }
  input[type="file"]::file-selector-button {
    margin-right: 20px;
    border: none;
    background: ${(props) => props.theme.colors.button.active};
    padding: 10px 20px;
    border-radius: 10px;
    color: ${(props) => props.theme.colors.primary.light};
    transition: background 0.2s ease-in-out;
  }

  input[type="file"]::file-selector-button:hover {
    background-color: ${(props) => props.theme.colors.primary.dark};
  }
`;
