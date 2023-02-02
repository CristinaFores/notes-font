import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "../../hooks/useUser/useUser";
import useUser from "../../hooks/useUser/useUser";
import { ProviderWrapper } from "../../utilsTest/utilsTest";
import Login from "./Login";

jest.mock("../../hooks/useUser/useUser", () => {
  const login = jest.fn();
  return () => ({ login });
});

describe("Given Login component", () => {
  describe("When it us rendered", () => {
    test("Then its should show input with text: 'Nombre', a button with text 'Entrar'and  link with text: 'Registrarte'", async () => {
      const { login } = useUser();

      const nameLink = "Registrarte";
      const nameButton = "Entrar";

      render(<ProviderWrapper children={<Login />} />);

      const renderLink = screen.getByRole("link", {
        name: nameLink,
      });
      const expectIinputName = screen.queryByRole("textbox", {
        name: "Nombre",
      })!;

      const passwordInput = screen.queryByLabelText("Contraseña")!;
      const button = screen.queryByRole("button", {
        name: nameButton,
      })!;

      await userEvent.type(expectIinputName, "1234567891");
      await userEvent.type(passwordInput, "Cristina");
      await userEvent.click(button);

      expect(login).toHaveBeenCalled();
      expect(expectIinputName).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(renderLink).toBeInTheDocument();
    });
  });
});
