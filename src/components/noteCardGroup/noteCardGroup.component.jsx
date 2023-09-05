import { Card } from "semantic-ui-react";

const NoteCardGroup = ({note}) => {

    return (
        <Card.Group itemsPerRow={4}>
                  <Card>
                    <Card.Content header={note[0].title} />
                    <Card.Content description={note[0].description} />
                  </Card>
        </Card.Group>
    )
}

export default NoteCardGroup;