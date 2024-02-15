import "./style/App.scss";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import { ErrorPage } from "./components/ErrorPage";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      scroller.scrollTo("home", {
        duration: 400,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }, 1000);
  }, []);

  return (
    <div className="App">
      {pathname === "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
