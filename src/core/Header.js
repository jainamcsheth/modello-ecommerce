import React from 'react';
import TopBar from './TopBar';
import NavigationBar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CartItemsCount from '../components/Cart/CartItemsCount';
import WishListCount from '../components/WishList/WishListCount';

import '../css/header.scss';

const Header = () => {
  return (
    <header className="header-main">
      <TopBar />
      <div className="container">
        <section className="header-section">
          <div className="header-welcome mb-3">
            <div className="mb-4"><FontAwesomeIcon icon={['far', 'user']} /> WELCOME, YOU CAN <b>LOGIN</b> OR <b>REGISTER</b></div>
            <div><FontAwesomeIcon icon="phone-alt" /> HOTLINE: <b>+88 987 654 321</b></div>
          </div>
          <div className="header-logo mb-3">
            LOGO
            </div>
          <div>
            <div className="order-details">
              <div className="mr-3">
                <FontAwesomeIcon icon={['far', 'heart']} /> WHISHLIST:
                <b><WishListCount /></b>
              </div>
              <div>
                <FontAwesomeIcon icon="shopping-bag" /> CART:
                <b><CartItemsCount /></b> item(s) -
                <b><span className="color-secondary">$129.00</span></b>
              </div>
            </div>
            <div className="clearfix mb-3">
              <div className="search-input float-right">
                <input type="text" placeholder="SEARCH" className="form-element" />
                <span className="icon-inside-right"><FontAwesomeIcon icon="search" /></span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <NavigationBar />
    </header>
  );
}

export default Header;