import axios from 'axios';

const api = axios.create({
baseURL: 'https://my-json-server.typicode.com/moniquetrotta/desafio22/produtos'
})
export default api;