import style from "./landing.module.scss";
import Home from "../../components/Home/Home";
import { Service } from "../../components/Service";
import { About } from "../../components/About";
import { Gallery } from "../ImageGallery";
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
    <div className={style.Landing}>
      <Home />
      <Service />
      <About />
      <Gallery />
    </div>
  );
};

export default Landing;
