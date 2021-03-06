import s from './Post.module.css'

const Post = (props) => {

    return (
        <div className={s.item}>
            <img alt="" src="https://i.pinimg.com/originals/83/85/b2/8385b202b6a24b366ed697ca31c56871.jpg" />
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post