import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserCredentials } from "../../hooks/useUser/types";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { RegisterStyled, TextSpanStyled } from "../Register/RegisterStyled";

const Login = () => {
  const { login } = useUser();

  const intialFormData: UserCredentials = {
    username: "",
    password: "",
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

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formDataToSubmit: UserCredentials = {
      username: formData.username,
      password: formData.password,
    };

    await login(formDataToSubmit);
  };

  const isFormEmpty = () => {
    return Object.values(formData).some((data) => data === "");
  };

  return (
    <div>
      <RegisterStyled onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nombre"
          htmlFor="username"
          id="username"
          textLabel="Nombre"
          onChange={handleInputChange}
        />

        <Input
          type="password"
          htmlFor="password"
          id="password"
          placeholder="Contraseña"
          textLabel="Contraseña"
          onChange={handleInputChange}
          autoComplete="off"
        />
        <Button
          ariaLabel="Entrar"
          styleType="big"
          text="Entrar"
          disabled={isFormEmpty()}
        />

        <TextSpanStyled>
          <span>¿Ya tienes una cuenta?</span>
          <Link to={"/register"}>Registrarte</Link>
        </TextSpanStyled>
      </RegisterStyled>
    </div>
  );
};

export default Login;
