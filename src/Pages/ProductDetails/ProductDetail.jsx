import { Card, CardContent, CardMedia } from "@mui/material";
import useFetchGetProduct from "../../Hooks/FetchGetProduct/FetchGetProduct";
import { useLoaderData, useParams } from "react-router";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import styles from "./ProductDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice/cartSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  // console.log(items);
  // console.log("ProductDetail");

  const { message } = useLoaderData();
  const { id } = useParams();
  const { selectProduct, loading, error } = useFetchGetProduct(id);
  const isAdded = items.some((item) => item.id === +id);
  if (loading) {
    return <div className={styles.loading}>{message}</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!selectProduct) {
    return <h2 className={styles.notProduct}>Product Not Found</h2>;
  }
  const priceAfterDiscount = Math.floor(
    selectProduct.price - (selectProduct.price * selectProduct.discount) / 100,
  );
  return (
    <div className={styles.boxProduct}>
      <Card className={styles.cardProduct}>
        <div className={styles.imageContainer}>
          <CardMedia
            component="img"
            className={styles.imgCard}
            image={selectProduct.image}
            alt={selectProduct.name}
            loading="lazy"
            decoding="async"
          />
        </div>

        <CardContent className={styles.productInfo}>
          <h4 variant="h3" component="h1" className={styles.productName}>
            {selectProduct.name}
          </h4>

          <h4 className={styles.productDescription}>
            {selectProduct.description}
          </h4>

          <div className={styles.details}>
            <div className={styles.detailItem}>
              <h4 className={styles.label}>Price</h4>
              <h4 className={styles.oldPrice}>{selectProduct.price} EGP</h4>
              <h4 className={styles.textPrice}>{priceAfterDiscount} EGP</h4>
            </div>

            <div className={styles.detailItem}>
              <h4 className={styles.label}>Rating</h4>

              <h4 className={styles.value}>{selectProduct.rating} / 5</h4>

              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, index) =>
                  index < Math.round(selectProduct.rating) ? (
                    <StarIcon key={index} className={styles.activeStar} />
                  ) : (
                    <StarBorderIcon key={index} className={styles.emptyStar} />
                  ),
                )}
              </div>
            </div>

            <div className={styles.detailItem}>
              <h4 className={styles.label}>Discount</h4>
              <h4 className={styles.value}>{selectProduct.discount}%</h4>
            </div>

            <div className={styles.detailItem}>
              <h4 className={styles.label}>Preparation Time</h4>
              <h4 className={styles.value}>{selectProduct.preparationTime}</h4>
            </div>
            <div className={styles.detailItem}>
              <h4 className={styles.label}>Availability</h4>
              <h4
                className={
                  selectProduct.available
                    ? styles.available
                    : styles.notAvailable
                }
              >
                {selectProduct.available ? "Available" : "Not Available"}
              </h4>
            </div>
          </div>

          <button
            className={`${styles.buttonInCard} ${isAdded ? styles.added : ""}`}
            onClick={() => dispatch(addToCart(selectProduct))}
          >
            {isAdded ? "Added" : "Add to Cart"}
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetail;
