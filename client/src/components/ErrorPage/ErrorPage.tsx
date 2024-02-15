import { NavLink } from "react-router-dom";
import { Carousel } from "../Carousel";
import styles from "./errorPage.module.scss";

const ErrorPage = () => {
  return (
    <div className={styles["error-page"]}>
      <div className={styles["container"]}>

        <h2>- Error 404 -</h2>
        <hr />
        <h1> PAGINA NO ENCONTRADA </h1>
        <hr />
        <NavLink to={'/'}>Volver al inicio</NavLink>
      </div>

      <Carousel />
    </div>
  );
};

export default ErrorPage;
