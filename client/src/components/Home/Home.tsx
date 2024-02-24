import style from "./home.module.scss";
import { WhatsappIconGreen, ArrowDown } from "../../assets/Icons";
import { scroller } from "react-scroll";
import Carousel from "../Carousel/Carousel";


const Home = () => {
  const handlePageScroll = () => {
    scroller.scrollTo('service', {
      duration: 1300,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  const whatsappMessage = encodeURIComponent("¡Hola! Estoy interesado en obtener más información sobre los servicios de picado de forraje y siembra que ofrecen. ¿Podrían proporcionarme detalles adicionales y posiblemente programar una consulta? Gracias.");
  

  return (
    <div className={style.Home} id="home">
      <Carousel />

      <div className={style["title-container"]}>
        <h2>- Desde 2006 -</h2>
        <hr />
        <h1>AGROFORRAJES FERREYRA </h1>
        <hr />
        <h2>Calidad Asegurada</h2>
      </div> 

      <a
        className={style["whatsapp-container"]}
        href={`https://wa.me/3329561698?text=${whatsappMessage}`}
        target="_blank"
      >
        <WhatsappIconGreen/>
      </a>

      <a className={style['arrow-container']} onClick={handlePageScroll}>
        <ArrowDown/>
      </a>
    </div>
  );
};

export default Home;
