import styles from "./About.module.css";

const imgs = [
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
];

function About() {
  return (
    <section className={styles.containerAbout}>
      <div className={styles.borderCenter}></div>

      <div className={styles.content}>
        {/* Left Side */}
        <div className={styles.leftSide}>
          <div
            className={`${styles.textBox} ${styles.animateLeftText}`}
          >
            <h2>About Us</h2>
            <span></span>

            <h3>More Than Just a Restaurant... It's an Experience!</h3>

            <p>
              Our story started with a simple dream and a promise to serve
              delicious food with a unique taste in a warm and welcoming place
              that brings people together over great food and memorable moments.
            </p>

            <p>
              That was the beginning of our journey, and with your love and
              support, we continue to grow and strive for the highest quality.
            </p>
          </div>

          <img
            src={imgs[0]}
            alt="Restaurant interior"
            className={`${styles.imageLeft} ${styles.animateLeftImage}`}
          />
        </div>

        {/* Right Side */}
        <div className={styles.rightSide}>
          <img
            src={imgs[1]}
            alt="Restaurant interior"
            className={`${styles.imageRight} ${styles.animateRightImage}`}
          />

          <div
            className={`${styles.rightText} ${styles.animateRightText}`}
          >
            <p>
              When we opened our doors, our goal was simple: to serve fresh,
              delicious food in a comfortable atmosphere where you can relax and
              enjoy every moment.
            </p>

            <p>
              We carefully select the finest ingredients and prepare every dish
              with passion, care, and love.
            </p>

            <div className={styles.feature}>
              <span>♡</span>

              <h4>Fresh Ingredients Every Day</h4>

              <p>
                Recipes made from the heart, service with a smile, and an
                experience you'll always want to come back to.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;