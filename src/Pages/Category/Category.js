import React, { useEffect, useState } from "react";
import "../Shop/Shop.scss";
import topdata from "../../Data/TopProduct";
import { Link, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Select } from "antd";
import "antd/dist/antd.min.css";
import ReactPaginate from "react-paginate";
import axios from "axios";
import queryString from "query-string";
import { Navigate } from "react-router-dom";
const Category = ({ products }) => {
  const { categoryType } = useParams();
  const [pageState, setPageState] = useState({
    p: 1,
    l: 12,
    sortBy: "",
    order: "",
    category: categoryType,
  });
  const stringified = queryString.stringify(pageState);
  const [item, setItem] = useState([]);
  const totalResult = item.length;
  const [totalPage, setTotalPage] = useState();
  const { Option } = Select;
  let navigate = useNavigate();
  useEffect(() => {
    console.log(categoryType);

    const fetchData = async () => {
      const res = await axios.get(
        `https://62c8f047d9ead251e8b5bcfb.mockapi.io/products?${stringified}`
      );
      const data = await res.data;
      let totalPageCurrent = Math.floor(products.length / pageState.l);
      setTotalPage(totalPageCurrent);
      setItem(data);
    };
    fetchData();
  }, [pageState]);

  const handleChange = (value) => {
    // ASCENDING
    if (value === "Asc") {
      setPageState((prevState) => {
        return {
          ...prevState,
          order: "asc",
          sortBy: "price",
          l: 12,
        };
      });
    }
    // DESCENDING
    else if (value === "Desc") {
      setPageState((prevState) => {
        return {
          ...prevState,
          order: "desc",
          sortBy: "price",
          l: 12,
        };
      });
    }
    // DEFAULT
    else if (value === "Default") {
      setPageState((prevState) => {
        return {
          ...prevState,
          l: 12,
          sortBy: "",
          order: "",
        };
      });
    }
  };

  const handlePageClick = async (data) => {
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

  const handleCategory = (item) => {
    console.log(item);
    setPageState((prevState) => {
      return {
        p: 1,
        l: 12,
        sortBy: "",
        order: "",
        category: item,
      };
    });
  };
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
                  </Select>
                </label>
              </div>
              <h1 style={{ textAlign: "center" }}>Category: {categoryType}</h1>
              <div className="shop-list mt-4">
                {item?.map((item) => (
                  <div className="shop-item" key={item.id}>
                    <Link
                      className="shop-list-link"
                      to={`/shop/shop-detail/${item.id}`}
                    >
                      <img src={item.image} alt="" />
                      <div className="shop-item-name">{item.name}</div>
                      <div className="wrap-shop-item">
                        <div className="shop-item-sale">
                          {item.sale !== 0 ? item.sale : null}
                        </div>
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
                    <div
                      onClick={() => navigate("/shop/shop-detail/" + item.id)}
                      className="wrap-r-item"
                    >
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
                  ))}
                </div>
              </div>
              <label className="shop-r-label">CATEGORY</label>
              <div className="shop-r-tags">
                {uniqueCategory.map((category, index) => (
                  <Link to={"/shop/category/" + item}>
                    <p key={index} onClick={() => handleCategory(item)}>
                      {category}
                    </p>
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
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Category);
