import style from "./navBar.module.scss";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { InstagramIcon, LinkedinIcon, EmailIcon } from "../../assets/Icons";
import image from "../../assets/images/300.png";
import { scroller } from "react-scroll";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleServiceScroll = (target: string) => {
    const id: string = target;
   
    setTimeout(() => {
      scroller.scrollTo(id, {
        duration: 1300,
        delay: 0,
        smooth: 'easeInOutQuart'
      })
    }, 0)
  }

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
      <div className={style["navBar-top"]}>
        <EmailIcon className={style["email-icon"]} />
        <p>
          {" "}
          agroforrajesferreyra<p>@</p>gmail.com
        </p>

        <div className={style["icons-container"]}>
          <a 
            className={style['instagram-icon-container']}
            href="https://www.instagram.com/agroforrajesferreyra/"
            target="_blank"
          >
            <InstagramIcon className={style["instagram-icon"]} />
          </a>
          <a
            className={style['linkedin-icon-container']}
            href="https://www.linkedin.com/in/agroforrajes-ferreyra/"
            target="_blank"
          >
            <LinkedinIcon className={style["linkedin-icon"]} />
          </a>
        </div>
      </div>

      <div className={style["navBar-bottom"]}>
        <img src={image} className={style.image} />

        <div className={style["title-container"]}>
          <h1>AGROFORRAJES FERREYRA S.R.L</h1>
          <p>PICADO DE FORRAJES</p>
        </div>

        <div className={style["buttons-container"]}>
          <NavLink to={"/"} className={style.button} onClick={() => {handleServiceScroll('home')}}>
            INICIO <div className={style["button-line"]}></div>
          </NavLink>
          <NavLink to={"/"} className={style.button} onClick={() => {handleServiceScroll('service')}}>
            SERVICIOS <div className={style["button-line"]}></div>
          </NavLink>
          <NavLink to={"/about"} className={style.button}>
            HISTORIA <div className={style["button-line"]}></div>
          </NavLink>
          <NavLink to={"/gallery"} className={style.button}>
            GALERIA <div className={style["button-line"]}></div>
          </NavLink>
          <NavLink to={"/contact"} className={style.button}>
            CONTACTANOS <div className={style["button-line"]}></div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
