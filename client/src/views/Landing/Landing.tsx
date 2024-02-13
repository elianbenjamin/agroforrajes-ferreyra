import style from "./landing.module.scss";
import { Footer } from "../../components/Footer";
import Home from "../../components/Home/Home";
import { Service } from "../../components/Service";

const Landing = () => {
  return (
    <div className={style.Landing}>
      <Home />
      <Service />
      <Footer />
    </div>
  );
};

export default Landing;
