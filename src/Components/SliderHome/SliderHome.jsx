import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

const Slider = SliderModule.default ?? SliderModule;

export default function SimpleSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        background: "rgb(245, 163, 12)",
      }}
    >
      <Slider {...settings}>
        <div>
          <Box
            sx={{
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgb(83, 58, 5)",
              color:"#fff",
            }}
          >
            <h6>⭐ Offer %60</h6>
          </Box>
        </div>

        <div>
          <Box
            sx={{
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgb(83, 58, 5)",
              color:"#fff",
            }}
          >
            <h6>🎁 First Order</h6>
          </Box>
        </div>

        <div>
          <Box
            sx={{
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgb(83, 58, 5)",
              color:"#fff",
            }}
          >
            <h6>✨ New Menu</h6>
          </Box>
        </div>

        <div>
          <Box
            sx={{
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgb(83, 58, 5)",
              color:"#fff",
            }}
          >
            <h6>🔥 Today's Special</h6>
          </Box>
        </div>

        <div>
          <Box
            sx={{
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgb(83, 58, 5)",
              color:"#fff",
            }}
          >
            <h6>🚚 Free Delivery</h6>
          </Box>
        </div>

        <div>
          <Box
            sx={{
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgb(83, 58, 5)",
              color:"#fff",
            }}
          >
            <h6>⭐ Chef's Choice</h6>
          </Box>
        </div>
      </Slider>
    </Box>
  );
}
