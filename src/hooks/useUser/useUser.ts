import axios, { AxiosError } from "axios";
import { AxiosResponseBody, User, UserCredentials } from "./types";
import { useNavigate } from "react-router-dom";
import { JwtPayloadCustom } from "../../components/utils/types";
import decodeToken from "../../components/utils/decode";

const useUser = () => {
  const urlApi = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

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

      navigate("/home");
      return loggedUser;
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

  return { login };
};

export default useUser;
