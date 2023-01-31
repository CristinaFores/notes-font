import { useState } from "react";
import { Link } from "react-router-dom";
import { RegisterData } from "../../hooks/useUser/types";
import useUser from "../../hooks/useUser/useUser";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { RegisterStyled, TextSpanStyled } from "./RegisterStyled";

const Register = (): JSX.Element => {
  const { register } = useUser();

  const intialFormData: RegisterData = {
    username: "",
    password: "",
    email: "",
  };

  const [formData, setFormData] = useState(intialFormData);

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const sendUsers = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: RegisterData = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };
    await register(formDataToSubmit);
  };
  const isFormEmpty = () => {
    return Object.values(formData).some((data) => data === "");
  };

  return (
    <RegisterStyled onSubmit={sendUsers}>
      <p>Rellena todos los campos todos los campos</p>
      <Input
        type="text"
        placeholder="Nombre"
        htmlFor="username"
        id="username"
        textLabel="Nombre"
        onChange={handleInputChange}
      />
      <Input
        type="email"
        placeholder="Email"
        htmlFor="email"
        id="email"
        textLabel="Email"
        onChange={handleInputChange}
      />
      <Input
        type="password"
        htmlFor="password"
        id="password"
        placeholder="Contraseña"
        textLabel="Contraseña"
        onChange={handleInputChange}
      />
      <Button
        ariaLabel="Registrate"
        styleType="big"
        text="Registrate"
        disabled={isFormEmpty()}
      />

      <TextSpanStyled>
        <span>¿Ya tienes una cuenta? </span>
        <Link to={"/login"}> Entrar</Link>
      </TextSpanStyled>
    </RegisterStyled>
  );
};

export default Register;
