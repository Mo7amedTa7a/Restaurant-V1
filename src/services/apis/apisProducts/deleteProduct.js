import axiosInstance from "../../axiosInstance";

const DeleteProduct = async (id) => {
  try {
    const { data } = await axiosInstance.delete(
      `products/${id}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default DeleteProduct;