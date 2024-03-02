import { NavLink } from "react-router-dom";
import style from "./flota.module.scss";
import { useEffect } from "react";
import { scroller } from "react-scroll";

const Flota = () => {
  useEffect(() => {
    scroller.scrollTo("app", {
      duration: 0,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, []);

  return (
    <div className={style["flota-container"]}>
      <nav className={style["nav-bar"]}>
        <NavLink to={"/"} className={style["navBar-button"]}>
          ATRAS
        </NavLink>
      </nav>

      <h1>Nuestra Flota</h1>

      <section>
        <div className={style.camiones}>
          <h2>Camiones</h2>
          <p>- 3 Mercedes Benz 1634</p>
          <p>- 3 volkswagen 1622</p>
          <p>- 2 Ford Cargo 1722</p>
          <p>- 12 Bateas de 50mt3</p>
          <p>- 2 Carretones de 3 ejes</p>
        </div>
        <div className={style.picadoras}>
          <h2>Picadoras</h2>
          <p>- 1 Claas Jaguar 950 con cabezal Orbis de 8 surcos</p>
          <p>- 1 Claas Jaguar 980 con cabezal Orbis de 12 surcos</p>
        </div>
        <div className={style.tractores}>
          <h2>Tractores y Otras maquinarias</h2>
          <p>- John Deere 9410 de 375 hp, 25tn., espejo de 5 mts.</p>
          <p>- John Deere 9320 de 375 hp, 25tn., espejo de 5 mts.</p>
          <p>- 9200 de 330 hp, 25tn., espejo de 5 mts.</p>
          <p>- Pauny 500 de 200 hp, con espejo de 4 mts.</p>
          <p>- 2 New Holland T7 245</p>
          <p>- Case 125, modelo 2010</p>
          <p>- Embolsadora M 9080 Implecor</p>
          <p>- Embolsadora M 9070 Implecor</p>
        </div>
        <div className={style.varios}>
          <h2>Varios</h2>
          <p>- 2 cisternas p/ combustible de 5.0000 Lts. c/u</p>
          <p>- 1 Cisterna de 9.000 Lts.</p>
          <p>- 2 Carros Taller </p>
          <p>- 7 Casillas rurales</p>
          <p>- 4 Pick Up 4x4</p>
        </div>
      </section>
    </div>
  );
};

export default Flota;
