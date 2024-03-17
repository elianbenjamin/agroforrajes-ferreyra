import style from "./fullSizeImage.module.scss";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FullSizeImageContext, FullSizeImageContextType } from "../../FullSizeImageContext";

const FullSizeImage = () => {
  const { image } = useContext(
    FullSizeImageContext
  ) as FullSizeImageContextType;

  return (
    <div className={style.container}>
      <nav>
        <NavLink to={"/"} className={style["navBar-button"]}>
          ATRAS
        </NavLink>
      </nav>
      <div>
        <img src={image} />
      </div>
    </div>
  );
};

export default FullSizeImage;
