import jwtDecode from "jwt-decode";
import { JwtPayloadCustom } from "./types";

const decodeToken = (token: string) => {
  const jwtPayload: JwtPayloadCustom = jwtDecode(token);

  return {
    token,
    id: jwtPayload.id,
    username: jwtPayload.username,
  };
};

export default decodeToken;
