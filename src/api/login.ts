import { post } from './methods'
import { Credentials } from '../types/credentials'

export async function login(credentials: Credentials, shouldFail = false) {
  // Get right url from previously generated
  const url = shouldFail
    ? 'https://run.mocky.io/v3/5cc28ca6-1e6c-4a34-91a8-2c0d7f24e299'
    : 'https://run.mocky.io/v3/b08050cb-14d8-44b2-a8ab-a366ecead596'

  return post(url, credentials)
}
