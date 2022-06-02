import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import Detail from "./Components/Detail/Detail";
import Gallery from "./Components/Gallery/Gallery";
import Menu from "./Components/Menu/Menu";
import Guide from "./Components/Guide/Guide";
import Maxim from "./Components/Maxim/Maxim";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailProduct from "./Components/DetailProduct/DetailProduct";

function App() {
  return (
    <div className="App">
      <div className="grid wide">
        <Navbar />
        <Slider />
        <Detail />
        <Gallery />
        <Menu />
        <Guide />
        <Maxim />
        <Footer />
      </div>
    </div>
  );
}

export default App;
