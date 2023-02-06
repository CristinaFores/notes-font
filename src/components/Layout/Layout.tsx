import { LayoutStyled } from "./LayoutStyled";
import { Route, Routes, useParams } from "react-router";
import Header from "../Header/Header";
import ListNotes from "../ListNotes/ListNotes";
import Login from "../Login/Login";
import Navbar from "../NavBar/Navbar";
import Register from "../Register/Register";
import FormNote from "../FormNote/FormNote";
import CardNote from "../CardNote/CardNote";
import {
  DragDropContext,
  Draggable,
  DraggableLocation,
  Droppable,
  DroppableId,
  DroppableIdMap,
  DropResult,
} from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import useNotes from "../../hooks/useNotes/useNotes";

interface Source {
  droppableId?: string;
  index?: number;
  id?: string;
  content?: string;
}
interface Destination {
  droppableId?: string;
  index?: number;
  id?: string;
  content?: string;
}

interface DroppableSource {
  droppableId?: string;
  index?: number;
  id?: string;
}

interface DroppableDestination {
  droppableId?: string;
  index?: number;
  id?: string;
}

type Sources = Source[];
type Destinations = Destination[];

interface Result {
  [key: string]: Sources | Destinations;
}

type Results = Result[];

// fake data generator
const getItems = (count = 0, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `item ${k + offset}`,
  }));

const reorder = (list: [], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (
  source: [],
  destination: [],
  droppableSource: any,
  droppableDestination: any
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index!, 0);

  destClone.splice(droppableDestination.index, 1, removed);

  const result = [];
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
const grid = 8;

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});
const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
});

const Layout = (): JSX.Element => {
  const username = localStorage.getItem("username");

  const { getNotes, notes, note, setNote } = useNotes();

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  const [state, setState] = useState([getItems(10), getItems(5, 10)]);

  function onDragEnd(result: DropResult) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = source.droppableId;
    const dInd = destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      console.log(sInd, dInd);
      console.log(state[sInd], state[dInd]);
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState.filter((group) => group.length));
    }
  }

  return (
    <>
      <Header />
      {username ? (
        <Navbar
          name={
            username?.toUpperCase().substring(0, 1)! + username?.substring(1)
          }
        />
      ) : null}

      <LayoutStyled>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="container">
            {notes.map((note, ind) => (
              <Droppable key={note.id} droppableId={`${ind}`}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <Draggable
                      key={note.id}
                      draggableId={ind.toString()}
                      index={ind}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <CardNote
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            date={note.date}
                          />
                        </div>
                      )}
                    </Draggable>

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<ListNotes />} />
          <Route path="/newnote" element={<FormNote />} />
        </Routes>
      </LayoutStyled>
    </>
  );
};

export default Layout;
