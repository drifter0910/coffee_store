import React from "react";
import "./Shop.scss";
import data from "../../Data/ProductData";
import topdata from "../../Data/TopProduct";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { Select } from "antd";
import "antd/dist/antd.min.css";

const Shop = ({ products }) => {
  const { Option } = Select;
  const [sanpham, setSanpham] = useState(products);
  const tanggian = () => {
    const asc = products;
    const prodAsc = [...asc].sort((a, b) => a.price - b.price);
    setSanpham(prodAsc);
  };
  const giamgian = () => {
    const desc = products;
    const prodDesc = [...desc].sort((a, b) => b.price - a.price);
    setSanpham(prodDesc);
  };
  const handleChange = (value) => {
    if (value === "Asc") {
      tanggian();
    } else if (value === "Desc") {
      giamgian();
    } else if (value === "Default") {
      setSanpham(products);
    }
  };
  const totalResult = data.length;
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
                    </Select>
                  </>
                </label>
              </div>
              <div className="shop-list">
                {sanpham?.map((item) => (
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
