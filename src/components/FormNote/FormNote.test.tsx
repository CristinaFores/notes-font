import FormNote from "./FormNote";
import { fireEvent, render, screen } from "@testing-library/react";
import { ProviderWrapper } from "../../utilsTest/utilsTest";
import userEvent from "@testing-library/user-event";
import useNotes from "../../hooks/useNotes/useNotes";

jest.mock("../../hooks/useNotes/useNotes", () => {
  const createNote = jest.fn();
  return () => ({ createNote });
});
describe("Given a FormNote", () => {
  describe("When it rendered", () => {
    describe("Then it should show inputs with text: 'Titulo de la la publicacion*', 'Texto de la publicacion' and button with text: 'Publicar'", () => {
      test("And select with text: 'Elige una opcion', 'Personal', 'Trabajo', 'Estudio', 'Otros'", () => {
        render(<ProviderWrapper children={<FormNote />} />);

        const expectTitulo = screen.getAllByRole("textbox", {
          name: "Titulo de la la publicacion*",
        });
        const expectDescription = screen.getAllByRole("textbox", {
          name: "Texto de la publicacion",
        });
        screen.getAllByRole("combobox");
        const expectOption = screen.getAllByRole("option", {
          name: "Elige una opcion",
        });
        const expectOptionPersonal = screen.getAllByRole("option", {
          name: "Personal",
        });
        const expectOptionTrabajo = screen.getAllByRole("option", {
          name: "Trabajo",
        });
        const expectOptionEstudio = screen.getAllByRole("option", {
          name: "Estudio",
        });
        const expectOptionOtros = screen.getAllByRole("option", {
          name: "Otros",
        });
        const expectButton = screen.getByRole("button", { name: "Publicar" });

        expect(expectTitulo[0]).toBeInTheDocument();
        expect(expectDescription[0]).toBeInTheDocument();
        expect(expectOption[0]).toBeInTheDocument();
        expect(expectOptionPersonal[0]).toBeInTheDocument();
        expect(expectOptionTrabajo[0]).toBeInTheDocument();
        expect(expectOptionEstudio[0]).toBeInTheDocument();
        expect(expectOptionOtros[0]).toBeInTheDocument();
        expect(expectButton).toBeInTheDocument();
      });
      test("Then it should on click button the create new note", async () => {
        const { createNote } = useNotes();

        render(<ProviderWrapper children={<FormNote />} />);

        const expectTitulo = screen.getAllByRole("textbox", {
          name: "Titulo de la la publicacion*",
        });
        const expectDescription = screen.getAllByRole("textbox", {
          name: "Texto de la publicacion",
        });

        const file = new File(["hello"], "hello.png", { type: "image/png" });

        const imageUpload = screen.getByLabelText(/imagen/i);
        const expectOption = screen.getAllByRole("option");
        const expectButton = screen.getByRole("button", { name: "Publicar" });

        await userEvent.type(expectTitulo[0], "Nota de prueba");
        await userEvent.type(expectDescription[0], "descripcion de prueba");
        await userEvent.upload(imageUpload, file);
        await fireEvent.change(expectOption[1], {
          target: { value: "Personal" },
        });
        await userEvent.click(expectButton);

        expect(createNote).toHaveBeenCalled();
      });
    });
  });
});
