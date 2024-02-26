import style from "./landing.module.scss";
import Home from "../../components/Home/Home";
import Service from "../../components/Service/Service";
import About from "../../components/About/About";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useEffect } from "react";
import { scroller } from "react-scroll";

const Landing = () => {
  
  useEffect(() => {
    scroller.scrollTo("app", {
      duration: 0,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    
  }, [])

  return (
    <div className={style.Landing} id="landing">
      <Home />
      <Service />
      <About />
      <ImageGallery />
    </div>
  );
};

export default Landing;
