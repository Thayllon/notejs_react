import React, { Fragment } from 'react';

import { Error, NewNote, NoteList } from "../../components/index";
import withNotes from "../Notes/withNotes";

const Notes = ({reloadHasError, onRetry, onAddNote, notes, onMove, onDelete, onEdit }) => {
  
  if (reloadHasError) {
    return <Error onRetry={onRetry} />
  }

  return (
    <Fragment>
      <NewNote onAddNote={onAddNote} />
      <NoteList 
        notes={notes} 
        onMove={onMove} 
        onDelete={onDelete} 
        onEdit={onEdit} />
    </Fragment>
  )
};

export default withNotes(Notes); 