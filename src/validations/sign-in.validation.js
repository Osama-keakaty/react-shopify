import * as yup from 'yup'
export const SignInSchema = yup.object().shape({
    email: yup
    .string()
    .email("Please Enter a valid Email")
    .required(),
password: yup
    .string()
    .min(5)
    .required(),
})