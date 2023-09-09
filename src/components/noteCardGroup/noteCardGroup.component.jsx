import { Card } from "semantic-ui-react";
import NoteCard from '../noteCard/noteCard.component';
import { useContext } from "react";
import { NoteContext } from "../contexts/note.context";

const NoteCardGroup = () => {
    const { notes } = useContext(NoteContext)

    return (
        <Card.Group itemsPerRow={4}>
          {
            (notes.length > 0) && notes.map((card,index) => (
              <NoteCard key={index} notecard={card} />
            ))
          }
                
        </Card.Group>
    )
}

export default NoteCardGroup;