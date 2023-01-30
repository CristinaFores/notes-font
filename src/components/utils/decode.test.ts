import jwtDecode from "jwt-decode";
import decodeToken from "./decode";
import { JwtPayloadCustom } from "./types";

describe("Given a decodeToken funcion", () => {
  describe("When it's called with a token encode", () => {
    test("Then it should  return objecto son el token , la id, and username", () => {
      const expectoken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNyaXN0aW5hIiwiaWQiOiIxMjM0NTY3ODkiLCJpYXQiOjE2NjgyNjkxNzksImV4cCI6MTY2ODQ0MTk3OX0.SscRMw9fHjIbNR-cd9NjzCxz-AUUpJ1YSQjZghZOcwo";

      const { id, token, username } = decodeToken(expectoken);

      const tokenexpect = {
        id: "123456789",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNyaXN0aW5hIiwiaWQiOiIxMjM0NTY3ODkiLCJpYXQiOjE2NjgyNjkxNzksImV4cCI6MTY2ODQ0MTk3OX0.SscRMw9fHjIbNR-cd9NjzCxz-AUUpJ1YSQjZghZOcwo",
        username: "cristina",
      };

      const jwtPayload: JwtPayloadCustom = jwtDecode(token);

      const expectedId = "123456789";

      expect({ token, id, username }).toStrictEqual(tokenexpect);
      expect(jwtPayload.id).toStrictEqual(expectedId);
    });
  });
});
