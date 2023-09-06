import { Card } from 'semantic-ui-react';

const NoteCard = (props) => {
    const { title, description } = props.note;
    console.log(props.note);
    return (
        <Card>
            <Card.Content header={title} />
            <Card.Content description={description} />
        </Card>
    )
}

export default NoteCard;