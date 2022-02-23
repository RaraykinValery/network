import s from './Login.module.css'
import { Form, Field } from 'react-final-form'
import { login } from '../../redux/auth-reducer'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const LoginForm = (props) => {

    return (
        <Form
            onSubmit={props.onSubmit}
            render={({ handleSubmit }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field
                                name={'email'}
                                component={Input}
                                placeholder="login"
                                validate={required}
                            />
                        </div>
                        <div>
                            <Field
                                name={'password'}
                                component={Input}
                                placeholder="password"
                                type='password'
                                validate={required}
                            />
                        </div>
                        <div>
                            <Field
                                name={'rememberMe'}
                                component={Input}
                                type="checkbox"
                            />remember me
                        </div>
                        <div>
                            <button>Login</button>
                        </div>
                    </form>
                )
            }}
        />
    )
}

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to='/profile' />
    }

    return (
        <div>
            <div>Login</div>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);