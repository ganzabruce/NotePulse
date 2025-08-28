"use client";
import { createContext, useReducer, useEffect } from "react";

export const noteContext = createContext();

const noteReducer = (state, action) => {
  switch (action.type) {
    case "get_note":
      return { notes: action.payload };

    case "add_note":
      return { notes: [action.payload, ...(state.notes || [])] };

    case "delete_note":
      return {
        notes: state.notes.filter((e) => e.id !== action.payload),
      };

    default:
      return state;
  }
};

export const NoteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, { notes: [] });

  // ✅ load notes from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) {
      dispatch({ type: "get_note", payload: JSON.parse(saved) });
    }
  }, []);

  // ✅ save notes to localStorage whenever they change
  useEffect(() => {
    if (state.notes) {
      localStorage.setItem("notes", JSON.stringify(state.notes));
    }
  }, [state.notes]);

  return (
    <noteContext.Provider value={{ ...state, dispatch }}>
      {children}
    </noteContext.Provider>
  );
};
