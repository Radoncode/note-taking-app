import { Card } from "semantic-ui-react";
import NoteCard from '../noteCard/noteCard.component';
import { useContext , useState} from "react";
import { NoteContext } from "../contexts/note.context";

const NoteCardGroup = ({notecard}) => {

    const notes = notecard;
    const [selectedCardData, setSelectedCardData] = useState(null);
    const { editNote, removeNote, setOpenEditModal, openEditModal } = useContext(NoteContext);
    const removeNoteHandler = (card) => removeNote(card);
    

    // enable to empty the data of the card and to close the modal
    const closeNoteHandler = () => {
      setSelectedCardData(null);
      setOpenEditModal(false);                 
    }

    // enable to select the data of the card and put it in the state for displaying in the modal
    // and open the modal
    const openNoteHandler = (notecard) => {
                setSelectedCardData(notecard);
                setOpenEditModal(true)
    }

    // retrieve the title and update the card 
    const onChangeHandlerTitle = (event) => {
      const title = event.target.value;
      setSelectedCardData({
        ...selectedCardData,
        title
      })
    }

    // retrieve the description and update the description
    const onchangeHandlerDescription = (event) => {
      const description = event.target.value;
      setSelectedCardData({
        ...selectedCardData,
        description
      })
    }

    // submit the edit form
    const onSubmitEditHandler = (event,notecard) => editNote(event, notecard);

    // create un object for passing it like a props
    const myHandlers = {
      openNoteHandler,
      closeNoteHandler,
      removeNoteHandler,
      openEditModal,
      setOpenEditModal,
      selectedCardData,
      onChangeHandlerTitle,
      onchangeHandlerDescription,
      onSubmitEditHandler
    }
    return (
        <Card.Group itemsPerRow={4}>
          {
            (notes.length > 0) && notes.map((card,index) => (
              <NoteCard key={index} notecard={card} myHandlers={myHandlers}   />
            ))
          }
                
        </Card.Group>
    )
}

export default NoteCardGroup;