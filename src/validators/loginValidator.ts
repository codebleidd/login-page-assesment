import * as yup from 'yup'
import { Schema } from 'yup'

const loginValidator: Schema<any> = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should contain at least 8 characters')
    .matches(/[A-Z]/, 'Password should contain an uppercase letter')
    .matches(/[0-9]/, 'Password should contain a number')
    .required(),
})

export { loginValidator }
