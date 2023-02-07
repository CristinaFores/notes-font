import { Note } from "../../hooks/useNotes/types";

export interface Column {
  id: string;
  title: string;
  items: Note[];
}

export interface Data {
  columns: Column[];
}
