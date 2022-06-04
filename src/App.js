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
import Shop from "./Pages/Shop/Shop";

function App() {
  return (
    <div className="App">
      <div className="grid wide">
        <Routes>
          <Route
            element={
              <>
                <Navbar />
                <Outlet />
              </>
            }
          >
            <Route path="/coffee_store">
              <Route path="" element={<Homepage />} />
              <Route path="coffee-croissant" element={<CoffeeCroissant />} />
              <Route path="coffee-croissant/" element={<CoffeeCroissant />} />
              <Route path="shop" element={<Shop />} />
            </Route>
            <Route path="/" element={<Homepage />} />
            <Route path="coffee-croissant" element={<CoffeeCroissant />} />
            <Route path="blog" element={<Blog />} />
            <Route path="shop" element={<Shop />} />
          </Route>

          {/* No navbar section */}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
