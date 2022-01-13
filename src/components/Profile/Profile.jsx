import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div>
                <img width='800' src="https://wallpaperboat.com/wp-content/uploads/2020/07/30/51519/sea-02.jpg" alt="" />
            </div>
            <div>ava + descr</div>
            <MyPosts />
        </div >
    )
}

export default Profile