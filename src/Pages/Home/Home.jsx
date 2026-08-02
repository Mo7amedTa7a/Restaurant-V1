import { Box, Button, InputBase } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";

const imgArr = [
  "https://images.unsplash.com/photo-1589926200324-7129d6a43c80?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1661758415432-36ec77ff9b8c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1688084403060-3594a4b8ff8d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Search = styled("div")(() => ({
  position: "relative",
  borderRadius: "30rem",
  backgroundColor: "#fff",
  width: "450px",
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
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));
function Home() {
  
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const data = await api.GetAllCarts();

  //     console.log(data);
  //   };

  //   getProducts();
  // }, []);
  return (
    <Box
      style={{
        position:"relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#2445",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "60%",
          left: "50%",
          zIndex: 99,
          transform: "translate(-50%, -50%)",
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box
          sx={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            color="#fff"
            sx={{
              marginInlineEnd: "30px",
              height: 28,
              p: 2.5,
              fontSize: "16px",
              color: "#fff",
            }}
          >
            Order Now
          </Button>
          <Button
            variant="contained"
            sx={{
              height: 28,
              p: 2.5,
              fontSize: "16px",
              color: "#fff",
            }}
          >
            Show Menu
          </Button>
        </Box>
      </Box>
      <Carousel
        style={{
          width: "100%",
          height: "100vh",
          paddingTop: "65px",
          background: "#000",
        }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgArr[0]}
            alt="First slide"
            style={{
              height: "calc(100vh - 65px)",
              objectFit: "cover",
              width: "100%",
              opacity: ".4",
            }}
          />
          <Carousel.Caption
            style={{
              top: "80px",
              bottom: "auto",
            }}
          >
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgArr[1]}
            alt="First slide"
            style={{
              height: "calc(100vh - 65px)",
              objectFit: "cover",
              width: "100%",
              opacity: ".4",
            }}
          />
          <Carousel.Caption
            style={{
              top: "80px",
              bottom: "auto",
            }}
          >
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgArr[2]}
            alt="First slide"
            style={{
              height: "calc(100vh - 65px)",
              objectFit: "cover",
              width: "100%",
              opacity: ".4",
            }}
          />
          <Carousel.Caption
            style={{
              top: "80px",
              bottom: "auto",
            }}
          >
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Box>
  );
}

export default Home;
