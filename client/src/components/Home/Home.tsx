import style from "./home.module.scss";

const Home = () => {
  return (
    <div className={style.Home}>


      <div className={style['title-container']}>
        <h2>- Desde 2006 -</h2>
        <hr />
        <h1>AGROFORRAJES FERREYRA </h1>
        <hr />
        <h2>Calidad Asegurada</h2>
      </div>
    </div>
  );
};

export default Home;
