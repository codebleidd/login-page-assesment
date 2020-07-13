import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@material-ui/core'

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

class LoginForm extends React.Component<{}, {}> {
  render() {
    return (
      <Form>
        <Header
          title='Hey buddy'
          subtitle="Log in and see what's your next adventure"
        />
        <StyledTextField variant='outlined' placeholder='Email address' />
        <StyledTextField
          type='password'
          variant='outlined'
          placeholder='Password'
        />
        <StyledFormControlLabel
          control={<Checkbox color='primary' />}
          label='Should response be unsuccessful?'
        />
        <Button variant='contained' color='primary' size='large'>
          Log in
        </Button>
      </Form>
    )
  }
}

export default LoginForm
