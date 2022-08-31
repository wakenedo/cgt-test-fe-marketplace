import { api } from "."
import { toast } from 'react-toastify'


export const fetchProducts = async () => {
  try {
    let response = await api.get('/products')
    return response.data
  } catch (err) {
    toast.error('Ops something went wrong, please refresh your page!');
  }
}