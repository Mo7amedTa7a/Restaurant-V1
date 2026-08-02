import axiosInstance from "../../axiosInstance";

const AddNewProduct = async (addProduct) => {
  try {
    const { data } = await axiosInstance.post(
      "products",
      addProduct,
    );

    return data;
  } catch (error) {
    console.log("Failed to add product:", error);
    
  }
};

export default AddNewProduct;
