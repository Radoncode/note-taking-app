import { useContext } from 'react';
import './App.css';
import { Container, Header, Menu} from 'semantic-ui-react';
import NoteModal from './components/noteModal/noteModal.component';
import NoteCardGroup from './components/noteCardGroup/noteCardGroup.component';
import { NoteContext } from './components/contexts/note.context';

function App() {

  const {addNote, notes, openModal, setOpenModal} = useContext(NoteContext);
  
  const closeHandler = () => setOpenModal(false);
  const openHandler = () => setOpenModal(true);
  const onSubmitHandler = (event) =>  addNote(event);

  return (
    <div>
      <Container>
      <Header as='h1' textAlign='center' >My Note Taking App</Header>  
      <Menu>
        <Menu.Menu position='right'>
          <Menu.Item>
            <NoteModal 
              closeHandler={closeHandler} 
              openHandler={openHandler} 
              openModal={openModal}
              onSubmitHandler={onSubmitHandler}
            /> 
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      {
        (notes.length) > 0 && (<NoteCardGroup />) 
      }
      </Container>
    </div>
  );
}

export default App;
