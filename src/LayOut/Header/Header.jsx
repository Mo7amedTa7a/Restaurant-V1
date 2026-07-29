import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import "./Header.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../features/SearchSlice/SearchSlice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "30rem",
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  },
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));
function Header({ setShowSide }) {
  const dispatch = useDispatch()
  const itemsInCart = useSelector((state) => state.cart.items);
  const search = useSelector((state) => state.search.textSearch);
  const handelSearch = (e )=> {
    dispatch(setSearch(e.target.value))
  }
  

  const NavHeader = [
    { path: "/", name: "Home" },
    { path: "/menu", name: "Menu" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ];
  const theme = useTheme();
  // const { incrementCart } = useContext(UserContext);
  return (
    <AppBar position="fixed" color="secondary">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src="/logo.png" alt="logo" width="80" />

            <Box sx={{ position: "relative" }}>
              <Typography
                sx={{
                  position: "absolute",
                  lineHeight: "10px",
                  top: "-.5rem",
                  left: "4.5rem",
                  width: "20px",
                  height: "20px",
                  padding: "5px",
                  borderRadius: "50%",
                  background: "#FF9D23",
                  color: "#fff",
                  fontSize: "12px",
                }}
              >
                {itemsInCart.length}
              </Typography>
              <ShoppingCartIcon
                onClick={() => setShowSide((pre) => !pre)}
                sx={{
                  color: "#FF9D23",
                  marginLeft: "3rem",
                  cursor: "pointer",
                  "&:hover": {
                    scale: "1.2",
                    transition: "all .3s ease-in-out",
                  },
                }}
              />
            </Box>
          </Box>
          <Box>
            <ul style={{ display: "flex", margin: 0, padding: 0 }}>
              {NavHeader.map(({ path, name }) => (
                <li key={name} style={theme.typography.li}>
                  <NavLink to={path} className="a">
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={handelSearch}
                value= {search}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
