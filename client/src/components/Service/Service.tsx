import styles from "./Service.module.scss";
import { SeedIcon, CornIcon } from "../../assets/Icons";
import { Link } from "react-scroll";
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
            La siembra de precisión de grano grueso utiliza tecnologías
            avanzadas para personalizar y optimizar el proceso de siembra,
            mejorando la eficiencia y maximizando el rendimiento de los cultivos
            de grano grueso en la agricultura moderna.
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Service;
