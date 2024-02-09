import "./style/App.scss";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import { Footer } from "./components/Footer";
import Service from "./views/Service/Service";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Service />} />
        <Route path="/" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
