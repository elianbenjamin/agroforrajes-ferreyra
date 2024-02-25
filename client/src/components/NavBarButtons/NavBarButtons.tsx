import { scroller } from "react-scroll";
import style from "./navBarButtons.module.scss";
import { CloseIcon } from "../../assets/Icons";

interface Props {
  setMenuSandwichOpen?: (boolean: boolean) => void;
  menuSandwichOpen?: boolean;
}

const NavBarButtons = ({ setMenuSandwichOpen, menuSandwichOpen }: Props) => {
  const handleScroll = (target: string) => {

    setTimeout(() => {
      scroller.scrollTo(target, {
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
          handleScroll("home");
          if (setMenuSandwichOpen) setMenuSandwichOpen(false);
          console.log('si')
        }}
      >
        INICIO
      </div>
      <div
        className={style.button}
        onClick={() => {
          handleScroll("service");
          if (setMenuSandwichOpen) setMenuSandwichOpen(false);
        }}
      >
        SERVICIOS
      </div>
      <div
        className={style.button}
        onClick={() => {
          handleScroll("about");
          if (setMenuSandwichOpen) setMenuSandwichOpen(false);
        }}
      >
        HISTORIA
      </div>
      <div
        className={style.button}
        onClick={() => {
          handleScroll("image-gallery");
          if (setMenuSandwichOpen) setMenuSandwichOpen(false);
        }}
      >
        GALERIA
      </div>
      <div
        className={style.button}
        onClick={() => {
          handleScroll("contact");
          if (setMenuSandwichOpen) setMenuSandwichOpen(false);
        }}
      >
        CONTACTANOS
      </div>
    </div>
  );
};

export default NavBarButtons;
