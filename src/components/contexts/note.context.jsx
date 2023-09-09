import { createContext, useState } from "react";

export const NoteContext = createContext({
    notes: [],
    setNotes: () => null,
    openModal: false,
    setOpenModal: () => null
});

export const NoteProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    
    // each time I submit the form , I create a new object that I put in my array
    const addNote = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;
        const myNote = {
          title,
          description
        }
        notes.push(myNote)
        setNotes(notes);
        setOpenModal(false);
    }
    
    // I remove a card from my notes array
    const removeNote = (card) => {
        const newNotes = notes.filter((note) =>  note !== card);
        setNotes(newNotes);
    }

    
    const value = { 
        notes,
        setNotes,
        addNote,
        removeNote,
        openModal,
        setOpenModal
     };
    return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>
}

