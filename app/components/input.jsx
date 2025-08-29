"use client";
import { useState } from "react";
import { useNoteContext } from "../hooks/useNoteContext";

const Input = () => {
  const [head, setHead] = useState("");
  const [body, setBody] = useState("");
  const [urgency, setUrgency] = useState("");
  const { dispatch } = useNoteContext();

  const handleForm = (e) => {
    e.preventDefault();

    const newNote = {
      id: Date.now(),
      head,
      body,
      urgency,
      createdAt: new Date().toISOString(),
    };


    dispatch({ type: "add_note", payload: newNote });


    setHead("");
    setBody("");
    setUrgency("");
  };

  return (
    <form
      className="card card-border bg-base-100 w-96"
      onSubmit={handleForm}
    >
      <div className="card-body">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Create A New Note</legend>

          <input
            type="text"
            className="input mb-3"
            placeholder="Head here"
            value={head}
            onChange={(e) => setHead(e.target.value)}
            required
          />

          <textarea
            className="input h-40 mb-3"
            placeholder="Body here"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />

          <select
            className="border border-gray-200 rounded-md py-2 mb-3"
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
            required
          >
            <option value="" disabled>Urgency...</option>
            <option value="Not Urgent">Not urgent</option>
            <option value="Slightly Urgent">Slightly urgent</option>
            <option value="Very Urgent">Very urgent</option>
          </select>
          <p className="label">Click "Add" Button</p>
        </fieldset>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
};

export default Input;
