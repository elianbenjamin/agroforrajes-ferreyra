import style from './navBar.module.scss';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { InstagramIcon, LinkedinIcon } from '../../assets/Icons';
import image from '../../assets/images/300.png'

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrol = () => {
      setIsScrolled(window.scrollY > 100);
    }
    window.addEventListener('scroll', handleScrol);

    return () => {
      removeEventListener('scroll', handleScrol);
    }
  })

  return (
    <nav className={`${style.navBar} ${isScrolled ? style.navBar_scrolled : ''}`}>
        <div className={style["navBar-top"]}>
          <p>✉️ agroforrajesferreyra@gmail.com</p>

          <div className={style["icons-container"]}>
            <InstagramIcon className={style["instagram-icon"]} />
            <LinkedinIcon className={style["linkedin-icon"]} />
          </div>
        </div>

        <div className={style["navBar-bottom"]}>
          <img src={image} className={style.image} />

          <div className={style["title-container"]}>
            <h1>AGROFORRAJES FERREYRA S.R.L</h1>
            <p>PICADO DE FORRAJES</p>
          </div>

          <div className={style["buttons-container"]}>
            <NavLink className={style.button}>
              INICIO <div className={style["button-line"]}></div>{" "}
            </NavLink>
            <NavLink className={style.button}>
              SERVICIOS <div className={style["button-line"]}></div>
            </NavLink>
            <NavLink className={style.button}>
              HISTORIA <div className={style["button-line"]}></div>
            </NavLink>
            <NavLink className={style.button}>
              GALERIA <div className={style["button-line"]}></div>
            </NavLink>
            <NavLink className={style.button}>
              CONTACTANOS <div className={style["button-line"]}></div>
            </NavLink>
          </div>
        </div>
      </nav>
  )
}

export default NavBar;