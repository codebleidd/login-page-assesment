import { loginValidator } from './'
import { FormValues } from '../components/LoginForm'

describe('loginValidator', () => {
  it('should pass validation', () => {
    const TEST_OBJECT: FormValues = {
      email: 'test@test.com',
      password: 'asdf12FFGG',
    }
    expect(loginValidator.isValidSync(TEST_OBJECT)).toBeTruthy()
  })

  it('should throw error as ther is no uppercase letter', async () => {
    const TEST_OBJECT: FormValues = {
      email: 'test@test.com',
      password: 'asdf12ffffff',
    }
    let validation = await loginValidator.validate(TEST_OBJECT).catch(e => e)
    expect(validation.errors).toContain(
      'Password should contain an uppercase letter'
    )
  })

  it('should throw error as there is no number', async () => {
    const TEST_OBJECT: FormValues = {
      email: 'test@test.com',
      password: 'asdfFfffff',
    }
    let validation = await loginValidator.validate(TEST_OBJECT).catch(e => e)
    expect(validation.errors).toContain('Password should contain a number')
  })

  it('should throw error as the password is too short', async () => {
    const TEST_OBJECT: FormValues = {
      email: 'test@test.com',
      password: 'asdfFf',
    }
    let validation = await loginValidator.validate(TEST_OBJECT).catch(e => e)
    expect(validation.errors).toContain(
      'Password should contain at least 8 characters'
    )
  })
})
