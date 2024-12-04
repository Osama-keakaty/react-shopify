import './sign-in.styles.scss'
import { SignInSchema } from '../../validations/sign-in.validation';
import FormInput from '../form-input/form-input.component';
import { useFormik } from 'formik';
import { createUserDocumentFromAuth, signInWithGooglePopup, signInUserWithEmailAndPassword, signOutUser } from '../../utils/firebase/firebase.utils.js';
import { useAuthStore } from '../../stores/auth.store.js';
import { useShallow } from 'zustand/shallow';

const SignIn = () => {
    const { currentUser } = useAuthStore(useShallow((state) => ({
        currentUser: state.currentUser,
    })))
    const onSubmit = async (values, actions) => {
        try {
            const { user } = await signInUserWithEmailAndPassword(values.email, values.password);
            await createUserDocumentFromAuth(user);
            actions.resetForm()

        } catch (error) {
            if (error.code === "auth/invalid-credential") {
                console.log("invalid email or password");

            }
            console.log("error", error.message)
        }

    }
    const signInWithGoogle = async () => {
        try {
            const { user } = await signInWithGooglePopup();
            await createUserDocumentFromAuth(user);
        } catch (error) {
            console.log("there is an error");
        }
    }

    const signOutHandler = () => {
        signOutUser();
    }


    const { errors, values, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: SignInSchema,
        onSubmit,

    });

    return (
        <div className="sign-in-form-container">
            <div className="sign-in-title">
                <h3>SIGN IN</h3>
            </div>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <FormInput
                    label={'Email'}
                    attributes={{
                        type: "text",
                        id: 'sign-in-email',
                        name: 'email',
                        value: values.email,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        spellCheck: false
                    }}
                    errors={errors.email}
                    touched={touched.email}
                />
                <FormInput
                    label={'Password'}
                    attributes={{
                        type: "password",
                        id: 'sign-in-password',
                        name: 'password',
                        value: values.password,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        spellCheck: false
                    }}
                    errors={errors.password}
                    touched={touched.password}
                />
                {currentUser ?
                    <button onClick={signOutHandler} className='sign-out-btn'>SIGN OUT</button>
                    : <button disabled={isSubmitting} type="submit">SIGN IN</button>}
            </form>
                <button onClick={signInWithGoogle} className='google-sign-in-btn'>GOOGLE SIGN IN</button>
        </div>
    )
}

export default SignIn;