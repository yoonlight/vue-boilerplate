import axios from 'axios';

const instance = axios.create()

const auth = {
  login: (body) => instance.post('/auth/login', body)

}
const api = {
  auth
}

export default api
