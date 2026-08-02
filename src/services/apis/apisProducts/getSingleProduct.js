import axiosInstance from "../../axiosInstance";

const GetSingleProduct = async (id) => {
  try {
    const { data } = await axiosInstance.get(
      `products/${id}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default GetSingleProduct;
