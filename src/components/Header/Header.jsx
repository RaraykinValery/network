import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://w7.pngwing.com/pngs/786/126/png-transparent-logo-contracting-photography-logo-symbol.png" />
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
                <NavLink to={'/login'}> </NavLink>
            </div>
        </header>
    )
}

export default Header