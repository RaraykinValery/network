import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img width='800' src="https://wallpaperboat.com/wp-content/uploads/2020/07/30/51519/sea-02.jpg" alt="" />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt='wallpaper' />
                <div>About me: {props.profile.aboutMe ? props.profile.aboutMe : 'Nothing is claimed'}</div>
                <div>ava + descr</div>
            </div>
        </div>
    )
}

export default ProfileInfo