import styles from "./ContactUs.module.css";
import { FaMobileAlt, FaTelegramPlane } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";

function ContactUs() {
  return (
    <section className={styles.contactUs}>
      <h2>Contact Us</h2>
      <div className={styles.contactContainer}>
        {/* تواصل معنا */}
        <div className={styles.contactBox}>
          <FaMobileAlt className={styles.phoneIcon} />

          <h3 className={styles.phoneTitle}>تواصل معنا</h3>

          <p className={styles.contactText}>+20 115 33 039 15</p>
        </div>

        {/* للشكاوي */}
        <div className={styles.contactBox}>
          <FiSmartphone className={styles.complaintIcon} />

          <h3 className={styles.complaintTitle}>للشكاوي</h3>

          <p className={styles.contactText}>+20 101 41 764 34</p>
        </div>

        {/* البريد الإلكتروني */}
        <div className={styles.contactBox}>
          <FaTelegramPlane className={styles.emailIcon} />

          <h3 className={styles.emailTitle}>البريد الإلكتروني</h3>

          <p className={styles.emailText}>info@fomo.com</p>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
