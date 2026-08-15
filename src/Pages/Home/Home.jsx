import { Box, Button, CardMedia } from "@mui/material";
import SimpleSlider from "../../Components/SliderHome/SliderHome";
import { SEO } from "../../Components/SEO/SEO.jsx";
import styles from "./Home.module.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../apis/FetchProducts.js";
import ProductSkeleton from "../../Components/ProductSkeleton/ProductSkeleton.jsx";
import { useInView } from "react-intersection-observer";
function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);
  // console.log("inView:", inView);
  // console.log("status:", status);
  // console.log("items:", items);
  // console.log(items);

  useEffect(() => {
    // console.log("useEffect running");
    // console.log("inView:", inView);
    // console.log("status:", status);

    if (inView && status === "idle") {
      // console.log("🚀 Sending request...");

      const promise = dispatch(fetchProducts());

      return () => {
        promise.abort();
      };
    }

    // console.log("❌ Request not sent");
  }, [dispatch, inView]);

  const offers = items.filter((item) => item.discount > 0);
  // console.log(offers);

  if (error) {
    return <Box className={styles.boxError}>{error}</Box>;
  }

  const renderOffers = () => {
    if (!items.length && status === "loading") {
      return (
        <Box className={styles.boxLoading}>
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </Box>
      );
    }
    return offers.map((prod) => {
      const priceAfterDiscount = Math.floor(
        prod.price - (prod.price * prod.discount) / 100,
      );
      return (
        <div
          key={prod.id}
          className={styles.cardProduct}
          onClick={() => navigate(`/productDetails/${prod.id}`)}
        >
          <div className={styles.conImg}>
            <CardMedia
              component="img"
              width={300}
              height={180}
              image={prod.image}
              alt={prod.name}
              loading="lazy"
              decoding="async"
            />
            <h4 variant="h5" className={styles.discount}>
              {prod.discount}% Offer
            </h4>
            <div className={styles.coverBackground}></div>
          </div>

          <div className={styles.infoCard}>
            <h6 className={styles.textName}>{prod.name}</h6>
            <h6 className={styles.textPrice}>{priceAfterDiscount} EGP</h6>
            <h6 className={styles.oldPrice}>{prod.price} EGP</h6>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <SEO
        title="Best Restaurant in Assiut"
        discription="Enjoy delicious fresh meals, pizza and burgers."
        keyword="restaurant, pizza, burger"
      />

      <Box>
        {/* Hero */}
        <div className={styles.hero}>
          {/* Video Background */}
          <video
            className={styles.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/src/assets/hero.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className={styles.overlay} />

          {/* Hero Logo */}
          <div className={styles.logoContainer}>
            <img
              className={styles.heroLogo}
              src="/logo2.png"
              alt="Restaurant Logo"
            />
          </div>

          {/* Hero Title */}
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Taste The Best Food</h1>

            <p className={styles.heroDescription}>
              Fresh ingredients - Delicious meals - Unforgettable taste.
            </p>
          </div>

          {/* Buttons */}
          <div className={styles.buttonsContainer}>
            <Button
              variant="outlined"
              className={styles.contactUs}
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>

            <Button
              variant="contained"
              className={styles.menuButton}
              onClick={() => navigate("/menu")}
            >
              Show Menu
            </Button>
          </div>
        </div>

        {/* Services Slider */}
        <div>
          <SimpleSlider />
        </div>
        {/* Offers Slider */}
        <div>
          <h2 className={styles.title}>Offers</h2>
          <div ref={ref} className={styles.boxContainerProducts}>
            {renderOffers()}
          </div>
        </div>
      </Box>
    </>
  );
}

export default Home;
