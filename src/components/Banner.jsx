import Slider from "react-slick";
import { images } from "../assets/heroData";

const Banner = () => {
  var settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    accessibility: false,
    swipe: false,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {images.map((items, index) => {
        return (
          <div className="imageContainer" key={index}>
            <img src={items.image} alt={items.title} className="heroImg" />
            <div className="imageText">
              <h1 className="textImage">{items.title}</h1>
              <div className="subItems">
                {items.subItems &&
                  items.subItems.map((item, index) => {
                    return (
                      <div className="subItem" key={index}>
                        <img src={item.image} alt={item.title} />
                        <h5>{item.title}</h5>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Banner;
