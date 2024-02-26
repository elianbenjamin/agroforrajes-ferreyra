import { useState } from "react";
import styles from "./about.module.scss";
import Equipment from "../Equipment/Equipment";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "../../assets/gallery-images/export";
import { createPortal } from "react-dom";
import { Element } from "react-scroll";

const About = () => {
  const [openFlota, setOpenFlota] = useState<boolean>(false);
  const [textOn, setTextOn] = useState<boolean>(true);

  const handleClick = () => {
    setTextOn(false);
    setTimeout(() => {
      setOpenFlota(!openFlota);
      setTextOn(true);
    }, 500);
  };

  return (
    <Element name="about">
      <div className={styles.About} id="about">
        <section className={styles["left-container"]}>
          <h1>Nuestra Historia</h1>

          {openFlota ? (
            <p className={textOn ? styles.text_on : ""}>
              En 2006-2007, nuestra empresa comenzó con 500 hectáreas de
              terreno, 5 camiones incluyendo mercedes 1518 y ford volcadores, y
              1 picadora. A través de un servicio excepcional que generó un boca
              a boca positivo, experimentamos un crecimiento gradual. En ese
              entonces, éramos un equipo de 7 empleados. Nuestra trayectoria
              empresarial se centra en el picado de forraje, destacándonos por
              la calidad de nuestro servicio y la satisfacción del cliente. A
              medida que la demanda creció, expandimos nuestras operaciones y la
              capacidad de picado para satisfacer las necesidades del mercado.
            </p>
          ) : (
            <p className={textOn ? styles.text_on : ""}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
              repellendus. Velit explicabo ea nisi eligendi assumenda sapiente
              iure cumque harum placeat! Dolorum, aliquid. Sequi sapiente veniam
              nesciunt ad quasi reprehenderit. Este es el texto de la flota
              donde se describen los elementos utilizados en el proceso de
              agroforrajeeeeeee texto de flotaaaaa sisisi flota flota flota
              textooo jajajajaja texto de flotaaaaaaaaaaaaaaa
            </p>
          )}

          <div className={styles["flota-button"]} onClick={handleClick}>
            Nuestra flota
          </div>

          {/* {openModal ? <Equipment /> : null} */}
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
    </Element>
  );
};

export default About;
