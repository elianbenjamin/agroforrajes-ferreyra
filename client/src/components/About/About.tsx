import styles from "./about.module.scss";
import { NavLink } from "react-router-dom";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "../../assets/gallery-images/export";

const About = () => {
  return (
    <div className={styles.About} id="about">
      <section className={styles["left-container"]}>
        <h1>Nuestra Historia</h1>

        <p className={styles.text_on}>
          En 2006-2007, nuestra empresa comenzó con 500 hectáreas de terreno, 5
          camiones incluyendo mercedes 1518 y ford volcadores, y 1 picadora. A
          través de un servicio excepcional que generó un boca a boca positivo,
          experimentamos un crecimiento gradual. En ese entonces, éramos un
          equipo de 7 empleados. Nuestra trayectoria empresarial se centra en el
          picado de forraje, destacándonos por la calidad de nuestro servicio y
          la satisfacción del cliente. A medida que la demanda creció,
          expandimos nuestras operaciones y la capacidad de picado para
          satisfacer las necesidades del mercado.
        </p>

        <NavLink
          to={"/flota"}
          style={{ color: "white", textDecoration: "none" }}
        >
          <div className={styles["flota-button"]}>Nuestra flota</div>
        </NavLink>
      </section>
      <section className={styles["right-container"]}>
        <div>
          <img src={image1} />
        </div>
        <div>
          <img src={image2} />
        </div>
        <div>
          <img src={image3} />
        </div>
        <div>
          <img src={image4} />
        </div>
        <div>
          <img src={image5} />
        </div>
        <div>
          <img src={image6} />
        </div>
      </section>
    </div>
  );
};

export default About;
