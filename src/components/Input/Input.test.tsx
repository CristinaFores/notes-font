import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../style/GlobalStyle";
import mainStyleColors from "../../style/themeColors";
import Input from "./Input";

describe("Given a Input component", () => {
  describe("When it  rendered", () => {
    test("Then it should show input with placholder: username", () => {
      const expectLabel = "username";

      render(
        <ThemeProvider theme={mainStyleColors}>
          <GlobalStyle />
          <Input
            type={"text"}
            placeholder="username"
            htmlFor="username"
            id="username"
            textLabel={expectLabel}
          />
        </ThemeProvider>
      );

      const expectIinput = screen.getByRole("textbox", {
        name: "username",
      });

      expect(expectIinput).toBeInTheDocument();
    });
  });
});
