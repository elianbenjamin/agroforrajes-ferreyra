import style from "./picadoDetail.module.scss";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { scroller } from "react-scroll";
import { WhatsappIconGreen } from "../../assets/Icons";
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
import GallerySlider from "../GallerySlider/GallerySlider";

const whatsappMessage = encodeURIComponent(
  "Hola, estoy interesado en el servicio de Picado de Agroforrajes Ferreyra. ¿Podemos hablar más sobre cómo puede beneficiar a mis cultivos?"
);
const PicadoDetail = () => {
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

      <h1>Picado de FORRAJES</h1>

      <section className={style.text}>
        <p>
          En Agroforrajes Ferreyra, nos enorgullecemos de ofrecer un servicio
          integral de picado de forrajes para satisfacer las necesidades de
          nuestros clientes en la industria agropecuaria. Ya sea que necesites
          forraje para alimentar tu ganado, mejorar la calidad de tu suelo o
          para cualquier otro propósito, nuestro equipo altamente capacitado y
          nuestras modernas máquinas están listos para brindarte un servicio
          confiable y eficiente.
        </p>
        <p>
          Nuestro proceso de picado de forrajes se lleva a cabo con la
          maquinaria más avanzada, asegurando un corte preciso y uniforme que
          cumple con los estándares más exigentes de calidad. Además, nos
          comprometemos a ofrecer un servicio personalizado, adaptado a las
          necesidades específicas de cada cliente.
        </p>
        <p>
          Desde la recolección del forraje hasta la entrega en tu localidad, nos
          encargamos de cada paso del proceso para garantizar que recibas un
          producto de la más alta calidad. Nuestra experiencia en el sector nos
          permite ofrecer asesoramiento experto para ayudarte a optimizar el
          rendimiento de tus cultivos y la nutrición de tu ganado.
        </p>
        <p>
          En Agroforrajes Ferreyra, nos esforzamos por mantenernos a la
          vanguardia de las prácticas sostenibles, asegurando que nuestros
          servicios de picado de forrajes tengan un impacto positivo tanto en el
          medio ambiente como en tu negocio.
        </p>
        <p>
          Contáctanos hoy para descubrir cómo nuestros servicios de picado de
          forrajes pueden beneficiar tu operación agropecuaria. Estamos
          comprometidos a proporcionarte soluciones efectivas y a establecer
          relaciones comerciales a largo plazo basadas en la confianza y la
          calidad.
        </p>
      </section>

      {/* <section className={style["image-container"]}>
        {images.map((img) => (
          <div>
            <img src={img} />
          </div>
        ))}
      </section> */}
      <GallerySlider images={images}/>

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

export default PicadoDetail;
