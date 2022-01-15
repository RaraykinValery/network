import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                   <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi! How are you, dude?' likeCount='5' />
                <Post message='I am fine' likeCount='15' />
            </div>
        </div>
    )
}

export default MyPosts