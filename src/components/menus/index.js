import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { menus } from '@/routers/index';
import { StyleUl } from './style';


export default class Menus extends PureComponent {
  render() {
    return (
      <StyleUl className={ this.props.className || 'app-header__menus' }>
      {
        menus.map(({ page, title, params, default: defaultParam }) => (
          <li key={page} className="app-header__menu">
            <NavLink 
              activeStyle={{ color: '#007fff' }}  
              to={params && defaultParam ? `/${page.toLowerCase()}/${defaultParam}`: `/${page.toLowerCase()}`} 
              exact={page.exact}
              >
              {title}
            </NavLink>
          </li>
        ))
      }
      </StyleUl>
    )
  }
};