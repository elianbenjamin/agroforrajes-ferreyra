import "./style/App.scss";
import NavBar from "./components/NavBar/NavBar";
/* import Home from "./components/Home/Home";
import { Footer } from "./components/Footer";
import Service from "./views/Service/Service"; */
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import { About } from "./components/About";
import { useEffect } from "react";
import { scroller } from "react-scroll";


function App() {
  useEffect(() => {
    setTimeout(()=>{
      scroller.scrollTo('home', {
        duration: 400,
        delay: 0,
        smooth: 'easeInOutQuart'
      })

    },1000)
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
