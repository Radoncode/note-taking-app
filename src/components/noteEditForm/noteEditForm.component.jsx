import { useState, useContext } from "react";

import { NoteContext } from "../contexts/note.context";
import { Form, Button } from "semantic-ui-react";
import NoteCard from "../noteCard/noteCard.component";

const NoteEditForm = (props) => {
    console.log(props.card)
    const { id, title , description } = props.card;
     
    console.log("NoteEditForm")
    /*const titleValue = (card) ? (card.title) : '';
    const description = (card)  ? (card.description) : '';
    const [ editTitle, setEditTitle ] = useState(titleValue);
    const [ editDescription, setEditDescription ] = useState(description);*/

    const { editNote } = useContext(NoteContext);
    
    // I have to put an onChange event for updating the value
    const onChangeTitleHandler = (event) => {
      //console.log(first)
      //setEditTitle(event.target.value)
    }

    const onChangeDescriptionHandler = (event) => {
       // setEditDescription(event.target.value)
      }
    
    //const onSubmitHandler = (event) => editNote(event, card);
    
    return (
        <Form  >
              <Form.Field>
                <label>Your title</label>
                    <input type="text" name='title' placeholder='your title here' onChange={onChangeTitleHandler} />
              </Form.Field>
                <Form.Field>
                <label>Your Note</label>
                    <textarea placeholder='your description here' name='description' onChange={onChangeDescriptionHandler} ></textarea>
              </Form.Field>
                  <Button type='submit' color='green'>Edit</Button>
              <Button type='submit' color='red' >Cancel</Button>
        </Form>
    )
}

export default NoteEditForm;