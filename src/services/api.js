import axios from 'axios';

const api = axios.create({ baseURL: 'https://joy-crud.herokuapp.com/' });

export default api;