import React, { FC, useEffect, useState } from 'react';
import '../Shop/Shop.scss';
import topdata from '../../Data/TopProduct';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { Select, Spin } from 'antd';
import 'antd/dist/antd.min.css';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import queryString from 'query-string';
interface props {
  products: Array<any>;
}
interface PageState {
  p: Number;
  l: Number;
  sortBy: String;
  order: String;
  category: String;
}
const ShopResult: FC<props> = ({ products }) => {
  let location = useLocation();
  let query = location.search;
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [pageState, setPageState] = useState<PageState>({
    p: 1,
    l: 12,
    sortBy: '',
    order: '',
    category: '',
  });
  const stringified = queryString.stringify(pageState);
  const [item, setItem] = useState([]);
  const totalResult = item.length;
  const [totalPage, setTotalPage] = useState<any>();
  const { Option } = Select;
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://62c8f047d9ead251e8b5bcfb.mockapi.io/products${query}&${stringified}`
      );
      const data = await res.data;
      let totalPageCurrent = Math.floor(products.length / Number(pageState.l));
      setTotalPage(totalPageCurrent);
      setIsLoading(false);
      setItem(data);
    };
    fetchData();
  }, [query, pageState]);

  const handleChange = (value: string) => {
    // ASCENDING
    if (value === 'Asc') {
      setPageState((prevState) => {
        return {
          ...prevState,
          order: 'asc',
          sortBy: 'price',
          l: 12,
        };
      });
    }
    // DESCENDING
    else if (value === 'Desc') {
      setPageState((prevState) => {
        return {
          ...prevState,
          order: 'desc',
          sortBy: 'price',
          l: 12,
        };
      });
    }
    // DEFAULT
    else if (value === 'Default') {
      setPageState((prevState) => {
        return {
          ...prevState,
          l: 12,
          sortBy: '',
          order: '',
        };
      });
    }
  };
  const handlePageClick = async (data: { selected: number }) => {
    let currentPage = data.selected + 1;
    setPageState((prevState) => {
      return {
        ...prevState,
        p: currentPage,
      };
    });
  };

  let uniqueCategory = [
    ...new Set(
      products.map((item) => {
        return item.category;
      })
    ),
  ];
  return (
    <div className="shop">
      <div className="shop-top">
        <label className="shop-label">
          <p>SHOP</p>
        </label>
      </div>
      <div className="shop-body">
        <div className="row">
          <div className="col-xl-9">
            <div className="shop-list-wrapper">
              <div className="wrap-shop-label">
                <label>Showing {totalResult} results</label>
                <label className="shop-sort" htmlFor="">
                  {/* Sort by latest */}
                  <>
                    <Select
                      defaultValue="Default"
                      style={{
                        width: 120,
                      }}
                      onChange={handleChange}
                    >
                      <Option value="Default">Default</Option>
                      <Option value="Asc">Asc Price</Option>
                      <Option value="Desc">Desc Price</Option>
                    </Select>
                  </>
                </label>
              </div>
              <div className="text-center">
                {isLoading && <Spin size="large" style={{ textAlign: 'center' }} />}
              </div>
              <div className="shop-list">
                {item.length !== 0 ? (
                  item.map((item: any) => (
                    <div className="shop-item" key={item.id}>
                      <Link className="shop-list-link" to={'/shop/shop-detail/' + item.id}>
                        <img src={item.image} alt="" />
                        <div className="shop-item-name">{item.name}</div>
                        <div className="wrap-shop-item">
                          <div className="shop-item-sale">{item.sale !== 0 ? item.sale : null}</div>
                          <div className="shop-item-price">
                            <div className="shop-item-price">${item.price}.00</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <h2> No result match</h2>
                )}
              </div>
              {item.length !== 0 ? (
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="Next"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={totalPage}
                  previousLabel="Previous"
                  containerClassName={'pagination'}
                  pageClassName={'page-item'}
                  pageLinkClassName={'page-link'}
                  previousClassName={'page-item'}
                  previousLinkClassName={'page-link'}
                  nextClassName={'page-item'}
                  nextLinkClassName={'page-link'}
                  activeClassName={'active'}
                />
              ) : (
                item
              )}
            </div>
          </div>
          <div className="col-xl-3 ">
            <div className="shop-r">
              <label className="shop-r-label">ABOUT</label>
              <label className="shop-r-label">TOP RATED PRODUCT</label>
              <div className="shop-r-wrap">
                <div className="shop-r-item">
                  {topdata.map((item: any) => (
                    <Link key={item.id} to={'/shop/shop-detail/' + item.id}>
                      <div className="wrap-r-item">
                        <img src={item.imageUrl} alt="" className="shop-r-item-img" />
                        <div className="shop-r-item-des">
                          <label htmlFor="" className="shop-r-item-name">
                            {item.name}
                          </label>
                          <label htmlFor="" className="shop-r-item-price">
                            ${item.price}
                          </label>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <label className="shop-r-label">CATEGORY</label>
              <div className="shop-r-tags">
                {uniqueCategory.map((item, index) => (
                  <Link key={index} to={'/shop/category/' + item}>
                    <p>{item}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state: { shop: { products: any } }) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(ShopResult);
