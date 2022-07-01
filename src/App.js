import { Routes, Route, Outlet } from "react-router-dom";
import "./globalStyles.scss";
import Navbar from "./Pages/Home/HomeComponents/Navbar/Navbar";
import Footer from "./Pages/Home/HomeComponents/Footer/Footer";
import Homepage from "./Pages/Home/Homepage";
import Blog from "./Pages/Blog/Blog";
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
                <Route
                  path="cart/shop-detail/:productId"
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
