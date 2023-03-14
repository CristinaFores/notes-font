import {
  faCircleXmark,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useNotes from "../../hooks/useNotes/useNotes";
import Button from "../Button/Button";
import {
  CategoryCircleStyled,
  ContainIconEditStyled,
} from "../CardNote/CardNoteStyled";
import { DetailNoteStyled } from "./DetailNoteStyled";

const DetailNote = (): JSX.Element => {
  const { getNoteById, note } = useNotes();

  const navigate = useNavigate();
  const { id } = useParams();
  const { deleteNote } = useNotes();

  const handleDelete = () => {
    deleteNote(id!);
  };

  const handleDetail = () => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    getNoteById(id!);
  }, [getNoteById, id]);

  const hadleHome = () => {
    navigate("/home");
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
    <DetailNoteStyled
      style={{
        backgroundColor: categoryColor(note?.category as string),
      }}
    >
      <ContainIconEditStyled>
        <CategoryCircleStyled>
          <div onClick={handleDetail}></div>
        </CategoryCircleStyled>

        <button onClick={() => {}} aria-label="editar">
          <FontAwesomeIcon className="icon-edit" icon={faPenToSquare} />
        </button>
        <button onClick={handleDelete} aria-label="borrar">
          <FontAwesomeIcon className="icon-edit" icon={faCircleXmark} />
        </button>
      </ContainIconEditStyled>
      <h1>{note?.title}</h1>
      <p>{note?.description}</p>
      <div className="image">
        {note?.buckpicture?.map((img, index) => (
          <img
            src={img as string}
            alt="imagenes de la publicacion"
            key={index}
          />
        ))}
      </div>
      <div className="button-volver">
        <Button
          text="Volver"
          styleType={"small"}
          ariaLabel={""}
          action={hadleHome}
        />
      </div>
    </DetailNoteStyled>
  );
};

export default DetailNote;
