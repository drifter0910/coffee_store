import React from 'react';
import './NavMenu.css';
import menudata from '../../Data/MenuData';
const NavMenu = () => {
  return (
    <div className="nav-menu">
      <div className="navmenu-top">
        <label className="product1-label">
          <p>MENU</p>
        </label>
      </div>
      <div className="navmenu-label">COFFEE MENU NO 1</div>

      <div className="nav-memu-wrapper">
        <div className="row">
          {menudata.map((item: any) => (
            <div key={item.id} className="col-xl-6 col-md-12 col-xs-12">
              <div className="navmenu-item">
                <div className="navmenu-img">
                  <img src={item.image} alt="" />
                </div>
                <div className="navmenu-r">
                  <label className="navmenu-name">{item.name}</label>
                  <p className="navmenu-price">${item.price}</p>
                  <div className="navmenu-desc">{item.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
