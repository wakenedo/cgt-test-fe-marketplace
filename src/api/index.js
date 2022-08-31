import axios from 'axios';

let API_URL = 'https://productscgt.free.mockoapp.net/';
export const api = axios.create({
  baseURL: API_URL,
})



