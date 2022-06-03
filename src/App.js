import "./App.css";
import Navbar from "./HomeComponents/Navbar/Navbar";
import Footer from "./HomeComponents/Footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Blog from "./Pages/Blog/Blog";
import Error from "./Pages/Error";
import CoffeeCroissant from "./Pages/DetailPage/DetailProduct/CoffeeCroissant";

function App() {
  return (
    <div className="App">
      <div className="grid wide">
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/coffee_store" element={<Homepage />} />
          <Route path="coffee-croissant" element={<CoffeeCroissant />} />
          <Route
            path="/coffee_store/coffee-croissant"
            element={<CoffeeCroissant />}
          />

          <Route path="blog" element={<Blog />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        <Footer />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
