import style from "./navBar.module.scss";
import { useEffect, useState } from "react";
import {
  InstagramIcon,
  LinkedinIcon,
  EmailIcon,
  CloseIcon,
  SandwichMenuIcon,
} from "../../assets/Icons";
import image from "../../assets/images/300.png";
import { scroller } from "react-scroll";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuSandwichOpen, setMenuSandwichOpen] = useState<boolean>(false);

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

  useEffect(() => {
    const handleScrol = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScrol);

    return () => {
      removeEventListener("scroll", handleScrol);
    };
  });

  return (
    <nav
      className={`${style.navBar} ${isScrolled ? style.navBar_scrolled : ""}`}
    >
      <section className={style["navBar-top"]}>
        <EmailIcon className={style["email-icon"]} />
        <p>
          {" "}
          agroforrajesferreyra<p>@</p>gmail.com
        </p>

        <div className={style["icons-container"]}>
          <a
            className={style["instagram-icon-container"]}
            href="https://www.instagram.com/agroforrajesferreyra/"
            target="_blank"
          >
            <InstagramIcon className={style["instagram-icon"]} />
          </a>
          <a
            className={style["linkedin-icon-container"]}
            href="https://www.linkedin.com/in/agroforrajes-ferreyra/"
            target="_blank"
          >
            <LinkedinIcon className={style["linkedin-icon"]} />
          </a>
        </div>
      </section>

      <section className={style["navBar-bottom"]}>
        <div className={style["title-container"]}>
          <img src={image} className={style.image} />

          <div className={style.title}>
            <h1>AGROFORRAJES FERREYRA S.R.L</h1>
            <p>PICADO DE FORRAJES</p>
          </div>
        </div>

        {menuSandwichOpen ? (
          <CloseIcon onClick={() => setMenuSandwichOpen(false)} />
        ) : (
          <SandwichMenuIcon onClick={() => setMenuSandwichOpen(true)} />
        )}
      </section>

      <div
        className={`${style["buttons-container"]} ${menuSandwichOpen ? style["buttons-container_open"] : ""}`}
      >
        <div
          className={style.button}
          onClick={() => {
            handleServiceScroll("home");
            setMenuSandwichOpen(false);
          }}
        >
          INICIO
        </div>
        <div
          className={style.button}
          onClick={() => {
            handleServiceScroll("service");
            setMenuSandwichOpen(false);
          }}
        >
          SERVICIOS
        </div>
        <div
          className={style.button}
          onClick={() => {
            handleServiceScroll("about");
            setMenuSandwichOpen(false);
          }}
        >
          HISTORIA
        </div>
        <div
          className={style.button}
          onClick={() => {
            handleServiceScroll("image-gallery");
            setMenuSandwichOpen(false);
          }}
        >
          GALERIA
        </div>
        <div
          className={style.button}
          onClick={() => {
            handleServiceScroll("contact");
            setMenuSandwichOpen(false);
          }}
        >
          CONTACTANOS
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
