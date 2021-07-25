import axios from 'axios';

const api = axios.create({
baseURL: 'https://my-json-server.typicode.com/moniquetrotta/desafio2/produtos'
})
export default api;