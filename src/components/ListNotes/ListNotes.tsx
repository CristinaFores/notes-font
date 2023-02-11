import { useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Note } from "../../hooks/useNotes/types";
import useNotes from "../../hooks/useNotes/useNotes";
import CardNote from "../CardNote/CardNote";
import { getItemStyle } from "../Trello/TrelloStyled";
import { ListNotesStyled } from "./ListNotesStyled";
interface ListNotesProps {
  item: Note;
  index: number;
}

const ListNotes = ({ item, index }: ListNotesProps): JSX.Element => {
  const { getNotes } = useNotes();

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  return (
    <>
      <ListNotesStyled>
        <Draggable key={item.id} draggableId={item.id!} index={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style,
                item.category!
              )}
            >
              <CardNote
                id={item.id}
                title={item.title}
                description={item.description}
                date={item.date}
                category={item.category}
              />
            </div>
          )}
        </Draggable>
      </ListNotesStyled>
    </>
  );
};

export default ListNotes;
