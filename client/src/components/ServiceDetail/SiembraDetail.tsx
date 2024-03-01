import style from "./siembraDetail.module.scss";
import { NavLink } from "react-router-dom";
import { scroller } from "react-scroll";
import { useEffect } from "react";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
} from "../../assets/gallery-images/export";
import { WhatsappIconGreen } from "../../assets/Icons";
import GallerySlider from "../GallerySlider/GallerySlider";

const whatsappMessage = encodeURIComponent(
  "Hola, estoy interesado en el servicio de siembra de precisión de Agroforrajes Ferreyra. ¿Podemos hablar más sobre cómo puede beneficiar a mis cultivos?"
);

export const SiembraDetail = () => {
  useEffect(() => {
    scroller.scrollTo("app", {
      duration: 0,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, []);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  return (
    <div className={style["Service-detail"]}>
      <nav className={style["nav-bar"]}>
        <NavLink to={"/"} className={style["navBar-button"]}>
          ATRAS
        </NavLink>
      </nav>

      <h1>Siembra de Precisión de Grano Grueso</h1>

      <section className={style.text}>
        <p>
          En Agroforrajes Ferreyra, somos pioneros en la tecnología de siembra
          de precisión para granos gruesos. Nuestro enfoque innovador y nuestra
          dedicación a la excelencia agrícola nos ha convertido en líderes en la
          implementación de prácticas de siembra avanzadas.
        </p>
        <p>
          Nuestros servicios de siembra de precisión de grano grueso están
          diseñados para optimizar la productividad de tus cultivos, maximizando
          el rendimiento y minimizando el desperdicio. Utilizando tecnologías de
          vanguardia y equipos especializados, garantizamos una siembra precisa
          y uniforme en cada etapa del proceso.
        </p>
        <p>
          En Agroforrajes Ferreyra, comprendemos la importancia de la precisión
          en la siembra de granos gruesos para lograr resultados sobresalientes.
          Nuestro equipo altamente capacitado y nuestros sistemas de monitoreo
          avanzados nos permiten adaptar nuestras técnicas de siembra a las
          condiciones específicas de tu terreno, maximizando el potencial de tus
          cultivos.
        </p>
        <p>
          Además, nos comprometemos a proporcionar un servicio integral que
          incluye asesoramiento experto y seguimiento continuo para garantizar
          que tus cultivos alcancen su máximo desarrollo. Nuestra pasión por la
          agricultura sostenible impulsa cada aspecto de nuestro trabajo,
          asegurando que nuestras prácticas de siembra minimicen el impacto
          ambiental y fomenten la salud y la biodiversidad del suelo.
        </p>
        <p>
          Contacta con nosotros hoy para descubrir cómo nuestras soluciones de
          siembra de precisión de grano grueso pueden elevar la productividad y
          la rentabilidad de tu operación agrícola. Estamos comprometidos
          contigo en la búsqueda de mejoras continuas y resultados
          excepcionales.
        </p>
      </section>
      {/* <section className={style["image-container"]}>
        {images.map((img) => (
          <div>
            <img src={img} />
          </div>
        ))}
      </section> */}

      <GallerySlider images={images} />

      <a
        className={style["whatsapp-container"]}
        href={`https://wa.me/3329561698?text=${whatsappMessage}`}
        target="_blank"
      >
        <WhatsappIconGreen />
      </a>
    </div>
  );
};

export default SiembraDetail;
