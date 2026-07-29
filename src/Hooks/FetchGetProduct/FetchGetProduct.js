import { useEffect } from "react";
import { fetchProducts } from "../../apis/FetchProducts";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router";

export default function useFetchGetProduct(id) {
  const dispatch = useDispatch()
  const {items, loading, error } = useSelector((state) => state.products);

  // const [product, setProduct] = useState(null);
  
    // const data = await fetchProducts();
    // console.log(data)


    useEffect(()=>{
      if(items.length === 0 && !loading){
        dispatch(fetchProducts())
      }
    },[dispatch , items.length,loading])
    
    const selectProduct = items.find((p) => p.id === Number(id));
    // console.log(selectProduct)
   

  return {selectProduct , loading , error}
}

