"use client";
import { useEffect, useState } from "react";
import { useNoteContext } from "../hooks/useNoteContext";

const Listing = () => {
  const { notes, dispatch } = useNoteContext();
  const [low ,setLow] = useState()
  

  const handleDelete = (id) => {
    dispatch({ type: "delete_note", payload: id });
  };

  return (
    <div className="w-100 md:w-60 lg:w-100 ">
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Your listing
        </li>

        {notes && notes.length > 0 ? (
          notes.map((note) => (
            <li key={note.id} className="list-row flex justify-between">
              <div>
                <div>{note.head}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  {note.urgency}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  className="btn btn-square btn-ghost"
                  onClick={() => handleDelete(note.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="p-4 opacity-60">No notes yet...</li>
        )}
      </ul>
    </div>
  );
};

export default Listing;
