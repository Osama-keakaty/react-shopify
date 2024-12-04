import SignIn from '../../components/sign-in/sign-in.component';
import './auth.styles.scss'
import { Outlet } from 'react-router-dom';

import SignUp from '../../components/sign-up/sign-up.component';
const Auth = () => {
    return (
        <div className='auth-container'>
            <div className="auth-content">
                <div className="auth-selection">
                </div>
                <div className="auth-form">
                    <div className="auth-sign-in-container">
                        <SignIn />
                    </div>
                    <div className="auth-sign-up-container">
                        <SignUp />

                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Auth; 