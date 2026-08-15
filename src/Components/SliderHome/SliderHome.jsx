import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderHome.module.css";

import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StarIcon from "@mui/icons-material/Star";

const Slider = SliderModule.default ?? SliderModule;

const offers = [
  { text: "Today's Special", Icon: WhatshotIcon },
  { text: "Free Delivery", Icon: LocalShippingIcon },
  { text: "Chef's Choice", Icon: StarIcon },
  { text: "Offer 60%", Icon: LocalOfferIcon },
  { text: "First Order", Icon: CardGiftcardIcon },
  { text: "New Menu", Icon: RestaurantMenuIcon },
];

export default function SimpleSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
        <h2 className={styles.title}>services</h2>
      <Slider {...settings}>
        {offers.map(({ text, Icon }) => (
          <div key={text} className={styles.slide}>
            <div className={styles.offerItem}>
              <Icon className={styles.offerIcon} />

              <span className={styles.offerText}>{text}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
