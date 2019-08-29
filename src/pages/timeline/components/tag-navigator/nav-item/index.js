import React from 'react';
import { StyledNavItem } from './style';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

function NavItem (props) {
  return (
    <StyledNavItem className={'nav-item ' + (props.className || '')}>
      <NavLink 
        className="nav-item-btn" 
        to={`/timeline/${props.type}${props.data.title === '全部'? '': `/${props.data.title}`}`}>
        {props.data.title}
      </NavLink>
    </StyledNavItem>
  )
}

NavItem.propTypes = {
  type: propTypes.string,
  data: propTypes.object
}

export default NavItem;