import axios, { AxiosError } from "axios";
import {
  AxiosResponseBody,
  RegisterData,
  User,
  UserCredentials,
} from "./types";
import { useNavigate } from "react-router-dom";
import { JwtPayloadCustom } from "../../utils/types";
import decodeToken from "../../utils/decode";
import { useState } from "react";

const useUser = () => {
  const urlApi = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const login = async (credencials: UserCredentials) => {
    try {
      const response = await axios.post(`${urlApi}/login`, credencials);

      const { token } = await response.data;

      const tokenPayload: JwtPayloadCustom = decodeToken(token);

      const loggedUser: User = {
        id: tokenPayload.id,
        token: token,
        username: tokenPayload.username,
      };

      localStorage.setItem("token", token);
      localStorage.setItem("username", tokenPayload.username);

      navigate("/home");
      return setUser(loggedUser);
    } catch (error: unknown) {
      const response = (
        error as AxiosError<AxiosResponseBody>
      ).response?.data?.details?.body
        .map((object) => object.message)
        .join(" . ");

      const data = (error as AxiosError<AxiosResponseBody>).response?.data
        .error;

      if (response) {
        return response;
      }
      if (data) {
        return data;
      }
    }
  };

  const register = async (credencials: RegisterData) => {
    try {
      await axios.post(`${urlApi}/register`, credencials);

      navigate("/login");
    } catch (error: unknown) {
      const response = (
        error as AxiosError<AxiosResponseBody>
      ).response?.data?.details?.body
        .map((object) => object.message)
        .join(" . ");

      const data = (error as AxiosError<AxiosResponseBody>).response?.data
        .error;

      if (response) {
        return response;
      }
      if (data) {
        return data;
      }
    }
  };

  return { login, register, user, setUser };
};

export default useUser;
