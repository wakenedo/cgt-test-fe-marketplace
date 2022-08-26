import axios from 'axios';

let API_URL = 'https://productscgt.free.mockoapp.net/products';
export default async function callApi(method = 'GET', body) {
  return axios({
    method,
    url: `${API_URL}`,
    data: body
  }).catch(err => {
    console.log(err)
  })
}