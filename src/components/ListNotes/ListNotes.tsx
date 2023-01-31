import { useEffect } from "react";
import { Note } from "../../hooks/useNotes/types";
import { useNotes } from "../../hooks/useNotes/useNotes";
import CardNote from "../CardNote/CardNote";
import { ListNotesStyled } from "./ListNotesStyled";

const ListNotes = (): JSX.Element => {
  const { getNotes, notes } = useNotes();
  useEffect(() => {
    getNotes();
  }, [getNotes]);

  return (
    <>
      {notes.length < 1 ? (
        <ListNotesStyled>
          <CardNote title="Nueva nota" description="empieza escribir..." />
        </ListNotesStyled>
      ) : (
        <ListNotesStyled>
          {notes?.map((note: Note) => (
            <CardNote
              title={note.title}
              description={note.description}
              date={note.date}
              key={note.id}
            />
          ))}
        </ListNotesStyled>
      )}
    </>
  );
};

export default ListNotes;
