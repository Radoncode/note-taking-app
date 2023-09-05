import { Modal, Button } from "semantic-ui-react";
import NoteForm from "../noteForm/noteForm.component";

const NoteModal = ({closeHandler, openHandler, openModal, onSubmitHandler}) => {

  return(
    <Modal 
            closeIcon
            onClose={closeHandler} 
            onOpen={openHandler}
            open={openModal}
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

export default NoteModal;