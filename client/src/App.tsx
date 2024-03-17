import "./style/App.scss";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import PicadoDetail from "./components/ServiceDetail/PicadoDetail";
import SiembraDetail from "./components/ServiceDetail/SiembraDetail";
import Flota from "./components/Flota/Flota";
import FullSizeImage from "./components/FullSizeImage/FullSizeImage";

function App() {
  const { pathname } = useLocation();
  

  return (
    <div className="App" id="app">
      {pathname === "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/picado" element={<PicadoDetail />} />
        <Route path="/siembra" element={<SiembraDetail />} />
        <Route path="/flota" element={<Flota />} />
        <Route path="*" element={<ErrorPage />} />

        <Route path="/fullsize-image" element={<FullSizeImage />} />
      </Routes>

      {pathname !== "/fullsize-image" && <Footer />}
    </div>
  );
}

export default App;
