import { useContext } from 'react';
import './App.css';
import { Container, Header, Menu, Button, Modal} from 'semantic-ui-react';
import NoteCreateForm from './components/noteCreateForm/noteCreateForm.component';
import NoteCardGroup from './components/noteCardGroup/noteCardGroup.component';
import { NoteContext } from './components/contexts/note.context';

function App() {

  const {notes, openCreateModal, setOpenCreateModal} = useContext(NoteContext);
  
  const closeHandler = () => setOpenCreateModal(false);
  const openHandler = () => {
    setOpenCreateModal(true);
  }

  return (
      <Container>
      <Header as='h1' textAlign='center' >My Note Taking App</Header>  
      <Menu>
        <Menu.Menu position='right'>
          <Menu.Item>
          <Button onClick={openHandler} attached='top' floated='right'>Create a Note</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      {
        openCreateModal && (
          <Modal 
          closeIcon
          onClose={closeHandler} 
          onOpen={openHandler}
          open={openCreateModal}
          >
          <Modal.Header>
            Write Down your note
          </Modal.Header>
          <Modal.Content>
            <NoteCreateForm  closeHandler={closeHandler} />
          </Modal.Content>
        </Modal>
        )
      }
      {
        (notes.length > 0) && (<NoteCardGroup  notecard={notes}/>) 
      }
      </Container>
  );
}

export default App;
