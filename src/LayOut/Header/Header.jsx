import InputBase from "@mui/material/InputBase";
import styles from "./Header.module.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../features/SearchSlice/SearchSlice";
import { useEffect, useRef, useState } from "react";
import { logout } from "../../features/auth/AuthSlice";

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
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const menuRef = useRef(null);

  const handelSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };
  const location = useLocation();
  const navigate = useNavigate()

  const isMenuPage = location.pathname === "/menu";

  const [isScrolled, setIsScrolled] = useState(false);
  const isHome = location.pathname == "/";

  const [menu, setMenu] = useState(false)

  useEffect(() => {
    setShowSide(false);
  }, [location.pathname, setShowSide]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (isHome) {
      handleScroll(); 
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);

  const handleLogout = () => {
    const conf = confirm("Do You Want Log Out?")
    if (conf) {
      dispatch(logout());
      setMenu(false)
      navigate("/");
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      className={`${styles.appBar} ${isHome
        ? isScrolled
          ? styles.scrolled
          : styles.homeHeader
        : styles.normalHeader
        }`}
    >
      <Box className={styles.boxLogoAndCart}>
        {isLoggedIn ? (

          <div ref={menuRef} className={styles.containerMenuHeader}>
            <AccountCircleIcon className={styles.containerMenuHeaderIcon} sx={{ fontSize: 40 }} onClick={() => setMenu((prev) => !prev)} />
            <div className={`${styles.menuHeader} ${menu ? styles.menuShow : ""}`}>
              <Link>Acount</Link>
              <button onClick={handleLogout}>LogOut</button>
            </div>
          </div>
        ) : (

          <Link to='/login' className={styles.btnlogin}>Login</Link>
        )

        }

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
