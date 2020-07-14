import React from 'react'
import { RenderResult, fireEvent, wait } from '@testing-library/react'

import { renderWithTheme } from '../helpers'
import { login } from '../api/login'
import LoginForm from './LoginForm'

jest.mock('../api/login')

describe('LoginForm component', () => {
  let component: RenderResult

  beforeEach(() => {
    login.mockClear()
  })

  it('renders properly', () => {
    component = renderWithTheme(<LoginForm />)
  })

  it('does not show error initially', () => {
    component = renderWithTheme(<LoginForm />)
    const formError = component.queryByTestId('login-form__form-error')
    expect(formError).toBeNull()
  })

  it('shows error when necessary', async () => {
    component = renderWithTheme(<LoginForm />)
    const response = { errorMessage: 'Error message' }
    // Get form elements and set proper values
    const emailInput = component.getByPlaceholderText('Email')
    const passwordInput = component.getByPlaceholderText('Password')
    const submitButton = component.getByText('Log in')
    await wait(() =>
      fireEvent.change(emailInput, { target: { value: 'test@test.com' } })
    )
    await wait(() =>
      fireEvent.change(passwordInput, { target: { value: 'asdf1f23A' } })
    )
    await wait(() => {
      fireEvent.click(submitButton)
    })

    expect(login).toHaveBeenCalledTimes(1)
  })

  it('should not fire login when password is in wrong format', async () => {
    component = renderWithTheme(<LoginForm />)
    const response = { errorMessage: 'Error message' }
    // Get form elements and set proper values
    const emailInput = component.getByPlaceholderText('Email')
    const passwordInput = component.getByPlaceholderText('Password')
    const submitButton = component.getByText('Log in')
    await wait(() =>
      fireEvent.change(emailInput, { target: { value: 'test@test.com' } })
    )
    await wait(() =>
      fireEvent.change(passwordInput, { target: { value: 'asdf1' } })
    )
    await wait(() => {
      fireEvent.click(submitButton)
    })

    const emailError = component.getByText(
      'Password should contain at least 8 characters'
    )
    expect(login).toHaveBeenCalledTimes(0)
  })

  it('should not fire login when email is in wrong format', async () => {
    component = renderWithTheme(<LoginForm />)
    const response = { errorMessage: 'Error message' }
    // Get form elements and set proper values
    const emailInput = component.getByPlaceholderText('Email')
    const passwordInput = component.getByPlaceholderText('Password')
    const submitButton = component.getByText('Log in')
    await wait(() =>
      fireEvent.change(emailInput, { target: { value: 'test@test' } })
    )
    await wait(() =>
      fireEvent.change(passwordInput, { target: { value: 'asdf1f23A' } })
    )
    await wait(() => {
      fireEvent.click(submitButton)
    })

    const emailError = component.getByText(
      'Please provide correct email address'
    )
    expect(login).toHaveBeenCalledTimes(0)
  })

  it('should show error', async () => {
    component = renderWithTheme(<LoginForm />)
    const response = { errorMessage: 'Error message' }
    // Get form elements and set proper values
    const emailInput = component.getByPlaceholderText('Email')
    const passwordInput = component.getByPlaceholderText('Password')
    const submitButton = component.getByText('Log in')
    await wait(() =>
      fireEvent.change(emailInput, { target: { value: 'test@test.com' } })
    )
    await wait(() =>
      fireEvent.change(passwordInput, { target: { value: 'asdf1f23A' } })
    )
    await wait(() => {
      fireEvent.click(submitButton)
      login.mockRejectedValueOnce({ errorMessage: 'Error message' })
    })

    const emailError = component.getByText('Error message')
    expect(login).toHaveBeenCalledTimes(1)
  })
})
