import styles from "./ContactUs.module.css";
import { FaMobileAlt, FaTelegramPlane } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";

function ContactUs() {
  return (
    <section className={styles.contactUs}>
      <h2 className={styles.title}>Contact Us</h2>

      <div className={styles.contactContainer}>
        {/* Contact */}
        <div className={`${styles.contactBox} ${styles.animateLeft}`}>
          <FaMobileAlt className={styles.phoneIcon} />

          <h3 className={styles.phoneTitle}>Contact Us</h3>

          <p className={styles.contactText}>+20 115 33 039 15</p>
        </div>

        {/* Complaints */}
        <div className={`${styles.contactBox} ${styles.animateUp}`}>
          <FiSmartphone className={styles.complaintIcon} />

          <h3 className={styles.complaintTitle}>For Complaints</h3>

          <p className={styles.contactText}>+20 101 41 764 34</p>
        </div>

        {/* Email */}
        <div className={`${styles.contactBox} ${styles.animateRight}`}>
          <FaTelegramPlane className={styles.emailIcon} />

          <h3 className={styles.emailTitle}>Email Us</h3>

          <p className={styles.emailText}>mohamedtaha1625@gmail.com</p>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;