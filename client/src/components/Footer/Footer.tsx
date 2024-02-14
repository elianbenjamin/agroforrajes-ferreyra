import styles from "./footer.module.scss";
import {
  InstagramIcon,
  LinkedinIcon,
  MessageIcon,
  WhatsappIconDark,
} from "../../assets/Icons";
import { LocationIcon } from "../../assets/Icons";

const Footer = () => {
  return (
    <div className={styles.Footer} id="contact">
      <section className={styles.container1}>
        <p>
          <LocationIcon />
          Justo Daract, San Luis.
        </p>
        <iframe
          style={{boxShadow: '0px 0px 25px black', borderRadius: '5px', border: 'none'}}
          width="350"
          height="300"
          src="https://maps.google.com/maps?width=350&amp;height=300&amp;hl=en&amp;q=%20+(-33.844632,%20-65.172274)&amp;t=h&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </section>

      <section className={styles.container2}>
        <div className={styles["title-container"]}>
          <h1 className={styles.title}>Mantengámonos en contacto</h1>

          <p className={styles.subtitle}>
            Estamos disponibles para responder a sus consultas <br /> sobre
            cualquiera de nuestros servicios.{" "}
          </p>
        </div>

        <p className={styles["doubts-text"]}>
          <MessageIcon />
          Háblenos de sus dudas
        </p>

        <div className={styles["icons-container"]}>
          <InstagramIcon />
          <LinkedinIcon />
          <WhatsappIconDark />
        </div>

        <p>Copyright © 2006-2024 Agroforrajes Ferreyra S.R.L</p>
      </section>

      <section className={styles.container3}>
        <h1 className={styles["contact-title"]}>Contactos:</h1>
        <p className={styles["contact-item"]}>
          Francisco Ferreyra tel: 3328732467
        </p>
        <p className={styles["contact-item"]}>
          Carlos Ferreyra tel: 3328732467
        </p>
        <p className={styles["contact-item"]}>
          Adrian Ferreyra tel: 3328732467
        </p>
        <p className={styles["contact-item"]}>
          Fernando Ferreyra tel: 3328732467
        </p>
      </section>
    </div>
  );
};

export default Footer;
