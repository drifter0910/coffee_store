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
import ShopDetail from "./Pages/ShopDetail/ShopDetail";
import ScrollToTop from "./ScrollToTop";
import NavMenu from "./Pages/Menu/NavMenu";
import Reservation from "./Pages/Reservation/Reservation";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="grid wide">
          <ScrollToTop>
            <Routes>
              <Route
                element={
                  <>
                    <Navbar />
                    <Outlet />
                  </>
                }
              >
                {/* <Route path="/coffee_store">
                <Route path="" element={<Homepage />} />
                <Route path="navmenu" element={<NavMenu />} />
                <Route path="reservation" element={<Reservation />} />

                <Route path="coffee-croissant" element={<CoffeeCroissant />} />
                <Route path="shop" element={<Shop />} />
                <Route
                  path="shop/shop-detail/:productId"
                  element={<ShopDetail />}
                />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
              </Route> */}
                <Route path="/" element={<Homepage />} />
                <Route path="coffee-croissant" element={<CoffeeCroissant />} />
                <Route path="blog" element={<Blog />} />
                <Route path="shop" element={<Shop />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="reservation" element={<Reservation />} />
                <Route path="shop-detail" element={<ShopDetail />} />
                <Route
                  path="shop/shop-detail/:productId"
                  element={<ShopDetail />}
                />
                <Route path="navmenu" element={<NavMenu />} />
              </Route>

              {/* No navbar section */}
            </Routes>
            <Footer />
          </ScrollToTop>
        </div>
      </div>
    </Provider>
  );
}

export default App;
