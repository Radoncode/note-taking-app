import { create } from 'zustand'



export const useNoteStore = create((set) => ({
  notesList :[],
  addNoteAction: (payload) => set((state) => ({ notesList: [...state.notesList,payload]})),
  removeNoteAction: (index)=> set((state) => {
      const newList = state.notesList.slice(index , 1)
      return {notesList : newList}
  }),

  selectedNoteIndex: null,
  selectedNoteIndexAction : (index)=> set((state) => ({ selectedNoteIndex: index})),
  // example : payload ===> {index : 2 , body : {title : "test" , body : "je suis le body"}}
  updateNote : (payload)=> set((state) => {
    const newList = state.notesList[payload.index] = payload.body
    return {notesList : newList}
}),
}))
