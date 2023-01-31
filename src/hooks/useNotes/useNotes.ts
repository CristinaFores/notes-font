import axios from "axios";
import { useCallback, useState } from "react";
import { Note, UiState } from "./types";

const initialUiState: UiState = {
  modal: {
    text: "",
    showModal: false,
    isError: false,
  },
  isLoading: false,
};

const showLoading = { ...initialUiState, isLoading: true };
const hiddeLoading = { ...initialUiState, isLoading: false };

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  // const [note, setNote] = useState<Note>();
  // const [noteId, setNoteId] = useState("");
  const [uiState, setuiState] = useState<UiState>(initialUiState);

  const apiUrl = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem("token");

  const getNotes = useCallback(async () => {
    setuiState(showLoading);
    try {
      const { data } = await axios.get(`${apiUrl}/notes/`, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-type": "text/plain",
        },
      });

      setuiState(hiddeLoading);
      setNotes(data.notes);
    } catch (error: unknown) {
      setuiState({
        modal: {
          showModal: false,
          isError: true,
          text: "No hay ningun post disponible",
        },
        isLoading: false,
      });
    }
  }, [token, setNotes, apiUrl, setuiState]);

  return {
    notes,
    uiState,
    getNotes,
  };
};
