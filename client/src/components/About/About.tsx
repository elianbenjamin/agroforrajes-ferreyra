import styles from "./about.module.scss";

const About = () => {
  return (
    <div className={styles.About} id="about">
      <section className={styles["left-container"]}>
        <p>
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
      </section>
      <section className={styles["right-container"]}></section>
    </div>
  );
};

export default About;
