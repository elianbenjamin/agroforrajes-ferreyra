import style from "./equipment.module.scss";
import { createPortal } from "react-dom";

const Equipment = () => {
  const body = document.querySelector("body") as Element;

  return <>{createPortal(
  <div className={style.equipment}>

  </div>, body)}</>;
};

export default Equipment;
