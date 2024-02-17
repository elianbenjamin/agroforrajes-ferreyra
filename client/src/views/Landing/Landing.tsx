import style from "./landing.module.scss";
import { Footer } from "../../components/Footer";
import Home from "../../components/Home/Home";
import { Service } from "../../components/Service";
import { About } from "../../components/About";
import { Gallery } from "../ImageGallery";

const Landing = () => {
  return (
    <div className={style.Landing}>
      <Home />
      <Service />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Landing;
