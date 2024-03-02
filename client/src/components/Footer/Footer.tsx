import styles from "./footer.module.scss";
import {
  InstagramIcon,
  LinkedinIcon,
  MessageIcon,
  WhatsappIconDark,
} from "../../assets/Icons";
import { LocationIcon } from "../../assets/Icons";

const whatsappMessage = encodeURIComponent(
  "¡Hola! Estoy interesado en obtener más información sobre los servicios de picado de forraje y siembra que ofrecen. ¿Podrían proporcionarme detalles adicionales y posiblemente programar una consulta? Gracias."
);

const Footer = () => {
  return (
    <div className={styles.Footer} id="contact">
      <section className={styles.container1}>
        <p>
          <LocationIcon />
          Justo Daract, San Luis.
        </p>
        <iframe
          className={styles.map}
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
          <a style={{color: 'white'}}
            href="https://www.instagram.com/agroforrajesferreyra/"
            target="_blank"
           
          >
            <InstagramIcon />
          </a>
          <a style={{color: 'white'}}
            href="https://www.linkedin.com/in/agroforrajes-ferreyra/"
            target="_blank"
          >
            <LinkedinIcon />
          </a>
          <a style={{color: 'white'}}
            href={`https://wa.me/3329561698?text=${whatsappMessage}`}
            target="_blank"
          >
            <WhatsappIconDark />
          </a>
        </div>

        <p className={styles.copyright}>
          Copyright © 2006-2024 Agroforrajes Ferreyra S.R.L
        </p>
      </section>

      <section className={styles.container3}>
        <h1 className={styles["contact-title"]}>Contactos:</h1>

        <div>
          <p className={styles["contact-name"]}>Francisco Ferreyra tel:</p>
          <p className={styles["contact-number"]}>3329 56-1698</p>
        </div>
        <div>
          <p className={styles["contact-name"]}>Carlos Ferreyra tel:</p>
          <p className={styles["contact-number"]}>3329 62-9247</p>
        </div>
        <div>
          <p className={styles["contact-name"]}>Adrian Ferreyra tel:</p>
          <p className={styles["contact-number"]}>3329 56-1687</p>
        </div>
        <div>
          <p className={styles["contact-name"]}>Fernando Ferreyra tel:</p>
          <p className={styles["contact-number"]}>3329 62-9242</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
