import React from 'react';
import Menus from 'components/menus';
import logo from 'assets/images/logo-full.svg';
import { Div } from './style'
import { useWindowScroll } from 'react-use';


const Header = () => {

  const { y } = useWindowScroll();

  const headerClassName = {
    className: `app-header fixed-header ${y <= 105? 'visible': ''}`
  }

  return (
    <Div { ...headerClassName }>
      <div className="container">
        <img
          src={logo}
          className="app-header__logo"
          alt="logo">
        </img>

        <Menus className="app-header__menus"></Menus>
      </div>
    </Div>
  )
  // }
}

export default Header;