import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { menus } from '@/routers/index';
import { StyleUl } from './style';

export default class Menus extends PureComponent {

  isCurrent = (path) => {
    return this.props.current.split('/')[1] === path;
  }

  render() {
    const props = this.props;
    return (
      <StyleUl className={props.className || 'app-header__menus'}>
        {
          menus.map(({ page, title, params, default: defaultParam }) => (
            <li key={page} className="app-header__menu">
              <Link
                style={{ color: this.isCurrent(page.toLowerCase()) ? '#007fff' : '' }}
                to={params && defaultParam ? `/${page.toLowerCase()}/${defaultParam}` : `/${page.toLowerCase()}`}
                exact={page.exact}
              >
                {title}
              </Link>
            </li>
          ))
        }
      </StyleUl>
    )
  }
};