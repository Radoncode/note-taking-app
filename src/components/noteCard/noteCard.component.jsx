import { Card, Button, Modal, Form } from 'semantic-ui-react';
import { Fragment} from 'react';

    const NoteCard = (props) => {
    
    
    const { title, description } = props.notecard;
    const { 
        openNoteHandler,
        closeNoteHandler,
        removeNoteHandler,
        openEditModal,
        setOpenEditModal,
        selectedCardData,
        onChangeHandlerTitle,
        onchangeHandlerDescription,
        onSubmitEditHandler
    } = props.myHandlers


    return (
        <Fragment>
            <Card>
                <Card.Content header={title} />
                <Card.Content description={description} />
                <Card.Content extra>
                <div className='ui two buttons'>
                    <Button onClick={() => openNoteHandler(props.notecard)} >openEditForm</Button>
                <Button onClick={() => removeNoteHandler(props.notecard)}  basic color='red'>
                        Dismiss
                </Button>
            </div>
                </Card.Content>
            </Card>
            <Modal 
            open={openEditModal}
            onClose={()=> setOpenEditModal(false)}
            >
            <Modal.Header>
                Edit Down your note
            </Modal.Header>
            <Modal.Content>
            <Form onSubmit={(event) => onSubmitEditHandler(event, selectedCardData)}  >
            <Form.Field>
              <label>Your title</label>
                  <input type="text" name='title' placeholder='your title here' onChange={onChangeHandlerTitle}  value={selectedCardData ? selectedCardData.title : ''}/>
            </Form.Field>
              <Form.Field>
              <label>Your Note</label>
                  <textarea placeholder='your description here' name='description' onChange={onchangeHandlerDescription} value={selectedCardData ? selectedCardData.description : ''}  ></textarea>
            </Form.Field>
                <Button type='submit' color='green'>Edit</Button>
            <Button type='submit' onClick={closeNoteHandler} color='red' >Cancel</Button>
      </Form>
            </Modal.Content>
            </Modal>   
        </Fragment> 
    )
}

export default NoteCard;