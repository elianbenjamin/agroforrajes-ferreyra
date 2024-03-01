import styles from "./gallery.module.scss";
import GallerySlider from "../../components/GallerySlider/GallerySlider";
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

const ImageGallery = () => {

  const images: string[] = [
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

  return (
    <div className={styles["image-gallery"]} id="image-gallery">
      <section className={styles["title-container"]}>
        <h1>Galeria</h1>
        <p>
          Conoce nuestro ambiente y como nos manejamos para satisfacer dia a dia
          a nuestros clientes con nuestro producto de alta calidad
        </p>
      </section>

      <GallerySlider images={images} />

    </div>
  );
};

export default ImageGallery;
