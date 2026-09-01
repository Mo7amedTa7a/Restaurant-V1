import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { decItem, incItem, removeCart } from "../../features/cartSlice/cartSlice";
import styles from "./Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);


  const totalItems = items.reduce((total,product)=>{
    return total + product.quantity
  }, 0);
  const subtotal = items.reduce((total, product) => {
    return total + Number(product.price)*product.quantity;
  }, 0);

  return (
    <div className={styles.cartPage}>

      <h4 className={styles.title}>All Product Cart</h4>

      <div className={styles.cartContainer}>

        {/* Products */}
        <div className={styles.productsContainer}>

          {items.length === 0 ? (
            <h6 className={styles.emptyCart}>
              Your cart is empty
            </h6>
          ) : (
            items.map((prod) => (
              <div
                key={prod.id}
                className={styles.productCard}
              >
                <div className={styles.productInfo}>

                  <div
                    alt={prod.name}
                    className={styles.productImage}
                    >
                    <img src={prod.image} alt={prod.name} className={styles.productImage} />
                  </div>

                  <div className={styles.productContent}>
                    <h6
                      variant="h6"
                      className={styles.productName}
                    >
                      {prod.name}
                    </h6>

                    <h6
                      variant="h6"
                      className={styles.productPrice}
                    >
                      {prod.price} EGP
                    </h6>



                  </div>

                </div>

                <div className={styles.productActions}>

                  <button
                    className={styles.removeButton}
                    onClick={() => dispatch(removeCart(prod))}
                  >
                    Remove
                  </button>
                  <div className={styles.quantityControl}>
                    <button
                      className={styles.quantityButton}
                      onClick={() => dispatch(decItem(prod.id))}
                    >
                      -
                    </button>

                    <h6 className={styles.quantity}>
                      {prod.quantity}
                    </h6>

                    <button
                      className={styles.quantityButton}
                      onClick={() => dispatch(incItem(prod.id))}
                    >
                      +
                    </button>
                  </div>
                  <Link
                    className={styles.detailsLink}
                    to={`/productDetails/${prod.id}`}
                  >
                    Details →
                  </Link>

                </div>
              </div>
            ))
          )}

        </div>


        {/* Cart Summary */}
        <div className={styles.summary}>

          <h3 className={styles.summaryTitle}>
            Order Summary
          </h3>

          <div className={styles.summaryRow}>
            <span>Products</span>
            <span>{totalItems}</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>{subtotal} EGP</span>
          </div>

          {/* Coupon */}
          <div className={styles.couponBox}>

            <label htmlFor="coupon">
              Have a discount code?
            </label>

            <div className={styles.couponInput}>
              <input
                id="coupon"
                type="text"
                placeholder="Enter coupon code"
              />

              <button>
                Apply
              </button>
            </div>

          </div>

          <div className={styles.totalRow}>
            <span>Total</span>
            <span>{subtotal} EGP</span>
          </div>

          <button className={styles.checkoutButton}>
            Checkout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Cart;