"use client";
import React from "react";
import styles from "./Service.module.scss";

export type ServiceProps = {
  // types...
};

const Service: React.FC<ServiceProps> = ({}) => {
  return (
    <div className={styles.Service} id="service">
      <div className={styles["titulo-container"]}>
        <h1 className={styles.titulo}>Nuestros Servicios</h1>
      </div>

      <div className={styles["container-servicios"]}>
        <div className={styles["container-picado"]}>
          <h2 className={styles.picado}>
            Picado de FORRAJES <br />
            <p className={styles["text-picado"]}>
              Especialización en la confección de comida de calidad para tambos
              y feedlots. Ensilado de maíz, sorgo, cereales de invierno y
              forrajes de primavera, en silo bolsa, banker, torta y autconsumo
            </p>
          </h2>
        </div>

        <div className={styles["container-siembra"]}>
          <h2 className={styles.siembra}>
            Siembra de PRECISION <br />
            <p className={styles["text-siembra"]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae consequatur eius ipsa qui reprehenderit ipsum, fuga id
              illo repellendus consectetur doloremque mollitia obcaecati!
              Tenetur voluptas quae molestias suscipit modi tempore.
            </p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Service;
