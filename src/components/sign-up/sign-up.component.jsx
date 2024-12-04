import { useFormik } from 'formik';
import FormInput from '../form-input/form-input.component';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import { SignUpSchema } from '../../validations/sign-up.validation';
import './sign-up.styles.scss'
const SignUp = () => {

    const onSubmit = async (values, actions) => {
        try {
            const { email, name, password } = values
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName: name, email });
            actions.resetForm()
        } catch (error) {
            console.log("error", error.message)
        }

    }
    const { errors, values, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: SignUpSchema,
        onSubmit,

    });

    const handlePaste = (event) => {
        event.preventDefault();
    }

    return (
        <div className="sign-up-form-container">
            <div className="sign-up-title">
                <h3>SIGN UP</h3>
            </div>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <FormInput
                    label={'Name'}
                    attributes={{
                        type: "text",
                        id: 'name',
                        name: 'name',
                        value: values.name,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        spellCheck: false
                    }}
                    errors={errors.name}
                    touched={touched.name}
                />
                <FormInput
                    label={'Email'}
                    attributes={{
                        type: "text",
                        id: 'email',
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
                        id: 'password',
                        name: 'password',
                        value: values.password,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        spellCheck: false
                    }}
                    errors={errors.password}
                    touched={touched.password}
                />
                <FormInput
                    label={'confirm Password'}
                    attributes={{
                        type: "password",
                        id: 'confirmPassword',
                        name: 'confirmPassword',
                        value: values.confirmPassword,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        spellCheck: false,
                        onPaste: handlePaste
                    }}
                    errors={errors.confirmPassword}
                    touched={touched.confirmPassword}
                />

                <button disabled={isSubmitting} type="submit">SIGN UP</button>
            </form>
        </div>
    )
}
export default SignUp;