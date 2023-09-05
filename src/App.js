import { useState } from 'react';
import './App.css';
import { Container, Header, Menu} from 'semantic-ui-react';
import NoteModal from './components/noteModal/noteModal.component';
import NoteCardGroup from './components/noteCardGroup/noteCardGroup.component';

function App() {

  const [openModal, setOpenModal] = useState(false);
  const [note, setNote] = useState([]);
  console.log(note);
  const closeHandler = () => {
      setOpenModal(false);
  }

  const openHandler = () => {
    setOpenModal(true);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const myNote = {
      title,
      description
    }
    note.push(myNote)
    console.log(note);
    setNote(note);
    setOpenModal(false);
}

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
        (note.length) > 0 && (<NoteCardGroup note={note}/>) 
      }
      </Container>
    </div>
  );
}

export default App;
