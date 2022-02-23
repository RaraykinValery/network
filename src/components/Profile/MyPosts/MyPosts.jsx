import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Form, Field } from 'react-final-form'
import { composeValidators, maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} id={p.id} likeCount={p.likesCount} />)

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    const AddPostForm = (props) => {
        return (
            <Form
                onSubmit={props.onSubmit}
                render={({ handleSubmit }) => (
                    < form onSubmit={handleSubmit}>
                        <div>
                            <Field
                                component={Textarea}
                                name='newPostText'
                                placeholder='Enter post text'
                                validate={composeValidators(required, maxLengthCreator(10))}
                            />
                        </div>
                        <div>
                            <button>Add post</button>
                        </div>
                    </form >
                )}
            />
        )
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm onSubmit={addNewPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts