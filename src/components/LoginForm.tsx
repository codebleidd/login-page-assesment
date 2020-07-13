import React from 'react'
import styled from 'styled-components'
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@material-ui/core'
import { Formik, Field, FieldInputProps, FieldMetaProps } from 'formik'

import Header from './Header'
import { loginValidator } from '../validators'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
`
const StyledTextField = styled(TextField)`
  margin-bottom: 16px;
`
const StyledFormControlLabel = styled(FormControlLabel)`
  color: ${({ theme }) => theme.palette.neutral.dark};
  margin-bottom: 16px;
`

interface FieldHelpers {
  field: FieldInputProps<string>
  meta: FieldMetaProps<string>
}

export interface FormValues {
  email: string
  password: string
  shouldFail?: boolean
}

class LoginForm extends React.Component<{}, {}> {
  render() {
    return (
      <Formik
        initialValues={{ email: '', password: '', shouldFail: false }}
        onSubmit={console.log}
        validationSchema={loginValidator}
      >
        {props => (
          <Form onSubmit={props.handleSubmit}>
            <Header
              title='Hey buddy'
              subtitle="Log in and see what's your next adventure"
            />

            <Field name='email'>
              {({ field, meta }: FieldHelpers) => (
                <StyledTextField
                  {...field}
                  variant='outlined'
                  placeholder='Email'
                  error={!!meta.error}
                  helperText={meta.error}
                />
              )}
            </Field>

            <Field name='password'>
              {({ field, meta }: FieldHelpers) => (
                <StyledTextField
                  {...field}
                  type='password'
                  variant='outlined'
                  placeholder='Password'
                  error={!!meta.error}
                  helperText={meta.error}
                />
              )}
            </Field>

            <Field name='shouldFail'>
              {({ field, meta }: FieldHelpers) => (
                <StyledFormControlLabel
                  control={<Checkbox color='primary' {...field} />}
                  label='Should response be unsuccessful?'
                />
              )}
            </Field>
            <Button
              variant='contained'
              color='primary'
              size='large'
              type='submit'
            >
              Log in
            </Button>
          </Form>
        )}
      </Formik>
    )
  }
}

export default LoginForm
