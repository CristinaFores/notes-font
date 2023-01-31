import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../style/GlobalStyle";
import mainStyleColors from "../../style/themeColors";
import CardNote from "./CardNote";

describe("Given component CardNote", () => {
  describe("When it render", () => {
    test("Then its should show card with title: 'Note, button and list", () => {
      render(
        <ThemeProvider theme={mainStyleColors}>
          <GlobalStyle />
          <CardNote title={"Note"} />
        </ThemeProvider>
      );

      const expectList = screen.getByRole("listitem");
      const expectButton = screen.getAllByRole("button");
      const expectHeading = screen.getByRole("heading", {
        name: "Note",
      });

      expect(expectList).toBeInTheDocument();
      expect(expectButton[0]).toBeInTheDocument();
      expect(expectButton[1]).toBeInTheDocument();
      expect(expectHeading).toBeInTheDocument();
    });
  });
});
