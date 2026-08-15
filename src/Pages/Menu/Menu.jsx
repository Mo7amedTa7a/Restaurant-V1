import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice/cartSlice";
import { fetchProducts } from "../../apis/FetchProducts";
import ProductSkeleton from "../../Components/ProductSkeleton/ProductSkeleton";
// style
import styles from "./Menu.module.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

function Menu() {
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart.items);
  // console.log(products)
  const { items, categories, status, error } = useSelector(
    (state) => state.products,
  );
  // console.log(items,categories);

  const search = useSelector((state) => state.search.textSearch);

  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    if (status !== "idle") return;
    const promise = dispatch(fetchProducts());
    return () => {
      // console.log("🛑 Aborting...");
      promise.abort();
    };
  }, [dispatch]);

  const filteredProducts = items.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" || product.categoryId === selectedCategory;
    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setSelectedCategory(newAlignment);
    }
  };
  // console.log("STATUS:", status);
  if (status === "loading") {
    return (
      <Box className={styles.boxLoading}>
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </Box>
    );
  }

  if (error) {
    return <Box className={styles.boxError}>{error}</Box>;
  }

  const renderProducts = () => {
    if (filteredProducts.length === 0 && status === "succeeded") {
      return (
        <Typography className={styles.textNotFound} sx={{}}>
          Product Not Found
        </Typography>
      );
    }

    return filteredProducts.map((prod) => {
      // throw new Error("Test Error Boundary");
      const isAdded = cartProducts.some((p) => p.id === prod.id);
      
      return (
        <Card key={prod.name} className={styles.cardProduct}>
          <CardMedia
            component="img"
            width={300}
            height={180}
            image={prod.image}
            alt={prod.name}
            loading="lazy"
            decoding="async"
          />

          <CardContent>
            <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, index) =>
                  index < Math.round(prod.rating) ? (
                    <StarIcon key={index} className={styles.activeStar} />
                  ) : (
                    <StarBorderIcon key={index} className={styles.emptyStar} />
                  ),
                )}
              </div>
            <Typography variant="h6" color="text.secondary">
              {prod.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {prod.description.slice("11") + " ...."}
            </Typography>

            <Typography variant="h6" className={styles.textPrice}>
              {prod.price} EGP
            </Typography>
            <Box className={styles.buttonsInCardProdect}>
              <button
                className={`${styles.buttonInCard} ${isAdded ? styles.added : ""}`}
                onClick={() => dispatch(addToCart(prod))}
              >
                {isAdded ? "Added" : "Add to Cart"}
              </button>
              <Link
                className={styles.linkDeailsInCard}
                to={`/productDetails/${prod.id}`}
              >
                Details →
              </Link>
            </Box>
          </CardContent>
        </Card>
      );
    });
  };

  return (
    <>
      {status === "succeeded" && (
        <Box className={styles.pageMenu}>
          <ToggleButtonGroup
            color="primary"
            value={selectedCategory}
            exclusive
            onChange={handleChange}
            className={styles.toggleButtonGroup}
          >
            <ToggleButton value="all">All</ToggleButton>

            {categories.map((cat) => (
              <ToggleButton value={cat.id} key={cat.id}>
                {cat.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      )}
      {/* Products */}
      {/* Products Container */}

      <Box className={styles.boxContainerProducts}>{renderProducts()}</Box>
    </>
  );
}

export default Menu;
