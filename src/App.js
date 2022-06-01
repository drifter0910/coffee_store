import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import Detail from "./Components/Detail/Detail";
import Gallery from "./Components/Gallery/Gallery";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Detail />
      <Gallery />
      <Menu />
    </div>
  );
}

export default App;
