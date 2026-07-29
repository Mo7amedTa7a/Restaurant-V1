import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { removeCart } from "../../features/cartSlice/cartSlice";

const Cart = () => {
  const  dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items);
  return (
    <Box
      sx={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h4 style={{ fontWeight: "bold", color: "#724a19" }}>All Product Cart</h4>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
        }}
      >
        {items.map((prod) => (
          
            <Card
              key={prod.id}
              sx={{ width: "380px", minHeight: "100px", paddingBlockEnd: "0"}}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  borderBlockEnd: "1px solid #3454",
                }}
              >
                <CardMedia
                  component="img"
                  height="115px"
                  sx={{ width: "120px", borderRadius: "5px 0 0 5px" }}
                  image={prod.image}
                  alt={prod.name}
                />
                <CardContent>
                  <Typography variant="h6" color="text.secondary">
                    {prod.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ paddingTop: "10px", fontWeight: "bold" }}
                  >
                    {prod.price} EGP
                  </Typography>
                </CardContent>
              </Box>
              <Box
                sx={{
                  padding: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "10px",
                }}
              >
                <button
                  style={{
                    fontSize: "13px",
                    border: 0,
                    background: "#c51616",
                    color: "#fff",
                    borderRadius: "6px",
                    padding: "5px 15px",
                  }}
                  onClick={()=> dispatch(removeCart(prod))}
                >
                  Remove
                </button>
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: "13px",
                    color: "#d87d0f",
                  }}
                  to={`/productDetails/${prod.id}`}
                >
                  Details →
                </Link>
              </Box>
            </Card>
        ))}
      </Box>
    </Box>
  );
};
export default Cart;
