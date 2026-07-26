import { useState } from "react";
// import { useParams } from "react-router";
import FetchPromises from "../../apis/apiProducts";

export default function useFetchGetProduct() {
  const [product, setProduct] = useState(null);
  async function getProduct(id) {
    const data = await FetchPromises();
    const selectProduct = data.products.find((p) => p.id === Number(id));
    setProduct(selectProduct);
   
  }
  return {getProduct , product  }
}

