import { useEffect, useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import useNotes from "../../hooks/useNotes/useNotes";
import { getListStyle, TrelloStyled } from "./TrelloStyled";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../data/dataTrello";
import ListNotes from "../ListNotes/ListNotes";

const Trello = (): JSX.Element => {
  const [columns, setColumns] = useState(data.columns);
  const { notes, updateStatusNote } = useNotes();

  const [newNotes, setNotes] = useState(notes);

  useEffect(() => {
    setNotes(notes);
    setColumns((prev) => {
      const newColumns = prev.map((column) => {
        const newItems = notes.filter((note) => note.status === column.id);
        return { ...column, items: newItems };
      });
      return newColumns;
    });
  }, [notes, newNotes]);

  const onDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const column = columns.find((column) => column.id === source.droppableId)!;
    const newColumn = columns.find(
      (col) => col.id === destination.droppableId
    )!;

    const columnItems = Array.from(column.items);
    const newColumnItems = Array.from(newColumn.items);

    columnItems.splice(source.index, 1);

    if (column === newColumn) {
      columnItems.splice(
        destination.index,
        0,
        column.items.find((item) => item.id === draggableId)!
      );
    } else {
      newColumnItems.splice(
        destination.index,
        0,
        column.items.find((item) => item.id === draggableId)!
      );
    }

    const updatedColumns = columns.map((collumn) => {
      if (collumn === column) {
        return { ...collumn, items: columnItems };
      }
      return {
        ...collumn,
        items: collumn === newColumn ? newColumnItems : collumn.items,
      };
    });

    const n = updatedColumns.find(
      (column) => destination.droppableId === column.id
    )?.items;

    const newN = n?.map((item, index, arr) => {
      return { ...item, status: destination.droppableId, order: index };
    });

    setColumns(updatedColumns);
    await updateStatusNote(draggableId, newN?.at(-1)!);
  };

  return (
    <TrelloStyled>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="continer">
          {columns.map((column) => (
            <div className="column" key={column.id}>
              <h2 className="column-title">{column.title}</h2>
              <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                  <div
                    className="column-items"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {column.items
                      .map((item, index) => (
                        <ListNotes key={item.id} item={item} index={index} />
                      ))
                      .sort(
                        (dateAfter, dateBefore) =>
                          dateAfter.props.date - dateBefore.props.date
                      )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <NavLink to={"/newnote"} aria-label="Nueva publicacion">
                <FontAwesomeIcon icon={faSquarePlus} />
                <h5> Añadir nueva tarea</h5>
              </NavLink>
            </div>
          ))}
        </div>
      </DragDropContext>
    </TrelloStyled>
  );
};

export default Trello;
