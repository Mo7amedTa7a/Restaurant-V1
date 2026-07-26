import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import FetchPromises from "../../apis/apiProducts";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Link } from "react-router";
import UserContext from "../../Contexts/Cart/UserContext";
function Menu() {
  const theme = useTheme();
  const [restaurant, setRestaurant] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { setShowItemCart, setIncrementCart, showItemCart } =
    useContext(UserContext);

  useEffect(() => {
    FetchPromises()
      .then((response) => {
        setRestaurant(response);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  // Loading state
  if (!restaurant) {
    return (
      <Typography
        variant="h4"
        sx={{
          width: "100%",
          textAlign: "center",
          marginTop: "100px",
          color: theme.palette.primary.main,
        }}
      >
        Loading...
      </Typography>
    );
  }

  const AtlbElan = (item) => {
    const exists = showItemCart.find((p) => p.id == item.id);

    if (!exists) {
      setShowItemCart((prev) => [...prev, item]);
      setIncrementCart((count) => count + 1);
    }
  };

  const filteredProducts =
    selectedCategory === "all"
      ? restaurant.products
      : restaurant.products.filter(
          (product) => product.categoryId === selectedCategory,
        );

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setSelectedCategory(newAlignment);
    }
  };

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <ToggleButtonGroup
          color="primary"
          value={selectedCategory}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{
            width: "fit-content",
            marginTop: "90px",
            border: "1px solid #cecbc860",
            backgroundColor: "#fff",
            "& .MuiToggleButtonGroup-grouped": {
              border: "none",
              borderRadius: "8px",
            },
          }}
        >
          <ToggleButton
            sx={{ paddingInline: "30px", fontSize: "13px", fontWeight: "bold" }}
            value="all"
          >
            All
          </ToggleButton>
          {restaurant.categories.map((cat) => (
            <ToggleButton
              sx={{
                paddingInline: "30px",
                fontSize: "13px",
                fontWeight: "bold",
              }}
              value={cat.id}
              key={cat.id}
            >
              {cat.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
      {/* Products */}
      {/* Products Container */}

      <Box
        sx={{
          marginTop: "30px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {filteredProducts.map((prod) => {
          const isAdded = showItemCart.some((p) => p.id === prod.id);
          return(

          
          <Card key={prod.name} sx={{ width: "300px", minHeight: "350px" }}>
            <CardMedia
              component="img"
              height="180px"
              image={prod.image}
              alt={prod.name}
            />

            <CardContent>
              <Typography variant="h6" color="text.secondary">
                {prod.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {prod.description.slice("11") + " ...."}
              </Typography>

              <Typography
                variant="h6"
                sx={{ paddingTop: "10px", fontWeight: "bold" }}
              >
                {prod.price} EGP
              </Typography>
              <Box
                sx={{
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
                    background:isAdded? "#aca5a4":"#FF9D23",
                    color: "#fff",
                    cursor:isAdded?"revert":"pointer",
                    borderRadius: "6px",
                    padding: "5px 15px",
                  }}
                  onClick={() => AtlbElan(prod)}
                >
                  {isAdded
                    ? "Added"
                    : "Add to Cart"}
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
            </CardContent>
          </Card>
        )})}
      </Box>
    </>
  );
}

export default Menu;
