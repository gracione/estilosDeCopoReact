import axios from 'axios';

const api = axios.create({
  baseURL:"https://api.kanye.rest",
})

export default api;