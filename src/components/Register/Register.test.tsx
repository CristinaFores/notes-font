import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import useUser from "../../hooks/useUser/useUser";
import { ProviderWrapper } from "../../utilsTest/utilsTest";
import Register from "./Register";

jest.mock("../../hooks/useUser/useUser", () => {
  const register = jest.fn();
  return () => ({ register });
});

describe("Given Form component", () => {
  describe("When  its render Register", () => {
    describe("And it's rendered  three inputs, with names: 'Nombre', 'Email' and 'Contraseña' and  one button with text 'Registrate'", () => {
      test("Then the form should be submited a call a register function", async () => {
        const { register } = useUser();

        render(<ProviderWrapper children={<Register />} />);

        const expectIinputName = screen.queryByRole("textbox", {
          name: "Nombre",
        })!;
        const expectIinputEmail = screen.queryByRole("textbox", {
          name: "Email",
        })!;
        const passwordInput = screen.queryByLabelText("Contraseña")!;
        const button = screen.queryByRole("button", {
          name: "Registrate",
        })!;

        await userEvent.type(expectIinputName, "1234567891");
        await userEvent.type(expectIinputEmail, "cris@mil.com");
        await userEvent.type(passwordInput, "Cristina");
        await userEvent.click(button);

        expect(register).toHaveBeenCalled();
        expect(expectIinputName).toBeInTheDocument();
        expect(expectIinputEmail).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
      });
    });
  });
});
