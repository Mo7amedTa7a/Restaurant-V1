import { useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import useFetchGetProduct from "../../Hooks/FetchGetProduct/FetchGetProduct";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";

const ProductDetail = () => {
  console.log("ProductDetail")
  const theme = useTheme();
  const { message } = useLoaderData();
  const { id } = useParams();
  const { getProduct, product } = useFetchGetProduct();
  useEffect(() => {
    getProduct(id);
  }, [id]);
  return (
    <>
      {!product && (
        <div
          style={{
            fontSize:"25px",
            marginTop: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme.palette.primary.main
          }}
        >
          {message}
        </div>
      )}
      {product && (
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
            <h1>{product.name}</h1>
          </Box>
        </>
      )}
    </>
  );
};

export default ProductDetail;
