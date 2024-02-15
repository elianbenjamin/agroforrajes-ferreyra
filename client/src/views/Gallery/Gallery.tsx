import styles from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <div className={styles.gallery} id="gallery">
      <div className={styles["title-container"]}>
        <h1>Galeria</h1>
        <p>
          Conoce nuestro ambiente y como nos manejamos para satisfacer dia a dia
          a nuestros clientes con nuestro producto de alta calidad
        </p>
      </div>

      <div></div>
    </div>
  );
};

export default Gallery;
