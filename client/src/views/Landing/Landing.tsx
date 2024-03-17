import style from "./landing.module.scss";
import Home from "../../components/Home/Home";
import Service from "../../components/Service/Service";
import About from "../../components/About/About";
import ImageGallery from "../ImageGallery/Gallery";
import { useContext, useEffect } from "react";
import { scroller } from "react-scroll";
import Video from "../../components/videobackground/Video";
import { FullSizeImageContext, FullSizeImageContextType } from "../../FullSizeImageContext";

const Landing = () => {
  const { pageId } = useContext(
    FullSizeImageContext
  ) as FullSizeImageContextType;

  useEffect(() => {
    setTimeout(() => {
      scroller.scrollTo(pageId, {
        duration: 1000,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={style.Landing} id="landing">
      <Home />
      <Service />
      <Video />
      <About />
      <ImageGallery />
    </div>
  );
};

export default Landing;
