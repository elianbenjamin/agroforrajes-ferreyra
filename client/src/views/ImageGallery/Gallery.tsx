import styles from "./gallery.module.scss";
import { useState } from "react";
import GallerySlider from "../../components/GallerySlider/GallerySlider";
import FullSizeImage from "../../components/FullSizeImage/FullSizeImage";



const ImageGallery = () => {
  const [imageOpen, setImageOpen] = useState<boolean>(false);

  return (
    <div className={styles["image-gallery"]} id="image-gallery">
      <section className={styles["title-container"]}>
        <h1>Galeria</h1>
        <p>
          Conoce nuestro ambiente y como nos manejamos para satisfacer dia a dia
          a nuestros clientes con nuestro producto de alta calidad
        </p>
      </section>

      <GallerySlider />

      {
        imageOpen ? <FullSizeImage/> : null
      }

    </div>
  );
};

export default ImageGallery;
