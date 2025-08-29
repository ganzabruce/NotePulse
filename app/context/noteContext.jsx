"use client";
import { createContext, useReducer, useEffect } from "react";

export const noteContext = createContext();

const noteReducer = (state, action) => {
  switch (action.type) {
    case "get_notes":
      return { notes: action.payload };

    case "add_note":
      return { notes: [action.payload, ...(state.notes || [])] };

    case "delete_note":
      return {
        notes: (state.notes || []).filter((note) => note.id !== action.payload),
      };

    default:
      return state;
  }
};

export const NoteContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(noteReducer, { notes: null });

  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) {
      dispatch({ type: "get_notes", payload: JSON.parse(saved) });
    } else {
      dispatch({ type: "get_notes", payload: [] }); 
    }
  }, []);

  useEffect(() => {
    if (state.notes !== null) {
      localStorage.setItem("notes", JSON.stringify(state.notes));
    }
  }, [state.notes]);

  return (
    <noteContext.Provider value={{ ...state, dispatch }}>
      {children}
    </noteContext.Provider>
  );
};
