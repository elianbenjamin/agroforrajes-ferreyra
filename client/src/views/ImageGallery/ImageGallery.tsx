import styles from "./imageGallery.module.scss";
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
  image13,
} from "../../assets/gallery-images/export";
import { useState } from "react";
import { PagingArrow } from "../../assets/Icons";

const images = [
  [image1, image2, image3, image4],
  [image5, image6, image7, image8],
  [image9, image10, image11, image12],
];

const ImageGallery = () => {
  const [actualPage, setActualPage] = useState<number>(0);
  const [imageOn, setImageOn] = useState<boolean>(false);

  const handlePrev = () => {
    setImageOn(false);
    setTimeout(() => {
      actualPage <= 0
        ? setActualPage(images.length - 1)
        : setActualPage(actualPage - 1);
    }, 500);
  };
  const handleNext = () => {
    setImageOn(false);
    setTimeout(() => {
      actualPage < images.length - 1
        ? setActualPage(actualPage + 1)
        : setActualPage(0);
    }, 500);
  };

  return (
    <div className={styles["image-gallery"]} id="image-gallery">
      <section className={styles["title-container"]}>
        <h1>Galeria</h1>
        <p>
          Conoce nuestro ambiente y como nos manejamos para satisfacer dia a dia
          a nuestros clientes con nuestro producto de alta calidad
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles["buttons-container"]}>
          <div className={styles.button} onClick={handlePrev}>
            <PagingArrow style={{ transform: "rotate(180deg)" }} />
          </div>
          <p>
            {" "}
            {actualPage + 1} / {images.length}{" "}
          </p>
          <div className={styles.button} onClick={handleNext}>
            <PagingArrow />
          </div>
        </div>
        <div className={styles.gallery}>
          {images[actualPage].map((img) => (
            <div className={`${styles["image-container"]} ${imageOn ? styles.img_on : ''}`}>
              <img
                src={img}
                className={``}
                onLoad={() => {
                  setImageOn(true);
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ImageGallery;
