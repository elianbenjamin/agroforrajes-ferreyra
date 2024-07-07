import styles from "./Service.module.scss";
import { SeedIcon, CornIcon } from "../../assets/Icons";
import { NavLink } from "react-router-dom";

const Service = () => {
  return (
    <div className={styles.Service} id="service">
      <h1 className={styles.title}>Nuestros Servicios</h1>

      <div className={styles["services-container"]}>
        <NavLink to={"/picado"} className={styles["service"]}>
          <div className={styles["service-title"]}>
            <CornIcon />
            <h2>Picado de FORRAJES</h2>
          </div>

          <p className={styles["service-text"]}>
            Es un proceso fundamental que utiliza maquinaria especializada para
            fragmentar y mejorar la utilidad de los materiales fibrosos,
            contribuyendo a la alimentación eficiente y saludable del ganado en
            la agricultura contemporánea.
          </p>
        </NavLink>

        <NavLink to={"/siembra"} className={styles["service"]}>
          <div className={styles["service-title"]}>
            <SeedIcon />
            <h2>Siembra de PRECISION</h2>
          </div>

          <p className={styles["service-text"]}>
          Proceso importante para la conservación y uso de los alimentos. El objetivo principal es cortar y procesar los forrajes frescos en pequeñas piezas para evitar la putrefacción y permitir su almacenamiento y uso en el futuro.
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Service;
