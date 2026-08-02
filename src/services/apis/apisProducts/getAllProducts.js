import axiosInstance from "../../axiosInstance";

const GetAllProducts = async () => {
  try {
    const { data } = await axiosInstance.get(
      "products"
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default GetAllProducts;