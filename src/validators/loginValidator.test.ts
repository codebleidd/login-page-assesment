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
    let a = await loginValidator.validate(TEST_OBJECT).catch(e => e)
    expect(a.errors).toContain('Password should contain an uppercase letter')
  })

  it('should throw error as ther is no number', async () => {
    const TEST_OBJECT: FormValues = {
      email: 'test@test.com',
      password: 'asdfFfffff',
    }
    let a = await loginValidator.validate(TEST_OBJECT).catch(e => e)
    expect(a.errors).toContain('Password should contain a number')
  })

  it('should throw error as ther is no number', async () => {
    const TEST_OBJECT: FormValues = {
      email: 'test@test.com',
      password: 'asdfFf',
    }
    let a = await loginValidator.validate(TEST_OBJECT).catch(e => e)
    expect(a.errors).toContain('Password should contain at least 8 characters')
  })
})
