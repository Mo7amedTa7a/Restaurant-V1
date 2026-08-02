import axiosInstance from "../../axiosInstance";

const UpdateProdect = async (id, updatedProduct) => {
  try {
    const { data } = await axiosInstance.put(
      `products/${id}`,
      updatedProduct,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default UpdateProdect;
