import InputBase from "@mui/material/InputBase";
import styles from "./Header.module.css";

import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../features/SearchSlice/SearchSlice";
import { useEffect } from "react";

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
  useEffect(() => {
  setShowSide(false);
}, [location.pathname, setShowSide]);
  return (
    <div className={styles.appBar}>
      <Box className={styles.boxLogoAndCart}>
        <a href="/">
          <img src="/logo.png" alt="logo" width="80" />
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
