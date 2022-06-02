import React from "react";
import "./Menu.css";
const Menu = () => {
  return (
    <div className="menu">
      <div className="wrapper-menu-label">
        <label>What Happens Here</label>
        <h2>explore our menu.</h2>
        <div className="seperate-detail"></div>
      </div>
      <div className="menu-price">
        <div className="row">
          <div className="col-lg-6 xs-12">
            <div className="wrap-item">
              <div className="wrap-item-top">
                <div className="menu-name">caffe latte</div>
                <div className="space"></div>
                <div className="menu-price">
                  <h3>$3.50</h3>
                </div>
              </div>
              <div className="wrap-item-bottom">
                <div className="menu-desc">
                  Fresh brewed coffee and steamed milk
                </div>
              </div>
            </div>
            <div className="wrap-item">
              <div className="wrap-item-top">
                <div className="menu-name">CAFFE MOCHA</div>
                <div className="space"></div>
                <div className="menu-price">
                  <h3>$2.95</h3>
                </div>
              </div>
              <div className="wrap-item-bottom">
                <div className="menu-desc">
                  Espresso With Milk, and Whipped Cream
                </div>
              </div>
            </div>
            <div className="wrap-item">
              <div className="wrap-item-top">
                <div className="menu-name">WHITE CHOCO MOCHA</div>
                <div className="space"></div>
                <div className="menu-price">
                  <h3>$3.00</h3>
                </div>
              </div>
              <div className="wrap-item-bottom">
                <div className="menu-desc">
                  Espresso, White Chocolate, Milk, Ice and Cream
                </div>
              </div>
            </div>
            <div className="wrap-item">
              <div className="wrap-item-top">
                <div className="menu-name">CAFFE AMERICANO</div>
                <div className="space"></div>
                <div className="menu-price">
                  <h3>$5.25</h3>
                </div>
              </div>
              <div className="wrap-item-bottom">
                <div className="menu-desc">
                  Espresso Shots and Light Layer of Crema
                </div>
              </div>
            </div>
            <div className="wrap-item">
              <div className="wrap-item-top">
                <div className="menu-name">CAPPUCCINO</div>
                <div className="space"></div>
                <div className="menu-price">
                  <h3>$4.25</h3>
                </div>
              </div>
              <div className="wrap-item-bottom">
                <div className="menu-desc">
                  Espresso, and Smoothed Layer of Foam
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 xs-12">
            <div className="wrap-item">
              <div className="wrap-item-top">
                <div className="menu-name">ICED CARAMEL LATTE</div>
                <div className="space"></div>
                <div className="menu-price">
                  <h3>$2.25</h3>
                </div>
              </div>
              <div className="wrap-item-bottom">
                <div className="menu-desc">
                  Espresso, Milk, Ice and Caramel Sauce
                </div>
              </div>
            </div>
            <div className="wrap-item">
              <div className="wrap-item-top">
                <div className="menu-name">CAFFE MOCHA</div>
                <div className="space"></div>
                <div className="menu-price">
                  <h3>$6.95</h3>
                </div>
              </div>
              <div className="wrap-item-bottom">
                <div className="menu-desc">
                  Fresh brewed coffee and steamed milk
                </div>
              </div>
            </div>
            <div className="wrap-item">
              <div className="wrap-item-top">
                <div className="menu-name">ESPRESSO MACCHIATO</div>
                <div className="space"></div>
                <div className="menu-price">
                  <h3>$2.95</h3>
                </div>
              </div>
              <div className="wrap-item-bottom">
                <div className="menu-desc">
                  Espresso, vanilla-flavored syrup and milk
                </div>
              </div>
            </div>
            <div className="wrap-item">
              <div className="wrap-item-top">
                <div className="menu-name">ICED CAFFE MOCHA</div>
                <div className="space"></div>
                <div className="menu-price">
                  <h3>$2.65</h3>
                </div>
              </div>
              <div className="wrap-item-bottom">
                <div className="menu-desc">
                  Espresso, bittersweet mocha sauce, milk and ice
                </div>
              </div>
            </div>
            <div className="wrap-item">
              <div className="wrap-item-top">
                <div className="menu-name">ICED SMOKED LATTE</div>
                <div className="space"></div>
                <div className="menu-price">
                  <h3>$4.95</h3>
                </div>
              </div>
              <div className="wrap-item-bottom">
                <div className="menu-desc">
                  Espresso, ice, with smoked butterscotch{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
