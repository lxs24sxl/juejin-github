

import React from 'react';
import { Item } from './style';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const NavItem = (props) => {
  return (
    <Item>
      <Link style={{ color: props.current === props.title ? '#007fff' : '#909090' }} to={'/timeline/' + props.title}>
        {props.name}
      </Link>
    </Item>
  )
}

NavItem.propTypes = {
  current: propTypes.string,
  title: propTypes.string,
  name: propTypes.string
}

export default NavItem;