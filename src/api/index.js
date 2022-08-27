import axios from 'axios';


let API_URL = 'https://productscgt.free.mockoapp.net/products';
export const api = axios.create({
  baseURL: API_URL,
})


export const fetchProducts = async (data) => {
  await api.get().then((response) => {
    const products = response.data
    data = products
    console.log(products)
    return products
  })
  console.log(data)
  return data
}