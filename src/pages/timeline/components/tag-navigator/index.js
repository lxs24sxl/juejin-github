import React, { useState, useEffect, memo } from 'react';
import NavList from './nav-list';
import { Icon } from 'antd';
import { StyledNavItem } from './nav-item/style';
import propTypes from 'prop-types';

function TagNavigator(props) {
  const [expendAll, setExpendAll] = useState(false);

  // watch props.list
  useEffect(() => {
    setExpendAll(false)
  }, [props.type])

  const expendList = (e) => {
    setExpendAll(!expendAll)
  }

  const ExpendBtn = () => {

    if (!expendAll) {
      return (
        <StyledNavItem>
          <div className="nav-item-btn" onClick={expendList}>
            展开
            <Icon style={{ marginLeft: '3px' }} type="caret-down" />
          </div>
        </StyledNavItem>
      )
    }
    return null
  }

  
  return (
    <NavList 
      list={expendAll ? props.list : props.list.slice(0, 8)} 
      type={props.type} 
      showAll>
      {ExpendBtn()}
    </NavList>
  )
}

TagNavigator.propTypes = {
  type: propTypes.string,
  list: propTypes.array
}

export default memo((props) => {
  return TagNavigator(props)
});