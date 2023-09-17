/*import { Modal, Button } from "semantic-ui-react";
import { useContext } from "react";
import { NoteContext } from "../contexts/note.context";
import NoteForm from "../noteForm/noteForm.component";

const EditNoteModal = () => {

    const { setOpenEditModal, openEditModal, addNote } = useContext(NoteContext)

    const closeHandler = () => setOpenEditModal(false);
    const openHandler = () => setOpenEditModal(true);

    const onSubmitHandler = (event) =>  addNote(event);

    return (
        <Modal 
            closeIcon
            onClose={closeHandler} 
            onOpen={openHandler}
            open={openEditModal}
            trigger={<Button attached='top' floated='right'>Create a Note</Button>}>
            <Modal.Header>
              Write Down your note
            </Modal.Header>
            <Modal.Content>
              <NoteForm  closeHandler={closeHandler} onSubmitHandler={onSubmitHandler}/>
            </Modal.Content>
          </Modal>
    )
}

export default EditNoteModal;*/