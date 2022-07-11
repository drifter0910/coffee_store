import React, { useEffect, useState } from "react";
import "./Shop.scss";
import topdata from "../../Data/TopProduct";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Select } from "antd";
import "antd/dist/antd.min.css";
import ReactPaginate from "react-paginate";
import axios from "axios";

const Shop = ({ products }) => {
  const [pageState, setPageState] = useState({
    p: 1,
    l: 12,
    order: "",
  });
  const totalResult = products.length;
  const [item, setItem] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const { Option } = Select;
  const handleChange = (value) => {
    if (value === "Asc") {
      setPageState((prevState) => {
        return {
          ...prevState,
          order: "asc",
          l: 12,
        };
      });
      fetchDataFilter("asc");
      const thuxem = Math.ceil(products.length / 12);

      setTotalPage(Math.ceil(thuxem));
    } else if (value === "Desc") {
      setPageState((prevState) => {
        return {
          ...prevState,
          order: "asc",
          l: 12,
        };
      });
      fetchDataFilter("desc");
      const thuxem = Math.ceil(products.length / 12);
      setTotalPage(Math.ceil(thuxem));
    } else if (value === "Default") {
      fetchData(1);
    } else if (value === "All") {
      setPageState((prevState) => {
        return {
          ...prevState,
          l: products.length,
          p: 1,
        };
      });
      setItem(products);
      setTotalPage(Math.floor(products.length / pageState.l));
      console.log(Math.floor(products.length / pageState.l));
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://62c8f047d9ead251e8b5bcfb.mockapi.io/products?p=1&l=${pageState.l}`
      );
      const data = await res.data;
      let totalPageCurrent = Math.ceil(products.length / pageState.l);
      setTotalPage(totalPageCurrent);
      setItem(data);
    };
    fetchData();
  }, []);
  const fetchDataFilter = async (params) => {
    await axios
      .get(
        `https://62c8f047d9ead251e8b5bcfb.mockapi.io/products?p=${pageState.p}&l=12&sortBy=price&order=${params}`
      )
      .then((response) => {
        setItem(response.data);
      });
  };
  const fetchData = async (params) => {
    const res = await axios.get(
      `https://62c8f047d9ead251e8b5bcfb.mockapi.io/products?p=${params}&l=12`
    );
    const data = await res.data;
    setItem(data);
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    console.log("day la current page", currentPage);
    await fetchData(currentPage);
    setPageState((prevState) => {
      return {
        ...prevState,
        p: currentPage,
      };
    });
  };
  console.log(pageState);

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
                <label>Showing all {totalResult} results</label>
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
                      <Option value="Asc">Ascending</Option>
                      <Option value="Desc">Descending</Option>
                      <Option value="All">All Product</Option>
                    </Select>
                  </>
                </label>
              </div>
              <div className="shop-list">
                {item?.map((item) => (
                  <div className="shop-item" key={item.id}>
                    <Link
                      className="shop-list-link"
                      to={"shop-detail/" + item.id}
                    >
                      <img src={item.image} alt="" />
                      <div className="shop-item-name">{item.name}</div>
                      <div className="wrap-shop-item">
                        <div className="shop-item-sale">{item.sale}</div>
                        <div className="shop-item-price">
                          <div className="shop-item-price">
                            ${item.price}.00
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPage}
                previousLabel="Previous"
                renderOnZeroPageCount={null}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                activeClassName={"active"}
              />
            </div>
          </div>
          <div className="col-xl-3 ">
            <div className="shop-r">
              <label className="shop-r-label">ABOUT</label>
              <label className="shop-r-label">TOP RATED PRODUCT</label>
              <div className="shop-r-wrap">
                <div className="shop-r-item">
                  {topdata.map((item) => (
                    <Link key={item.id} to={"shop-detail/" + item.id}>
                      <div className="wrap-r-item">
                        <img
                          src={item.imageUrl}
                          alt=""
                          className="shop-r-item-img"
                        />
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
              <label className="shop-r-label">TAGS</label>
              <div className="shop-r-tags">
                <p>Coffee cup</p>
                <p>Coffee pot</p>
                <p>Coffee treats</p>
                <p>Paper bag</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Shop);
