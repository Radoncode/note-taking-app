import { createContext, useState } from "react";

export const NoteContext = createContext({
    notes: [],
    setNotes: () => null,
    openCreateModal: false,
    setOpenCreateModal: () => null,
    openEditModal: false,
    setOpenEditModal: () => null
});

export const NoteProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    
    // each time I submit the form , I create a new object that I put in my array
    const addNote = (event) => {
        event.preventDefault();
        const id = window.self.crypto.randomUUID();
        const title = event.target.title.value;
        const description = event.target.description.value;
        const myNote = {
            id,
          title,
          description
        }
        notes.push(myNote)
        setNotes(notes);
        setOpenModal(false);
    }

    const editNote = (event, selectedCard) => {
        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;
  

        // I test in my array if I have the id of my selected card 
        // if it's corresponding with an id of the object array
        // if yes , I update the object
        const newNotes = 
                notes.map(note => {
                if (note.id === selectedCard.id){
                    return { ...note, title, description}
                }
                return note;
            })

        setNotes(newNotes);
        setOpenEditModal(false)
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
        editNote,
        removeNote,
        openCreateModal: openModal,
        setOpenCreateModal: setOpenModal,
        openEditModal,
        setOpenEditModal

     };
    return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>
}

