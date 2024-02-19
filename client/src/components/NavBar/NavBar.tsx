import style from "./navBar.module.scss";
import { useEffect, useState } from "react";
import {
  InstagramIcon,
  LinkedinIcon,
  EmailIcon,
  SandwichMenuIcon,
} from "../../assets/Icons";
import image from "../../assets/images/300.png";
import NavBarButtons from "../NavBarButtons/NavBarButtons";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuSandwichOpen, setMenuSandwichOpen] = useState<boolean>(false);
  const [responsiveButtons, setResponsiveButtons] = useState<boolean>(false);

  useEffect(() => {
    const handleScrol = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScrol);

    return () => {
      removeEventListener("scroll", handleScrol);
    };
  });

  useEffect(() => {
    const handleResize = () => {
      setResponsiveButtons(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
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

          <SandwichMenuIcon onClick={() => {
            setMenuSandwichOpen(true);
          }} />
        </section>

        {!responsiveButtons ? (
          <NavBarButtons
          />
        ) : null}
      </nav>

      {responsiveButtons ? (
        <NavBarButtons
          setMenuSandwichOpen={(boolean) => {
            setMenuSandwichOpen(boolean);
          }}
          menuSandwichOpen={menuSandwichOpen}
        />
      ) : null}
    </>
  );
};

export default NavBar;
