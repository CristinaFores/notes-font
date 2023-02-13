import styled from "styled-components";

export const FormNoteStyled = styled.form`
  padding-left: 1rem;
  padding-right: 1rem;

  padding-top: 2.625rem;
  padding-bottom: 2.625rem;
  list-style: none;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: 0px 1px 4px 0px rgb(0 0 0 / 20%);
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.primary.base};

  p {
    color: ${(props) => props.theme.colors.primary.light};
    text-align: center;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  textarea {
    height: 80px;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
  }
  input[type="file"] {
    background-color: ${(props) => props.theme.colors.primary.light};
    height: fit-content;
  }
  input[type="file"]::file-selector-button {
    margin-right: 10px;
    border: none;
    background: ${(props) => props.theme.colors.button.active};
    padding: 10px 20px;
    border-radius: 3px;
    color: ${(props) => props.theme.colors.primary.light};
    transition: background 0.2s ease-in-out;
  }

  input[type="file"]::file-selector-button:hover {
    background-color: ${(props) => props.theme.colors.button.hover};
  }

  label[for="category"] {
    background-color: ${(props) => props.theme.colors.primary.light};
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
  }
  select#category {
    padding: 10px;
    width: 100%;
    border: 1px solid gray;
    border-radius: 5px;
    margin-top: 10px;
  }
`;
