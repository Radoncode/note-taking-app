import { useContext } from "react";

import { NoteContext } from "../contexts/note.context";
import { Form, Button } from "semantic-ui-react";

const NoteCreateForm = ({closeHandler}) => {

    const { addNote } = useContext(NoteContext);

    const onSubmitHandler = (event) => addNote(event);
       
    return (
        <Form  onSubmit={onSubmitHandler}>
              <Form.Field>
                <label>Your title</label>
                    <input type="text" name='title' placeholder='your title here' />
              </Form.Field>
                <Form.Field>
                <label>Your Note</label>
                    <textarea placeholder='your description here' name='description'></textarea>
              </Form.Field>
                  <Button type='submit' color='green'>Create</Button>    
              <Button type='submit' color='red' onClick={closeHandler}>Cancel</Button>
        </Form>
    )
}

export default NoteCreateForm;