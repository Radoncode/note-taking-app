import { Card, Button } from 'semantic-ui-react';
import { useContext } from 'react';
import { NoteContext } from '../contexts/note.context';


const NoteCard = ({notecard}) => {
    const { title, description } = notecard;

    const { removeNote } = useContext(NoteContext);
    
    const removeNoteHandler = () => removeNote(notecard);

    return (
        <Card>
            <Card.Content header={title} />
            <Card.Content description={description} />
            <Card.Content extra>
            <div className='ui two buttons'>
                <Button basic color='green'>
                    Edit
                </Button>
                <Button onClick={removeNoteHandler}  basic color='red'>
                    Dismiss
            </Button>
          </div>
            </Card.Content>
        </Card>
    )
}

export default NoteCard;