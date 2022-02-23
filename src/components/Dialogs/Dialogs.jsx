import React from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Message/Message'
import { Form, Field } from 'react-final-form'
import { Textarea } from '../common/FormsControls/FormsControls'
import { composeValidators, maxLengthCreator, required } from '../../utils/validators/validators'

export const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {

    return (
        <Form
            onSubmit={props.onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            component={Textarea}
                            name='newMessageText'
                            placeholder='Enter message'
                            validate={composeValidators(required, maxLengthCreator(50))}
                        />
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
            )}
        />
    )
}