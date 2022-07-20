import { Routes, Route, Outlet } from 'react-router-dom';
import './globalStyles.scss';
import Homepage from './Pages/Home/Homepage';
import Blog from './Pages/Blog/Blog';
import Shop from './Pages/Shop/Shop';
import ShopDetail from './Pages/ShopDetail/ShopDetail';
import ScrollToTop from './ScrollToTop';
import NavMenu from './Pages/Menu/NavMenu';
import Reservation from './Pages/Reservation/Reservation';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { fetchData } from './redux/Shopping/shopping-action';
import Category from './Pages/Category/Category';
import Error from './Pages/Error';
import SearchResult from './Pages/SearchResult/SearchResult';
import blogData from './Data/BlogData';
import AllBlog from './Pages/Blog/AllBlog';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
function App() {
  let dispatch = useDispatch();
  const getDataFromApi = async () => {
    await axios.get('https://62c8f047d9ead251e8b5bcfb.mockapi.io/products').then((response) => {
      dispatch(fetchData(response.data));
      console.log('Fetch data success!');
    });
  };
  useEffect(() => {
    getDataFromApi();
  }, []);
  return (
    <div className="App">
      <div className="grid wide">
        <ScrollToTop>
          <Routes>
            <Route
              element={
                <>
                  <Navbar />
                  <Outlet />
                  <Footer />
                </>
              }
            >
              <Route path="/" element={<Homepage />} />
              <Route path="blog" element={<AllBlog />} />
              <Route path="blog/coffee-croissant" element={<Blog data={blogData[0]} />} />
              <Route path="blog/bakery" element={<Blog data={blogData[1]} />} />
              <Route path="blog/chilling" element={<Blog data={blogData[2]} />} />
              <Route path="blog/barista" element={<Blog data={blogData[3]} />} />
              <Route path="shop" element={<Shop />} />
              <Route path="shop/category/:categoryType" element={<Category />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="reservation" element={<Reservation />} />
              <Route path="shop-detail" element={<ShopDetail />} />
              <Route path="shop/shop-detail/:productId" element={<ShopDetail />} />
              <Route path="cart/shop-detail/:productId" element={<ShopDetail />} />
              <Route path="navmenu" element={<NavMenu />} />
              <Route path="search-result" element={<SearchResult />} />
            </Route>

            {/* No navbar section */}
            <Route path="*" element={<Error />} />
          </Routes>
        </ScrollToTop>
      </div>
    </div>
  );
}

export default App;
