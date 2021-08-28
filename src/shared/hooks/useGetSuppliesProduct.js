import useSWR from "swr";
import {getSuppliesProduct} from '../../api/index.js'

export function useGetSuppliesProduct(){
  const {data, error} = useSWR('useGetSuppliesProduct', () => {
    return getSuppliesProduct()
  });

  console.log('swr data -> ', data)

  return {
    data: data ? data.item : null,
    error,
  }
}