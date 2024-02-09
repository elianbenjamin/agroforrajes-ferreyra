import style from "./home.module.scss";
import { WhatsappIconGreen, ArrowDown } from "../../assets/Icons";

const Home = () => {
  return (
    <div className={style.Home}>
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
        <WhatsappIconGreen className={style.icon} />
      </a>

      <a className={style['arrow-container']}>
        <ArrowDown className={style.icon} />
      </a>
    </div>
  );
};

export default Home;
