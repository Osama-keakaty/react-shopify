import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/
export const SignUpSchema = yup.object().shape({
    name: yup
    .string()
    .required(),
email: yup
    .string()
    .email("Please Enter a valid Email")
    .required(),
password: yup
    .string()
    .min(5,'Password is too short')
    .matches(passwordRules, { message: 'Please create a stronger password' })
    .required(),
confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required("confirm password is a required field "),
})