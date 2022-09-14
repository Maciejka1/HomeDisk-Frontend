import axios from 'axios'

// Create an axios instance
const instance = axios.create({
  baseURL: 'localhost:8080'
})

export default instance
