import axios from 'axios'
import handleError from '../utils/handleError'

export default async function register(username: string, password: string) {
  const request = axios.post('/auth/register', {
    username,
    password
  })

  const response = request
    // wait for a server send response
    .then((response) => {
      const { data } = response

      return data.LoggedIn.access_token
    })
    // handle error
    .catch(handleError)

  // return server response
  return response
}
