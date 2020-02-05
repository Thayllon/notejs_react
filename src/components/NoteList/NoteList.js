import React from "react";

import Note from "../Note/Note"

import "./note-list.scss"

const NoteList = ({ notes, onMove, onDelete, onEdit }) => (
  <div className="note-list">
    {notes.map((note, index) => (
      <Note
        key={note.id}
        note={note}
        index={index}
        total={notes.length}
        onMove={onMove}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    ))}
  </div>
);

export default NoteList;