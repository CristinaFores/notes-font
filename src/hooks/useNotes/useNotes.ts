import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Note, UiState } from "./types";

const initialUiState: UiState = {
  modal: {
    text: "",
    showModal: false,
    isError: false,
  },
  isLoading: false,
};

export const initialNote: Note = {
  title: "",
  description: "",
  category: "",
  status: "column-1",
  image: [],
};
const showLoading = { ...initialUiState, isLoading: true };
const hiddeLoading = { ...initialUiState, isLoading: false };

const useNotes = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState<Note[]>([]);
  const [note, setNote] = useState<Note>();
  const [noteId, setNoteId] = useState("");
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
  }, [apiUrl, token]);

  const createNote = useCallback(
    async (note: Note) => {
      setuiState(showLoading);
      try {
        await axios.post<Note>(`${apiUrl}/note/`, note, {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        });

        setuiState(hiddeLoading);
        navigate("/home");
      } catch (error: unknown) {
        setuiState(hiddeLoading);
        setuiState({
          modal: {
            showModal: false,
            isError: true,
            text: "No hay ninguna nota disponible",
          },

          isLoading: false,
        });
      }
    },
    [apiUrl, token, navigate]
  );
  const deleteNote = useCallback(
    async (id: string) => {
      setuiState(showLoading);
      try {
        const { data } = await axios.delete<Note>(`${apiUrl}/note/${id}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        setuiState(hiddeLoading);
        setNoteId(data.id!);
        setuiState({
          modal: {
            showModal: true,
            isError: false,
            text: "Nota eliminada correctamente",
          },
          isLoading: false,
        });
      } catch (error: unknown) {
        setuiState(hiddeLoading);
        setuiState({
          modal: {
            showModal: false,
            isError: true,
            text: "No hay ninguna nota disponible",
          },

          isLoading: false,
        });
      }
    },
    [apiUrl, token]
  );

  const updateStatusNote = useCallback(
    async (id: string, note: Note) => {
      try {
        const { data } = await axios.patch<Note>(
          `${apiUrl}/notes/${id}`,
          note,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        setNote(data);
      } catch (error: unknown) {}
    },
    [apiUrl, token]
  );

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  return {
    notes,
    uiState,
    note,
    noteId,
    setNotes,
    setNote,
    getNotes,
    createNote,
    deleteNote,
    updateStatusNote,
  };
};

export default useNotes;
