import Box from "@mui/material/Box";
import { CardContent, Typography, Card, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function SidBar() {
  // const { showItemCart } = useContext(UserContext);
  const items = useSelector((state) => state.cart.items);
  const isEmpty = items.length == 0;
  return (
    <>
      <Box
        sx={{
          marginTop: "70px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: "10px",
        }}
      >
        {/* <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Cart
        </Typography> */}
        <Link
          style={{
            textDecoration: "none",
            fontSize: "13px",
            color: "#d87d0f",
          }}
          to={`/cart`}
        >
          Show Cart →
        </Link>
        <ShoppingCartIcon sx={{
            fontSize: "22px",
            color: "#d87d0f",
          }}/>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column-reverse",
          alignItems: "center",
        }}
      >
        {/* Sidebar content */}
        {isEmpty && (
          <Typography
            variant="h6"
            sx={{ marginTop: "150px", color: "rgba(138, 138, 138, 0.74)" }}
          >
            Cart Empty
          </Typography>
        )}
        {!isEmpty &&
          items.map((prod) => (
            <Card
              key={prod.name}
              sx={{
                width: "95%",
                marginTop: "20px",
                borderBlock: "1px solid #b9b9b86e",
                padding: "5px",
              }}
            >
              <CardContent
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "0 5px",
                  "&:last-child": {
                    paddingBottom: 0,
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="body2">{prod.name}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {prod.price} EGP
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "5px",
                  }}
                >
                  <Button
                    sx={{
                      height: 8,
                      p: 0,
                      fontSize: "26px",
                      background: "none",
                    }}
                  >
                    -
                  </Button>
                  <Typography variant="body2">0</Typography>
                  <Button
                    sx={{
                      height: 8,
                      p: 0,
                      fontSize: "20px",
                      background: "none",
                    }}
                  >
                    +
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
      </Box>
    </>
  );
}
