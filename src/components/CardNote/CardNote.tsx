import { CardNoteStyled, ContainIconEditStyled } from "./CardNoteStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";

interface CardNoteProps {
  title: string;
  date?: string;
  description?: string;
}
const CardNote = ({ title, date, description }: CardNoteProps): JSX.Element => {
  return (
    <>
      <CardNoteStyled>
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
