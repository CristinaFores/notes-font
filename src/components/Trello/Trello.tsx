import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CardNote from "../CardNote/CardNote";
import useNotes from "../../hooks/useNotes/useNotes";
import { Data } from "./Types";
import { TrelloStyled } from "./TrelloStyled";
import { categoryColor } from "../../utils/CategoryColor";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import mainStyleColors from "../../style/themeColors";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const data: Data = {
  columns: [
    {
      id: "column-1",
      title: "To do 📑",
      items: [],
    },
    {
      id: "column-2",
      title: "In Progress💻",
      items: [],
    },
    {
      id: "column-3",
      title: "Review🪄",
      items: [],
    },
    {
      id: "column-4",
      title: "Done✅",
      items: [],
    },
  ],
};

const grid = 8;

const getItemStyle = (
  isDragging: boolean,
  draggableStyle: any,
  category: string
) => ({
  userSelect: "none",

  margin: `0 0 ${grid}px 0`,
  borderRadius: "9px",
  background: isDragging
    ? mainStyleColors.colors.draggable.base
    : categoryColor(category),
  ...draggableStyle,
});
const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? "#ebc8fe" : "white",
  padding: grid,
});

const Trello = (): JSX.Element => {
  const [columns, setColumns] = useState(data.columns);
  const { getNotes, notes } = useNotes();

  data.columns[0].items = notes;

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  const onDragEnd = (result: any) => {
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

    setColumns(updatedColumns);
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
                    {column.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id!}
                        index={index}
                      >
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
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>{" "}
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
