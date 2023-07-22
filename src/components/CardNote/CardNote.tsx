import {
  CardNoteStyled,
  CategoryCircleStyled,
  ContainIconEditStyled,
  ContaintNoteStyled,
} from "./CardNoteStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

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
  image?: string[];
  id?: string;
  handleDeleteNote?: () => void;
}

const CardNote = ({
  title,
  date,
  description,
  category,
  image,
  handleDeleteNote,
  id,
}: CardNoteProps): JSX.Element => {
  // const { deleteNote } = useNotes();

  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${id}`);
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

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
      <CardNoteStyled>
        <ContainIconEditStyled>
          <CategoryCircleStyled>
            <div
              style={{
                backgroundColor: categoryColor(category),
              }}
            ></div>
          </CategoryCircleStyled>

          <button onClick={handleEdit} aria-label="editar">
            <FontAwesomeIcon className="icon-edit" icon={faPenToSquare} />
          </button>
          <button
            onClick={() => handleDeleteNote && handleDeleteNote()}
            aria-label="borrar"
          >
            <FontAwesomeIcon className="icon-edit" icon={faCircleXmark} />
          </button>
        </ContainIconEditStyled>

        <ContaintNoteStyled onClick={handleDetail}>
          <h4>{title.toUpperCase().substring(1, 0) + title.substring(1)}</h4>
          <span>{new Date(date || "").toLocaleDateString()}</span>
          <p>{description}</p>
          {image?.map((img) => (
            <img key={img} src={img} alt="imagen" />
          ))}
        </ContaintNoteStyled>
      </CardNoteStyled>
    </>
  );
};

export default CardNote;
