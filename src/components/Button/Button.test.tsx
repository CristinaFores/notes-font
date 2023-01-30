import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../style/GlobalStyle";
import mainStyleColors from "../../style/themeColors";

import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered with the text 'Log in' and an action", () => {
    test("Then it should show a button on the screen with the received text and the action on click", async () => {
      const buttonText = "Log in";

      const buttonAction = jest.fn();

      render(
        <ThemeProvider theme={mainStyleColors}>
          <GlobalStyle />
          <Button
            styleType="big"
            text={buttonText}
            action={buttonAction}
            ariaLabel={""}
          />
        </ThemeProvider>
      );

      const renderedButton = screen.queryByRole("button", {
        name: buttonText,
      });

      await userEvent.click(renderedButton!);

      expect(renderedButton).toBeInTheDocument();
      expect(buttonAction).toHaveBeenCalled();
    });
  });
});
