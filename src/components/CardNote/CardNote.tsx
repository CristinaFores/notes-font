import { CardNoteStyled, ContainIconEditStyled } from "./CardNoteStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { useNotes } from "../../hooks/useNotes/useNotes";
import { useEffect } from "react";

export enum Category {
  "personal",
  "trabajo",
  "estudio",
  "otro",
}

interface CardNoteProps {
  title: string;
  date?: string;
  description?: string;
  category?: Category | any;
}

const CardNote = ({
  title,
  date,
  description,
  category,
}: CardNoteProps): JSX.Element => {
  const { getNotes } = useNotes();
  useEffect(() => {
    getNotes();
  }, [getNotes]);

  const categoryColor = (category: string) => {
    switch (category) {
      case "personal":
        return "var(--color-primary)";
      case "trabajo":
        return "var(--color-secondary)";
      case "estudio":
        return "var(--color-tertiary)";
      case "otro":
        return "var(--color-quaternary)";
      default:
        return "var(--color-base)";
    }
  };

  return (
    <>
      <CardNoteStyled
        style={{
          backgroundColor: categoryColor(category),
        }}
      >
        <ContainIconEditStyled>
          <button onClick={() => {}} aria-label="editar">
            <FontAwesomeIcon className="icon-edit" icon={faPenToSquare} />
          </button>
          <button onClick={() => {}} aria-label="borrar">
            <FontAwesomeIcon className="icon-edit" icon={faCircleXmark} />
          </button>
        </ContainIconEditStyled>
        <h4>{title.toUpperCase().substring(1, 0) + title.substring(1)}</h4>
        <span>{new Date(date || "").toLocaleDateString()}</span>
        <p>{description}</p>
      </CardNoteStyled>
    </>
  );
};

export default CardNote;
