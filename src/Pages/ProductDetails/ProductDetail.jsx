import { Box, useTheme } from "@mui/material";
import useFetchGetProduct from "../../Hooks/FetchGetProduct/FetchGetProduct";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";

const ProductDetail = () => {
  console.log("ProductDetail");
  const theme = useTheme();
  const { message } = useLoaderData();
  const { id } = useParams();
  const { selectProduct, loading, error } = useFetchGetProduct(id);
  if (loading) {
    return (
      <div
        style={{
          fontSize: "25px",
          marginTop: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: theme.palette.primary.main,
        }}
      >
        {message}
      </div>
    );
  }
  if (error) {
    return (
      <div
        style={{
          fontSize: "25px",
          marginTop: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgb(160, 11, 11)",
        }}
      >
        {error}
      </div>
    );
  }
  if (!selectProduct) {
    return (
      <h2
        style={{
          fontSize: "25px",
          marginTop: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgb(160, 11, 11)",
        }}
      >
        Product Not Found
      </h2>
    );
  }
  return (
    <>
      <Box
        sx={{
          marginTop: "150px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>{selectProduct.name}</h1>
      </Box>
    </>
  );
};

export default ProductDetail;
