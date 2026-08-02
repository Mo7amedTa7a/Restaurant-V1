import GetAllCarts from "./apis/apisCarts/getAllCarts";
import AddNewProduct from "./apis/apisProducts/addNewproduct";
import DeleteProduct from "./apis/apisProducts/deleteProduct";
import GetAllProducts from "./apis/apisProducts/getAllProducts";
import GetSingleProduct from "./apis/apisProducts/getSingleProduct";
import UpdateProdect from "./apis/apisProducts/updateProdect";

const api = {
  GetAllProducts,
  AddNewProduct,
  DeleteProduct,
  GetSingleProduct,
  UpdateProdect,
  GetAllCarts,
};

export default api;
