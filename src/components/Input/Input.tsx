import React from "react";
import { InputLabelStyled, InputStyled } from "./InputStyled";

interface InputProps {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  htmlFor: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  autoComplete?: string;
  id?: string;
  textLabel: string;
  name?: React.InputHTMLAttributes<HTMLInputElement>["name"];
}

const Input = ({
  type,
  placeholder,
  htmlFor,
  onChange,
  required,
  autoComplete,
  id,
  textLabel,
  name,
}: InputProps) => {
  return (
    <>
      <InputLabelStyled htmlFor={htmlFor}>{textLabel}</InputLabelStyled>
      <InputStyled
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        id={id}
        name={name}
      />
    </>
  );
};

export default Input;
