import style from "./home.module.scss";
import { WhatsappIconGreen, ArrowDown } from "../../assets/Icons";
import { scroller } from "react-scroll";


const Home = () => {
  const handlePageScroll = () => {
    scroller.scrollTo('service', {
      duration: 1300,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  

  return (
    <div className={style.Home} id="home">
      <div className={style["title-container"]}>
        <h2>- Desde 2006 -</h2>
        <hr />
        <h1>AGROFORRAJES FERREYRA </h1>
        <hr />
        <h2>Calidad Asegurada</h2>
      </div>

      <a
        className={style["whatsapp-container"]}
        href="https://wa.me/3329561698"
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
