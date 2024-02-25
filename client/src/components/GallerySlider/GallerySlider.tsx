import style from "./gallerySlider.module.scss";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
} from "../../assets/gallery-images/export";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode } from "react";

const GallerySlider = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1043,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ],
  };

  return (
    <div className={style.SliderContainer}>
      <Slider className={style.Slider} {...settings}>
        {images.map((img) => (
          <div className={style.imgContainer}>
            <div>
              <img src={img} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GallerySlider;
