import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img width='800' src="https://wallpaperboat.com/wp-content/uploads/2020/07/30/51519/sea-02.jpg" alt="" />
            </div>
            <div className={s.descriptionBlock}>ava + descr</div>
        </div>
    )
}

export default ProfileInfo