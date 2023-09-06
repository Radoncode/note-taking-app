import { Card } from "semantic-ui-react";
import NoteCard from '../noteCard/noteCard.component';

const NoteCardGroup = (props) => {
    const notes  = props.note;
    return (
        <Card.Group itemsPerRow={4}>
          {
            (notes.length > 0) && notes.map((note,index) => (
              <NoteCard key={index} note={note}/>
            ))
          }
                
        </Card.Group>
    )
}

export default NoteCardGroup;