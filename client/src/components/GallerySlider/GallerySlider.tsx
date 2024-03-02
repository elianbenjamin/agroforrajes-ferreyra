import style from "./gallerySlider.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import FullSizeImage from "../FullSizeImage/FullSizeImage";

interface Props {
  images: string[];
}

const GallerySlider = ({ images }: Props) => {
  const [fullSizeImage, setFullSizeImage] = useState<null | string>(null);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };

  return (
    <>
      <div className={style.SliderContainer}>
        <Slider className={style.Slider} {...settings}>
          {images.map((img, i) => (
            <div
              className={style.imgContainer}
              key={i}
              onClick={() => {
                setFullSizeImage(img);
              }}
            >
              <div>
                <img src={img} />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {fullSizeImage ? <FullSizeImage /> : null}
    </>
  );
};

export default GallerySlider;
