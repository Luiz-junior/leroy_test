import axios from 'axios';

const api = axios.create({
  /* baseURL: 'http://localhost:3000', */
  baseURL: 'https://zs5utiv3ul.execute-api.us-east-1.amazonaws.com/dev',
  
});

export default api;