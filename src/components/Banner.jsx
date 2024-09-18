import Slider from "react-slick";
import { images } from "../assets/heroData";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  var settings = {
    infinite: true,
    speed: 1000,
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

  useEffect(() => {
    async function getBannerProducts() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER}/api/v1/products`,
          {
            params: {
              banner: true,
            },
          }
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <Slider {...settings}>
      {images.map((items, index) => {
        return (
          <div className="imageContainer" key={index}>
            <img src={items.image} alt={items.title} className="heroImg" />

            <div className="imageText">
              <h1 className="textImage">{items.title}</h1>
              <Link
                to="/product"
                className="bg-red-600 mt-4 px-4 py-2 w-[200px] flex justify-center items-center rounded-full  text-white font-semibold shadow-sm shadow-red-950 border border-violet-100 bannerButton hover:bg-white hover:text-red-600"
              >
                View Products
              </Link>
              {/* <div className="subItems">
                {items.subItems &&
                  items.subItems.map((item, index) => {
                    return (
                      <div className="subItem" key={index}>
                        <img src={item.image} alt={item.title} />
                        <h5>{item.title}</h5>
                      </div>
                    );
                  })}
              </div> */}
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Banner;
