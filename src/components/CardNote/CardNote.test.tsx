import { render, screen } from "@testing-library/react";
import { ProviderWrapper } from "../../utilsTest/utilsTest";
import CardNote from "./CardNote";

describe("Given component CardNote", () => {
  describe("When it render", () => {
    test("Then its should show card with title: 'Note, button and list", () => {
      render(<ProviderWrapper children={<CardNote title={"Note"} />} />);

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
