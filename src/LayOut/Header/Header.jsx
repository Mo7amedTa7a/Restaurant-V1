import InputBase from "@mui/material/InputBase";
import styles from "./Header.module.css";

import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../features/SearchSlice/SearchSlice";
import { useEffect, useState } from "react";

const NavHeader = [
  { path: "/", name: "Home" },
  { path: "/menu", name: "Menu" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
];

function Header({ setShowSide }) {
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart.items);
  const search = useSelector((state) => state.search.textSearch);
  const handelSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };
  const location = useLocation();

  const isMenuPage = location.pathname === "/menu";

  const [isScrolled, setIsScrolled] = useState(false);
  const isHome = location.pathname == "/";

  useEffect(() => {
    setShowSide(false);
  }, [location.pathname, setShowSide]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (isHome) {
      handleScroll(); // عشان يتأكد من الحالة الحالية
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);
  return (
    <div
      className={`${styles.appBar} ${
        isHome
          ? isScrolled
            ? styles.scrolled
            : styles.homeHeader
          : styles.normalHeader
      }`}
    >
      <Box className={styles.boxLogoAndCart}>
        <a href="/">
          <img src="/profile1.png" alt="logo" width="30" />
        </a>

        {isMenuPage && (
          <Box className={styles.cartWrapper}>
            <span className={styles.cartCount}>{itemsInCart.length}</span>

            <ShoppingCartIcon
              className={styles.cartIcon}
              onClick={() => setShowSide((pre) => !pre)}
            />
          </Box>
        )}
      </Box>
      <Box>
        <ul className={styles.navList}>
          {NavHeader.map(({ path, name }) => (
            <li key={name} className={styles.navItem}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </Box>
      <div sx={{ flexGrow: 0 }}>
        <div className={styles.search}>
          <div className={styles.searchIconWrapper}>
            <SearchIcon />
          </div>
          <InputBase
            className={styles.inputSeacrch}
            onChange={handelSearch}
            value={search}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
