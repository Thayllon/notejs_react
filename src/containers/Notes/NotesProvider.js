import React, { Component } from "react";
import uuid from "uuid/v1";

import NoteService from "../../services/NoteService";
import NotesContext from "./NotesContext";

class NotesProvider extends Component {
  state = {
    notes: [],
		isLoading: false,
		reloadHasError: false,
		saveHasError: false,
  }

	//Método chamado quando o navegador não consegue completar a renderização do componente
	componentDidCatch() {
		this.setState({ reloadHasError: true })
	}

	//Método do ciclo de vida do react, ele é executado logo apos o primeiro render for executado
	componentDidMount() {
		this.handleReload();
	}

	handleAddNote = (text) => {
		this.setState(prevState => {
			const notes = prevState.notes.concat({ id: uuid(), text });

			this.handleSave(notes);

			return { notes };
		});
	};

	handleMove = (direction, index) => {
		this.setState(prevState => {
			const newNotes = prevState.notes.slice();
			const removedNote = newNotes.splice(index, 1)[0];

			if (direction === "up") {
				newNotes.splice(index - 1, 0, removedNote);
			} else {
				newNotes.splice(index + 1, 0, removedNote);
			}

			this.handleSave(newNotes);

			return {
				notes: newNotes
			};
		});
	};

	handleDelete = (id) => {
		this.setState(prevState => {
			const newNotes = prevState.notes.slice(); //splice clonar o array
			const index = newNotes.findIndex(note => note.id === id); //encontra elemento a ser excluido
			newNotes.splice(index, 1); //remove o id encontrado passado pelo index 

			this.handleSave(newNotes);

			return {
				notes: newNotes
			};
		});
	};

	handleEdit = (id, text) => {
		this.setState(prevState => {
			const newNotes = prevState.notes.slice();
			const index = newNotes.findIndex(note => note.id === id);
			newNotes[index].text = text;

			this.handleSave(newNotes);

			return {
				notes: newNotes
			};
		});
	}

	handleReload = () => {
		this.setState({ isLoading: true, reloadHasError: false });
		NoteService.load().then((notes) => {
			this.setState({ notes, isLoading: false });
		}).catch(() => {
			this.setState({ isLoading: false, reloadHasError: true });
		})
	}

	handleSave = (notes) => {
		this.setState({ isLoading: true, saveHasError: false });
		NoteService.save(notes).then(() => {
			this.setState({ isLoading: false });
		})
			.catch(() => {
				this.setState({ isLoading: false, saveHasError: true });
			});
  }
  
  render() {
    return (
      <NotesContext.Provider
        value={{
          ...this.state,
          onSaveRetry: () => {
            this.handleSave(this.state.notes);
          },
          onRetry: this.handleReload,
          onAddNote: this.handleAddNote,
          onMove: this.handleMove,
          onDelete: this.handleDelete,
          onEdit: this.handleEdit,
        }}
        >
          {this.props.children}
        </NotesContext.Provider>
    );
  }
}

export default NotesProvider;