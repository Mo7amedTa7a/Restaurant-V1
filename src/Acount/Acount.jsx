import {
    PhoneOutlined,
    LocationOnOutlined,
    Person,
} from "@mui/icons-material";

import styles from "./AcountComponent.module.css";
import LogoutButton from "../Components/Logout/Logout";

export default function AcountComponent() {
    return (
        <div className={styles.accountPage}>

            {/* Header */}
            <div className={styles.accountHeader}>
                <h6 className={styles.pageTitle}>
                    My Account
                </h6>

                <h6 className={styles.pageSubtitle}>
                    Manage your profile and account information
                </h6>
            </div>


            <div className={styles.accountContainer}>

                {/* Sidebar */}
                <div className={styles.sidebar}>

                    <div className={styles.profileImage}>
                        <Person />
                    </div>

                    <h6 className={styles.userName}>
                        Mohamed Taha
                    </h6>

                    <h6 className={styles.userEmail}>
                        mohamed@example.com
                    </h6>


                    <div className={styles.menu}>

                        <button className={`${styles.menuItem} ${styles.active}`}>
                            <Person />
                            Profile
                        </button>

                        {/* <button className={styles.menuItem}>
              <ShoppingBagOutlined />
              My Orders
            </button> */}

                        {/* <button className={styles.menuItem}>
              <EditOutlined />
              Edit Profile
            </button> */}

                        <LogoutButton/>

                    </div>

                </div>


                {/* Main Content */}
                <div className={styles.mainContent}>

                    {/* Personal Information */}
                    <div className={styles.infoCard}>

                        <div className={styles.cardHeader}>

                            <div>
                                <h6 className={styles.cardTitle}>
                                    Personal Information
                                </h6>

                                <h6 className={styles.cardSubtitle}>
                                    Your personal account details
                                </h6>
                            </div>

                            {/* <button className={styles.editbutton}>
                <EditOutlined />
                Edit
              </button> */}

                        </div>


                        <div className={styles.infoGrid}>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <Person />
                                </div>

                                <div>
                                    <h6 className={styles.infoLabel}>
                                        Full Name
                                    </h6>

                                    <h6 className={styles.infoValue}>
                                        Mohamed Taha
                                    </h6>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <PhoneOutlined />
                                </div>

                                <div>
                                    <h6 className={styles.infoLabel}>
                                        Phone
                                    </h6>

                                    <h6 className={styles.infoValue}>
                                        +20 100 000 0000
                                    </h6>
                                </div>
                            </div>


                            <div className={styles.infoItem}>
                                <div className={styles.infoIcon}>
                                    <LocationOnOutlined />
                                </div>

                                <div>
                                    <h6 className={styles.infoLabel}>
                                        Address
                                    </h6>

                                    <h6 className={styles.infoValue}>
                                        Cairo, Egypt
                                    </h6>
                                </div>
                            </div>

                        </div>

                    </div>


                    {/* Orders */}
                    {/* <Card className={styles.ordersCard}>

            <div className={styles.cardHeader}>

              <div>
                <h6 className={styles.cardTitle}>
                  Recent Orders
                </h6>

                <h6 className={styles.cardSubtitle}>
                  View your latest orders
                </h6>
              </div>

              <button className={styles.viewbutton}>
                View All
              </button>

            </div>


            <div className={styles.order}>

              <div className={styles.orderIcon}>
                <ShoppingBagOutlined />
              </div>

              <div className={styles.orderInfo}>

                <h6 className={styles.orderNumber}>
                  Order #12345
                </h6>

                <h6 className={styles.orderDate}>
                  September 2, 2026
                </h6>

              </div>

              <div className={styles.orderRight}>

                <h6 className={styles.orderPrice}>
                  450 EGP
                </h6>

                <h6 className={styles.completed}>
                  Completed
                </h6>

              </div>

            </div>


            <div className={styles.order}>

              <div className={styles.orderIcon}>
                <ShoppingBagOutlined />
              </div>

              <div className={styles.orderInfo}>

                <h6 className={styles.orderNumber}>
                  Order #12344
                </h6>

                <h6 className={styles.orderDate}>
                  August 28, 2026
                </h6>

              </div>

              <div className={styles.orderRight}>

                <h6 className={styles.orderPrice}>
                  320 EGP
                </h6>

                <h6 className={styles.pending}>
                  Pending
                </h6>

              </div>

            </div>

          </Card> */}

                </div>

            </div>

        </div>
    );
}