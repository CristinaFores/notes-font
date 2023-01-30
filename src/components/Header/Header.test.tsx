import { screen, render } from "@testing-library/react";
import Header from "./Header";

describe("Given component Header", () => {
  describe("When it render", () => {
    test("Then its should show header with title: Blackboards & Notes", () => {
      render(<Header />);

      const expectHeading = screen.getByRole("heading", {
        name: "Blackboards & Notes",
        level: 1,
      });

      expect(expectHeading).toBeInTheDocument();
    });
  });
});
