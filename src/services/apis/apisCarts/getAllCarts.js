import axiosInstance from "../../axiosInstance";

const GetAllCarts = async () => {
  try {
    const { data } = await axiosInstance.get(
      "carts"
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default GetAllCarts;