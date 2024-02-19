import { scroller } from "react-scroll";
import style from "./navBarButtons.module.scss";
import { CloseIcon } from "../../assets/Icons";
import { useEffect } from "react";

interface Props {
  setMenuSandwichOpen?: (boolean: boolean) => void;
  menuSandwichOpen?: boolean;
}

const NavBarButtons = ({ setMenuSandwichOpen, menuSandwichOpen }: Props) => {
  const handleServiceScroll = (target: string) => {
    const id: string = target;

    setTimeout(() => {
      scroller.scrollTo(id, {
        duration: 1300,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }, 0);
  };

  return (
    <div
      className={`${style["buttons-container"]} ${menuSandwichOpen ? style["buttons-container_open"] : ""}`}
    >
      {setMenuSandwichOpen ? (
        <CloseIcon onClick={() => setMenuSandwichOpen(false)} />
      ) : null}

      <div
        className={style.button}
        onClick={() => {
          handleServiceScroll("home");
          if (setMenuSandwichOpen) setMenuSandwichOpen(false);
        }}
      >
        INICIO
      </div>
      <div
        className={style.button}
        onClick={() => {
          handleServiceScroll("service");
          if (setMenuSandwichOpen) setMenuSandwichOpen(false);
        }}
      >
        SERVICIOS
      </div>
      <div
        className={style.button}
        onClick={() => {
          handleServiceScroll("about");
          if (setMenuSandwichOpen) setMenuSandwichOpen(false);
        }}
      >
        HISTORIA
      </div>
      <div
        className={style.button}
        onClick={() => {
          handleServiceScroll("image-gallery");
          if (setMenuSandwichOpen) setMenuSandwichOpen(false);
        }}
      >
        GALERIA
      </div>
      <div
        className={style.button}
        onClick={() => {
          handleServiceScroll("contact");
          if (setMenuSandwichOpen) setMenuSandwichOpen(false);
        }}
      >
        CONTACTANOS
      </div>
    </div>
  );
};

export default NavBarButtons;
