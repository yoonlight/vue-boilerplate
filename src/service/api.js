import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api'
})

const auth = {
  login: (body) => instance.post('/auth/login', body)

}
const api = {
  auth
}

export default api
