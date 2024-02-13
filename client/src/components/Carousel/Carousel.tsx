import styles from "./Carousel.module.scss";
import { useEffect, useState } from "react";
import image1 from "../../assets/carouselImages/backgroundImage.jpg";
import image2 from "../../assets/carouselImages/dosPicadoras.jpeg";
import image3 from "../../assets/carouselImages/picadoAmanecer.jpeg";
import image4 from "../../assets/carouselImages/tractor.jpeg";

const Carousel = () => {
  const images = [image1, image2, image3, image4];
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [on, setOn] = useState(false);

  const selectNewImage = (images: string[], next = true) => {
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
        ? selectedIndex - 1
        : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const next = () => {
    setOn(false);
    setTimeout(() => {
      selectNewImage(images);
      setOn(true);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className={styles.carousel}>
      <img src={selectedImage} onLoad={() => {setOn(true)}} className={on ? styles.img_on : ''}/>
    </div>
  );
};

export default Carousel;
